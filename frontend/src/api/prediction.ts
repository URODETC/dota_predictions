import type { PredictionResult } from '../types';

const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8000';

interface PredictionRequest {
  team1: number[];
  team2: number[];
}

export async function predictMatch(request: PredictionRequest): Promise<PredictionResult> {
  const res = await fetch(`${API_BASE}/predict`, {
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