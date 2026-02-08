from pydantic import BaseModel


class PredictionIn(BaseModel):
    team1: list[int]
    team2: list[int]
