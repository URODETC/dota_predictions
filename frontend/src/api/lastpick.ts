import type { LastpickCandidate } from '../types';

const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:8000';

export async function getLastpick(
  myTeam: number[],
  enemyTeam: number[],
  topN: number = 20,
  pos: number = 1
): Promise<LastpickCandidate[]> {
  const res = await fetch(`${API_BASE}/predict/lastpick`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ my_team: myTeam, enemy_team: enemyTeam, top_n: topN, pos }),
  });
  if (!res.ok) throw new Error(`Lastpick API error: ${res.status}`);
  return res.json();
}