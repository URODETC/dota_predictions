from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.predictions import get_prediction
from dotenv import load_dotenv

load_dotenv(".env")
app = FastAPI()

origins = ["http://localhost:3000", "http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/prikol")
def api_prikol():
    return {"message": "Максим и Антон крутые"}


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/predict")
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
