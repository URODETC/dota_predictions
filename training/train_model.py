from __future__ import annotations

import os

import joblib
import numpy as np
import pandas as pd
from catboost import CatBoostClassifier

from shared.models import N_FEATURES
from shared.utils import build_features


def train_catboost(
        X: pd.DataFrame,
        y: pd.DataFrame,
        iterations: int = 500,
        learning_rate: float = 0.05,
        depth: int = 6,
        verbose: int = 50,
) -> CatBoostClassifier:
    assert X.shape[1] == N_FEATURES, f"Ожидалось {N_FEATURES} фич, получено {X.shape[1]}"

    y_arr = y.values.ravel() if hasattr(y, "values") else np.asarray(y).ravel()

    model = CatBoostClassifier(
        iterations=iterations,
        learning_rate=learning_rate,
        depth=depth,
        loss_function="Logloss",
        eval_metric="Accuracy",
        random_seed=42,
        verbose=True,
        metric_period=verbose,
        thread_count=-1
    )
    model.fit(X, y_arr)
    return model


def evaluate(model: CatBoostClassifier, X: pd.DataFrame, y: pd.Series | pd.DataFrame) -> dict:
    y_arr = y.values.ravel() if hasattr(y, "values") else np.asarray(y).ravel()
    probs = model.predict(X, prediction_type="Probability")[:, 1]
    pred_label = (probs >= 0.5).astype(int)

    accuracy = float((pred_label == y_arr).mean())
    brier = float(((probs - y_arr) ** 2).mean())
    eps = 1e-7
    prob_clip = np.clip(probs, eps, 1 - eps)
    logloss = float(-np.mean(y_arr * np.log(prob_clip) + (1 - y_arr) * np.log(1 - prob_clip)))

    return {
        "accuracy": round(accuracy, 4),
        "brier":    round(brier, 4),
        "logloss":  round(logloss, 4),
        "n_samples": int(len(y_arr)),
    }


def main(model_dir: str = "model",
         iterations: int = 500,
         learning_rate: float = 0.05,
         depth: int = 6,
) -> CatBoostClassifier:
    os.makedirs(model_dir, exist_ok=True)

    artifacts_path = f"{model_dir}/artifacts.pkl"
    te_path = f"{model_dir}/team_expanded.parquet"

    if not (os.path.exists(artifacts_path) and os.path.exists(te_path)):
        raise FileNotFoundError(f"Файлы не найдены в {model_dir}")

    print("Загружаем артефакты и данные...")
    artifacts = joblib.load(artifacts_path)
    teams_expanded = pd.read_parquet(te_path)

    print("\nПостроение признаков...")
    X = build_features(
        teams_expanded,
        artifacts["pair_synergy"],
        artifacts["matchup_synergy"],
        artifacts["carry_matchup"],
        artifacts["mid_matchup"],
        artifacts["offlane_matchup"],
        artifacts["sup_synergy"],
        artifacts["hero_stats_time"],
    )
    y = teams_expanded["radiant_win"]

    print(f"Признаки: {X.shape}, колонки: {list(X.columns)}")
    print(f"\nОбучение CatBoost ({iterations} итераций)...")
    model = train_catboost(X, y, iterations=iterations, learning_rate=learning_rate, depth=depth)

    metrics = evaluate(model, X, y)
    print(f"\nМетрики: {metrics}")

    model.save_model(f"{model_dir}/catboost.cbm")
    print(f"Сохранено → {model_dir}/catboost.cbm")

    return model


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--model_dir", type=str, default="model")
    parser.add_argument("--iterations", type=int, default=10)
    parser.add_argument("--learning-rate", type=float, default=0.05)
    parser.add_argument("--depth", type=int, default=6)
    args = parser.parse_args()
    main(
        model_dir=args.model_dir,
        iterations=args.iterations,
        learning_rate=args.learning_rate,
        depth=args.depth,
    )