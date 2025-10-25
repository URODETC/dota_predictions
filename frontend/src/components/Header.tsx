import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const THEME_KEY = 'theme'; // 'light' or 'dark'

const Header: React.FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        try {
            const stored = localStorage.getItem(THEME_KEY);
            if (stored === 'light' || stored === 'dark') return stored;
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
        } catch (e) {
            // ignore
        }
        return 'dark';
    });

    useEffect(() => {
        // apply theme class to body
        document.body.classList.toggle('light', theme === 'light');
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (e) {
            // ignore
        }
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    return (
        <header className="fade-in">
      <nav>
        <Link to="/" data-tab="predict">🏆 Предсказание</Link>
        <Link to="/history" data-tab="history">📊 История</Link>
      </nav>
      <button
        id="theme-toggle"
        onClick={toggleTheme}
        aria-pressed={theme === 'light'}
      >
        🌓
      </button>
    </header>
    );
};

export default Header;