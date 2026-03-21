"""
    r_syn - d_syn, carry, mid, offlane, r_sup - d_sup, r_time - d_time, csyn
"""
from __future__ import annotations

from itertools import combinations, product

import numpy as np

from shared.utils import _POSITION_WEIGHTS, _duration_to_category

N_FEATURES = 7


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
            catboost_model,
    ):
        self.carry_matchup = carry_matchup
        self.mid_matchup = mid_matchup
        self.offlane_matchup = offlane_matchup
        self.pair_synergy = pair_synergy
        self.matchup_synergy = matchup_synergy
        self.hero_stats_time = hero_stats_time
        self.sup_synergy = sup_synergy
        self.catboost_model = catboost_model

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
        r_syn = self.synergy(radiant)
        d_syn = self.synergy(dire)
        csyn = self.counter_synergy(radiant, dire)
        carry = self.carry_matchup.get((radiant[0], dire[0]), 0.0)
        mid = self.mid_matchup.get((radiant[1], dire[1]), 0.0)
        offlane = self.offlane_matchup.get((radiant[2], dire[2]), 0.0)
        r_sup = self.sup_synergy.get((radiant[3], radiant[4]), 0.0)
        d_sup = self.sup_synergy.get((dire[3], dire[4]), 0.0)

        time = np.array([
            self.time_strength(radiant, 0, cat) - self.time_strength(dire, 0, cat) for cat in range(1, 9)],
            dtype=np.float32,
        )
        static = np.array(
            [r_syn - d_syn, carry, mid, offlane, r_sup - d_sup, csyn],
            dtype=np.float32,
        )
        X = np.column_stack([
            np.broadcast_to(static[:5], (8, 5)),
            time,
            np.broadcast_to(static[5], (8,)),
        ]).astype(np.float32)

        probs = self.catboost_model.predict(X, prediction_type="Probability")[:, 1]

        return [
            {"Radiant": float(probs[i]), "Dire": float(1.0 - probs[i]), "Time": i + 1}
            for i in range(8)
        ]


class Lastpicker:
    def __init__(self,
                 carry: dict,
                 mid: dict,
                 offlane: dict,
                 sups: dict,
                 synergy: dict,
                 matchup_synergy: dict,
                 time_strength: dict,
                 hero_pos_weight: dict,
                 catboost_model,
                 ):
        self.carry = carry
        self.mid = mid
        self.offlane = offlane
        self.sups = sups
        self.pair_synergy = synergy
        self.matchup_synergy = matchup_synergy
        self.hero_time_strenght = time_strength
        self.catboost_model = catboost_model
        self.hero_pos_weight = hero_pos_weight

    def sort_dict(self, dictionary: dict):
        a = sorted(dictionary.items(), key=lambda x: x[1], reverse=True)
        end_dict = {}
        for i in a:
            end_dict[i[0]] = i[1]
        return end_dict

    def synergy(self, team: list):
        team = np.sort(np.array(team, dtype=np.int16))
        pairs = np.array(list(combinations(team, 2)), dtype=np.int16)
        values = np.fromiter(
            (self.pair_synergy.get((a, b), 0.5) for a, b in pairs),
            dtype=np.float32,
            count=len(pairs)
        )
        return values.mean()

    def counter_synergy(self, radiant: list, dire: list):
        values = np.fromiter(
            (self.matchup_synergy.get((a, b), 0.0) for a, b in product(radiant, dire)),
            dtype=np.float32
        )
        return values.mean()

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

    def prediction(self, radiant, dire):
        r_synergy_val = self.synergy(radiant)
        d_synergy_val = self.synergy(dire)
        csynergy_val = self.counter_synergy(radiant, dire)
        carry = self.carry[radiant[0], dire[0]]
        mid = self.mid[radiant[1], dire[1]]
        offlane = self.offlane[radiant[2], dire[2]]
        rsup = self.sups[radiant[3], radiant[4]]
        dsup = self.sups[dire[3], dire[4]]

        results = []

        for duration in range(1, 9):

            prob = self.catboost_model.predict([
                r_synergy_val - d_synergy_val,
                carry,
                mid,
                offlane,
                rsup - dsup,
                self.time_strength(radiant, duration, duration) - self.time_strength(dire, duration, duration),
                csynergy_val
            ], prediction_type="Probability")[:, 1]

            results.append({
                "Radiant": prob,
                "Dire": 1 - prob,
                "Time": duration
            })
            total_radiant, total_dire = 0, 0
            for result in results:
                total_radiant += result["Radiant"]
                total_dire += result["Dire"]

            probability = total_radiant / (total_radiant + total_dire)

        return probability

    def get_pos_existing(self, team, pos_ext=10):
        team_ready = []
        all_dated = []
        for pos in range(1, 6):
            mx = 0
            hh = team[0]
            if pos == pos_ext:
                continue
            for hero in team:
                if hero in all_dated:
                    continue
                if self.hero_pos_weight[hero][pos] > mx:
                    hh = hero
                    mx = self.hero_pos_weight[hero][pos]
            all_dated.append(hh)
            team_ready.append(hh)
        return team_ready

    def get_valuable_dict(self, own_team, enemy_team, pos, pul):
        valuable_dict = {}
        own_team_ready = self.get_pos_existing(own_team, pos)
        enemy_team_ready = self.get_pos_existing(enemy_team)
        for hero in pul:
            if hero in enemy_team or hero in own_team:
                continue
            own_team_ready.insert(pos - 1, hero)
            pick_strength = self.prediction(own_team_ready, enemy_team_ready)
            if self.hero_pos_weight[hero][pos] > 0.4:
                if pos == 4 and hero == 1:
                    continue
                valuable_dict[hero] = int(pick_strength * 100)
            del own_team_ready[pos - 1]
        valuable_dict = self.sort_dict(valuable_dict)

        return valuable_dict
