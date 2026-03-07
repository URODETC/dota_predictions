from fastapi import APIRouter
from backend.prediction.prediction import pred
from backend.prediction.schemas import PredictionIn, PredictionOut, TimedResult

router = APIRouter(prefix="/predict", tags=["Prediction"])


@router.post("", response_model=PredictionOut)
def api_predict(data: PredictionIn) -> PredictionOut:
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