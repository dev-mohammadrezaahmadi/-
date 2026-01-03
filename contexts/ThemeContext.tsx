'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get theme from localStorage or default to 'dark'
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'dark';
    
    // Apply theme to document immediately before React renders
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(savedTheme);
    
    // Update state
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme: Theme = prevTheme === 'light' ? 'dark' : 'light';
      
      // Apply theme to document immediately
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(newTheme);
      
      // Force a reflow to ensure the class is applied
      root.offsetHeight;
      
      // Save to localStorage
      try {
        localStorage.setItem('theme', newTheme);
      } catch (e) {
        console.error('Failed to save theme to localStorage:', e);
      }
      
      return newTheme;
    });
  }, []);

  // Always render children to prevent layout shift
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

