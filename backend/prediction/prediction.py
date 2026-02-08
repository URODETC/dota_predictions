import xgboost as xgb
import torch
import torch.nn as nn
import joblib
import numpy as np
from itertools import *



artifacts = joblib.load("model/artifacts.pkl")

booster = xgb.Booster()
booster.load_model("model/xgb.json")
        
    
class XGBWrapper:
    def __init__(self, booster):
        self.booster = booster
        self.is_trained = True

    def __call__(self, x):
        dmat = xgb.DMatrix(x)
        return self.booster.predict(dmat).reshape(-1, 1)

xgb_model = XGBWrapper(booster)
linear_model_state = torch.load("model/linear.pth", map_location="cpu")





class PredictionModel:
    def __init__(self, carry, mid, offlane, synergy, matchup_synergy, time_strenght, sup_synergy, xgb_model, linear_model):
        self.carry_matchup = carry
        self.mid_matchup = mid
        self.offlane_matchup = offlane
        self.pair_synergy = synergy
        self.matchup_synergy = matchup_synergy
        self.hero_stats_time = time_strenght
        self.sup_synergy = sup_synergy
        self.xbg_model = xgb_model
        self.linear_model = linear_model
        self.dimensions = 10
        self.model = self.get_model()

    class ForecastModule(nn.Module):
        def __init__(self, dimensions, xgb_module):
            super().__init__()
            self.linear = nn.Linear(dimensions, 1)
            self.xgb = xgb_module  

        def forward(self, t):
            linear_out = self.linear(t)

            if getattr(self.xgb, 'is_trained', False):
                t_np = t.detach().cpu().numpy()
                xgb_out_np = self.xgb(t_np)
                xgb_out = torch.tensor(xgb_out_np, dtype=torch.float32, device=t.device)
            else:
                xgb_out = torch.zeros(t.size(0), 1, device=t.device)

            return linear_out + xgb_out
    
    def get_model(self):
        loaded_model = self.ForecastModule(dimensions=self.dimensions, xgb_module=self.xbg_model)
        loaded_model.linear.load_state_dict(self.linear_model)
        loaded_model.eval()  
        return loaded_model

    def synergy(self, team: list):
        team = np.sort(np.array(team, dtype=np.int16))
        pairs = np.array(list(combinations(team, 2)), dtype=np.int16)
        values = np.fromiter(
            (self.pair_synergy.get((a, b), 0.5) for a, b in pairs),
            dtype=np.float32,
            count=len(pairs)
        )
        return values.mean()

    def counter_synergy(self, radiant:list, dire:list):
        values = np.fromiter(
            (self.matchup_synergy.get((a, b), 0.0) for a, b in product(radiant, dire)),
            dtype=np.float32
        )
        return values.mean()

    def time_strenght(self, team, duration, duration_ind=0):
        if duration_ind == 0:
            if duration < 25:
                values = np.array([self.hero_stats_time.get(a, {}).get(1, 0.0) for a in team], dtype=np.float32)
            elif duration >= 25 and duration < 30:
                values = np.array([self.hero_stats_time.get(a, {}).get(2, 0.0) for a in team], dtype=np.float32)
            elif duration >= 30 and duration < 32.5:
                values = np.array([self.hero_stats_time.get(a, {}).get(3, 0.0) for a in team], dtype=np.float32)
            elif duration >= 32.5 and duration < 35:
                values = np.array([self.hero_stats_time.get(a, {}).get(4, 0.0) for a in team], dtype=np.float32)
            elif duration >= 35 and duration < 37.5:
                values = np.array([self.hero_stats_time.get(a, {}).get(5, 0.0) for a in team], dtype=np.float32)
            elif duration >= 37.5 and duration < 40:
                values = np.array([self.hero_stats_time.get(a, {}).get(6, 0.0) for a in team], dtype=np.float32)
            elif duration >= 40 and duration < 50:
                values = np.array([self.hero_stats_time.get(a, {}).get(7, 0.0) for a in team], dtype=np.float32)
            elif duration >= 50:
                values = np.array([self.hero_stats_time.get(a, {}).get(8, 0.0) for a in team], dtype=np.float32)
        else:
            values = np.array([self.hero_stats_time.get(a, {}).get(duration_ind, 0.0) for a in team], dtype=np.float32)
        return values.mean()
    
    def prediction(self, radiant, dire):
        model = self.model
        r_synergy_val = self.synergy(radiant)
        d_synergy_val = self.synergy(dire)
        csynergy_val = self.counter_synergy(radiant, dire)
        carry = self.carry_matchup[radiant[0], dire[0]]
        mid = self.mid_matchup[radiant[1], dire[1]]
        offlane = self.offlane_matchup[radiant[2], dire[2]]
        rsup = self.sup_synergy[radiant[3], radiant[4]]
        dsup = self.sup_synergy[dire[3], dire[4]]

        results = []

        for duration in range(1, 9):
            input_features = [
                r_synergy_val,
                d_synergy_val,
                csynergy_val,
                self.time_strenght(radiant, duration, duration),
                self.time_strenght(dire, duration, duration),
                carry,
                mid,
                offlane,
                rsup,
                dsup
            ]

            X_tensor = torch.tensor([input_features], dtype=torch.float32)
            with torch.no_grad():
                pred_tensor = model(X_tensor) 
                prob_radiant = torch.sigmoid(pred_tensor).item() 
                prob_dire = 1 - prob_radiant

            results.append({
                "Radiant": prob_radiant,
                "Dire": prob_dire,
                "Time": duration
            })

        return results    
        


pred = PredictionModel(
    carry=artifacts["carry_matchup"],
    mid=artifacts["mid_matchup"],
    offlane=artifacts["offlane_matchup"],
    synergy=artifacts["pair_synergy"],
    matchup_synergy=artifacts["matchup_synergy"],
    time_strenght=artifacts["hero_stats_time"],
    sup_synergy=artifacts["sup_synergy"],
    xgb_model=xgb_model,
    linear_model=linear_model_state
)
