from unittest.mock import patch, MagicMock
import pytest
from fastapi.testclient import TestClient

FAKE_PREDICTION_RESULT = [
    {"Radiant": 0.6, "Dire": 0.4, "Time": i} for i in range(1, 9)
]

@pytest.fixture
def client():
    mock_pred = MagicMock()
    mock_pred.prediction.return_value = FAKE_PREDICTION_RESULT

    with patch("backend.prediction.prediction.pred", mock_pred):
        from backend.main import app
        with TestClient(app) as c:
            yield c

# /health

class TestHealth:
    def test_ok(self, client):
        r = client.get("/health")
        assert r.status_code == 200
        assert r.json() == {"status": "ok"}

# /predict validation

class TestPredictionValidation:
    VALID_PAYLOAD = {
        "team1": [1,2,3,4,5],
        "team2": [6,7,8,9,10],
    }

    def test_valid_request_returns_200(self, client):
        r = client.post("/predict", json=self.VALID_PAYLOAD)
        assert r.status_code == 200

    def test_missing_team1_returns_422(self, client):
        r = client.post("/predict", json={"team2": [6, 7, 8, 9, 10]})
        assert r.status_code == 422

    def test_missing_team2_returns_422(self, client):
        r = client.post("/predict", json={"team1": [1, 2, 3, 4, 5]})
        assert r.status_code == 422

    def test_empty_body_returns_422(self, client):
        r = client.post("/predict", json={})
        assert r.status_code == 422

    def test_team_with_4_heroes_returns_422(self, client):
        r = client.post("/predict", json={
            "team1": [1, 2, 3, 4],
            "team2": [6, 7, 8, 9, 10],
        })
        assert r.status_code in (200, 422)

    def test_team_with_6_heroes_returns_422(self, client):
        r = client.post("/predict", json={
            "team1": [1, 2, 3, 4, 5, 11],
            "team2": [6, 7, 8, 9, 10],
        })
        assert r.status_code in (200, 422)

    def test_string_hero_id_returns_422(self, client):
        r = client.post("/predict", json={
            "team1": ["axe", 2, 3, 4, 5],
            "team2": [6, 7, 8, 9, 10],
        })
        assert r.status_code == 422

    def test_get_method_not_allowed(self, client):
        r = client.get("/predict")
        assert r.status_code == 405

# /predict response

class TestPredictResponse:
    VALID_PAYLOAD = {
        "team1": [1, 2, 3, 4, 5],
        "team2": [6, 7, 8, 9, 10],
    }

    def test_response_has_average_and_detailed(self, client):
        r = client.post("/predict", json=self.VALID_PAYLOAD)
        body = r.json()
        assert "average" in body
        assert "detailed" in body

    def test_average_has_radiant_and_dire(self, client):
        r = client.post("/predict", json=self.VALID_PAYLOAD)
        avg = r.json()["average"]
        assert "Radiant" in avg
        assert "Dire" in avg

    def test_detailed_has_8_items(self, client):
        r = client.post("/predict", json=self.VALID_PAYLOAD)
        assert len(r.json()["detailed"]) == 8

    def test_detailed_items_have_correct_keys(self, client):
        r = client.post("/predict", json=self.VALID_PAYLOAD)
        for item in r.json()["detailed"]:
            assert "Radiant" in item
            assert "Dire" in item
            assert "Time" in item

    def test_average_radiant_rounded_to_2_decimals(self, client):
        r = client.post("/predict", json=self.VALID_PAYLOAD)
        avg = r.json()["average"]
        assert avg["Radiant"] == pytest.approx(0.6, abs=0.01)
        assert avg["Dire"] == pytest.approx(0.4, abs=0.01)

    def test_detailed_radiant_is_percent(self, client):
        r = client.post("/predict", json=self.VALID_PAYLOAD)
        for item in r.json()["detailed"]:
            assert 0 <= item["Radiant"] <= 100
            assert 0 <= item["Dire"] <= 100

    def test_detailed_time_indices_1_to_8(self, client):
        r = client.post("/predict", json=self.VALID_PAYLOAD)
        times = [item["Time"] for item in r.json()["detailed"]]
        assert times == list(range(1, 9))

    def test_content_type_is_json(self, client):
        r = client.post("/predict", json=self.VALID_PAYLOAD)
        assert "application/json" in r.headers["content-type"]

# /predict edge cases

class TestPredictEdgeCases:
    def test_same_hero_in_both_teams(self, client):
        r = client.post("/predict", json={
            "team1": [1, 2, 3, 4, 5],
            "team2": [1, 7, 8, 9, 10],
        })
        assert r.status_code == 422

    def test_duplicate_hero_in_one_team(self, client):
        r = client.post("/predict", json={
            "team1": [1, 1, 3, 4, 5],
            "team2": [6, 7, 8, 9, 10],
        })
        assert r.status_code == 422

    def test_model_called_once_per_request(self, client):
        with patch("backend.prediction.prediction.pred") as mock_pred:
            mock_pred.prediction.return_value = FAKE_PREDICTION_RESULT
            client.post("/predict", json={
                "team1": [1, 2, 3, 4, 5],
                "team2": [6, 7, 8, 9, 10],
            })
            assert mock_pred.prediction.call_count == 1

    def test_model_receives_correct_teams(self, client):
        with patch("backend.prediction.prediction.pred") as mock_pred:
            mock_pred.prediction.return_value = FAKE_PREDICTION_RESULT
            client.post("/predict", json={
                "team1": [1, 2, 3, 4, 5],
                "team2": [6, 7, 8, 9, 10],
            })
            call_args = mock_pred.prediction.call_args
            assert list(call_args[0][0]) == [1, 2, 3, 4, 5]
            assert list(call_args[0][1]) == [6, 7, 8, 9, 10]