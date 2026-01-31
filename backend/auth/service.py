from uuid import uuid4
from sqlalchemy import select, delete
from backend.database import User, Session
from backend.auth.security import verify_password


async def authenticate_user(db, username: str, password: str):
    result = await db.execute(select(User).where(User.username == username))
    user = result.scalar_one_or_none()

    if not user or not verify_password(password, user.password_hash):
        return None

    session_id = str(uuid4())
    db.add(Session(id=session_id, user_id=user.id))
    await db.commit()

    return session_id


async def logout_user(db, session_id: str):
    if session_id:
        await db.execute(delete(Session).where(Session.id == session_id))
        await db.commit()
