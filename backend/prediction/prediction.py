import xgboost as xgb
import torch
import joblib
from gbnet.xgbmodule import XGBModule
import numpy as np
from itertools import product, combinations


class PredictionModel:
    def __init__(
        self,
        carry,
        mid,
        offlane,
        sup,
        synergy,
        matchup_synergy,
        time_strength,
        xgb_model,
        linear_model,
    ):
        self.sup = sup
        self.carry = carry
        self.mid = mid
        self.offlane = offlane
        self.pair_synergy = synergy
        self.matchup_synergy = matchup_synergy
        self.hero_time_strength = time_strength
        self.xbg_model = xgb_model
        self.linear_model = linear_model

    def synergy(self, team: list):
        team = np.sort(np.array(team, dtype=np.int16))
        pairs = np.array(list(combinations(team, 2)), dtype=np.int16)
        values = np.fromiter(
            (self.pair_synergy.get((a, b), 0.5) for a, b in pairs),
            dtype=np.float32,
            count=len(pairs),
        )
        return values.mean()

    def counter_synergy(self, radiant: list, dire: list):
        values = np.fromiter(
            (self.matchup_synergy.get((a, b), 0.0) for a, b in product(radiant, dire)),
            dtype=np.float32,
        )
        return values.mean()

    def time_strength(self, team, duration, duration_ind=0):
        distribution = [0.35, 0.3, 0.2, 0.075, 0.075]
        if duration_ind == 0:
            if duration < 25:
                values = np.array(
                    [
                        self.hero_time_strength.get(a, {}).get(1, 0.0) * distribution[k]
                        for k, a in enumerate(team)
                    ],
                    dtype=np.float32,
                )
            elif 25 <= duration < 30:
                values = np.array(
                    [
                        self.hero_time_strength.get(a, {}).get(2, 0.0) * distribution[k]
                        for k, a in enumerate(team)
                    ],
                    dtype=np.float32,
                )
            elif 30 <= duration < 32.5:
                values = np.array(
                    [
                        self.hero_time_strength.get(a, {}).get(3, 0.0) * distribution[k]
                        for k, a in enumerate(team)
                    ],
                    dtype=np.float32,
                )
            elif 32.5 <= duration < 35:
                values = np.array(
                    [
                        self.hero_time_strength.get(a, {}).get(4, 0.0) * distribution[k]
                        for k, a in enumerate(team)
                    ],
                    dtype=np.float32,
                )
            elif 35 <= duration < 37.5:
                values = np.array(
                    [
                        self.hero_time_strength.get(a, {}).get(5, 0.0) * distribution[k]
                        for k, a in enumerate(team)
                    ],
                    dtype=np.float32,
                )
            elif 37.5 <= duration < 40:
                values = np.array(
                    [
                        self.hero_time_strength.get(a, {}).get(6, 0.0) * distribution[k]
                        for k, a in enumerate(team)
                    ],
                    dtype=np.float32,
                )
            elif 40 <= duration < 50:
                values = np.array(
                    [
                        self.hero_time_strength.get(a, {}).get(7, 0.0) * distribution[k]
                        for k, a in enumerate(team)
                    ],
                    dtype=np.float32,
                )
            elif duration >= 50:
                values = np.array(
                    [
                        self.hero_time_strength.get(a, {}).get(8, 0.0) * distribution[k]
                        for k, a in enumerate(team)
                    ],
                    dtype=np.float32,
                )
        else:
            values = np.array(
                [
                    self.hero_time_strength.get(a, {}).get(duration_ind, 0.0)
                    * distribution[k]
                    for k, a in enumerate(team)
                ],
                dtype=np.float32,
            )
        return values.sum()

    def prediction(self, radiant, dire):
        r_synergy_val = self.synergy(radiant)
        d_synergy_val = self.synergy(dire)
        csynergy_val = self.counter_synergy(radiant, dire)
        carry = self.carry[radiant[0], dire[0]]
        mid = self.mid[radiant[1], dire[1]]
        offlane = self.offlane[radiant[2], dire[2]]
        rsup = self.sup[radiant[3], radiant[4]]
        dsup = self.sup[dire[3], dire[4]]

        results = []

        for duration in range(1, 9):
            input_features = [
                r_synergy_val,
                d_synergy_val,
                carry,
                mid,
                offlane,
                rsup,
                dsup,
                self.time_strength(radiant, duration, duration),
                self.time_strength(dire, duration, duration),
                csynergy_val,
            ]

            X_tensor = torch.tensor([input_features], dtype=torch.float32)
            X_dmatrix = xgb.DMatrix(X_tensor)
            with torch.no_grad():
                pred_tensor = self.linear_model(X_tensor) * 0.4 + 0.6 * self.xbg_model(
                    X_dmatrix
                )
                prob_radiant = torch.sigmoid(pred_tensor).item()
                prob_dire = 1 - prob_radiant

            results.append(
                {"Radiant": prob_radiant, "Dire": prob_dire, "Time": duration}
            )

        return results


artifacts = joblib.load("model/artifacts.pkl")
carry_matchup = artifacts["carry_matchup"]
matchup_synergy = artifacts["matchup_synergy"]
mid_matchup = artifacts["mid_matchup"]
offlane_matchup = artifacts["offlane_matchup"]
pair_synergy = artifacts["pair_synergy"]
hero_stats_time = artifacts["hero_stats_time"]
sup_synergy = artifacts["sup_synergy"]


lm = torch.nn.Linear(10, 1)
lm.load_state_dict(torch.load("model/linear.pth", weights_only=False))
xg = XGBModule(33094, 10, 1, params={})
xg.load_state_dict(torch.load("model/xgb.pth", weights_only=False))
lm.eval()
xg.eval()


pred = PredictionModel(
    carry_matchup,
    mid_matchup,
    offlane_matchup,
    sup_synergy,
    pair_synergy,
    matchup_synergy,
    hero_stats_time,
    xg,
    lm,
)
