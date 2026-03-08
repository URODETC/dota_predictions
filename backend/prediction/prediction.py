from __future__ import annotations

import logging
import os
import threading

import joblib
import torch
from gbnet.xgbmodule import XGBModule

from shared.models import PredictionModel, N_FEATURES

log = logging.getLogger(__name__)

MODEL_DIR = os.getenv("MODEL_DIR", "model")

_pred: PredictionModel | None = None
_lock = threading.Lock()

def _build_model(artifacts: dict, linear_sd: dict, xgb_sd: dict) -> PredictionModel:
    lm = torch.nn.Linear(N_FEATURES, 1)
    lm.load_state_dict(linear_sd)
    lm.eval()

    xg = XGBModule(1, N_FEATURES, 1, params={})
    xg.load_state_dict(xgb_sd)
    xg.eval()

    return PredictionModel(
        carry_matchup=artifacts["carry_matchup"],
        mid_matchup=artifacts["mid_matchup"],
        offlane_matchup=artifacts["offlane_matchup"],
        pair_synergy=artifacts["pair_synergy"],
        matchup_synergy=artifacts["matchup_synergy"],
        hero_stats_time=artifacts["hero_stats_time"],
        sup_synergy=artifacts["sup_synergy"],
        xgb_model=xg,
        linear_model=lm,
    )

def _load_from_s3() -> PredictionModel | None:
    try:
        from pipeline.storage import get_storage
        storage = get_storage()
        linear_sd, xgb_sd, artifacts, version = storage.load_production_model()
        log.info("Загружена S3 production-версия: %s", version)
        return _build_model(artifacts, linear_sd, xgb_sd)
    except Exception as e:
        log.warning("S3 недоступен: %s", e)
        return None

def _load_from_local() -> PredictionModel:
    log.info("Загрузка и локального %s/", MODEL_DIR)
    artifacts = joblib.load(f"{MODEL_DIR}/artifacts.pkl")
    linear_sd = torch.load(f"{MODEL_DIR}/linear.pth", weights_only=False, map_location="cpu")
    xgb_sd = torch.load(f"{MODEL_DIR}/xgb.pth", weights_only=False, map_location="cpu")
    return _build_model(artifacts, linear_sd, xgb_sd)

def _load_model() -> PredictionModel:
    if os.getenv("S3_BUCKET"):
        model = _load_from_s3()
        if model is not None:
            return model
    return _load_from_local()

def reload_model() -> str:
    global _pred
    log.info("Hot-reload модели...")
    new_model = _load_model()
    with _lock:
        _pred = new_model
    version = "local"
    try:
        if os.getenv("S3_BUCKET"):
            from pipeline.storage import get_storage
            version = get_storage().get_production_version() or "local"
    except Exception:
        pass
    log.info("Hot-reload модели завершен, версия: %s", version)
    return version

def get_pred() -> PredictionModel:
    global _pred
    if _pred is None:
        with _lock:
            if _pred is None:
                _pred = _load_model()
    return _pred