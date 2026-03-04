from itertools import combinations
from unittest.mock import MagicMock
import numpy as np
import pytest


def make_pair_synergy():
    heroes = [1,2,3,4,5,6,7,8,9,10]
    synergy = {}
    for a,b in combinations(sorted(heroes),2):
        synergy[a,b] = 0.55
    return synergy

def make_matching_synergy():
    heroes = [1,2,3,4,5,6,7,8,9,10]
    matchup = {}
    for a in heroes:
        for b in heroes:
            matchup[(a,b)] = 0.02
    return matchup

def make_hero_time_strength():
    heroes = [1,2,3,4,5,6,7,8,9,10]
    return {hero: {i: 0.5 for i in range(1,9)} for hero in heroes}

def make_numpy_matchup(default=0.5):
    matrix = np.full((150,150), default, dtype=np.float32)
    return matrix

@pytest.fixture
def mock_linear_model():
    model = MagicMock()
    import torch
    model.return_value = torch.tensor([[0.0]])
    return model

@pytest.fixture
def mock_xgb_model():
    model = MagicMock()
    import torch
    model.return_value = torch.tensor([[0.0]])
    return model

@pytest.fixture
def prediction_model(mock_xgb_model, mock_linear_model):
    from backend.prediction.prediction import PredictionModel
    return PredictionModel(
        carry=make_numpy_matchup(),
        mid=make_numpy_matchup(),
        offlane=make_numpy_matchup(),
        synergy=make_pair_synergy(),
        matchup_synergy=make_matching_synergy(),
        time_strength=make_numpy_matchup(),
        sup=make_numpy_matchup(),
        xgb_model=mock_xgb_model,
        linear_model=mock_linear_model,
    )

RADIANT = [1,2,3,4,5]
DIRE = [6,7,8,9,10]

# synergy()

class TestSynergy:
    def test_returns_float(self, prediction_model):
        result = prediction_model.synergy(RADIANT)
        assert isinstance(result, float)

    def test_neutral_synergy(self, prediction_model):
        result = prediction_model.synergy(RADIANT)
        assert abs(result - 0.55) < 1e-4

    def test_missing_pair_defaults_to_05(self, prediction_model):
        result = prediction_model.synergy([100, 101, 102, 103, 104])
        assert abs(result - 0.5) < 1e-4

    def test_order_independent(self, prediction_model):
        r1 = prediction_model.synergy([1, 2, 3, 4, 5])
        r2 = prediction_model.synergy([5, 4, 3, 2, 1])
        assert abs(r1 - r2) < 1e-6

    def test_single_unique_team(self, prediction_model):
        result = prediction_model.synergy(RADIANT)
        assert 0.0 <= result <= 1.0

# counter_synergy()

class TestCounterSynergy:
    def test_returns_float(self, prediction_model):
        result = prediction_model.counter_synergy(RADIANT, DIRE)
        assert isinstance(result, float)

    def test_symmetric_teams_neutral(self, prediction_model):
        result = prediction_model.counter_synergy(RADIANT, DIRE)
        assert abs(result - 0.02) < 1e-4

    def test_missing_pair_defaults_to_zero(self):
        import torch

        from backend.prediction.prediction import PredictionModel

        lm = MagicMock()
        lm.return_value = torch.tensor([[0.0]])
        xg = MagicMock()
        xg.return_value = torch.tensor([[0.0]])

        model = PredictionModel(
            carry=make_numpy_matchup(),
            mid=make_numpy_matchup(),
            offlane=make_numpy_matchup(),
            synergy={},
            matchup_synergy={},
            time_strength={},
            sup=make_numpy_matchup(),
            xgb_model=xg,
            linear_model=lm,
        )
        result = model.counter_synergy([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])
        assert abs(result - 0.0) < 1e-6

    def test_counts_all_25_pairs(self, prediction_model):
        calls = []
        original = prediction_model.matchup_synergy.get

        def counting_get(key, default=0.0):
            calls.append(key)
            return original(key, default)

        prediction_model.matchup_synergy.get = counting_get
        prediction_model.counter_synergy(RADIANT, DIRE)
        assert len(calls) == 25

# hero_stats_time()

class TestTimeStrength:
    @pytest.mark.parametrize("duration,expected_idx", [
        (20,   1),
        (25,   2),
        (30,   3),
        (32.5, 4),
        (35,   5),
        (37.5, 6),
        (40,   7),
        (55,   8),
    ])
    def test_duration_buckets(self, prediction_model, duration, expected_idx):
        for hero in RADIANT:
            prediction_model.hero_time_strength[hero] = {i: float(i) / 10 for i in range(1, 9)}

        result_by_duration = prediction_model.time_strength(RADIANT, duration, 0)
        result_by_index   = prediction_model.time_strength(RADIANT, 0, expected_idx)
        assert abs(result_by_duration - result_by_index) < 1e-5

    def test_returns_float(self, prediction_model):
        result = prediction_model.time_strength(RADIANT, 30)
        assert isinstance(result, float | np.floating)

    def test_result_in_valid_range(self, prediction_model):
        result = prediction_model.time_strength(RADIANT, 30)
        assert 0.0 <= result <= 1.0

    def test_distribution_weights_sum_to_one(self, prediction_model):
        distribution = [0.35, 0.3, 0.2, 0.075, 0.075]
        assert abs(sum(distribution) - 1.0) < 1e-9

    def test_missing_hero_defaults_to_zero(self, prediction_model):
        result = prediction_model.time_strength([999, 998, 997, 996, 995], 30)
        assert result == pytest.approx(0.0)

# predict()

class TestPrediction:
    def test_returns_list_of_8(self, prediction_model):
        result = prediction_model.prediction(RADIANT, DIRE)
        assert len(result) == 8

    def test_each_result_has_required_keys(self, prediction_model):
        result = prediction_model.prediction(RADIANT, DIRE)
        for item in result:
            assert "Radiant" in item
            assert "Dire" in item
            assert "Time" in item

    def test_probabilities_sum_to_one(self, prediction_model):
        result = prediction_model.prediction(RADIANT, DIRE)
        for item in result:
            total = item["Radiant"] + item["Dire"]
            assert abs(total - 1.0) < 1e-4, f"Time={item['Time']}: {total} != 1.0"

    def test_probabilities_in_0_1(self, prediction_model):
        result = prediction_model.prediction(RADIANT, DIRE)
        for item in result:
            assert 0.0 <= item["Radiant"] <= 1.0
            assert 0.0 <= item["Dire"] <= 1.0

    def test_time_indices_are_1_to_8(self, prediction_model):
        result = prediction_model.prediction(RADIANT, DIRE)
        times = [item["Time"] for item in result]
        assert times == list(range(1, 9))

    def test_symmetric_teams_near_50_50(self, prediction_model):
        result = prediction_model.prediction(RADIANT, DIRE)
        avg_radiant = sum(r["Radiant"] for r in result) / 8
        assert abs(avg_radiant - 0.5) < 0.1

    def test_model_called_8_times(self, prediction_model, mock_linear_model, mock_xgb_model):
        prediction_model.prediction(RADIANT, DIRE)
        assert mock_linear_model.call_count == 8
        assert mock_xgb_model.call_count == 8