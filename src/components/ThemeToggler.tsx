import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { $theme, toggleTheme } from '../stores/theme';

export function ThemeToggler() {
  const theme = useStore($theme);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      $theme.set(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage and apply class
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}