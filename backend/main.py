from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.prediction.predictions import get_prediction
import json, os, uuid, datetime

app = FastAPI()

HISTORY_FILE = "data/history.json"

# origins = ["http://localhost:3000", "http://localhost:5173"]  # твой реальный сайт

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # или ["*"] — чтобы разрешить всем
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все HTTP-методы
    allow_headers=["*"],  # Разрешить все заголовки
)


def load_history():
    if not os.path.exists(HISTORY_FILE):
        return []
    with open(HISTORY_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_history(data):
    os.makedirs("data", exist_ok=True)
    with open(HISTORY_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


@app.get("/api/prikol")
def api_prikol():
    return {"message": "Максим и антон крутые"}


@app.post("/api/predict")
async def api_predict(data: dict):

    team1 = data.get("team1", [])
    team2 = data.get("team2", [])
    team1_name = data.get("team1_name", "Radiant")
    team2_name = data.get("team2_name", "Dire")

    result = get_prediction(team1, team2)

    avg_radiant = round(
        (
            sum([i['Radiant'] for i in result])
        )
        / 3,
        1,
    )
    avg_dire = round(
        (
            sum([i['Dire'] for i in result])
        )
        / 3,
        1,
    )

    result["average"] = {"radiant": avg_radiant, "dire": avg_dire}

    entry = {
        "id": str(uuid.uuid4()),
        "timestamp": datetime.datetime.now().isoformat(timespec="seconds"),
        "team1": team1_name,
        "team2": team2_name,
        "team1_heroes": team1,
        "team2_heroes": team2,
        "result": result,
        "outcome": None,
        "game_time": None,
    }

    history = load_history()
    history.append(entry)
    save_history(history)
    return result


@app.get("/api/history")
def get_history():
    return load_history()


@app.post("/api/history/update")
def update_history(item: dict):
    history = load_history()
    for match in history:
        if match["id"] == item["id"]:
            match["outcome"] = item.get("outcome")
            match["game_time"] = item.get("game_time")
            break
    save_history(history)
    return {"status": "ok"}


@app.post("/api/history/delete")
def delete_match(item: dict):
    history = load_history()
    new_history = [m for m in history if m["id"] != item["id"]]
    save_history(new_history)
    return {"status": "deleted"}
