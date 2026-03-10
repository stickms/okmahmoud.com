'use client';

import { useTheme } from 'next-themes';
import { IoMoon, IoSunny } from 'react-icons/io5';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="nav icon hover:cursor-pointer"
      aria-label="Toggle theme"
    >
      <IoSunny className="theme-icon-light" />
      <IoMoon className="theme-icon-dark" />
    </button>
  );
}
