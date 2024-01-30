'use client';

import { useTheme } from 'next-themes';
import { FC } from 'react';

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="text-muted-foreground"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? 'light' : 'dark'}
    </button>
  );
};
