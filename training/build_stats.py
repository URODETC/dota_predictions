from __future__ import annotations

import ast
import os
from itertools import combinations, product
from pathlib import Path

import joblib
import pandas as pd

from shared.utils import _duration_to_category, dict_to_hero_list, sort_dict


def load_raw_data(data_dir: str = "data") -> tuple[pd.DataFrame, pd.DataFrame]:
    data_path = Path(data_dir)

    match_files = sorted(data_path.glob("matches_*.parquet"))
    player_files = sorted(data_path.glob("players_*.parquet"))

    if match_files and player_files:
        matches = pd.concat([pd.read_parquet(f) for f in match_files], ignore_index=True)
        players = pd.concat([pd.read_parquet(f) for f in player_files], ignore_index=True)
        print(f"Загружено: {len(matches)} матчей, {len(players)} записей игроков")
        return players, matches

    csv_players = sorted(data_path.glob("players*.csv"))
    csv_matches = sorted(data_path.glob("*metadata*.csv"))
    if not csv_players or not csv_matches:
        raise FileNotFoundError(f"Нет данных в {data_dir}")

    players = pd.concat([pd.read_csv(f) for f in csv_players], ignore_index=True)
    matches = pd.concat([pd.read_csv(f) for f in csv_matches], ignore_index=True)
    print(f"Загружено CSV: {len(matches)} матчей, {len(players)} записей игроков")
    return players, matches


def preprocess(players: pd.DataFrame, matches: pd.DataFrame) -> pd.DataFrame:
    df = players.merge(matches, on="match_id", how="left", suffixes=("", "_meta"))

    for src, dst in [("duration_meta", "duration"), ("radiant_win_meta", "radiant_win"),
                     ("duration_x", "duration"), ("radiant_win_x", "radiant_win")]:
        if src in df.columns:
            df.rename(columns={src: dst}, inplace=True)

    df["teams"] = (df["isRadiant" == True]).astype(int)
    df["radiant_win"] = df["radiant_win"].astype(int)

    keep = ["match_id", "hero_id", "player_slot", "teams",
            "win", "radiant_win", "duration", "gold_t", "lane_role"]
    df = df[[c for c in keep if c in df.columns]].dropna()

    if df["gold_t"].dtype == object:
        df["gold_t"] = df["gold_t"].apply(
            lambda x: ast.literal_eval(x) if isinstance(x, str) else x
        )
    df["id"] = df[df["gold_t"].apply(len) >= 15].copy()
    df["gold10"] = df["gold_t"].apply(lambda x: x[10])

    df = df.sort_values(["id", "teams", "lane_role", "gold10"])
    df["position"] = (
        df.groupby(["id", "teams"])
        .cumcount()
        .map({0: 1, 1: 2, 2: 3, 3: 4, 4: 5})
    )
    return df.sort_values(["id", "teams", "position"]).reset_index(drop=True)


def build_teams(df: pd.DataFrame) -> tuple[pd.DataFrame, pd.DataFrame]:
    target = df.groupby("id")["radiant_win"].first()
    dur = df.groupby("id")["duration"].first()

    records = []
    for match_id, grp in df.groupby("id"):
        radiant = grp[grp["teams"] == 1].set_index("hero_id")["position"].to_dict()
        dire = grp[grp["teams"] == 0].set_index("hero_id")["position"].to_dict()
        if len(radiant) != 5 or len(dire) != 5:
            continue
        records.append({
            "id": match_id,
            "radiant": sort_dict(radiant),
            "dire": sort_dict(dire),
            "radiant_win": int(target[match_id]),
            "duration": float(dur[match_id]),
        })

    teams = pd.DataFrame(records)

    expanded_rows = []
    for _, row in teams.iterrows():
        r = dict_to_hero_list(row["radiant"])
        d = dict_to_hero_list(row["dire"])
        expanded_rows.append(r + d + [row["radiant_win"], row["duration"] / 60])

    cols = [f"r_{i}" for i in range(1, 6)] + [f"d_{i}" for i in range(1, 6)] \
           + ["radiant_win", "duration"]
    teams_expanded = pd.DataFrame(expanded_rows, columns=cols)
    return teams, teams_expanded


def build_pos_stats(teams: pd.DataFrame, heroesdf: pd.DataFrame | None = None):
    pos_stats: dict = {}

    for _, row in teams.iterrows():
        for team_dict, won in [
            (row["radiant"], row["radiant_win"] == 1),
            (row["dire"], row["radiant_win"] == 0),
        ]:
            for hero, pos in team_dict.items():
                for key in [(hero, pos), (pos, hero)]:
                    pos_stats.setdefault(key, {"matches": 0, "wins": 0})
                    pos_stats[key]["matches"] += 1
                if won:
                    pos_stats[(hero, pos)]["wins"] += 1
                else:
                    pos_stats[(pos, hero)]["wins"] += 1
    if heroesdf is not None:
        for hero in heroesdf["id"]:
            for pos in range(1, 6):
                pos_stats.setdefault((hero, pos), {"matches": 2, "wins": 1})

    hero_stats: dict = {}
    for (hero, _) in list(pos_stats.keys()):
        w = sum(pos_stats.get((hero, p), {"wins": 0})["wins"] for p in range(1, 6))
        m = sum(pos_stats.get((hero, p), {"matches": 0})["matches"] for p in range(1, 6))
        hero_stats[hero] = {"wins": w, "matches": max(m, 1)}

    position_stats = {
        k: v["wins"] / v["matches"] - 0.5
        for k, v in pos_stats.items()
        if v["matches"] > 0
    }
    return pos_stats, hero_stats, position_stats


def build_lane_matchup_stats(teams: pd.DataFrame):
    carry_matchup = {}
    mid_matchup = {}
    offlane_matchup = {}
    sup_synergy = {}

    def _init(d, key):
        d.setdefault(key, {"wins": 1, "matches": 2})

    for _, row in teams.iterrows():
        r = {pos: hero for hero, pos in row["radiant"].items()}
        d = {pos: hero for hero, pos in row["dire"].items()}
        rc, rm, ro, rs4, rs5 = r[1], r[2], r[3], r[4], r[5]
        dc, dm, do, ds4, ds5 = d[1], d[2], d[3], d[4], d[5]
        rw = row["radiant_win"]

        for tbl, rk, dk in [
            (carry_matchup, (rc, dc), (dc, rc)),
            (mid_matchup, (rm, dm), (dm, rm)),
            (offlane_matchup, (ro, do), (do, ro)),
        ]:
            _init(tbl, rk)
            _init(tbl, dk)
            tbl[rk]["matches"] += 1
            tbl[dk]["matches"] += 1

        _init(sup_synergy, (rs4, rs5))
        _init(sup_synergy, (ds4, ds5))
        sup_synergy[(rs4, rs5)]["matches"] += 1
        sup_synergy[(ds4, ds5)]["matches"] += 1

        if rw == 1:
            carry_matchup[(rc, dc)]["wins"] += 1
            mid_matchup[(rm, dm)]["wins"] += 1
            offlane_matchup[(ro, do)]["wins"] += 1
            sup_synergy[(rs4, rs5)]["wins"] += 1
        else:
            carry_matchup[(dc, rc)]["wins"] += 1
            mid_matchup[(dm, rm)]["wins"] += 1
            offlane_matchup[(do, ro)]["wins"] += 1
            sup_synergy[(ds4, ds5)]["wins"] += 1

    def _norm(d):
        return {k: round(v["wins"] / v["matches"] - 0.5, 5) for k, v in d.items()}

    return _norm(carry_matchup), _norm(mid_matchup), _norm(offlane_matchup), _norm(sup_synergy)


def build_pair_and_matchup_synergy(teams: pd.DataFrame):
    pair_stats = {}
    matchup_stats = {}
    hero_stats = {}

    for _, row in teams.iterrows():
        radiant, dire = list(row["radiant"].keys()), list(row["dire"].keys())
        rw = row["radiant_win"]

        for heroes, won in [(radiant, rw == 1), (dire, rw == 0)]:
            for hero in heroes:
                hero_stats.setdefault(hero, {"matches": 0, "wins": 0})
                hero_stats[hero]["matches"] += 1
                if won:
                    hero_stats[hero]["wins"] += 1

        for team, won in [(radiant, rw == 1), (dire, rw == 0)]:
            for a, b in combinations(sorted(team), 2):
                for key in [(a, b), (b, a)]:
                    pair_stats.setdefault(key, {"matches": 0, "wins": 0})
                    pair_stats[key]["matches"] += 1
                if won:
                    pair_stats[(a, b)]["wins"] += 1
                else:
                    pair_stats[(b, a)]["wins"] += 1

        for a, b in product(radiant, dire):
            for key in [(a, b), (b, a)]:
                matchup_stats.setdefault(key, {"matches": 0, "wins": 0})
                matchup_stats[key]["matches"] += 1
            if rw == 1:
                matchup_stats[(a, b)]["wins"] += 1
            else:
                matchup_stats[(b, a)]["wins"] += 1

    pair_synergy = {
        (a, b): s["wins"] / s["matches"] - 0.5
        for (a, b), s in pair_stats.items()
        if s["matches"] > 0 and hero_stats.get(a, {}).get("matches", 0) > 0
    }
    matchup_synergy = {
        (a, b): round(s["wins"] / s["matches"] - 0.5, 4)
        for (a, b), s in matchup_stats.items()
        if s["matches"] > 0 and hero_stats.get(a, {}).get("matches", 0) > 0
    }
    return pair_synergy, matchup_synergy


def build_hero_stats_time(teams: pd.DataFrame) -> dict:
    raw = {}
    hero_totals = {}

    for _, row in teams.iterrows():
        cat = int(_duration_to_category(row["duration"] / 60))
        for heroes, won in [
            (list(row["radiant"].keys()), row["radiant_win"] == 1),
            (list(row["dire"].keys()), row["radiant_win"] == 0),
        ]:
            for hero in heroes:
                raw.setdefault(hero, {i: {"matches": 0, "wins": 0} for i in range(1, 9)})
                raw[hero][cat]["matches"] += 1
                if won:
                    raw[hero][cat]["wins"] += 1

    for hero, times in raw.items():
        tm = sum(s["matches"] for s in times.values())
        tw = sum(s["wins"] for s in times.values())
        hero_totals[hero] = {"matches": tm, "wins": tw}

    result = {}
    for hero, times in raw.items():
        m = hero_totals[hero]["matches"]
        wr = hero_totals[hero]["wins"] / m if m else 0
        result[hero] = {
            cat: (s["wins"] / s["matches"] - wr) if s["matches"] > 0 else 0.0
            for cat, s in times.items()
        }
    return result


def build_hero_pos_weight(pos_stats: dict, hero_stats: dict) -> dict:
    result = {}
    for hero in range(1, 200):
        weights = {}
        total = hero_stats.get(hero, {}).get("matches", 0) or 1
        for pos in range(1, 6):
            s = pos_stats.get((hero, pos), {"matches": 0})
            weights[pos] = s["matches"] / total
        result[hero] = sort_dict(weights, reverse=True)
    return result


def fill_missing(carry_matchup, mid_matchup, offlane_matchup,
                 sup_synergy, matchup_synergy, pair_synergy, hero_stats_time,
                 hero_range: range = (1, 200)):
    for h1 in hero_range:
        for h2 in hero_range:
            carry_matchup.setdefault((h1, h2), 0)
            mid_matchup.setdefault((h1, h2), 0)
            offlane_matchup.setdefault((h1, h2), 0)
            sup_synergy.setdefault((h1, h2), 0)
            matchup_synergy.setdefault((h1, h2), 0)
            pair_synergy.setdefault((h1, h2), 0)
        hero_stats_time.setdefault(h1, {i: 0 for i in range(1, 9)})


def build_train_features(teams_expanded, pair_synergy, matchup_synergy,
                         carry_matchup, mid_matchup, offlane_matchup,
                         sup_synergy, hero_stats_time) -> pd.DataFrame:
    from shared.utils import build_features
    return build_features(teams_expanded, pair_synergy, matchup_synergy,
                          carry_matchup, mid_matchup, offlane_matchup,
                          sup_synergy, hero_stats_time,
                          )


def main(data_dir: str = "data", model_dir: str = "model"):
    os.makedirs(model_dir, exist_ok=True)

    print("Загрузка данных...")
    players, matches = load_raw_data(data_dir)

    heroes_csv = Path(data_dir) / "Constants.Heroes.csv"
    heroesdf = pd.read_csv(heroes_csv) if heroes_csv.exists() else None

    print("Предобработка...")
    df = preprocess(players, matches)
    print(f"  строк: {len(df)}")

    print("Построение таблицы команд...")
    teams, teams_expanded = build_teams(df)
    print(f"  матчей: {len(teams)}")

    print("Статистика позиций...")
    pos_stats, hero_stats, _ = build_pos_stats(teams, heroesdf)

    print("Lane matchup / synergy...")
    carry_matchup, mid_matchup, offlane_matchup, sup_synergy = build_lane_matchup_stats(teams)

    print("Pair / matchup synergy...")
    pair_synergy, matchup_synergy = build_pair_and_matchup_synergy(teams)

    print("Hero stats time...")
    hero_stats_time = build_hero_stats_time(teams)

    print("Hero pos weight...")
    hero_pos_weight = build_hero_pos_weight(pos_stats, hero_stats)

    print("Заполнение пропусков...")
    fill_missing(carry_matchup, mid_matchup, offlane_matchup,
                 sup_synergy, matchup_synergy, pair_synergy, hero_stats_time)

    artifacts = {
        "pair_synergy": pair_synergy,
        "matchup_synergy": matchup_synergy,
        "carry_matchup": carry_matchup,
        "mid_matchup": mid_matchup,
        "offlane_matchup": offlane_matchup,
        "hero_stats_time": hero_stats_time,
        "sup_synergy": sup_synergy,
        "hero_pos_prob": hero_pos_weight,
    }
    joblib.dump(artifacts, f"{model_dir}/artifacts.pkl")
    teams_expanded.to_parquet(f"{model_dir}/teams_expanded.parquet", index=False)
    teams.to_parquet(f"{model_dir}/teams.parquet", index=False)
    print(f"Артефакты → {model_dir}/l")

    return teams, teams_expanded, artifacts


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--data_dir", default="data")
    parser.add_argument("--model_dir", default="model")
    args = parser.parse_args()
    main(data_dir=args.data_dir, model_dir=args.model_dir)
