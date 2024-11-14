import { useState } from 'react';
import { useCookies } from 'react-cookie';

interface UseDarkMode {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const useDarkMode = (defaultTheme: 'dark' | 'light' = 'dark'): UseDarkMode => {
  const [theme, setTheme] = useState<typeof defaultTheme>(defaultTheme);
  const [_, setCookie] = useCookies(['theme']);

  const setAndSaveTheme = (theme: 'dark' | 'light') => {
    setTheme(theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    setCookie('theme', theme);
  };

  const toggleTheme = () => {
    setAndSaveTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return { theme, toggleTheme };
};

export default useDarkMode;
