from pydantic import BaseModel


class PromoteIn(BaseModel):
    version: str

class RollbackIn(BaseModel):
    version: str