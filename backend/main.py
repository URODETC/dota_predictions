from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.predition.router import router as prediction_router
from dotenv import load_dotenv
from backend.database import setup_database

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

app.include_router(prediction_router)


@app.post("/setup_database")
async def setup_db():
    await setup_database()
    return {"status": "ok"}


@app.get("/prikol")
def api_prikol():
    return {"message": "Максим и Антон крутые"}


@app.get("/health")
def health():
    return {"status": "ok"}
