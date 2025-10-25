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
    radiant: number;
    dire: number;
  };
  early_game: {
    radiant: number;
    dire: number;
  };
  mid_game: {
    radiant: number;
    dire: number;
  };
  late_game: {
    radiant: number;
    dire: number;
  };
}