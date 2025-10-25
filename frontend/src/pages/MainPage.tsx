import { useState } from 'react';
import type { Hero, PredictionResult, SelectedHeroes } from '../types';
import '../main.css';
import { HeroSearch } from '../components/HeroSearch';
import { PredictionResults } from '../components/PredictionResults';
import { predictMatch as predictMatchAPI } from '../api/prediction';

const INITIAL_SELECTED_HEROES: SelectedHeroes = {
  team1: Array(5).fill(null),
  team2: Array(5).fill(null),
};

export default function MainPage() {
  const [selectedHeroes, setSelectedHeroes] = useState<SelectedHeroes>(INITIAL_SELECTED_HEROES);
  const [team1Name, setTeam1Name] = useState<string>('Radiant');
  const [team2Name, setTeam2Name] = useState<string>('Dire');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [lastPrediction, setLastPrediction] = useState<string | null>(null);

  const handleSelectHero = (team: 'team1' | 'team2', index: number, hero: Hero) => {
    setSelectedHeroes((prev) => ({
      ...prev,
      [team]: prev[team].map((id, i) => (i === index ? hero.id : id)),
    }));
  };

  const handleClearHero = (team: 'team1' | 'team2', index: number) => {
    setSelectedHeroes((prev) => ({
      ...prev,
      [team]: prev[team].map((id, i) => (i === index ? null : id)),
    }));
    setPredictionResult(null);
  };

  const handleClearAll = () => {
    setSelectedHeroes(INITIAL_SELECTED_HEROES);
    setTeam1Name('Radiant');
    setTeam2Name('Dire');
    setPredictionResult(null);
    setLastPrediction(null);
  };

  const canPredict = selectedHeroes.team1.filter(Boolean).length === 5 &&
                     selectedHeroes.team2.filter(Boolean).length === 5;

  const hasSelectedHeroes = selectedHeroes.team1.some(Boolean) || selectedHeroes.team2.some(Boolean);

  const predictMatch = async () => {
    const team1 = selectedHeroes.team1.filter(Boolean) as number[];
    const team2 = selectedHeroes.team2.filter(Boolean) as number[];

    const currentPrediction = {
      team1,
      team2,
      team1_name: team1Name,
      team2_name: team2Name,
    };
    const predictionKey = JSON.stringify(currentPrediction);

    if (predictionKey === lastPrediction) {
      return;
    }

    setIsLoading(true);
    setLastPrediction(predictionKey);

    try {
      const result = await predictMatchAPI(currentPrediction);
      setPredictionResult(result);
    } catch (error) {
      console.error('Error predicting match:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Предсказание матча</h1>

      <div className="teams-wrapper">
        <div className="team">
          <input
            id="team1-name"
            className="team-name"
            placeholder="Radiant"
            value={team1Name}
            onChange={(e) => setTeam1Name(e.target.value)}
          />
          <h3>Герои Radiant</h3>
          <div className="hero-pickers">
            {Array.from({ length: 5 }, (_, i) => (
              <HeroSearch
                key={`team1-${i}`}
                teamName="team1"
                index={i}
                onSelect={(hero) => handleSelectHero('team1', i, hero)}
                selectedHeroes={selectedHeroes.team1}
                onClear={() => handleClearHero('team1', i)}
              />
            ))}
          </div>
        </div>

        <div className="team">
          <input
            id="team2-name"
            className="team-name"
            placeholder="Dire"
            value={team2Name}
            onChange={(e) => setTeam2Name(e.target.value)}
          />
          <h3>Герои Dire</h3>
          <div className="hero-pickers">
            {Array.from({ length: 5 }, (_, i) => (
              <HeroSearch
                key={`team2-${i}`}
                teamName="team2"
                index={i}
                onSelect={(hero) => handleSelectHero('team2', i, hero)}
                selectedHeroes={selectedHeroes.team2}
                onClear={() => handleClearHero('team2', i)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="clear-all-wrapper">
        <button
          id="clear-all-btn"
          onClick={handleClearAll}
          disabled={!hasSelectedHeroes}
          className={hasSelectedHeroes ? 'enabled' : ''}
        >
          Очистить всё
        </button>
      </div>

      <div className="predict-btn-wrapper">
        <button
          id="predict-btn"
          onClick={predictMatch}
          disabled={!canPredict}
          className={canPredict ? 'enabled' : ''}
        >
          🔮 Предсказать
        </button>
      </div>

      {isLoading && <div id="spinner" className="spinner" />}

      {predictionResult && (
        <div id="result">
          <PredictionResults
            result={predictionResult}
            team1Name={team1Name}
            team2Name={team2Name}
          />
        </div>
      )}
    </div>
  );
}
