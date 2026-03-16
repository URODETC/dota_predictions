from __future__ import annotations

import logging
import os

from fastapi import APIRouter, Header, HTTPException, status

from backend.internal.schemas import PromoteIn, RollbackIn

log = logging.getLogger(__name__)
router = APIRouter(prefix="/internal", tags=["internal"])

INTERNAL_TOKEN = os.getenv("INTERNAL_TOKEN", "")


def _check_token(x_internal_token: str | None) -> None:
    if not INTERNAL_TOKEN:
        raise HTTPException(
            status.HTTP_503_SERVICE_UNAVAILABLE,
            "INTERNAL_TOKEN not configured",
        )
    if x_internal_token != INTERNAL_TOKEN:
        raise HTTPException(status.HTTP_403_FORBIDDEN, "Invalid token")


@router.post("reload")
def reload_model(x_internal_token: str | None = Header(default=None)):
    _check_token(x_internal_token)
    from backend.prediction.prediction import reload_model as _reload
    version = _reload()
    log.info("/internal/reload -> version=%s", version)
    return {"status":"ok", "version": version}


@router.get("/model/versions")
def list_versions(x_internal_token: str | None = Header(default=None)):
    _check_token(x_internal_token)
    try:
        from pipeline.storage import get_storage
        storage  = get_storage()
        versions = storage.list_versions()
        current  = storage.get_production_version()
        return {"current": current, "versions": versions}
    except Exception as e:
        raise HTTPException(status.HTTP_503_SERVICE_UNAVAILABLE, str(e)) from e


@router.post("model/promote")
def promote_version(
        body: PromoteIn,
        x_internal_token: str | None = Header(default=None)
):
    _check_token(x_internal_token)
    try:
        from pipeline.storage import get_storage
        meta = get_storage().promote_to_production(body.version)
        log.info("/internal/model/promote → %s", body.version)
        return {"status": "ok", "meta": meta}
    except Exception as e:
        raise HTTPException(status.HTTP_503_SERVICE_UNAVAILABLE, str(e)) from e


@router.post("/model/rollback")
def rollback_version(
        body: RollbackIn,
        x_internal_token: str | None = Header(default=None)
):
    _check_token(x_internal_token)
    try:
        from pipeline.storage import get_storage
        storage = get_storage()

        target = body.version
        if target is None:
            versions = storage.list_versions()
            current  = storage.get_production_version()
            prev = next(
                (v["version"] for v in versions
                 if v["version"] != current and v.get("status") in ("production", "archived")),
                None,
            )
            if prev is None:
                raise HTTPException(status.HTTP_404_NOT_FOUND, "No previous version found")
            target = prev

        meta = storage.rollback(target)
        log.info("/internal/model/rollback → %s", target)
        return {"status": "ok", "rolled_back_to": target, "meta": meta}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status.HTTP_503_SERVICE_UNAVAILABLE, str(e)) from e