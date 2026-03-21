from __future__ import annotations

import logging
import os
import threading

import joblib
from catboost import CatBoostClassifier

from shared.models import Lastpicker, PredictionModel

log = logging.getLogger(__name__)

MODEL_DIR = os.getenv("MODEL_DIR", "model")

_pred: PredictionModel | None = None
_last: Lastpicker | None = None
_lock = threading.Lock()

def _build_prediction_model(artifacts: dict, cb_model: CatBoostClassifier) -> PredictionModel:
    return PredictionModel(
        carry_matchup=artifacts["carry_matchup"],
        mid_matchup=artifacts["mid_matchup"],
        offlane_matchup=artifacts["offlane_matchup"],
        pair_synergy=artifacts["pair_synergy"],
        matchup_synergy=artifacts["matchup_synergy"],
        hero_stats_time=artifacts["hero_stats_time"],
        sup_synergy=artifacts["sup_synergy"],
        catboost_model=cb_model,
    )

def _build_last_pick(artifacts: dict, cb_model: CatBoostClassifier) -> Lastpicker:
    return Lastpicker(
        carry=artifacts["carry_matchup"],
        mid=artifacts["mid_matchup"],
        offlane=artifacts["offlane_matchup"],
        sups=artifacts["sup_synergy"],
        synergy=artifacts["pair_synergy"],
        matchup_synergy=artifacts["matchup_synergy"],
        time_strength=artifacts["hero_stats_time"],
        hero_pos_weight=artifacts["hero_pos_prob"],
        catboost_model=cb_model
    )

def _load_from_s3() -> tuple:
    try:
        from pipeline.storage import get_storage
        storage = get_storage()
        cb_model, artifacts, version = storage.load_production_model()
        log.info("Загружена S3 production-версия: %s", version)
        return artifacts, cb_model
    except Exception as e:
        log.warning("S3 недоступен: %s", e)
        return None, None

def _load_from_local() -> tuple:
    log.info("Загрузка и локального %s/", MODEL_DIR)
    artifacts = joblib.load(f"{MODEL_DIR}/artifacts.pkl")
    cb_model = CatBoostClassifier()
    cb_model.load_model(f"{MODEL_DIR}/catboost.cbm")
    return artifacts, cb_model

def _load_model() -> tuple:
    if os.getenv("S3_BUCKET"):
        artifacts, model = _load_from_s3()
        if model is not None:
            return model
    return _load_from_local()

def reload_model() -> str:
    global _pred
    global _last
    log.info("Hot-reload модели...")
    new_artifacts, new_cb_model = _load_model()
    with _lock:
        _pred = _build_prediction_model(new_cb_model, new_artifacts)
        _last = _build_last_pick(new_cb_model, new_artifacts)
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
        artifacts, cb_model = _load_model()
        with _lock:
            if _pred is None:
                _pred = _build_prediction_model(artifacts, cb_model)
    return _pred

def get_last_pick() -> Lastpicker:
    global _last
    if _last is None:
        artifacts, cb_model = _load_model()
        with _lock:
            if _last is None:
                _last = _build_last_pick(artifacts, cb_model)
    return _last