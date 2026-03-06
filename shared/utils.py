from itertools import combinations, product
import numpy as np
import pandas as pd


_POSITION_WEIGHTS = np.array([0.35, 0.3, 0.2, 0.075, 0.075], dtype=np.float32)

_TIME_EDGES = np.array([25, 30, 32.5, 35, 37.5, 40, 40], dtype=np.float32)

def duration_to_category(duration_minutes: float | np.ndarray) -> np.signedinteger:
    return np.searchsorted(_TIME_EDGES, duration_minutes, side="right") + 1

def sort_dict(dictionary: dict, reverse: bool = False) -> dict:
    return dict(sorted(dictionary.items(), key=lambda item: item[1], reverse=reverse))

def dict_to_hero_list(pos_dict: dict) -> list:
    return [hero for hero, _ in sort_dict(pos_dict).items()]

def synergy(team: list, pair_synergy: dict) -> float:
    team = np.sort(np.array(team, dtype=np.int16))
    values = np.fromiter(
        (pair_synergy.get((a, b), 0.5) for a, b in combinations(team, 2)),
        dtype=np.float32,
        count=len(team) * (len(team) - 1) // 2,
    )
    return float(values.mean())

def counter_synergy(radiant: list, dire: list, matchup_synergy: dict) -> float:
    values = np.fromiter(
        (matchup_synergy.get((a, b), 0.0) for a, b in product(radiant, dire)),
        dtype=np.float32,
        count=len(radiant) * len(dire),
    )
    return float(values.mean())



def time_strength(
        team: list[int],
        duration: float,
        hero_stats_time: dict,
        duration_ind: int = 0,
) -> float:
    cat = int(duration_ind) if duration_ind > 0 else int(duration_to_category(duration))
    values = np.array(
        [
            hero_stats_time.get(a, {}).get(cat, 0.0) * _POSITION_WEIGHTS[k]
            for k, a in enumerate(team)
        ],
        dtype=np.float32,
    )
    return float(values.sum())

def build_features(
        teams_expanded: pd.DataFrame,
        pair_synergy: dict,
        matchup_synergy: dict,
        carry_matchup: dict,
        mid_matchup: dict,
        offlane_matchup: dict,
        sup_synergy: dict,
        hero_stats_time: dict,
) -> pd.DataFrame:
    te = teams_expanded
    r_cols = ["r_1", "r_2", "r_3", "r_4", "r_5"]
    d_cols = ["d_1", "d_2", "d_3", "d_4", "d_5"]

    n = len(te)

    R = te[r_cols].values.astype(int)
    D = te[d_cols].values.astype(int)
    dur = te["duration"].values

    cats = duration_to_category(dur).astype(int)

    def _synergy_row(heroes: np.ndarray, psyn: dict) -> np.ndarray:
        out = np.empty(n, dtype=np.float32)
        for i, row in enumerate(heroes):
            pairs = list(combinations(row, 2))
            values = [psyn.get(p, 0.5) for p in pairs]
            out[i] = np.mean(values)
        return out

    def _lookup1(h1: np.ndarray, h2: np.ndarray, tbl: dict) -> np.ndarray:
        return np.array([tbl.get((a, b), 0.0) for a, b in zip(h1, h2)], dtype=np.float32)

    def _time_col(heroes: np.ndarray, cats_: np.ndarray, hst: dict) -> np.ndarray:
        out = np.empty(n, dtype=np.float32)
        for i, (row, cat) in enumerate(zip(heroes, cats_)):
            vals = np.array(
                [hst.get(h, {}).get(cat, 0.0) * _POSITION_WEIGHTS[k]
                 for k, h in enumerate(row)],
                dtype=np.float32,
            )
            out[i] = vals.sum()
        return out

    def _csyn_col(R_: np.ndarray, D_: np.ndarray, msy: dict) -> np.ndarray:
        out = np.empty(n, dtype=np.float32)
        for i in range(n):
            vals = [msy.get((a, b), 0.0) for a, b in product(R_[i], D_[i])]
            out[i] = np.mean(vals)
        return out

    r_syn = _synergy_row(R, pair_synergy)
    d_syn = _synergy_row(D, pair_synergy)

    r_time = _time_col(R, cats, hero_stats_time)
    d_time = _time_col(D, cats, hero_stats_time)

    c_matchup = _lookup1(R[:, 0], D[:, 0], carry_matchup)
    m_matchup = _lookup1(R[:, 1], D[:, 1], mid_matchup)
    o_matchup = _lookup1(R[:, 2], D[:, 2], offlane_matchup)
    r_sup = _lookup1(R[:, 3], R[:, 4], sup_synergy)
    d_sup = _lookup1(D[:, 3], D[:, 4], sup_synergy)

    csyn = _csyn_col(R, D, matchup_synergy)

    train = pd.DataFrame({
        "synergy": r_syn - d_syn,
        "carry_matchup": c_matchup,
        "mid_matchup": m_matchup,
        "offlane_matchup": o_matchup,
        "sup_synergy": r_sup - d_sup,
        "r_time": r_time - d_time,
        "csynergy": csyn,
        "r_syn_raw": r_syn,
        "d_syn_raw": d_syn,
    })
    return train