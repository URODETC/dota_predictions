from pydantic import BaseModel, field_validator


class PredictionIn(BaseModel):
    team1: list[int]
    team2: list[int]

    @field_validator("team1", "team2")
    @classmethod
    def must_be_5_heroes(cls, v: list[int],) -> list[int]:
        if len(v) != 5:
            raise ValueError("Команда должна содержать 5 героев")
        if len(set(v)) != 5:
            raise ValueError("Герои в команде не должны повторяться")
        return v

class TimedResult(BaseModel):
    Radiant: int
    Dire: int
    Time: int

class PredictionOut(BaseModel):
    average: dict[str, float]
    detailed: list[TimedResult]

class LastpickIn(BaseModel):
    my_team: list[int]
    enemy_team: list[int]
    top_n: int = 20
    pos: int = 1