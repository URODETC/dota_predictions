from fastapi import APIRouter
from backend.prediction.schemas import PredictionIn, PredictionOut, TimedResult, LastpickIn

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
    used = set(data.my_team + data.enemy_team)
    candidates = [h for h in range(1, 200) if h not in used]
    from backend.prediction.prediction import get_pred
    pred = get_pred()
    results = []
    for hero in candidates:
        full_team = data.my_team + [hero]
        if len(full_team) < 5:
            padding = [h for h in range(1, 200) if h not in used and h != hero]
            full_team = full_team + padding[:5 - len(full_team)]
        enemy = list(data.enemy_team)
        if len(enemy) < 5:
            padding = [h for h in range(1, 200) if h not in used and h != hero and h not in enemy]
            enemy = enemy + padding[:5 - len(enemy)]
        try:
            result = pred.prediction(full_team[:5], enemy[:5])
            avg_win = sum(r["Radiant"] for r in result) / len(result)
            results.append({"hero_id": hero, "winrate": round(avg_win * 100, 1)})
        except Exception:
            continue

    results.sort(key=lambda x: x["winrate"], reverse=True)
    return results[:data.top_n]