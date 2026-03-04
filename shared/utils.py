from itertools import combinations, product
import numpy as np

def sort_dict(dictionary: dict, reverse: bool = False) -> dict:
    return dict(sorted(dictionary.items(), key=lambda item: item[1], reverse=reverse))

def dict_to_hero_list(pos_dict: dict) -> list:
    return [hero for hero, _ in sort_dict(pos_dict).items()]

def synergy(team: list, pair_synergy: dict) -> float:
    team = np.sort(np.array(team, dtype=np.int16))
    pairs = np.array(list(combinations(team, 2)), dtype=np.int16)
    values = np.fromiter(
        (pair_synergy.get((a, b), 0.5) for a, b in pairs),
        dtype=np.float32,
        count=len(pairs),
    )
    return float(values.mean())

def counter_synergy(radiant: list, dire: list, matchup_synergy: dict) -> float:
    values = np.fromiter(
        (matchup_synergy.get((a, b), 0.0) for a, b in product(radiant, dire)),
        dtype=np.float32,
    )
    return float(values.mean())

_POSITION_WEIGHTS = [0.35, 0.3, 0.2, 0.075, 0.075]

_TIME_BINS = [
    (25, 1),
    (30, 2),
    (32.5, 3),
    (35, 4),
    (37.5, 5),
    (40, 6),
    (50, 7),
]

def _duration_to_category(duration_minutes: float) -> int:
    for threshold, cat in _TIME_BINS:
        if duration_minutes < threshold:
            return cat
    return 8  # >= 50 минут

def time_strength(
        team: list,
        duration: float,
        hero_stats_time: dict,
        duration_ind: int = 0,
) -> float:
    cat = duration_ind if duration > 0 else _duration_to_category(duration)
    values = np.array(
        [
            hero_stats_time.get(a, {}).get(cat, 0.0) * _POSITION_WEIGHTS[k]
            for k, a in enumerate(team)
        ],
        dtype=np.float32,
    )
    return float(values.sum())