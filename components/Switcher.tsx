'use client';

import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Switcher() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full border" style={{ borderColor: 'rgba(73, 86, 112, 0.2)' }}></div>
      </div>
    );
  }

  const bgColor = isDark ? 'rgba(204, 214, 246, 0.1)' : 'rgba(73, 86, 112, 0.1)';
  const iconColor = isDark ? '#fbbf24' : '#495670';

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleTheme();
      }}
      className="p-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
      style={{ 
        backgroundColor: 'transparent'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = bgColor}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
    >
      {isDark ? (
        <FaSun className="w-5 h-5" style={{ color: iconColor }} />
      ) : (
        <FaMoon className="w-5 h-5" style={{ color: iconColor }} />
      )}
    </button>
  );
}
