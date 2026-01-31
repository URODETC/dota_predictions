from fastapi import APIRouter, Depends, Response, HTTPException, Cookie
from backend.database import get_db
from backend.auth.service import authenticate_user, logout_user

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/login")
async def login(username: str, password: str, response: Response, db=Depends(get_db)):
    session_id = await authenticate_user(db, username, password)
    if not session_id:
        raise HTTPException(status_code=401)

    response.set_cookie("session_id", session_id, httponly=True)
    return {"message": "Loged in"}


@router.post("/logout")
async def logout(
    response: Response,
    session_id: str | None = Cookie(default=None),
    db=Depends(get_db),
):
    await logout_user(session_id)
    response.delete_cookie("session_id")
    return {"message": "Logged out"}
