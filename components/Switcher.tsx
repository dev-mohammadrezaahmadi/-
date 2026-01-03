'use client';

import { useState, useEffect } from 'react';
import useDarkSide from '../hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide() as [string, (theme: string) => void];
  const [darkSide, setDarkSide] = useState(colorTheme === 'light');

  useEffect(() => {
    setDarkSide(colorTheme === 'light');
  }, [colorTheme]);

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
    setDarkSide(checked);
  };

  return (
    <DarkModeSwitch
      onChange={toggleDarkMode}
      checked={darkSide}
      className="w-5 h-5"
      size={20}
    />
  );
}
