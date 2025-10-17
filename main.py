from fastapi import FastAPI, Request, Header, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from prediction.predictions import get_prediction
import json, os, uuid, datetime

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

API_KEY = "123123123123 "
HISTORY_FILE = "data/history.json"


def load_history():
    if not os.path.exists(HISTORY_FILE):
        return []
    with open(HISTORY_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def save_history(data):
    os.makedirs("data", exist_ok=True)
    with open(HISTORY_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


@app.get("/", response_class=HTMLResponse)
def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


@app.get("/last-pick", response_class=HTMLResponse)
def last_pick(request: Request):
    return templates.TemplateResponse("last_pick.html", {"request": request})


@app.get("/history", response_class=HTMLResponse)
def history_page(request: Request):
    return templates.TemplateResponse("history.html", {"request": request})


@app.post("/api/predict")
async def api_predict(data: dict, x_api_key: str = Header(None)):
    if x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API key")

    team1 = data.get("team1", [])
    team2 = data.get("team2", [])
    team1_name = data.get("team1_name", "Radiant")
    team2_name = data.get("team2_name", "Dire")

    result = get_prediction(team1, team2)

    avg_radiant = round(
        (
            result["early_game"]["radiant"]
            + result["mid_game"]["radiant"]
            + result["late_game"]["radiant"]
        )
        / 3,
        1,
    )
    avg_dire = round(
        (
            result["early_game"]["dire"]
            + result["mid_game"]["dire"]
            + result["late_game"]["dire"]
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
