import numpy as np
import joblib
from itertools import combinations, product

model = joblib.load("prediction/model.pkl")
pair_synergy = joblib.load("prediction/pair_synergy.pkl")
matchup_synergy = joblib.load("prediction/matchup_synergy.pkl")
hero_stats_time = joblib.load("prediction/hero_stats_time.pkl")
hero_id = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    119,
    120,
    121,
    123,
    126,
    128,
    129,
    131,
    135,
    136,
    137,
    138,
    145,
]


def synergy(team: list):
    team = np.sort(np.array(team, dtype=np.int16))
    pairs = np.array(list(combinations(team, 2)), dtype=np.int16)
    values = np.fromiter(
        (pair_synergy.get((a, b), 0.5) for a, b in pairs),
        dtype=np.float32,
        count=len(pairs),
    )
    return values.mean()


def counter_synergy(radiant, dire):
    values = np.fromiter(
        (matchup_synergy.get((a, b), 0.0) for a, b in product(radiant, dire)),
        dtype=np.float32,
    )
    return values.mean()


def time_strenght(team, duration, durationString="default"):
    if durationString == "default":
        if duration < 30:
            values = np.array(
                [hero_stats_time.get(a, {}).get("early", 0.0) for a in team],
                dtype=np.float32,
            )
        elif duration >= 30 and duration < 50:
            values = np.array(
                [hero_stats_time.get(a, {}).get("midgame", 0.0) for a in team],
                dtype=np.float32,
            )
        elif duration >= 50:
            values = np.array(
                [hero_stats_time.get(a, {}).get("late", 0.0) for a in team],
                dtype=np.float32,
            )
    else:
        values = np.array(
            [hero_stats_time.get(a, {}).get(durationString, 0.0) for a in team],
            dtype=np.float32,
        )
    return values.mean()


def predict(radiant, dire, model):
    r_synergy_val = synergy(radiant)
    d_synergy_val = synergy(dire)
    csynergy_val = counter_synergy(radiant, dire)

    local_data = []
    for duration in ["early", "midgame", "late"]:
        local_data.append(
            [
                r_synergy_val,
                d_synergy_val,
                csynergy_val,
                time_strenght(radiant, 0, durationString=duration),
                time_strenght(dire, 0, durationString=duration),
            ]
        )

    proba = model.predict_proba(local_data)
    return proba


def get_prediction(radiant, dire):
    global model, hero_id

    base_pred = predict(radiant, dire, model)
    base_score = base_pred[1][1]

    def team_contribution(team, enemy_team, is_radiant=True):
        contributions = {}
        for hero in team:
            temp_team = [h for h in team if h != hero]
            pred = predict(temp_team, enemy_team, model)
            score = pred[1][1] if is_radiant else pred[1][0]
            contributions[hero] = round((base_score - score) * 100, 3)
        return contributions

    def recommend_for_empty(team, enemy_team, is_radiant=True):
        recs = []
        for hero in hero_id:
            if hero in team or hero in enemy_team:
                continue
            new_team = team + [hero]
            pred = predict(new_team, enemy_team, model)
            score = pred[1][1] if is_radiant else pred[1][0]
            delta = round((score - base_score) * 100, 3)
            recs.append({"hero_id": hero, "value": delta})
        recs.sort(key=lambda x: x["value"], reverse=True)
        return recs

    radiant_contrib = team_contribution(radiant, dire, is_radiant=True)
    dire_contrib = team_contribution(dire, radiant, is_radiant=False)

    radiant_recs = []
    dire_recs = []

    if len(radiant) < 5:
        radiant_recs = recommend_for_empty(radiant, dire, is_radiant=True)
    if len(dire) < 5:
        dire_recs = recommend_for_empty(dire, radiant, is_radiant=False)

    return {
        "prediction": {
            "early_game": {
                "radiant": round(base_pred[0][1] * 100),
                "dire": round(base_pred[0][0] * 100),
            },
            "mid_game": {
                "radiant": round(base_pred[1][1] * 100),
                "dire": round(base_pred[1][0] * 100),
            },
            "late_game": {
                "radiant": round(base_pred[2][1] * 100),
                "dire": round(base_pred[2][0] * 100),
            },
        },
        "radiant_contribution": radiant_contrib,
        "dire_contribution": dire_contrib,
        "radiant_recommendations": radiant_recs,
        "dire_recommendations": dire_recs,
    }


print(get_prediction([], []))
