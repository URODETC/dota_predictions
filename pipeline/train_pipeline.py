from __future__ import annotations

import argparse
import logging
import os
import sys
from datetime import UTC, datetime
from pathlib import Path

import numpy as np
import pandas as pd
import torch
import xgboost as xgb

log = logging.getLogger(__name__)

def compute_metrics(
        linear_model: torch.nn.Linear,
        xnet,
        X_tensor: torch.Tensor,
        y_tensor: torch.Tensor,
) -> dict[str, float]:
    X_dm = xgb.DMatrix(X_tensor.numpy())

    with torch.no_grad():
        pred_logit = linear_model(X_tensor) * 0.4 + xnet(X_dm) * 0.6
        prob = torch.sigmoid(pred_logit).squeeze().numpy()

    y = y_tensor.squeeze().numpy()

    pred_label = (prob >= 0.5).astype(int)
    accuracy = float((pred_label - y).mean())

    brier = float(((prob - y) ** 2).mean())

    eps = 1e-7
    prob_clip = np.clip(prob, eps, 1 - eps)
    logloss = float(-np.mean(y * np.log(prob_clip) + (1 - y) * np.log(1 - prob_clip)))

    return {
        "accuracy": round(accuracy, 4),
        "brier": round(brier, 4),
        "logloss": round(logloss, 4),
        "n_samples": int(len(y)),
    }

def _gha_notice(title: str, msg: str) -> None:
    print(f"::notice title={title}::{msg}", flush=True)

def _gha_set_output(name: str, value: str) -> None:
    gha_output = os.getenv("GITHUB_OUTPUT")
    if gha_output:
        with open(gha_output, "a") as f:
            f.write(f"{name}={value}\n")
    else:
        print(f"[output] {name}={value}")

def load_training_data(local_dir: str, use_s3: bool) -> tuple[pd.DataFrame, pd.DataFrame]:
    if use_s3:
        try:
            from pipeline.storage import get_storage
            storage = get_storage()
            matches = storage.load_all_raw("matches")
            players = storage.load_all_raw("players")
            if matches is not None and players is not None and len(matches) > 0:
                log.info("S3: %d матчей, %d игроков", len(matches), len(players))
                return players, matches
            log.warning("S3 вернул пустые данные, переходим к локальным")
        except Exception as exc:
            log.warning("S3 недоступен: %s", exc)

    data_path = Path(local_dir)
    pq_matches = sorted(data_path.glob("matches_*.parquet"))
    pq_players = sorted(data_path.glob("players_*.parquet"))

    if pq_matches and pq_players:
        matches = pd.concat([pd.read_parquet(f) for f in pq_matches], ignore_index=True)
        players = pd.concat([pd.read_parquet(f) for f in pq_players], ignore_index=True)
        log.info("Parquet: %d матчей, %d игроков", len(matches), len(players))
        return players, matches

    from training.build_stats import load_raw_data
    return load_raw_data(local_dir)

def run(
        version: str | None = None,
        local_data_dir: str = "data",
        local_model_dir: str = "model",
        use_s3: bool = True,
        promote: bool = False,
        linear_epochs: int = 15,
        xgb_iters: int = 15,
) -> dict[str, float]:
    version = version or datetime.now(UTC).strftime("%Y%m%d_%H%M")
    Path(local_data_dir).mkdir(parents=True, exist_ok=True)

    log.info("=== Train pipeline  version=%s ===", version)
    players, matches = load_training_data(local_data_dir, use_s3)

    import joblib

    from training.build_stats import (
        build_hero_pos_weight,
        build_hero_stats_time,
        build_lane_matchup_stats,
        build_pair_and_matchup_synergy,
        build_pos_stats,
        build_teams,
        fill_missing,
        preprocess,
    )

    log.info("Предобработка...")
    df = preprocess(players, matches)
    log.info("  %d строк после фильтрации", len(df))

    log.info("Построение таблицы команд...")
    teams, teams_expanded = build_teams(df)
    log.info("  %d матчей", len(teams))

    pos_stats, hero_stats, _ = build_pos_stats(teams)
    carry_mu, mid_mu, offl_mu, sup_syn = build_lane_matchup_stats(teams)
    pair_syn, matchup_syn = build_pair_and_matchup_synergy(teams)
    hero_time = build_hero_stats_time(teams)
    hero_pos_w = build_hero_pos_weight(pos_stats, hero_stats)
    fill_missing(carry_mu, mid_mu, offl_mu, sup_syn, matchup_syn, pair_syn, hero_time)

    artifacts = {
        "pair_synergy": pair_syn,
        "matchup_synergy": matchup_syn,
        "carry_matchup": carry_mu,
        "mid_matchup": mid_mu,
        "offlane_matchup": offl_mu,
        "hero_stats_time": hero_time,
        "sup_synergy": sup_syn,
        "hero_pos_prob": hero_pos_w,
    }

    from shared.models import N_FEATURES
    from shared.utils import build_features

    log.info("Построение признаков...")
    X = build_features(
        teams_expanded, pair_syn, matchup_syn,
        carry_mu, mid_mu, offl_mu, sup_syn, hero_time,
    )
    y = teams_expanded[["radiant_win"]]
    assert X.shape[1] == N_FEATURES, f"Ожидалось {N_FEATURES} фич, получено {X.shape[1]}"

    from training.train_model import train_linear, train_xgb

    log.info("Обучение LinearModel (%d эпох)...", linear_epochs)
    linear_model, X_tensor, y_tensor = train_linear(X, y, num_epochs=linear_epochs)

    log.info("Обучение XGBModule (%d итераций)...", xgb_iters)
    xnet = train_xgb(X_tensor, y_tensor, len(X), N_FEATURES, iters=xgb_iters)

    metrics = compute_metrics(linear_model, xnet, X_tensor, y_tensor)
    log.info("Метрики: %s", metrics)

    metrics_str = "  ".join(f"{k}={v}" for k, v in metrics.items())
    _gha_notice("Model Metrics", f"version={version}  {metrics_str}")
    _gha_set_output("model_version", version)
    _gha_set_output("accuracy", str(metrics["accuracy"]))
    _gha_set_output("brier", str(metrics["brier"]))

    torch.save(linear_model.state_dict(), f"{local_model_dir}/linear.pth")
    torch.save(xnet.state_dict(), f"{local_model_dir}/xgb.pth")
    joblib.dump(artifacts, f"{local_model_dir}/artifacts.pkl")
    teams_expanded.to_parquet(f"{local_model_dir}/teams_expanded.parquet", index=False)
    log.info("Локально → %s/", local_model_dir)

    if use_s3:
        try:
            from pipeline.storage import get_storage
            storage = get_storage()
            storage.save_model_version(
                version=version,
                linear_sd=linear_model.state_dict(),
                xgb_sd=xnet.state_dict(),
                artifacts=artifacts,
                metrics=metrics,
            )
            log.info("S3: версия %s сохранена (candidate)", version)

            if promote:
                storage.promote_to_production(version)
                log.info("S3: версия %s → production", version)
                _gha_notice("Deployment", f"version={version} promoted to production")
        except Exception as exc:
            log.error("Ошибка S3: %s", exc)

    return metrics

if __name__ == "__main__":
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)-8s %(name)s  %(message)s",
    )
    parser = argparse.ArgumentParser(description="Dota ML training pipeline")
    parser.add_argument("--version", default=None)
    parser.add_argument("--data-dir", default=os.getenv("LOCAL_DATA_DIR", "data"))
    parser.add_argument("--model-dir", default=os.getenv("LOCAL_MODEL_DIR", "model"))
    parser.add_argument("--no-s3", action="store_true")
    parser.add_argument("--promote", action="store_true",
                        help="Автоматически продвинуть в production после обучения")
    parser.add_argument("--linear-epochs", type=int, default=15)
    parser.add_argument("--xgb-iters", type=int, default=15)
    args = parser.parse_args()

    metrics = run(
        version=args.version,
        local_data_dir=args.data_dir,
        local_model_dir=args.model_dir,
        use_s3=not args.no_s3,
        promote=args.promote,
        linear_epochs=args.linear_epochs,
        xgb_iters=args.xgb_iters,
    )
    print(f"accuracy={metrics['accuracy']}")
    sys.exit(0)