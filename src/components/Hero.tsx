import React from 'react';
import { ArrowRight, Sparkles, ChevronDown, Flame, Play, ShieldAlert, Award, Users } from 'lucide-react';

interface HeroProps {
  onOpenFreePass: () => void;
  onExploreClasses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFreePass, onExploreClasses }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-[#08080a]">
      {/* Background Cinematic Imagery with Layered Athletic Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974895759-0VJASP3QTWVMN2PGL3I1/2I1A0569.jpeg"
          alt="E.F.F.E.C.T. Fitness Bootcamp Arena"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125 scale-105 transform motion-safe:animate-[pulse_10s_infinite_ease-in-out]"
        />
        {/* Athletic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-transparent to-[#08080a]/80" />
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        {/* Accent Red Ambient Spotlight */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E52328]/20 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181822]/90 border border-[#303040] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E52328] animate-ping" />
            <span className="text-zinc-200 text-xs sm:text-sm font-condensed font-bold tracking-widest uppercase">
              E.F.F.E.C.T. FITNESS • ATLANTA’S PERFORMING ARTS GYM
            </span>
          </div>

          {/* Massive Editorial Headline */}
          <div className="space-y-1">
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[110px] tracking-tight text-white uppercase leading-[0.88]">
              TRAIN WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                PURPOSE.
              </span>
            </h1>
            <div className="font-display text-3xl sm:text-5xl md:text-6xl text-[#E52328] uppercase tracking-wider flex items-center gap-3">
              <span>LET'S GET PAID!</span>
              <span className="hidden sm:inline-block h-1 w-16 bg-[#E52328]" />
            </div>
          </div>

          {/* Supporting Copy */}
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
            <strong className="text-white font-semibold">Effective. Focused. Fast. Exceptional. Creative Training.</strong> Where health, hustle, and heart collide on Metropolitan Parkway. Step inside Atlanta’s most electrifying fitness environment with drumline energy and radical accountability.
          </p>

          {/* Conversion CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenFreePass}
              className="px-8 py-4 rounded-xl bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl sm:text-2xl tracking-wider uppercase transition-all transform active:scale-95 shadow-xl shadow-red-900/40 flex items-center justify-center gap-3 group animate-glow-pulse"
            >
              <span>START YOUR FREE WEEK</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={onExploreClasses}
              className="px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-zinc-500 font-display text-xl sm:text-2xl tracking-wider uppercase transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span>EXPLORE CLASSES</span>
            </button>
          </div>

          {/* Social Proof Mini Quote */}
          <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400">
            <div className="flex -space-x-2">
              <img src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/31fbea14-e02d-4a72-97f4-b537413e9a6c/3M8A3300.jpeg" alt="Dooley" className="w-7 h-7 rounded-full border border-black object-cover" />
              <img src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/621fabef-a85b-466b-beac-a5e4b06b0ba7/2I1A0769.jpeg" alt="Coach Reggie" className="w-7 h-7 rounded-full border border-black object-cover" />
              <img src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/6e0e46c3-1f3d-471d-8ced-5486d6a0cfe0/merch-36.png" alt="Coach Cali" className="w-7 h-7 rounded-full border border-black object-cover" />
            </div>
            <span>
              Joined by <strong className="text-white">10,000+ members</strong> • Ranked #1 Performing Arts Gym in Atlanta
            </span>
          </div>
        </div>
      </div>

      {/* Hero Bottom Stats Ribbon */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-[#111116]/85 border border-[#23232e] rounded-2xl backdrop-blur-md">
          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display text-white">15+ ELITE</div>
            <div className="text-zinc-400 text-xs font-condensed tracking-wider uppercase">Coaches & Pro Athletes</div>
          </div>

          <div className="space-y-0.5 border-l border-zinc-800/80 pl-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display text-[#E52328]">40+ WEEKLY</div>
            <div className="text-zinc-400 text-xs font-condensed tracking-wider uppercase">Bootcamp & Cycle Sessions</div>
          </div>

          <div className="space-y-0.5 border-l border-zinc-800/80 pl-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display text-white">10,000+</div>
            <div className="text-zinc-400 text-xs font-condensed tracking-wider uppercase">Lives Transformed</div>
          </div>

          <div className="space-y-0.5 border-l border-zinc-800/80 pl-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display text-amber-400">4.9 ★ RATING</div>
            <div className="text-zinc-400 text-xs font-condensed tracking-wider uppercase">Over 1,200+ Verified Reviews</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-[10px] font-condensed tracking-widest uppercase">DISCOVER THE EFFECT</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#E52328]" />
          </a>
        </div>
      </div>
    </section>
  );
};
