import numpy as np
import joblib
from itertools import combinations, product

# import lightgbm as lgb


model = joblib.load("backend/prediction/model.pkl")
pair_synergy = joblib.load("backend/prediction/pair_synergy.pkl")
matchup_synergy = joblib.load("backend/prediction/matchup_synergy.pkl")
hero_stats_time = joblib.load("backend/prediction/hero_stats_time.pkl")


def synergy(team: list):
    team = np.sort(np.array(team, dtype=np.int16))
    pairs = np.array(list(combinations(team, 2)), dtype=np.int16)
    values = np.fromiter(
        (pair_synergy.get((a, b), 0.5) for a, b in pairs),
        dtype=np.float32,
        count=len(pairs)
    )
    return values.mean()


def counter_synergy(radiant, dire):
  values = np.fromiter(
      (matchup_synergy.get((a,b), 0.0) for a,b in product(radiant,dire)),
      dtype = np.float32
  )
  return values.mean()


def time_strenght(team, duration, duration_ind = 0):
  if duration_ind == 0:
    if duration < 25:
        values = np.array([hero_stats_time.get(a, {}).get(1, 0.0) for a in team], dtype=np.float32)
    elif duration >= 25 and duration < 30:
        values = np.array([hero_stats_time.get(a, {}).get(2, 0.0) for a in team], dtype=np.float32)
    elif duration >= 30 and duration < 32.5:
        values = np.array([hero_stats_time.get(a, {}).get(3, 0.0) for a in team], dtype=np.float32)
    elif duration >= 32.5 and duration < 35:
        values = np.array([hero_stats_time.get(a, {}).get(4, 0.0) for a in team], dtype=np.float32)
    elif duration >= 35 and duration < 37.5:
        values = np.array([hero_stats_time.get(a, {}).get(5, 0.0) for a in team], dtype=np.float32)
    elif duration >= 37.5 and duration < 40:
        values = np.array([hero_stats_time.get(a, {}).get(6, 0.0) for a in team], dtype=np.float32)
    elif duration >= 40 and duration < 50:
        values = np.array([hero_stats_time.get(a, {}).get(7, 0.0) for a in team], dtype=np.float32)
    elif duration >= 50:
        values = np.array([hero_stats_time.get(a, {}).get(8, 0.0) for a in team], dtype=np.float32)
  else:
    values = np.array([hero_stats_time.get(a, {}).get(duration_ind, 0.0) for a in team], dtype=np.float32)
  return values.mean()


def predict(radiant, dire, model):
  r_synergy_val = synergy(radiant)
  d_synergy_val = synergy(dire)
  csynergy_val = counter_synergy(radiant, dire)

  local_data = []
  for duration in range(1,9):
    local_data.append([
              r_synergy_val,
              d_synergy_val,
              csynergy_val,
              time_strenght(radiant, duration, duration),
              time_strenght(dire, duration, duration)
              ])

  proba = model.predict_proba(local_data)
  return proba


def get_prediction(radiant, dire):
    global model
    prediction = predict(radiant, dire, model)
    return [{"Radiant": prediction[0][1], "Dire": prediction[0][0], "Time": 1}, {"Radiant": prediction[1][1], "Dire": prediction[1][0], "Time": 2},\
    {"Radiant": prediction[2][1], "Dire": prediction[2][0], "Time": 3}, {"Radiant": prediction[3][1], "Dire": prediction[3][0], "Time": 4},\
     {"Radiant": prediction[4][1], "Dire": prediction[4][0], "Time": 5}, {"Radiant": prediction[5][1], "Dire": prediction[5][0], "Time": 6},\
     {"Radiant": prediction[6][1], "Dire": prediction[6][0], "Time": 7}, {"Radiant": prediction[7][1], "Dire": prediction[7][0], "Time": 8}]