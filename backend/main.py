from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.prediction.predictions import get_prediction

app = FastAPI()

# origins = ["http://localhost:3000", "http://localhost:5173"]  # твой реальный сайт

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # или ["*"] — чтобы разрешить всем
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все HTTP-методы
    allow_headers=["*"],  # Разрешить все заголовки
)


@app.get("/api/prikol")
def api_prikol():
    return {"message": "Максим и антон крутые"}


@app.post("/api/predict")
async def api_predict(data: dict):

    team1 = data.get("team1", [])
    team2 = data.get("team2", [])

    result = get_prediction(team1, team2)

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
