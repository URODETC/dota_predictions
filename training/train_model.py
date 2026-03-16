from __future__ import annotations

import os

import joblib
import pandas as pd
import torch
import xgboost as xgb
from gbnet import xgbmodule
from torch.utils.data import DataLoader, Dataset

from shared.models import N_FEATURES
from shared.utils import build_features


class ForecastDataset(Dataset):
    def __init__(self, x: pd.DataFrame, y: pd.DataFrame):
        self.x = torch.tensor(x.values, dtype=torch.float32)
        self.y = torch.tensor(y.values, dtype=torch.float32)
        if self.y.ndim == 1:
            self.y = self.y.unsqueeze(1)
    def __len__(self):
        return self.x.shape[0]

    def __getitem__(self, idx):
        return self.x[idx], self.y[idx]

def train_linear(x: pd.DataFrame,
                 y: pd.DataFrame,
                 num_epochs: int = 10,
                 lr: float = 1e-3,
                 batch_size: int = 32):
    dataset = ForecastDataset(x, y)
    loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

    linear_model = torch.nn.Linear(N_FEATURES, 1)
    optimizer = torch.optim.Adam(linear_model.parameters(), lr=lr)
    criterion = torch.nn.MSELoss()

    X_tensor = torch.tensor(x.values, dtype=torch.float32)
    y_tensor = torch.tensor(y.values, dtype=torch.float32)
    if y_tensor.ndim == 1:
        y_tensor = y_tensor.unsqueeze(1)

    for epoch in range(num_epochs):
        for xb, yb in loader:
            pred = linear_model(xb)
            loss = criterion(pred, yb)
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

        with torch.no_grad():
            total_loss = criterion(linear_model(X_tensor), y_tensor)
        print(f"Linear  эпоха {epoch+1}/{num_epochs}  loss={total_loss.item():.6f}")

    linear_model.eval()
    return linear_model, X_tensor, y_tensor

def train_xgb(X_tensor: torch.Tensor, y_tensor: torch.Tensor,
              n_samples: int, n_features: int, iters: int = 10):
    xnet = xgbmodule.XGBModule(n_samples, n_features, 1, params={})
    xmse = torch.nn.MSELoss()
    X_matrix = xgb.DMatrix(X_tensor)

    for i in range(iters):
        xnet.zero_grad()
        xpred = xnet(X_matrix)
        loss = 0.5 * xmse(xpred, y_tensor)
        loss.backward(create_graph=True)
        xnet.gb_step()

        with torch.no_grad():
            total_loss = xmse(xnet(X_matrix), y_tensor)
        print(f"XGB     шаг    {i+1}/{iters}     loss={total_loss.item():.6f}")

    xnet.eval()
    return xnet

def evaluate_ensemble(linear_model, xnet, X_tensor, X_matrix, y_tensor):
    with torch.no_grad():
        pred = xnet(X_matrix) * 0.6 + linear_model(X_tensor) * 0.4
        loss = torch.nn.MSELoss()(pred, y_tensor)
    print(f"\nEnsemble loss: {loss.item():.6f}")
    return loss.item()

def main(data_dir: str = "data",
         model_dir: str = "model",
         linear_epochs: int = 10,
         xgb_iters: int = 10):
    os.makedirs(model_dir, exist_ok=True)

    artifacts_path = f"{model_dir}/artifacts.pkl"
    te_path = f"{model_dir}/team_expanded.parquet"

    if (os.path.exists(artifacts_path)) and os.path.exists(te_path):
        print("Загружаем готовые артефакты и данные...")
        artifacts = joblib.load(artifacts_path)
        teams_expanded = joblib.load(te_path)
    else:
        raise FileNotFoundError(f"Файлы не найдены в {model_dir}")

    print("\nПостроение признаков...")
    train_df = build_features(
        teams_expanded,
        artifacts["pair_synergy"],
        artifacts["matchup_synergy"],
        artifacts["carry_matchup"],
        artifacts["mid_matchup"],
        artifacts["offlane_matchup"],
        artifacts["sup_synergy"],
        artifacts["hero_stats_time"],
    )
    target = teams_expanded[["radiant_win"]]
    print(f"Признаки: {train_df.shape}, колонки: {list(train_df.columns)}")

    print(f"\nОбучение LinearModel ({linear_epochs} эпох)...")
    linear_model, X_tensor, y_tensor = train_linear(train_df, target, num_epochs=linear_epochs)

    print(f"\nОбучение XGBModule ({xgb_iters} итераций)...")
    xnet = train_xgb(X_tensor, y_tensor, n_samples=len(train_df), n_features=N_FEATURES, iters=xgb_iters)

    evaluate_ensemble(linear_model, xnet, X_tensor, y_tensor)

    print(f"\nСохранение весов → {model_dir}/")
    torch.save(linear_model.state_dict(), f"{model_dir}/linear.pth")
    torch.save(xnet.state_dict(), f"{model_dir}/xgb.pth")
    print("Готово.")

    return linear_model, xnet

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--data_dir", type=str, default="data")
    parser.add_argument("--model_dir", type=str, default="model")
    parser.add_argument("--linear_epochs", type=int, default=10)
    parser.add_argument("--xgb_iters", type=int, default=10)
    args = parser.parse_args()
    main(
        data_dir=args.data_dir,
        model_dir=args.model_dir,
        linear_epochs=args.linear_epochs,
        xgb_iters=args.xgb_iters
    )