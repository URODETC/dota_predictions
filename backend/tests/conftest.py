import os
import pytest
import asyncio
import numpy as np
import torch
from unittest.mock import patch, MagicMock

FAKE_ARTIFACTS = {
    "carry_matchup":   np.full((150, 150), 0.5, dtype=np.float32),
    "matchup_synergy": {(i, j): 0.02 for i in range(1, 15) for j in range(1, 15)},
    "mid_matchup":     np.full((150, 150), 0.5, dtype=np.float32),
    "offlane_matchup": np.full((150, 150), 0.5, dtype=np.float32),
    "pair_synergy":    {(i, j): 0.55 for i in range(1, 15) for j in range(i + 1, 15)},
    "hero_stats_time": {h: {t: 0.5 for t in range(1, 9)} for h in range(1, 150)},
    "sup_synergy":     np.full((150, 150), 0.5, dtype=np.float32),
}

patch("joblib.load", return_value=FAKE_ARTIFACTS).start()
patch("torch.load",  return_value={}).start()
patch("torch.nn.Linear.load_state_dict", return_value=None).start()

def get_test_db_url() -> str:
    url = os.getenv("DATABASE_URL")
    if url:
        return url   # CI: реальный postgres
    return "sqlite+aiosqlite:///:memory:"


TEST_DB_URL = get_test_db_url()


@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.new_event_loop()
    yield loop
    loop.close()


@pytest.fixture(scope="session")
async def test_engine():
    from sqlalchemy.ext.asyncio import create_async_engine
    engine = create_async_engine(TEST_DB_URL)
    yield engine
    await engine.dispose()


@pytest.fixture(scope="session", autouse=True)
async def setup_test_db(test_engine):
    from backend.database import Base
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)


@pytest.fixture
async def db_session(test_engine):
    from sqlalchemy.ext.asyncio import AsyncSession

    async with test_engine.connect() as conn:
        await conn.begin()
        session = AsyncSession(bind=conn, expire_on_commit=False)
        yield session
        await session.close()
        await conn.rollback()   # ← ключевое: все изменения теста откатываются


@pytest.fixture(scope="module")
def app_with_db(test_engine):
    from sqlalchemy.ext.asyncio import AsyncSession
    from backend.database import get_db
    from backend.main import app

    async def override_get_db():
        async with AsyncSession(test_engine, expire_on_commit=False) as session:
            yield session

    app.dependency_overrides[get_db] = override_get_db
    yield app
    app.dependency_overrides.clear()