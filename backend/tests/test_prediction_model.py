from itertools import combinations
from unittest.mock import MagicMock

import numpy as np
import pytest
import torch

from shared.models import PredictionModel

HEROES = list(range(1,11))
RADIANT = [1, 2, 3, 4, 5]
DIRE    = [6, 7, 8, 9, 10]

def _pair_synergy(default: float = 0.55) -> dict:
    d = {}
    for a,b in combinations(sorted(HEROES),2):
        d[a,b] = default
    return d

def _matchup_synergy(default: float = 0.02) -> dict:
    return {(a, b): default for a in HEROES for b in HEROES}


def _lane_dict(default: float = 0.0) -> dict:
    return {(a, b): default for a in HEROES for b in HEROES}


def _hero_time(default: float = 0.5) -> dict:
    return {h: {i: default for i in range(1, 9)} for h in HEROES}

def _mock_lm():
    m = MagicMock()
    m.return_value = torch.tensor([[0.0]])
    return m

def _mock_xgb():
    m = MagicMock()
    m.return_value = torch.tensor([[0.0]])
    return m


@pytest.fixture
def model():
    return PredictionModel(
        carry_matchup=_lane_dict(),
        mid_matchup=_lane_dict(),
        offlane_matchup=_lane_dict(),
        pair_synergy=_pair_synergy(),
        matchup_synergy=_matchup_synergy(),
        hero_stats_time=_hero_time(),
        sup_synergy=_lane_dict(),
        xgb_model=_mock_xgb(),
        linear_model=_mock_lm(),
    )


class TestSynergy:
    def test_returns_float(self, model):
        assert isinstance(model.synergy(RADIANT), float)

    def test_known_value(self, model):
        assert abs(model.synergy(RADIANT) - 0.55) < 1e-4

    def test_missing_pair_defaults_to_05(self, model):
        assert abs(model.synergy([100, 101, 102, 103, 104]) - 0.5) < 1e-4

    def test_order_independent(self, model):
        assert abs(model.synergy([1, 2, 3, 4, 5]) - model.synergy([5, 4, 3, 2, 1])) < 1e-6

    def test_result_in_range(self, model):
        assert 0.0 <= model.synergy(RADIANT) <= 1.0

class TestCounterSynergy:
    def test_returns_float(self, model):
        assert isinstance(model.counter_synergy(RADIANT, DIRE), float)

    def test_known_value(self, model):
        assert abs(model.counter_synergy(RADIANT, DIRE) - 0.02) < 1e-4

    def test_empty_matchup_defaults_to_zero(self):
        m = PredictionModel(
            carry_matchup={}, mid_matchup={}, offlane_matchup={},
            pair_synergy={}, matchup_synergy={}, hero_stats_time={},
            sup_synergy={}, xgb_model=_mock_xgb(), linear_model=_mock_lm(),
        )
        assert abs(m.counter_synergy(RADIANT, DIRE)) < 1e-6

    def test_counts_all_25_pairs(self, model):
        calls = []
        original_get = model.matchup_synergy.get

        def counting_get(key, default=0.0):
            calls.append(key)
            return original_get(key, default)

        model.matchup_synergy.get = counting_get
        model.counter_synergy(RADIANT, DIRE)
        assert len(calls) == 25

class TestTimeStrength:
    @pytest.mark.parametrize("duration,expected_cat", [
        (20,   1),
        (25,   2),
        (30,   3),
        (32.5, 4),
        (35,   5),
        (37.5, 6),
        (40,   7),
        (55,   8),
    ])
    def test_duration_to_category(self, model, duration, expected_cat):
        for h in RADIANT:
            model.hero_stats_time[h] = {i: float(i) / 10 for i in range(1, 9)}
        r_by_dur = model.time_strength(RADIANT, duration, 0)
        r_by_cat = model.time_strength(RADIANT, 0, expected_cat)
        assert abs(r_by_dur - r_by_cat) < 1e-5

    def test_returns_float(self, model):
        assert isinstance(model.time_strength(RADIANT, 30), float | np.floating)

    def test_missing_hero_defaults_to_zero(self, model):
        assert model.time_strength([999, 998, 997, 996, 995], 30) == pytest.approx(0.0)

    def test_weights_sum_to_one(self):
        from shared.utils import _POSITION_WEIGHTS
        assert abs(float(_POSITION_WEIGHTS.sum()) - 1.0) < 1e-9


class TestPrediction:
    def test_returns_8_results(self, model):
        assert len(model.prediction(RADIANT, DIRE)) == 8

    def test_required_keys(self, model):
        for item in model.prediction(RADIANT, DIRE):
            assert {"Radiant", "Dire", "Time"} <= item.keys()

    def test_probabilities_sum_to_one(self, model):
        for item in model.prediction(RADIANT, DIRE):
            assert abs(item["Radiant"] + item["Dire"] - 1.0) < 1e-4

    def test_probabilities_in_0_1(self, model):
        for item in model.prediction(RADIANT, DIRE):
            assert 0.0 <= item["Radiant"] <= 1.0
            assert 0.0 <= item["Dire"] <= 1.0

    def test_time_indices_1_to_8(self, model):
        times = [r["Time"] for r in model.prediction(RADIANT, DIRE)]
        assert times == list(range(1, 9))

    def test_models_called_8_times(self):
        lm = _mock_lm()
        xg = _mock_xgb()
        m = PredictionModel(
            carry_matchup=_lane_dict(), mid_matchup=_lane_dict(), offlane_matchup=_lane_dict(),
            pair_synergy=_pair_synergy(), matchup_synergy=_matchup_synergy(),
            hero_stats_time=_hero_time(), sup_synergy=_lane_dict(),
            xgb_model=xg, linear_model=lm,
        )
        m.prediction(RADIANT, DIRE)
        assert lm.call_count == 8
        assert xg.call_count == 8

    def test_input_has_10_features(self):
        captured = []
        lm = MagicMock()
        lm.side_effect = lambda x: (captured.append(x.shape), torch.tensor([[0.0]]))[1]
        xg = _mock_xgb()

        m = PredictionModel(
            carry_matchup=_lane_dict(), mid_matchup=_lane_dict(), offlane_matchup=_lane_dict(),
            pair_synergy=_pair_synergy(), matchup_synergy=_matchup_synergy(),
            hero_stats_time=_hero_time(), sup_synergy=_lane_dict(),
            xgb_model=xg, linear_model=lm,
        )
        m.prediction(RADIANT, DIRE)
        from shared.models import N_FEATURES
        assert all(shape == torch.Size([1, N_FEATURES]) for shape in captured)