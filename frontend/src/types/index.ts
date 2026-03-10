export interface Hero {
  id: number;
  name: string;
  icon: string;
}

export interface SelectedHeroes {
  team1: (number | null)[];
  team2: (number | null)[];
}

export interface PredictionResult {
  average: {
    Radiant: number;
    Dire: number;
  };
  detailed: [
    { Radiant: number; Dire: number; Time: number },
    { Radiant: number; Dire: number; Time: number },
    { Radiant: number; Dire: number; Time: number },
    { Radiant: number; Dire: number; Time: number },
    { Radiant: number; Dire: number; Time: number },
    { Radiant: number; Dire: number; Time: number },
    { Radiant: number; Dire: number; Time: number },
    { Radiant: number; Dire: number; Time: number }
  ]
}

export interface LastpickCandidate {
  hero_id: number;
  winrate: number;
}