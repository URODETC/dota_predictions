from __future__ import annotations

import io
import json
import logging
from datetime import datetime, timezone
from typing import Any

import boto3
import joblib
import torch
from botocore.exceptions import ClientError

log = logging.getLogger(__name__)

_RAW_MATCHES  = "raw/matches/{date}.parquet"
_RAW_PLAYERS  = "raw/players/{date}.parquet"
_MODEL_LINEAR = "models/{version}/linear.pth"
_MODEL_XGB    = "models/{version}/xgb.pth"
_ARTIFACTS    = "models/{version}/artifacts.pkl"
_META         = "models/{version}/meta.json"
_PRODUCTION   = "models/production.json"

class S3Storage:
    """S3 storage handler for managing model artifacts and raw match data."""
    
    def __init__(
            self,
            bucket: str,
            endpoint_url: str | None = None,
            aws_access_key_id: str | None = None,
            aws_secret_access_key: str | None = None,
    ):
        """Initialize S3 storage client and verify bucket exists."""
        self.bucket = bucket
        kwargs: dict[str, Any] = {}
        if endpoint_url:
            kwargs["endpoint_url"] = endpoint_url
        if aws_access_key_id:
            kwargs["aws_access_key_id"] = aws_access_key_id
            kwargs["aws_secret_access_ley"] = aws_secret_access_key

        self._s3 = boto3.client("s3", **kwargs)
        self._verify_bucket()

    def _verify_bucket(self) -> None:
        try:
            self._s3.head_bucket(Bucket=self.bucket)
        except ClientError as e:
            code = e.response["Error"]["Code"]
            if code in ("404", "NoSuchBucket"):
                raise RuntimeError(f"Bucket {self.bucket} не найден.")
            raise

    def _put(self, key: str, data: bytes) -> None:
        self._s3.put_object(Bucket=self.bucket, Key=key, Body=data)
        log.debug(f"S3 PUT s3://{self.bucket}/{key} ({len(data)} bytes)")

    def _get(self, key: str) -> bytes:
        resp = self._s3.get_object(Bucket=self.bucket, Key=key)
        return resp["Body"].read()

    def _exists(self, key: str) -> bool:
        try:
            self._s3.head_object(Bucket=self.bucket, Key=key)
            return True
        except ClientError:
            return False

    def _list(self, prefix: str):
        paginator = self._s3.get_paginator("list_objects_v2")
        keys: list[str] = []
        for page in paginator.paginate(Bucket=self.bucket, Prefix=prefix):
            for obj in page.get("Contents", []):
                keys.append(obj["Key"])
        return keys

    def _put_pickle(self, key: str, obj: Any) -> None:
        buf = io.BytesIO()
        joblib.dump(obj, buf)
        self._put(key, buf.getvalue())

    def _get_pickle(self, key: str) -> Any:
        buf = io.BytesIO(self._get(key))
        return joblib.load(buf)

    def _put_torch(self, key: str, state_dict: dict) -> None:
        buf = io.BytesIO()
        torch.save(state_dict, buf)
        self._put(key, buf.getvalue())

    def _get_torch(self, key: str) -> dict:
        buf = io.BytesIO(self._get(key))
        return torch.load(buf, map_location="cpu", weights_only=False)

    def _put_json(self, key: str, obj: Any) -> None:
        self._put(key, json.dumps(obj, default=str).encode())

    def _get_json(self, key: str) -> Any:
        return json.loads(self._get(key))

    def _put_parquet(self, key: str, df) -> None:
        import pandas as pd
        buf = io.BytesIO()
        df.to_parquet(buf, index=False)
        self._put(key, buf.getvalue())

    def _get_parquet(self, key: str):
        import pandas as pd
        return pd.read_parquet(io.BytesIO(self._get(key)))

    def save_raw_matches(self, df, date_tag: str) -> str:
        """Save raw match data to S3 as parquet file."""
        key = _RAW_MATCHES.format(date=date_tag)
        self._put_parquet(key, df)
        log.info(f"S3 raw matches -> {key}")
        return key

    def save_raw_players(self, df, date_tag: str) -> str:
        """Save raw player data to S3 as parquet file."""
        key = _RAW_MATCHES.format(date=date_tag)
        self._put_parquet(key, df)
        log.info(f"S3 raw players -> {key}")
        return key

    def load_all_raw(self, subset: str):
        """Load and concatenate all raw data files for a subset."""
        import pandas as pd
        keys = sorted(self._list(f"raw/{subset}/"))
        if not keys:
            return None
        frames = [self._get_parquet(k) for k in keys]
        return pd.concat(frames, ignore_index=True)

    def save_model_version(
            self,
            version: str,
            linear_sd: dict,
            xgb_sd: dict,
            artifacts: dict,
            metrics: dict,
    ) -> None:
        """Save a new model version to S3 with metadata."""
        self._put_torch(_MODEL_LINEAR.format(version=version), linear_sd)
        self._put_torch(_MODEL_XGB.format(version=version), xgb_sd)
        self._put_pickle(_ARTIFACTS.format(version=version), artifacts)

        meta = {
            "version": version,
            "status": "candidate",
            "metrics": metrics,
            "created_at": datetime.now(timezone.utc).isoformat(),
            "promoted_at": None,
        }
        self._put_json(_META.format(version=version), meta)
        log.info(f"Сохранена версия {version} (condidate), metrics={metrics}")

    def promote_to_production(self, version: str) -> dict:
        """Promote a model version to production status."""
        prev = self.get_production_version()
        if prev and prev != version:
            self._archive_version(prev)
        meta_key = _META.format(version=version)
        meta = self._get_json(meta_key)
        meta["status"] = "production"
        meta["promoted_at"] = datetime.now(timezone.utc).isoformat()
        self._put_json(meta_key, meta)

        self._put_json(_PRODUCTION, {"version": version, "updated_at": meta["promoted_at"]})
        log.info(f"Версия {version} -> production")
        return meta

    def rollback(self, version: str) -> dict:
        """Rollback production to a previous version."""
        meta = self.get_version_meta(version)
        if meta is None:
            raise ValueError(f"Версия {version} не найдена.")
        log.info(f"Откат production -> {version}")
        return self.promote_to_production(version)


    def get_production_version(self) -> str | None:
        """Get the current production model version."""
        if not self._exists(_PRODUCTION):
            return None
        return self._get_json(_PRODUCTION).get("version")

    def get_version_meta(self, version: str) -> dict | None:
        """Get metadata for a specific model version."""
        key = _META.format(version=version)
        if not self._exists(key):
            return None
        return self._get_json(key)

    def list_versions(self) -> list[dict]:
        """List all model versions sorted by creation date."""
        meta_keys = [k for k in self._list("models/") if k.endswith("meta.json")]
        versions = []
        for k in meta_keys:
            try:
                versions.append(self._get_json(k))
            except Exception:
                pass
        return sorted(versions, key=lambda x: x.get("created_at", ""), reverse=True)

    def load_model_version(self, version: str) -> tuple[dict, dict, dict]:
        """Load a specific model version from S3."""
        linear_sd = self._get_torch(_MODEL_LINEAR.format(version=version))
        xgb_sd = self._get_torch(_MODEL_XGB.format(version=version))
        artifacts = self._get_pickle(_ARTIFACTS.format(version=version))
        return linear_sd, xgb_sd, artifacts

    def load_production_model(self) -> tuple[dict, dict, dict, str]:
        """Load the current production model version."""
        version = self.get_production_version()
        if version is None:
            raise RuntimeError("Нет production-версии в S3")
        linear_sd, xgb_sd, artifacts = self.load_model_version(version)
        return linear_sd, xgb_sd, artifacts, version

_instance: S3Storage | None = None

def get_storage() -> S3Storage:
    global _instance
    if _instance is None:
        import os
        _instance = S3Storage(
            bucket=os.environ["S3_BUCKET"],
            endpoint_url=os.getenv("S3_ENDPOINT_URL"),
            aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
            aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY")
        )
    return _instance






