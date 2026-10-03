import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'navbar' | 'mobile' | 'floating';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'navbar', className = '' }) => {
  const { theme, isDark, toggleTheme } = useTheme();

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center justify-between p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 ${className}`}>
        <div className="flex items-center gap-2">
          {isDark ? (
            <Moon className="w-4 h-4 text-amber-400" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
          <span className="text-xs font-condensed font-bold tracking-wider uppercase text-zinc-300">
            Appearance: {isDark ? 'Night Mode' : 'Day Mode'}
          </span>
        </div>

        <button
          onClick={toggleTheme}
          type="button"
          className="relative inline-flex h-7 w-16 items-center rounded-full bg-zinc-800 border border-zinc-700 p-0.5 transition-colors focus:outline-none"
          aria-label={`Switch to ${isDark ? 'Day' : 'Night'} mode`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-[#E52328] transition-transform flex items-center justify-center text-white ${
              isDark ? 'translate-x-0' : 'translate-x-9'
            }`}
          >
            {isDark ? <Moon className="w-3 h-3 text-white" /> : <Sun className="w-3 h-3 text-white" />}
          </span>
          <span className="absolute right-2 text-[10px] font-bold text-zinc-400 select-none">
            {isDark ? 'NIGHT' : 'DAY'}
          </span>
        </button>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={`fixed bottom-5 left-5 z-40 flex items-center gap-2 px-3 py-2 rounded-full shadow-2xl backdrop-blur-md transition-all duration-300 group hover:scale-105 ${
          isDark
            ? 'bg-[#181822]/90 border border-[#303042] text-zinc-200 hover:text-white shadow-black/60'
            : 'bg-white/95 border border-slate-200 text-slate-800 hover:text-black shadow-slate-300/60'
        } ${className}`}
        aria-label={`Toggle theme: Currently ${isDark ? 'Night' : 'Day'} Mode`}
        title={`Click to switch to ${isDark ? 'Day' : 'Night'} Mode`}
      >
        <div className={`p-1 rounded-full transition-transform duration-300 group-hover:rotate-45 ${
          isDark ? 'bg-amber-400/20 text-amber-300' : 'bg-amber-500/20 text-amber-600'
        }`}>
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </div>
        <span className="text-[11px] font-condensed font-bold uppercase tracking-wider pr-1">
          {isDark ? 'DAY MODE' : 'NIGHT MODE'}
        </span>
      </button>
    );
  }

  // Default navbar variant
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 sm:px-3 sm:py-2 rounded-lg border transition-all duration-200 flex items-center gap-2 text-xs font-condensed font-bold uppercase tracking-wider group ${
        isDark
          ? 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600'
          : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'Day' : 'Night'} mode`}
      title={`Switch to ${isDark ? 'Day' : 'Night'} mode`}
    >
      <div className="relative w-4 h-4">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 transition-transform duration-300" />
        )}
      </div>
      <span className="hidden md:inline text-[11px]">
        {isDark ? 'DAY' : 'NIGHT'}
      </span>
    </button>
  );
};
