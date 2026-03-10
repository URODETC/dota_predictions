import React, { useState, useEffect } from "react";
import { HeroSearch } from "../components/HeroSearch";
import { getLastpick } from "../api/lastpick";
import { heroes } from "../data/heroes"; // Импортируем из правильного места
import type { Hero, LastpickCandidate, SelectedHeroes } from "../types";
import "./LastpickPage.css";

const LastpickPage: React.FC = () => {
  const [selectedHeroes, setSelectedHeroes] = useState<SelectedHeroes>({
    team1: Array(5).fill(null),
    team2: Array(5).fill(null),
  });
  const [candidates, setCandidates] = useState<LastpickCandidate[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const t1 = selectedHeroes.team1.filter((id): id is number => id !== null);
    const t2 = selectedHeroes.team2.filter((id): id is number => id !== null);

    // Логика: если заполнено 9 слотов, запрашиваем варианты для 10-го
    if (t1.length + t2.length === 9) {
      setLoading(true);
      getLastpick(t1, t2)
        .then(res => setCandidates(res))
        .catch(err => console.error("Аналитика недоступна:", err))
        .finally(() => setLoading(false));
    } else {
      setCandidates([]);
    }
  }, [selectedHeroes]);

  const updateHero = (team: "team1" | "team2", index: number, heroId: number | null) => {
    setSelectedHeroes(prev => ({
      ...prev,
      [team]: prev[team].map((id, i) => (i === index ? heroId : id))
    }));
  };

  return (
    <div className="lp-page">
      <div className="lp-layout">
        <div className="lp-draft-section">
          <div className="lp-team radiant">
            <h3>Radiant</h3>
            <div className="lp-slots">
              {selectedHeroes.team1.map((id, i) => (
                <HeroSearch 
                  key={`r-${i}`} 
                  index={i} 
                  teamName="team1" 
                  selectedHeroes={selectedHeroes.team1} 
                  opposingTeamHeroes={selectedHeroes.team2}
                  onSelect={(h) => updateHero("team1", i, h.id)} 
                  onClear={() => updateHero("team1", i, null)} 
                />
              ))}
            </div>
          </div>

          <div className="lp-divider">VS</div>

          <div className="lp-team dire">
            <h3>Dire</h3>
            <div className="lp-slots">
              {selectedHeroes.team2.map((id, i) => (
                <HeroSearch 
                  key={`d-${i}`} 
                  index={i} 
                  teamName="team2" 
                  selectedHeroes={selectedHeroes.team2} 
                  opposingTeamHeroes={selectedHeroes.team1}
                  onSelect={(h) => updateHero("team2", i, h.id)} 
                  onClear={() => updateHero("team2", i, null)} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="lp-sidebar">
          <div className="lp-results-card">
            <h4>Рекомендации ластпика</h4>
            <div className="lp-list">
              {loading ? (
                <div className="lp-info">Считаем вероятности...</div>
              ) : candidates.length > 0 ? (
                candidates.map((c) => {
                  const heroInfo = heroes.find(h => h.id === c.hero_id);
                  return (
                    <div key={c.hero_id} className="lp-hero-row">
                      <img src={heroInfo?.icon} alt="" className="lp-icon" />
                      <span className="lp-name">{heroInfo?.name}</span>
                      <span className={`lp-win ${c.winrate >= 50 ? 'high' : 'low'}`}>
                        {c.winrate}%
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="lp-info">Выберите 9 героев для анализа</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastpickPage;