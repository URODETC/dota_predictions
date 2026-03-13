from fastapi import APIRouter
from backend.prediction.schemas import PredictionIn, PredictionOut, TimedResult, LastpickIn
from random import *

router = APIRouter(prefix="/predict", tags=["Prediction"])


@router.post("", response_model=PredictionOut)
def api_predict(data: PredictionIn) -> PredictionOut:
    from backend.prediction.prediction import get_pred
    pred = get_pred()

    results = pred.prediction(data.team1, data.team2)

    avg_radiant = round(sum(r["Radiant"] for r in results) / len(results), 2)
    avg_dire    = round(sum(r["Dire"]    for r in results) / len(results), 2)

    return PredictionOut(
        average={"Radiant": avg_radiant, "Dire": avg_dire},
        detailed=[
            TimedResult(
                Radiant=round(r["Radiant"] * 100),
                Dire=round(r["Dire"] * 100),
                Time=r["Time"],
            )
            for r in results
        ],
    )



@router.post("/lastpick")
def api_lastpick(data: LastpickIn):
    from backend.prediction.prediction import get_last_pick
    last = get_last_pick()
    used = set(data.my_team + data.enemy_team)
    candidates = [h for h in range(1, 200) if h not in used]
    valuable = last.get_valuable_dict(data.my_team, data.enemy_team, data.pos, candidates)
    results = [{"hero_id": k, "winrate": v} for k, v in valuable.items()]

    return results[:data.top_n]