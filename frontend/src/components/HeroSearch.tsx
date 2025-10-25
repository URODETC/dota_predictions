import { useState, useMemo } from 'react';
import type { Hero } from '../types';
import { heroes } from '../data/heroes';
import './HeroSearch.css';

interface HeroSearchProps {
  onSelect: (hero: Hero) => void;
  placeholder?: string;
  isDisabled?: boolean;
  teamName: 'team1' | 'team2';
  index: number;
  selectedHeroes: (number | null)[];
  onClear: () => void;
}

export const HeroSearch = ({
  onSelect,
  placeholder = "Поиск героя...",
  isDisabled = false,
  teamName,
  index,
  selectedHeroes,
  onClear,
}: HeroSearchProps) => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const selectedHeroId = selectedHeroes[index];

  const filteredHeroes = useMemo(() => {
    if (!query) return [];
    const searchQuery = query.toLowerCase().trim();
    return heroes
      .filter((hero) => hero.name.toLowerCase().includes(searchQuery))
      .slice(0, 5);
  }, [query]);

  const handleSelect = (hero: Hero) => {
    if (selectedHeroes.includes(hero.id)) {
      // Show error
      const input = document.getElementById(`${teamName}-${index}`);
      if (input) {
        input.classList.add("error");
        input.setAttribute("placeholder", "Этот герой уже выбран!");
        setTimeout(() => input.classList.add("fade-placeholder"), 800);

        setTimeout(() => {
          input.classList.remove("error", "fade-placeholder");
          input.setAttribute("placeholder", "Поиск героя...");
        }, 1600);
      }
      setQuery("");
      setShowResults(false);
      return;
    }

    onSelect(hero);
    setQuery("");
    setShowResults(false);
  };

  const selectedHero = heroes.find((h) => h.id === selectedHeroId);

  return (
    <div className="hero-slot">
      {selectedHero ? (
        <div className="selected-hero">
          <div className="hero-name">
            <img src={selectedHero.icon} className="hero-icon-medium" alt={selectedHero.name} />
            <a>{selectedHero.name}</a>
          </div>
          <button id="clear-hero-btn" onClick={onClear}>
            X
          </button>
        </div>
      ) : (
        <>
          <input
            className="hero-search"
            id={`${teamName}-${index}`}
            placeholder={placeholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            disabled={isDisabled}
          />
          {showResults && filteredHeroes.length > 0 && (
            <div className="search-results">
              {filteredHeroes.map((hero) => (
                <div
                  key={hero.id}
                  className="hero-option"
                  onClick={() => handleSelect(hero)}
                >
                  <img src={hero.icon} className="hero-icon-mini" alt={hero.name} />
                  {hero.name}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};