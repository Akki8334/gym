import React from 'react';
import { Flame } from 'lucide-react';

interface KineticMarqueeProps {
  reverse?: boolean;
  theme?: 'red' | 'dark';
}

export const KineticMarquee: React.FC<KineticMarqueeProps> = ({ reverse = false, theme = 'dark' }) => {
  const items = [
    "LET'S GET PAID",
    "EFFECTIVE",
    "FOCUSED",
    "FAST",
    "EXCEPTIONAL",
    "CREATIVE",
    "TRAINING",
    "DRUMLINE ENERGY",
    "ATLANTA, GA",
    "RADICAL ACCOUNTABILITY",
    "NO SHORTCUTS",
    "SURRENDER & SHOW UP"
  ];

  return (
    <div 
      className={`relative w-full overflow-hidden py-3 sm:py-4 select-none border-y ${
        theme === 'red' 
          ? 'bg-[#E52328] border-red-700 text-white shadow-xl shadow-red-950/40' 
          : 'bg-[#0f0f14] border-zinc-800/80 text-zinc-300'
      }`}
    >
      <div className={reverse ? 'animate-marquee-reverse' : 'animate-marquee'}>
        <div className="flex items-center space-x-6 sm:space-x-8 shrink-0 pr-6 sm:pr-8">
          {items.map((text, idx) => (
            <div key={`a-${idx}`} className="flex items-center gap-6 sm:gap-8">
              <span className="font-display text-lg sm:text-2xl lg:text-3xl tracking-wider uppercase whitespace-nowrap">
                {text}
              </span>
              <Flame className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${theme === 'red' ? 'text-white fill-white' : 'text-[#E52328] fill-[#E52328]'}`} />
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-6 sm:space-x-8 shrink-0 pr-6 sm:pr-8" aria-hidden="true">
          {items.map((text, idx) => (
            <div key={`b-${idx}`} className="flex items-center gap-6 sm:gap-8">
              <span className="font-display text-lg sm:text-2xl lg:text-3xl tracking-wider uppercase whitespace-nowrap">
                {text}
              </span>
              <Flame className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${theme === 'red' ? 'text-white fill-white' : 'text-[#E52328] fill-[#E52328]'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
