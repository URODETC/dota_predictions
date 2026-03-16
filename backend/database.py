from os import getenv

from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from sqlalchemy.orm import Mapped, declarative_base, mapped_column

engine = create_async_engine(getenv("DATABASE_URL"))
new_session = async_sessionmaker(engine, expire_on_commit=False)


async def get_db():
    async with new_session() as session:
        yield session


Base = declarative_base()


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    username: Mapped[str] = mapped_column(unique=True, index=True, nullable=False)
    password_hash: Mapped[str]


async def setup_database():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
