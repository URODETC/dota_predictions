from __future__ import annotations

import argparse
import json
import logging
import os
import time
from datetime import datetime, timezone, timedelta
from pathlib import Path

import pandas as pd
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

log = logging.getLogger(__name__)

DOTA2_LEAGUES_URL = "https://www.dota2.com/webapi/IDOTA2League/GetLeagueInfoList/v001"
OPENDOTA_BASE     = "https://api.opendota.com/api"

MIN_PRIZE_POOL = 100_000
MIN_TIER = 2

RATE_DELAY     = 1.2
MAX_RETRIES    = 5

_SEEN_IDS_KEY = "raw/seen_match_ids.json"

_SEEN_IDS_LOCAL = "data/seen_match_ids.json"

_MATCH_FIELDS = frozenset([
    "match_id", "radiant_win", "duration", "game_mode", "start_time",
    "league_id", "series_id", "radiant_team_id", "dire_team_id",
])

_PLAYER_FIELDS = frozenset([
    "match_id", "hero_id", "player_slot", "isRadiant",
    "lane_role", "lh_t", "gold_t",
])

def _create_opendota_session() -> requests.Session:
    session = requests.Session()
    retry = Retry(
        total=MAX_RETRIES,
        backoff_max=2.0,
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=["GET"],
    )
    session.mount("https://", HTTPAdapter(max_retries=retry))
    return session

def _create_dota2_session() -> requests.Session:
    session = requests.Session()
    retry = Retry(
        total=3,
        backoff_max=1.0,
        status_forcelist=[500, 502, 503, 504],
        allowed_methods=["GET"],
    )
    session.mount("https://", HTTPAdapter(max_retries=retry))
    return session


_opendota_session: requests.Session | None = None
_dota2_session: requests.Session | None = None

def _opendota_get(endpoint: str, params: dict | None = None) -> list | dict:
    global _opendota_session
    if _opendota_session is None:
        _opendota_session = _create_opendota_session()

    url = f"{OPENDOTA_BASE}{endpoint}"
    for attempt in range(MAX_RETRIES):
        time.sleep(RATE_DELAY)
        try:
            resp = _opendota_session.get(url, params=params, timeout=30)
        except requests.RequestException as e:
            log.warning("OpenDota GET %s attempt %d failed: %s", url, attempt + 1, e)
            time.sleep(2 ** attempt)
            continue

        if resp.status_code == 429:
            wait = int(resp.headers.get("Retry-After", 60))
            log.warning("OpenDota Rate-limited. Ждём %d сек", wait)
            time.sleep(wait)
            continue

        resp.raise_for_status()
        return resp.json()

    raise RuntimeError(f"OpenDota: Не удалось получить {url} после {MAX_RETRIES} попыток")


def load_seen_ids(storage = None, local_path: str = _SEEN_IDS_LOCAL) -> set[int]:
    if storage is not None:
        try:
            ids = set(storage._get_json(_SEEN_IDS_KEY))
            log.info("seen_match_ids: загружено %d из S3", len(ids))
            return ids
        except Exception:
            log.debug("seen_match_ids не найден в S3, проверяем локально")

    p = Path(local_path)
    if p.exists():
        try:
            ids = set(json.loads(p.read_text()))
            log.info("seen_match_ids: загружено %d из %s", len(ids), local_path)
            return ids
        except Exception as e:
            log.warning("Ошибка чтения %s: %s", local_path, e)

    log.info("seen_match_ids: файл не найден, начинаем с нуля")
    return set()

def save_seen_ids(
        ids: set[int],
        storage = None,
        local_path: str = _SEEN_IDS_LOCAL,
) -> None:
    if storage is not None:
        try:
            storage._put_json(_SEEN_IDS_KEY, sorted(ids))
            log.info("seen_match_ids: сохранено %d → S3", len(ids))
        except Exception as e:
            log.error("Ошибка сохранения seen_match_ids на S3: %s", e)

    Path(local_path).parent.mkdir(parents=True, exist_ok=True)
    Path(local_path).write_text(json.dumps(sorted(ids)))
    log.debug("seen_match_ids: сохранено %d → %s", len(ids), local_path)

def fetch_dota2_leagues() -> list[dict]:
    global _dota2_session
    if _dota2_session is None:
        _dota2_session = _create_dota2_session()

    resp = _dota2_session.get(DOTA2_LEAGUES_URL, timeout=30)
    resp.raise_for_status()
    leagues: list[dict] = resp.json().get("infos", [])
    log.info("Dota 2 API: получено %d лиг", len(leagues))
    return leagues

def filter_tier1_leagues(leagues: list[dict]) -> list[dict]:
    result = [
        lg for lg in leagues
        if (lg.get("tier") or 0) >= MIN_TIER
        and (lg.get("total_prize_pool") or 0) >= MIN_PRIZE_POOL
    ]
    result.sort(key=lambda x: x.get("most_recent_activity", 0), reverse=True)
    log.info(
        "Tier-1 лиг после фильтрации (tier>=%d, prize>=%d): %d",
        MIN_TIER, MIN_PRIZE_POOL, len(result),
    )
    return result

def fetch_tier1_league_ids() -> set[int]:
    leagues = fetch_dota2_leagues()
    tier1   = filter_tier1_leagues(leagues)
    return {lg["league_id"] for lg in tier1}

def fetch_league_matches_ids(league_id: int, since_ts: int) -> list[int]:
    try:
        matches: list = _opendota_get(f"/leagues/{league_id}/matches")
    except Exception as e:
        log.warning("OpenDota лига %d: %s", league_id, e)
        return []

    return [
        m["match_id"]
        for m in matches
        if isinstance(m, dict)
        and m.get("match_id")
        and (m.get("start_time") or 0) >= since_ts
    ]

def fetch_match_detail(match_id: int) -> tuple[dict | None, list[dict]]:
    try:
        data: dict = _opendota_get(f"/matches/{match_id}")
    except Exception as e:
        log.warning("OpenDota match %d: %s", match_id, e)
        return None, []
    meta = {k: data.get(k) for k in _MATCH_FIELDS}

    players = []
    for p in data.get("players", []):
        row = {k: p.get(k) for k in _PLAYER_FIELDS}
        row["match_id"] = match_id
        players.append(row)
    return meta, players

def fetch_and_save(
        days_back: int = 90,
        dry_run: bool = False,
        count_new: bool = False,
        save_local: bool = True,
        save_s3: bool = True,
        local_dir: str = "data",
) -> tuple[pd.DataFrame, pd.DataFrame]:
    since_ts = 0
    if days_back is not None:
        since_ts = int((datetime.now(timezone.utc) - timedelta(days=days_back)).timestamp())
        log.info("Ограничение по времени: последние %d дней", days_back)

    storage = None
    if save_s3:
        try:
            from pipeline.storage import get_storage
            storage = get_storage()
        except Exception as e:
            log.warning("S3 недоступен, работаем только локально: %s", e)

    seen_ids = load_seen_ids(storage=storage)

    league_ids = fetch_tier1_league_ids()
    log.info("Tier-1 лиг: %d", len(league_ids))

    all_match_ids: set[int] = set()
    for lid in sorted(league_ids):
        ids = fetch_league_matches_ids(lid, since_ts=since_ts)
        all_match_ids.update(ids)
        if ids:
            log.debug("Лига %d: %d матчей", lid, len(ids))

    new_match_ids = all_match_ids - seen_ids
    log.info(
        "Всего match_id: %d | уже загружено: %d | новых: %d",
        len(all_match_ids),
        len(all_match_ids) - len(new_match_ids),
        len(new_match_ids),
    )

    if count_new:
        print(len(new_match_ids))
        return pd.DataFrame(), pd.DataFrame()

    if dry_run:
        log.info("[dry-run] пропускаем скачивание деталей.")

    if not new_match_ids:
        log.info("Нет матчей для загрузки")
        return pd.DataFrame(), pd.DataFrame()

    meta_rows: list[dict] = []
    player_rows: list[dict] = []
    successfully_fetched: set[int] = set()
    total = len(new_match_ids)

    for i, mid in enumerate(sorted(new_match_ids), 1):
        meta, players = fetch_match_detail(mid)
        if meta:
            meta_rows.append(meta)
            player_rows.extend(players)
            successfully_fetched.add(mid)
        if i % 50 == 0:
            log.info("  %d / %d матчей обработано", i, total)

    if not meta_rows:
        log.warning("Не получено ни одного нового матча.")
        return pd.DataFrame(), pd.DataFrame()

    matches_df = pd.DataFrame(meta_rows)
    players_df = pd.DataFrame(player_rows)
    log.info(
        "Загружено: %d матчей, %d записей игроков",
        len(matches_df), len(players_df),
    )

    date_tag = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")

    if save_local:
        Path(local_dir).mkdir(parents=True, exist_ok=True)
        matches_df.to_parquet(f"{local_dir}/matches_{date_tag}.parquet", index=False)
        players_df.to_parquet(f"{local_dir}/players_{date_tag}.parquet", index=False)
        log.info("Локально → %s/", local_dir)

    if storage is not None:
        try:
            storage.save_raw_matches(matches_df, date_tag)
            storage.save_raw_players(players_df, date_tag)
        except Exception as e:
            log.error("Ошибка сохранения данных на S3: %s", e)

    updated_seen = seen_ids | successfully_fetched
    save_seen_ids(updated_seen, storage=storage)

    return matches_df, players_df


if __name__ == "__main__":
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)-8s %(message)s",
    )
    parser = argparse.ArgumentParser(description="Fetch Tier-1 Dota 2 matches")
    parser.add_argument(
        "--days", type=int, default=None,
        help="Ограничить по start_time (дней назад). "
             "По умолчанию без ограничения — дедупликация через seen_ids.",
    )
    parser.add_argument("--dry-run",   action="store_true", help="Не скачивать детали")
    parser.add_argument("--count-new", action="store_true", help="Вывести число новых матчей и выйти")
    parser.add_argument("--no-s3",     action="store_true")
    parser.add_argument("--no-local",  action="store_true")
    parser.add_argument("--local-dir", default=os.getenv("LOCAL_DATA_DIR", "data"))
    parser.add_argument("--min-prize", type=int, default=None)
    parser.add_argument("--min-tier",  type=int, default=None)
    args = parser.parse_args()

    if args.min_prize is not None:
        MIN_PRIZE_POOL = args.min_prize
    if args.min_tier is not None:
        MIN_TIER = args.min_tier

    fetch_and_save(
        days_back=args.days,
        dry_run=args.dry_run,
        count_new=args.count_new,
        save_local=not args.no_local,
        save_s3=not args.no_s3,
        local_dir=args.local_dir,
    )




