from fastapi import APIRouter
from backend.prediction.prediction import pred
from backend.prediction.schemas import PredictionIn

router = APIRouter(prefix="/predict", tags=["Prediction"])


@router.post("")
def api_predict(data: PredictionIn):

    team1 = data.team1
    team2 = data.team2

    result = pred.prediction(team1, team2)

    avg_radiant = round(
        (sum([i["Radiant"] for i in result])) / 8,
        2,
    )
    avg_dire = round(
        (sum([i["Dire"] for i in result])) / 8,
        2,
    )

    prediction = {
        "average": {"Radiant": avg_radiant, "Dire": avg_dire},
        "detailed": list(
            map(
                lambda x: {
                    "Radiant": round(x["Radiant"] * 100),
                    "Dire": round(x["Dire"] * 100),
                    "Time": x["Time"],
                },
                result,
            )
        ),
    }

    return prediction
