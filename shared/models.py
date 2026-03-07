"""
    r_syn, d_syn, carry, mid, offlane, r_sup, d_sup, r_time, d_time, csyn
"""
from __future__ import annotations
from itertools import combinations, product

import numpy as np
import torch
import xgboost as xgb

from shared.utils import _duration_to_category, _POSITION_WEIGHTS

N_FEATURES = 10

class PredictionModel:
    def __init__(
            self,
            carry_matchup: dict,
            mid_matchup: dict,
            offlane_matchup: dict,
            pair_synergy: dict,
            matchup_synergy: dict,
            hero_stats_time: dict,
            sup_synergy: dict,
            xgb_model,
            linear_model,
    ):
        self.carry_matchup = carry_matchup
        self.mid_matchup = mid_matchup
        self.offlane_matchup = offlane_matchup
        self.pair_synergy = pair_synergy
        self.matchup_synergy = matchup_synergy
        self.hero_stats_time = hero_stats_time
        self.sup_synergy = sup_synergy
        self.xgb_model = xgb_model
        self.linear_model = linear_model

    def synergy(self, team: list) -> float:
        team = np.sort(np.array(team, dtype=np.int16))
        pairs = list(combinations(team, 2))
        values = np.fromiter(
            (self.pair_synergy.get((a, b), 0.5) for a, b in pairs),
            dtype=np.float32,
            count=len(pairs),
        )
        return float(values.mean())

    def counter_synergy(self, radiant: list, dire: list) -> float:
        values = np.fromiter(
            (self.matchup_synergy.get((a, b), 0.0) for a, b in product(radiant, dire)),
            dtype=np.float32,
            count=len(radiant) * len(dire),
        )
        return float(values.mean())

    def time_strength(self, team: list, duration: float, duration_ind: int = 0) -> float:
        cat = int(duration_ind) if duration_ind > 0 else int(_duration_to_category(duration))
        values = np.array(
            [
                self.hero_stats_time.get(a, {}).get(cat, 0.0) * _POSITION_WEIGHTS[k]
                for k, a in enumerate(team)
            ],
            dtype=np.float32,
        )
        return float(values.sum())

    def prediction(self, radiant: list, dire: list) -> list[dict]:
        r_syn =   self.synergy(radiant)
        d_syn =   self.synergy(dire)
        csyn =    self.counter_synergy(radiant, dire)
        carry =   self.carry_matchup.get((radiant[0], dire[0]), 0.0)
        mid =     self.mid_matchup.get((radiant[1], dire[1]), 0.0)
        offlane = self.offlane_matchup.get((radiant[2], dire[2]), 0.0)
        r_sup =   self.sup_synergy.get((radiant[3], radiant[4]), 0.0)
        d_sup =   self.sup_synergy.get((dire[3], dire[4]), 0.0)

        results = []
        for duration_cat in range(1,9):
            input_features = [
                r_syn,
                d_syn,
                carry,
                mid,
                offlane,
                r_sup,
                d_sup,
                self.time_strength(radiant, duration_cat, duration_cat),
                self.time_strength(dire, duration_cat, duration_cat),
                csyn,
            ]
            X_tensor = torch.tensor([input_features], dtype=torch.float32)
            X_dmatrix = xgb.DMatrix(X_tensor.numpy())
            with torch.no_grad():
                pred = self.linear_model(X_tensor) * 0.4 + 0.6 * self.xgb_model(X_dmatrix)
                prob_rad = torch.sigmoid(pred).item()
            results.append({"Radiant": prob_rad, "Dire": 1 - prob_rad, "Time": duration_cat})

        return results