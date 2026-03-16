from datetime import timedelta
from os import getenv

from fastapi import APIRouter, Depends, HTTPException, Response
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from backend.auth import schemas
from backend.auth.dependencies import get_current_user
from backend.auth.security import create_access_token, get_password_hash, verify_password
from backend.database import User, get_db

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register")
async def register(
        user_data: schemas.UserIn,
        db: AsyncSession = Depends(get_db)
):
    result = await db.execute(select(User).where(User.username == user_data.username))
    db_user = result.scalars().first()
    if db_user:
        raise HTTPException(status_code=400, detail="User already exists")

    hashed_password = get_password_hash(user_data.password)
    new_user = User(
        username=user_data.username,
        password_hash=hashed_password
    )
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    return {"message": "User created successfully"}


@router.post("/login")
async def login(
        resp: Response,
        form_data: schemas.UserIn,
        db: AsyncSession = Depends(get_db)
):
    result = await db.execute(select(User).where(User.username == form_data.username))
    user = result.scalars().first()
    if not user or not verify_password(form_data.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Incorrect username or password")

    access_token_expires = timedelta(minutes=int(getenv("ACCESS_TOKEN_EXPIRE_MINUTES")))
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    resp.set_cookie(
        key="access_token",
        value=access_token,
        httponly=True,
        max_age=int(getenv("ACCESS_TOKEN_EXPIRE_MINUTES")) * 60,
        samesite="lax",
        secure=True
    )
    return {"message": "Logged in successfully"}

@router.get("/profile")
async def profile(cur_user: User = Depends(get_current_user)):
    return {"username": cur_user.username}