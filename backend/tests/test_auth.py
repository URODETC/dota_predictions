import pytest
from fastapi.testclient import TestClient

TEST_DATABASE_URL = "sqlite+aiosqlite:///:memory:"


@pytest.fixture(scope="module")
def client(app_with_db):
    with TestClient(app_with_db) as c:
        yield c

# /auth/register

class TestRegister:
    def test_register_new_user(self, client_with_db):
        r = client_with_db.post("/auth/register", json={
            "username": "testuser",
            "password": "password123"
        })
        assert r.status_code == 200
        assert "created" in r.json()["message"].lower()

    def test_register_duplicate_user(self, client_with_db):
        client_with_db.post("/auth/register", json={
            "username": "duplicate",
            "password": "pass"
        })
        r = client_with_db.post("/auth/register", json={
            "username": "duplicate",
            "password": "pass"
        })
        assert r.status_code == 400

    def test_register_missing_username(self, client_with_db):
        r = client_with_db.post("/auth/register", json={"password": "pass"})
        assert r.status_code == 422

    def test_register_missing_password(self, client_with_db):
        r = client_with_db.post("/auth/register", json={"username": "user"})
        assert r.status_code == 422

    def test_register_empty_body(self, client_with_db):
        r = client_with_db.post("/auth/register", json={})
        assert r.status_code == 422

# /auth/login


class TestLogin:
    @pytest.fixture(autouse=True)
    def register_user(self, client_with_db):
        client_with_db.post("/auth/register", json={
            "username": "loginuser",
            "password": "correctpass"
        })

    def test_login_correct_credentials(self, client_with_db):
        r = client_with_db.post("/auth/login", json={
            "username": "loginuser",
            "password": "correctpass"
        })
        assert r.status_code == 200

    def test_login_sets_cookie(self, client_with_db):
        r = client_with_db.post("/auth/login", json={
            "username": "loginuser",
            "password": "correctpass"
        })
        assert "access_token" in r.cookies

    def test_login_wrong_password(self, client_with_db):
        r = client_with_db.post("/auth/login", json={
            "username": "loginuser",
            "password": "wrongpass"
        })
        assert r.status_code == 401

    def test_login_nonexistent_user(self, client_with_db):
        r = client_with_db.post("/auth/login", json={
            "username": "nobody",
            "password": "pass"
        })
        assert r.status_code == 401

    def test_login_empty_password(self, client_with_db):
        r = client_with_db.post("/auth/login", json={
            "username": "loginuser",
            "password": ""
        })
        assert r.status_code == 401

# /auth/profile

class TestProfile:
    def test_profile_without_cookie_returns_401(self, client_with_db):
        r = client_with_db.get("/auth/profile", cookies={})
        assert r.status_code == 401

    def test_profile_with_valid_cookie(self, client_with_db):
        client_with_db.post("/auth/register", json={
            "username": "profileuser",
            "password": "pass123"
        })
        login_r = client_with_db.post("/auth/login", json={
            "username": "profileuser",
            "password": "pass123"
        })
        token = login_r.cookies.get("access_token")

        r = client_with_db.get("/auth/profile", cookies={"access_token": token})
        assert r.status_code == 200
        assert r.json()["username"] == "profileuser"

    def test_profile_with_invalid_token(self, client_with_db):
        r = client_with_db.get("/auth/profile", cookies={
            "access_token": "not.a.real.token"
        })
        assert r.status_code == 401

# security.py — юнит тесты без HTTP

class TestSecurity:
    def test_password_hash_is_not_plaintext(self):
        from backend.auth.security import get_password_hash
        hashed = get_password_hash("mypassword")
        assert hashed != "mypassword"
        assert len(hashed) > 20

    def test_verify_correct_password(self):
        from backend.auth.security import get_password_hash, verify_password
        hashed = get_password_hash("mypassword")
        assert verify_password("mypassword", hashed) is True

    def test_verify_wrong_password(self):
        from backend.auth.security import get_password_hash, verify_password
        hashed = get_password_hash("mypassword")
        assert verify_password("wrongpassword", hashed) is False

    def test_create_access_token_returns_string(self):
        from backend.auth.security import create_access_token
        token = create_access_token({"sub": "testuser"})
        assert isinstance(token, str)
        assert len(token) > 0

    def test_token_contains_correct_subject(self):
        from jose import jwt

        from backend.auth.security import create_access_token
        from os import getenv

        token = create_access_token({"sub": "testuser"})
        payload = jwt.decode(token, getenv("SECRET_KEY"))
        assert payload["sub"] == "testuser"

    def test_token_has_expiration(self):
        from jose import jwt

        from backend.auth.security import create_access_token
        from os import getenv

        token = create_access_token({"sub": "testuser"})
        payload = jwt.decode(token, getenv("SECRET_KEY"))
        assert "exp" in payload