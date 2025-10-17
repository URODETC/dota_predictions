import numpy as np
import joblib
from itertools import combinations, product

# import lightgbm as lgb


model = joblib.load("prediction/model.pkl")
pair_synergy = joblib.load("prediction/pair_synergy.pkl")
matchup_synergy = joblib.load("prediction/matchup_synergy.pkl")
hero_stats_time = joblib.load("prediction/hero_stats_time.pkl")


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
    global model
    prediction = predict(radiant, dire, model)
    return {
        "early_game": {
            "radiant": round(prediction[0][1] * 100),
            "dire": round(prediction[0][0] * 100),
        },
        "mid_game": {
            "radiant": round(prediction[1][1] * 100),
            "dire": round(prediction[1][0] * 100),
        },
        "late_game": {
            "radiant": round(prediction[2][1] * 100),
            "dire": round(prediction[2][0] * 100),
        },
    }
