from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.prediction.router import router as prediction_router
from backend.auth.router import router as auth_router
from backend.internal.router import router as internal_router
from backend.database import setup_database

from dotenv import load_dotenv

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173",
                   "https://dota-prediction.ru",
                   ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(prediction_router)
app.include_router(auth_router)
app.include_router(internal_router)

@app.post("/setup_database")
async def setup_db():
    await setup_database()
    return {"status": "ok"}

@app.get("/health")
def health():
    return {"status": "ok"}
