import { useState, useEffect, useRef } from "react";
import type { Hero, LastpickCandidate } from "../types";
import { HeroSearch } from "../components/HeroSearch";
import { heroes } from "../data/heroes";
import { getLastpick } from "../api/lastpick";
import "./LastpickPage.css";

function AdvantageWidget({ radiantWr, direWr }: { radiantWr: number; direWr: number }) {
  const radiant = radiantWr;
  const dire = direWr;
  const isRadiantAhead = radiant >= dire;
  return (
    <div className="lp-advantage fade-in">
      <div className="lp-advantage-label">Преимущество при текущем драфте</div>
      <div className="lp-advantage-bar">
        <div
          className="lp-advantage-fill lp-advantage-fill--radiant"
          style={{ width: radiant.toFixed(1) + "%" }}
        >
          <span className="lp-advantage-pct">{radiant.toFixed(1)}%</span>
        </div>
        <div
          className="lp-advantage-fill lp-advantage-fill--dire"
          style={{ width: dire.toFixed(1) + "%" }}
        >
          <span className="lp-advantage-pct">{dire.toFixed(1)}%</span>
        </div>
      </div>
      <div className="lp-advantage-teams">
        <span className="lp-advantage-team lp-advantage-team--radiant">Radiant</span>
        <span className={"lp-advantage-winner " + (isRadiantAhead ? "lp-advantage-winner--radiant" : "lp-advantage-winner--dire")}>
          {isRadiantAhead ? "🟢 Radiant впереди" : "🔴 Dire впереди"}
        </span>
        <span className="lp-advantage-team lp-advantage-team--dire">Dire</span>
      </div>
    </div>
  );
}

function HeroSuggestions({
  candidates,
  loading,
  label,
}: {
  candidates: LastpickCandidate[];
  loading: boolean;
  label: string;
}) {
  if (loading) {
    return (
      <div className="lp-suggestions">
        <div className="lp-suggestions-label">{label}</div>
        <div className="lp-suggestions-loading">
          <div className="lp-mini-spinner" />
        </div>
      </div>
    );
  }
  if (!candidates.length) return null;

  const max = candidates[0].winrate;
  const min = candidates[candidates.length - 1].winrate;

  return (
    <div className="lp-suggestions">
      <div className="lp-suggestions-label">{label}</div>
      <div className="lp-suggestions-list">
        {candidates.map((c, i) => {
          const hero = heroes.find((h) => h.id === c.hero_id);
          if (!hero) return null;
          const pct = max === min ? 100 : ((c.winrate - min) / (max - min)) * 100;
          const isTop = i < 3;
          return (
            <div key={hero.id} className={"lp-sug-row" + (isTop ? " lp-sug-row--top" : "")} style={{ animationDelay: i * 20 + "ms" }}>
              <span className="lp-sug-rank">#{i + 1}</span>
              <img src={hero.icon} alt={hero.name} className="lp-sug-icon" />
              <span className="lp-sug-name">{hero.name}</span>
              <div className="lp-sug-bar-wrap">
                <div className="lp-sug-bar" style={{ width: pct + "%" }} />
              </div>
              <span className="lp-sug-wr">{c.winrate}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function LastpickPage() {
  const [myTeam, setMyTeam] = useState<(number | null)[]>(Array(5).fill(null));
  const [enemyTeam, setEnemyTeam] = useState<(number | null)[]>(Array(5).fill(null));

  const [radiantSug, setRadiantSug] = useState<LastpickCandidate[]>([]);
  const [direSug, setDireSug] = useState<LastpickCandidate[]>([]);
  const [loadingRadiant, setLoadingRadiant] = useState(false);
  const [loadingDire, setLoadingDire] = useState(false);
  const [advantage, setAdvantage] = useState<{ radiantWr: number; direWr: number } | null>(null);

  const [topN] = useState(10);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mySelected = myTeam.filter(Boolean) as number[];
  const enemySelected = enemyTeam.filter(Boolean) as number[];
  const canFetch = mySelected.length >= 1 && enemySelected.length >= 1;

  useEffect(() => {
    if (!canFetch) {
      setRadiantSug([]);
      setDireSug([]);
      setAdvantage(null);
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      if (mySelected.length < 5) setLoadingRadiant(true);
      if (enemySelected.length < 5) setLoadingDire(true);
      const [rSug, dSug] = await Promise.allSettled([
        mySelected.length < 5 ? getLastpick(mySelected, enemySelected, 5) : Promise.resolve([]),
        enemySelected.length < 5 ? getLastpick(enemySelected, mySelected, 5) : Promise.resolve([]),
      ]);

      const rTop = rSug.status === "fulfilled" ? rSug.value : [];
      const dTop = dSug.status === "fulfilled" ? dSug.value : [];

      const radiantWr = mySelected.length === 5
        ? 50  
        : rTop.length ? rTop.slice(0, 5).reduce((s, c) => s + c.winrate, 0) / Math.min(rTop.length, 5) : null;
      const direWr = enemySelected.length === 5
        ? 50
        : dTop.length ? dTop.slice(0, 5).reduce((s, c) => s + c.winrate, 0) / Math.min(dTop.length, 5) : null;

      if (radiantWr !== null && direWr !== null) {
        const total = radiantWr + direWr;
        setAdvantage({ radiantWr: (radiantWr / total) * 100, direWr: (direWr / total) * 100 });
      } else if (radiantWr !== null) {
        setAdvantage({ radiantWr, direWr: 100 - radiantWr });
      } else if (direWr !== null) {
        setAdvantage({ radiantWr: 100 - direWr, direWr });
      } else {
        setAdvantage(null);
      }

      setRadiantSug(mySelected.length < 5 ? (rSug.status === "fulfilled" ? rSug.value.slice(0, topN) : []) : []);
      setDireSug(enemySelected.length < 5 ? (dSug.status === "fulfilled" ? dSug.value.slice(0, topN) : []) : []);
      setLoadingRadiant(false);
      setLoadingDire(false);
    }, 600);
  }, [JSON.stringify(mySelected), JSON.stringify(enemySelected)]);

  const handleSelectMy = (index: number, hero: Hero) => {
    setMyTeam((prev) => prev.map((id, i) => (i === index ? hero.id : id)));
  };
  const handleClearMy = (index: number) => {
    setMyTeam((prev) => prev.map((id, i) => (i === index ? null : id)));
  };
  const handleSelectEnemy = (index: number, hero: Hero) => {
    setEnemyTeam((prev) => prev.map((id, i) => (i === index ? hero.id : id)));
  };
  const handleClearEnemy = (index: number) => {
    setEnemyTeam((prev) => prev.map((id, i) => (i === index ? null : id)));
  };
  const handleClearAll = () => {
    setMyTeam(Array(5).fill(null));
    setEnemyTeam(Array(5).fill(null));
    setRadiantSug([]);
    setDireSug([]);
    setAdvantage(null);
  };

  const hasAny = myTeam.some(Boolean) || enemyTeam.some(Boolean);

  return (
    <div className="lp-page">
      <div className="lp-header">
        <h1 className="lp-title">⚔️ Ластпикер</h1>
        <p className="lp-subtitle">
          Вводи героев — рекомендации обновляются автоматически
        </p>
      </div>

      {advantage && <AdvantageWidget radiantWr={advantage.radiantWr} direWr={advantage.direWr} />}

      <div className="lp-layout">
        <div className="lp-column">
          <div className="lp-team lp-team--my">
            <div className="lp-team-header">
              <span className="lp-team-badge lp-team-badge--my">Radiant</span>
            </div>
            <div className="lp-hero-slots">
              {Array.from({ length: 5 }, (_, i) => (
                <HeroSearch
                  key={"my-" + i}
                  teamName="team1"
                  index={i}
                  onSelect={(hero) => handleSelectMy(i, hero)}
                  selectedHeroes={myTeam}
                  opposingTeamHeroes={enemyTeam}
                  onClear={() => handleClearMy(i)}
                />
              ))}
            </div>
          </div>
          <HeroSuggestions candidates={radiantSug} loading={loadingRadiant} label="Лучшие пики для Radiant" />
        </div>

        <div className="lp-vs">VS</div>

        <div className="lp-column">
          <div className="lp-team lp-team--enemy">
            <div className="lp-team-header">
              <span className="lp-team-badge lp-team-badge--enemy">Dire</span>
            </div>
            <div className="lp-hero-slots">
              {Array.from({ length: 5 }, (_, i) => (
                <HeroSearch
                  key={"enemy-" + i}
                  teamName="team2"
                  index={i}
                  onSelect={(hero) => handleSelectEnemy(i, hero)}
                  selectedHeroes={enemyTeam}
                  opposingTeamHeroes={myTeam}
                  onClear={() => handleClearEnemy(i)}
                />
              ))}
            </div>
          </div>
          <HeroSuggestions candidates={direSug} loading={loadingDire} label="Лучшие пики для Dire" />
        </div>
      </div>

      {hasAny && (
        <div className="lp-clear-wrap">
          <button className="lp-btn lp-btn--clear" onClick={handleClearAll}>
            Очистить всё
          </button>
        </div>
      )}
    </div>
  );
}