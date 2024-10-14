import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


function ThemeSwitcher() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? '라이트모드':'다크모드'}
    </button>
  );
}

export default ThemeSwitcher;