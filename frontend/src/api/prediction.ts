import type { PredictionResult } from '../types';

const API_BASE = 'https://dota-predictions.ru';

interface PredictionRequest {
  team1: number[];
  team2: number[];
  team1_name: string;
  team2_name: string;
}

export async function predictMatch(request: PredictionRequest): Promise<PredictionResult> {
  const res = await fetch(`${API_BASE}/api/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    throw new Error(`Prediction API error: ${res.status}`);
  }

  return res.json();
}