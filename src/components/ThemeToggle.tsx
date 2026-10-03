import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'navbar' | 'mobile';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'navbar', className = '' }) => {
  const { theme, isDark, toggleTheme } = useTheme();

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center justify-between p-3.5 rounded-xl transition-colors ${
        isDark ? 'bg-zinc-900/90 border border-zinc-800' : 'bg-slate-100 border border-slate-200'
      } ${className}`}>
        <div className="flex items-center gap-2.5">
          {isDark ? (
            <Moon className="w-4 h-4 text-amber-400" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
          <span className={`text-xs font-condensed font-bold tracking-wider uppercase ${
            isDark ? 'text-zinc-200' : 'text-slate-800'
          }`}>
            Appearance: {isDark ? 'Night Mode' : 'Day Mode'}
          </span>
        </div>

        <button
          onClick={toggleTheme}
          type="button"
          className={`relative inline-flex h-7 w-16 items-center rounded-full border p-0.5 transition-colors focus:outline-none ${
            isDark ? 'bg-zinc-800 border-zinc-700' : 'bg-slate-200 border-slate-300'
          }`}
          aria-label={`Switch to ${isDark ? 'Day' : 'Night'} mode`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-[#E52328] transition-transform flex items-center justify-center text-white ${
              isDark ? 'translate-x-0' : 'translate-x-9'
            }`}
          >
            {isDark ? <Moon className="w-3 h-3 text-white" /> : <Sun className="w-3 h-3 text-white" />}
          </span>
          <span className={`absolute ${isDark ? 'right-2' : 'left-2'} text-[9px] font-bold ${
            isDark ? 'text-zinc-400' : 'text-slate-600'
          } select-none`}>
            {isDark ? 'NIGHT' : 'DAY'}
          </span>
        </button>
      </div>
    );
  }

  // Navbar variant
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 sm:px-3 sm:py-2 rounded-lg border transition-all duration-200 flex items-center gap-1.5 text-xs font-condensed font-bold uppercase tracking-wider group focus:outline-none ${
        isDark
          ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700'
          : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400 shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'Day' : 'Night'} mode`}
      title={`Switch to ${isDark ? 'Day' : 'Night'} mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>
      <span className={`hidden md:inline text-[11px] ${isDark ? 'text-zinc-300 group-hover:text-white' : 'text-slate-700'}`}>
        {isDark ? 'DAY' : 'NIGHT'}
      </span>
    </button>
  );
};
