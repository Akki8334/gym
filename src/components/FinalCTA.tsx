import React from 'react';
import { ArrowRight, Sparkles, Flame } from 'lucide-react';

interface FinalCTAProps {
  onOpenFreePass: () => void;
  onExploreSchedule: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenFreePass, onExploreSchedule }) => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-black text-center">
      {/* Background Cinematic Photo with Heavy Dramatic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974694526-AIC4T12U2J9SNJNN1IUF/IMG_8083.jpeg"
          alt="E.F.F.E.C.T. Fitness Final Call to Action"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E52328]/25 rounded-full blur-[160px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c28]/90 border border-[#303042] text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
          <Flame className="w-3.5 h-3.5 fill-[#E52328]" />
          <span>YOUR TIME IS NOW</span>
        </div>

        <h2 className="font-display text-6xl sm:text-8xl md:text-9xl text-white tracking-tight uppercase leading-[0.85]">
          MAKE YOUR <br />
          <span className="text-[#E52328]">EFFECT.</span>
        </h2>

        <div className="font-display text-2xl sm:text-3xl text-zinc-300 tracking-wider uppercase">
          "SURRENDER. SHOW UP. STAY CONSISTENT."
        </div>

        <p className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Your next workout starts here. Step inside Atlanta’s premiere performing arts gym and discover what your body and mind are truly capable of achieving.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenFreePass}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl sm:text-2xl tracking-wider uppercase transition-all transform active:scale-95 shadow-2xl shadow-red-900/50 flex items-center justify-center gap-3 animate-glow-pulse"
          >
            <span>START YOUR FREE WEEK</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={onExploreSchedule}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700 font-display text-xl sm:text-2xl tracking-wider uppercase transition-all flex items-center justify-center gap-2"
          >
            <span>VIEW TODAY'S SCHEDULE</span>
          </button>
        </div>

        <div className="pt-4 text-xs text-zinc-500">
          📍 1995B Metropolitan Pkwy SW, Atlanta, GA • (404) 254-0684 • Free Parking On-Site
        </div>
      </div>
    </section>
  );
};
