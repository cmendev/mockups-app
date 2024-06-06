"use client"

import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.querySelector('html')?.setAttribute('data-theme', newTheme);
  };

  // Este efecto asegura que el tema inicial se aplique al cargar el componente
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">☀️</div>
      <div className="swap-off">🌚</div>
    </label>
  );
};

export default ThemeToggle;
