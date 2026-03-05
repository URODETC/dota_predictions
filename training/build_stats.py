from itertools import combinations, product

import joblib
import pandas as pd
import numpy as np
import ast

from shared import sort_dict, dict_to_hero_list


def load_raw_data(data_dpr: str = "data"):
    ...
    players = pd.concat([])
    matches = pd.concat([])
    return players, matches

def preprocess(players: pd.DataFrame, matches: pd.DataFrame) -> pd.DataFrame:
    df = players.merge(matches, on="match_id", how="left")
    df.rename(columns={"duration_x":"duration", "radiant_win_x":"radiant_win"}, inplace=True)

    df["isRadiant"] = np.where(df["isRadiant"] == True, 1, 0).astype(int)
    df.rename(columns={"isRadiant": "teams"}, inplace=True)
    df["radiant_win"] = np.where(df["radiant_win"] == True, 1, 0).astype(int)

    df = df[["match_id", "hero_id", "player_slot", "teams",
             "win", "radiant_win", "duration", "gold_t", "lane_role"]].dropna()
    df["gold_t"] = df["gold_t"].apply(ast.literal_eval)
    df = df[df["gold_t"].apply(len) >= 15]
    df["id"] = df.groupby("match_id").ngroup()
    df["gold10"] = df["gold_t"].apply(lambda x: x[10])

    df["_grp"] = df.index // 5
    df["position"] = (
        df.sort_values(["_grp", "lane_role", "gold10"])
        .groupby("_grp")
        .cumcount()
        .map(dict(enumerate(np.array([5, 1, 2, 4, 3]))))
    )
    df = df.sort_index().drop(columns=["_grp"])
    return df

def build_teams(df: pd.DataFrame):
    teams_expanded = (
        df.assign(player_slot=df["player_slot"] +
                  (df.groupby(["id", "player_slot"]).cumcount() + 1))
          .pivot_table(index="id", columns="player_slot", values="hero_id")
    )
    teams_expanded.columns = range(teams_expanded.shape[1])
    teams_expanded.columns = ["r_1","r_2","r_3","r_4","r_5","d_1","d_2","d_3","d_4","d_5"]
    teams_expanded = teams_expanded.merge(
        df[["id","duration"]].drop_duplicates(subset=["id"]), on="id", how="left"
    )
    target = df.groupby("id").min()[["radiant_win"]]

    teams_data = []
    for index, row in teams_expanded.iterrows():
        match_df       = df[df["id"] == index]
        hero_pos_match = dict(zip(match_df["hero_id"], match_df["position"]))
        r_heroes = row[["r_1","r_2","r_3","r_4","r_5"]].astype(int)
        r_dict   = sort_dict({h: hero_pos_match[h] for h in r_heroes})
        d_heroes = row[["d_1","d_2","d_3","d_4","d_5"]].astype(int)
        d_dict   = sort_dict({h: hero_pos_match[h] for h in d_heroes})
        teams_data.append([r_dict, d_dict, target.loc[index, "radiant_win"], row["duration"]])

    teams = pd.DataFrame(teams_data, columns=["radiant","dire","radiant_win","duration"])

    expanded_rows = []
    for _, row in teams.iterrows():
        r = dict_to_hero_list(row["radiant"])
        d = dict_to_hero_list(row["dire"])
        expanded_rows.append(r + d + [row["radiant_win"], row["duration"] / 60])
    cols = ([f"r_{i}" for i in range(1, 6)] + [f"d_{i}" for i in range(1, 6)]
            + ["radiant_win", "duration"])
    teams_expanded_final = pd.DataFrame(expanded_rows, columns=cols)

    return teams, teams_expanded_final

def build_pos_stats(teams: pd.DataFrame, heroesdf: pd.DataFrame):
    pos_stats = {}

    for _, row in teams.iterrows():
        for team_dict, team_won in [
            (row["radiant"], row["radiant_win"] == 1),
            (row["dire"],    row["radiant_win"] == 0),
        ]:
            for hero, pos in team_dict.items():
                pos_stats.setdefault((hero, pos), {"matches": 0, "wins": 0})
                pos_stats.setdefault((pos, hero), {"matches": 0, "wins": 0})
                pos_stats[(hero, pos)]["matches"] += 1
                pos_stats[(pos, hero)]["matches"] += 1
                if team_won:
                    pos_stats[(hero, pos)]["wins"] += 1
                else:
                    pos_stats[(pos, hero)]["wins"] += 1

    for hero in heroesdf["id"]:
        for pos in range(1, 6):
            pos_stats.setdefault((hero, pos), {"matches": 2, "wins": 1})

    hero_stats = {}
    for (hero, _) in list(pos_stats.keys()):
        w = sum(pos_stats.get((hero, p), {"wins": 0})["wins"]    for p in range(1, 6))
        m = sum(pos_stats.get((hero, p), {"matches": 0})["matches"] for p in range(1, 6))
        hero_stats[hero] = {"wins": w, "matches": m}

    position_stats = {
        (h, p): pos_stats[(h, p)]["wins"] / pos_stats[(h, p)]["matches"] - 0.5
        for (h, p) in pos_stats
    }
    return pos_stats, hero_stats, position_stats

def build_lane_matchup_stats(teams: pd.DataFrame):
    carry_matchup   = {}
    mid_matchup     = {}
    offlane_matchup = {}
    sup_synergy     = {}

    def _init(d, key):
        d.setdefault(key, {"wins": 1, "matches": 2})

    for _, row in teams.iterrows():
        r = {pos: hero for hero, pos in row["radiant"].items()}
        d = {pos: hero for hero, pos in row["dire"].items()}
        rc,rm,ro,rs4,rs5 = r[1],r[2],r[3],r[4],r[5]
        dc,dm,do,ds4,ds5 = d[1],d[2],d[3],d[4],d[5]
        rw = row["radiant_win"]

        for tbl, rk, dk in [
            (carry_matchup,   (rc,dc), (dc,rc)),
            (mid_matchup,     (rm,dm), (dm,rm)),
            (offlane_matchup, (ro,do), (do,ro)),
        ]:
            _init(tbl, rk); _init(tbl, dk)
            tbl[rk]["matches"] += 1
            tbl[dk]["matches"] += 1
        _init(sup_synergy,(rs4,rs5)); _init(sup_synergy,(ds4,ds5))
        sup_synergy[(rs4,rs5)]["matches"] += 1
        sup_synergy[(ds4,ds5)]["matches"] += 1

        if rw == 1:
            carry_matchup[(rc,dc)]["wins"]   += 1
            mid_matchup[(rm,dm)]["wins"]     += 1
            offlane_matchup[(ro,do)]["wins"] += 1
            sup_synergy[(rs4,rs5)]["wins"]   += 1
        else:
            carry_matchup[(dc,rc)]["wins"]   += 1
            mid_matchup[(dm,rm)]["wins"]     += 1
            offlane_matchup[(do,ro)]["wins"] += 1
            sup_synergy[(ds4,ds5)]["wins"]   += 1

    def _norm(d):
        return {k: round(v["wins"]/v["matches"]-0.5, 5) for k,v in d.items()}

    return _norm(carry_matchup), _norm(mid_matchup), _norm(offlane_matchup), _norm(sup_synergy)


def build_pair_and_matchup_synergy(teams: pd.DataFrame):
    pair_stats    = {}
    matchup_stats = {}
    hero_stats    = {}

    for _, row in teams.iterrows():
        radiant, dire = list(row["radiant"].keys()), list(row["dire"].keys())
        rw = row["radiant_win"]

        for heroes, won in [(radiant, rw==1), (dire, rw==0)]:
            for hero in heroes:
                hero_stats.setdefault(hero, {"matches":0,"wins":0})
                hero_stats[hero]["matches"] += 1
                if won: hero_stats[hero]["wins"] += 1

        for team, won in [(radiant, rw==1), (dire, rw==0)]:
            for a, b in combinations(sorted(team), 2):
                pair_stats.setdefault((a,b),{"matches":0,"wins":0})
                pair_stats.setdefault((b,a),{"matches":0,"wins":0})
                pair_stats[(a,b)]["matches"] += 1
                pair_stats[(b,a)]["matches"] += 1
                if won: pair_stats[(a,b)]["wins"] += 1
                else:   pair_stats[(b,a)]["wins"] += 1

        for a, b in product(radiant, dire):
            matchup_stats.setdefault((a,b),{"matches":0,"wins":0})
            matchup_stats.setdefault((b,a),{"matches":0,"wins":0})
            matchup_stats[(a,b)]["matches"] += 1
            matchup_stats[(b,a)]["matches"] += 1
            if rw==1: matchup_stats[(a,b)]["wins"] += 1
            else:     matchup_stats[(b,a)]["wins"] += 1

    pair_synergy = {
        (a,b): s["wins"]/s["matches"]-0.5
        for (a,b),s in pair_stats.items()
        if s["matches"]>0 and hero_stats.get(a,{}).get("matches",0)>0
    }
    matchup_synergy = {
        (a,b): round(s["wins"]/s["matches"]-0.5, 4)
        for (a,b),s in matchup_stats.items()
        if s["matches"]>0 and hero_stats.get(a,{}).get("matches",0)>0
    }
    return pair_synergy, matchup_synergy

def build_hero_stats_time(teams: pd.DataFrame) -> dict:
    raw = {}
    hero_totals = {}

    for _, row in teams.iterrows():
        radiant = list(row["radiant"].keys())
        dire    = list(row["dire"].keys())
        rw  = row["radiant_win"]
        gm  = row["duration"] / 60

        if   gm < 25:   cat = 1
        elif gm < 30:   cat = 2
        elif gm < 32.5: cat = 3
        elif gm < 35:   cat = 4
        elif gm < 37.5: cat = 5
        elif gm < 40:   cat = 6
        elif gm < 50:   cat = 7
        else:           cat = 8

        for heroes, won in [(radiant, rw==1), (dire, rw==0)]:
            for hero in heroes:
                raw.setdefault(hero, {i:{"matches":0,"wins":0} for i in range(1,9)})
                raw[hero][cat]["matches"] += 1
                if won: raw[hero][cat]["wins"] += 1

    for hero, times in raw.items():
        tm = sum(s["matches"] for s in times.values())
        tw = sum(s["wins"]    for s in times.values())
        hero_totals[hero] = {"matches": tm, "wins": tw}

    hero_stats_time = {}
    for hero, times in raw.items():
        m = hero_totals[hero]["matches"]
        wr = hero_totals[hero]["wins"] / m if m else 0
        hero_stats_time[hero] = {
            cat: (s["wins"]/s["matches"] - wr) if s["matches"] > 0 else 0.0
            for cat, s in times.items()
        }
    return hero_stats_time

def build_hero_pos_weight(pos_stats: dict, hero_stats: dict) -> dict:
    hero_pos_weight = {}
    for hero in range(1, 200):
        hero_pos_weight[hero] = {}
        for pos in range(1, 6):
            if (hero, pos) not in pos_stats or hero_stats.get(hero, {}).get("matches", 0) == 0:
                hero_pos_weight[hero][pos] = 0
            else:
                hero_pos_weight[hero][pos] = (
                    pos_stats[(hero, pos)]["matches"] / hero_stats[hero]["matches"]
                )
        hero_pos_weight[hero] = sort_dict(hero_pos_weight[hero], reverse=True)
    return hero_pos_weight


def fill_missing(carry_matchup, mid_matchup, offlane_matchup,
                 sup_synergy, matchup_synergy, pair_synergy, hero_stats_time):
    for h1 in range(1, 200):
        for h2 in range(1, 200):
            carry_matchup.setdefault((h1,h2), 0)
            mid_matchup.setdefault((h1,h2), 0)
            offlane_matchup.setdefault((h1,h2), 0)
            sup_synergy.setdefault((h1,h2), 0)
            matchup_synergy.setdefault((h1,h2), 0)
            pair_synergy.setdefault((h1,h2), 0)
        hero_stats_time.setdefault(h1, {i: 0 for i in range(1, 9)})

def build_train_features(teams_expanded, pair_synergy, matchup_synergy,
                         carry_matchup, mid_matchup, offlane_matchup,
                         sup_synergy, hero_stats_time) -> pd.DataFrame:
    from shared.utils import synergy, counter_synergy, time_strength

    train = pd.DataFrame()
    train["synergy"] = teams_expanded.apply(
        lambda x: synergy(x[["r_1","r_2","r_3","r_4","r_5"]].dropna().tolist(), pair_synergy)
                - synergy(x[["d_1","d_2","d_3","d_4","d_5"]].dropna().tolist(), pair_synergy),
        axis=1,
    )
    train["carry_matchup"]   = teams_expanded.apply(lambda x: carry_matchup.get((x["r_1"],x["d_1"]),0.0), axis=1)
    train["mid_matchup"]     = teams_expanded.apply(lambda x: mid_matchup.get((x["r_2"],x["d_2"]),0.0), axis=1)
    train["offlane_matchup"] = teams_expanded.apply(lambda x: offlane_matchup.get((x["r_3"],x["d_3"]),0.0), axis=1)
    train["sup_synergy"]     = teams_expanded.apply(
        lambda x: sup_synergy.get((x["r_4"],x["r_5"]),0.0) - sup_synergy.get((x["d_4"],x["d_5"]),0.0),
        axis=1,
    )
    train["r_time"] = teams_expanded.apply(
        lambda x: time_strength(x[["r_1","r_2","r_3","r_4","r_5"]].dropna().tolist(), x["duration"], hero_stats_time)
                - time_strength(x[["d_1","d_2","d_3","d_4","d_5"]].dropna().tolist(), x["duration"], hero_stats_time),
        axis=1,
    )
    train["csynergy"] = teams_expanded.apply(
        lambda row: counter_synergy(
            row[["r_1","r_2","r_3","r_4","r_5"]].dropna().tolist(),
            row[["d_1","d_2","d_3","d_4","d_5"]].dropna().tolist(),
            matchup_synergy,
        ),
        axis=1,
    )
    return train

def main(data_dir: str = "data", model_dir: str = "model"):
    import os; os.makedirs(model_dir, exist_ok=True)

    print("Загрузка данных...")
    players, matches = load_raw_data(data_dir)
    heroesdf = pd.read_csv(f"{data_dir}/Constants.Heroes.csv")

    print("Предобработка...")
    df = preprocess(players, matches)

    print("Построение таблицы команд...")
    teams, teams_expanded = build_teams(df)

    print("Построение статистики позиций...")
    pos_stats, hero_stats, _ = build_pos_stats(teams, heroesdf)

    print("Построение matchup/synergy словарей...")
    carry_matchup, mid_matchup, offlane_matchup, sup_synergy = build_lane_matchup_stats(teams)
    pair_synergy, matchup_synergy = build_pair_and_matchup_synergy(teams)
    hero_stats_time = build_hero_stats_time(teams)
    hero_pos_weight = build_hero_pos_weight(pos_stats, hero_stats)

    print("Заполнение пропусков...")
    fill_missing(carry_matchup, mid_matchup, offlane_matchup,
                 sup_synergy, matchup_synergy, pair_synergy, hero_stats_time)

    artifacts = {
        "pair_synergy":    pair_synergy,
        "matchup_synergy": matchup_synergy,
        "carry_matchup":   carry_matchup,
        "mid_matchup":     mid_matchup,
        "offlane_matchup": offlane_matchup,
        "hero_stats_time": hero_stats_time,
        "sup_synergy":     sup_synergy,
        "hero_pos_prob":   hero_pos_weight,
    }
    joblib.dump(artifacts, f"{model_dir}/artifacts.pkl")
    print(f"Артефакты → {model_dir}/artifacts.pkl")

    teams_expanded.to_parquet(f"{model_dir}/teams_expanded.parquet", index=False)
    teams.to_parquet(f"{model_dir}/teams.parquet", index=False)
    print("teams_expanded и teams → parquet")

    return teams, teams_expanded, artifacts


if __name__ == "__main__":
    main()