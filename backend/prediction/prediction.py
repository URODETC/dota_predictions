from __future__ import annotations

import logging
import os

import joblib
import torch
from gbnet.xgbmodule import XGBModule

from shared.models import PredictionModel, N_FEATURES

log = logging.getLogger(__name__)

MODEL_DIR = os.getenv("MODEL_DIR", "model")


def _load_model() -> PredictionModel:
    log.info(f"Загрузка артефактов из {MODEL_DIR}/")

    artifacts = joblib.load(f"{MODEL_DIR}/artifacts.pkl")

    lm = torch.nn.Linear(N_FEATURES, 1)
    lm.load_state_dict(torch.load(f"{MODEL_DIR}/linear.pth", weights_only=False))
    lm.eval()

    xg = XGBModule(1, N_FEATURES, 1, params={})
    xg.load_state_dict(torch.load(f"{MODEL_DIR}/xgb.pth", weights_only=False))
    xg.eval()

    model = PredictionModel(
        carry_matchup=artifacts["carry_matchup"],
        mid_matchup=artifacts["mid_matchup"],
        offlane_matchup=artifacts["offlane_matchup"],
        pair_synergy = artifacts["pair_synergy"],
        matchup_synergy = artifacts["matchup_synergy"],
        hero_stats_time = artifacts["hero_stats_time"],
        sup_synergy = artifacts["sup_synergy"],
        xgb_model = xg,
        linear_model = lm,
    )

    return model

pred: PredictionModel = _load_model()