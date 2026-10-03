import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onOpenFreePass: () => void;
  onExploreClasses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenFreePass, onExploreClasses }) => {
  const videoId = "MO4sdsh1T4I";

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-[#08080a]">
      {/* Background Cinematic YouTube Looping Video (Completely Ambient, Zero Controls) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Poster Fallback Image while iframe initializes */}
        <img
          src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974895759-0VJASP3QTWVMN2PGL3I1/2I1A0569.jpeg"
          alt="E.F.F.E.C.T. Fitness Arena Background"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] contrast-125 pointer-events-none select-none"
        />

        {/* Embedded Autoplaying Looping YouTube Video without any controls */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0&autohide=1`}
            title="E.F.F.E.C.T. Fitness Ambient Background Video"
            tabIndex={-1}
            aria-hidden="true"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full h-[56.25vw] pointer-events-none select-none border-0 filter brightness-[0.44] contrast-125 saturate-110"
          />
        </div>

        {/* Scanline CRT overlay for broadcast energy */}
        <div className="absolute inset-0 bg-scanline pointer-events-none opacity-30 select-none" />

        {/* Athletic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/60 to-black/80 pointer-events-none select-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080a] via-transparent to-[#08080a]/80 pointer-events-none select-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none select-none" />

        {/* Dynamic Accent Spotlights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#E52328]/25 rounded-full blur-[160px] pointer-events-none animate-pulse select-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[360px] h-[360px] bg-[#F0523D]/15 rounded-full blur-[140px] pointer-events-none select-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow Badge with Live Pulse */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181822]/90 border border-[#303040] backdrop-blur-md shadow-lg shadow-black/50">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E52328] animate-ping" />
            <span className="text-zinc-200 text-xs sm:text-sm font-condensed font-bold tracking-widest uppercase flex items-center gap-2">
              <span>E.F.F.E.C.T. FITNESS</span>
              <span className="text-zinc-600">•</span>
              <span className="text-[#E52328]">ATLANTA'S PERFORMING ARTS GYM</span>
            </span>
          </div>

          {/* Massive Editorial Headline */}
          <div className="space-y-1">
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[112px] tracking-tight text-white uppercase leading-[0.86]">
              TRAIN WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
                PURPOSE.
              </span>
            </h1>

            {/* Slogan */}
            <div className="font-display text-3xl sm:text-5xl md:text-6xl text-[#E52328] uppercase tracking-wider flex items-center gap-3">
              <span className="hover:tracking-widest transition-all duration-300">LET'S GET PAID!</span>
              <span className="hidden sm:inline-block h-1 w-20 bg-gradient-to-r from-[#E52328] to-transparent" />
            </div>
          </div>

          {/* Supporting Copy */}
          <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
            <strong className="text-white font-semibold">Effective. Focused. Fast. Exceptional. Creative Training.</strong> Where health, hustle, and heart collide on Metropolitan Parkway. Step inside Atlanta’s most electrifying fitness movement with HBCU drumline energy and radical accountability.
          </p>

          {/* Conversion CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onOpenFreePass}
              className="px-8 py-4 rounded-xl bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl sm:text-2xl tracking-wider uppercase transition-all transform active:scale-95 shadow-2xl shadow-red-900/50 flex items-center justify-center gap-3 group animate-glow-pulse"
            >
              <span>START YOUR FREE WEEK</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={onExploreClasses}
              className="px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700/80 hover:border-zinc-400 font-display text-xl sm:text-2xl tracking-wider uppercase transition-all backdrop-blur-sm flex items-center justify-center gap-2 group"
            >
              <span>EXPLORE CLASSES</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-[#E52328]" />
            </button>
          </div>

          {/* Social Proof Avatars */}
          <div className="flex items-center gap-3 pt-2 text-xs text-zinc-400">
            <div className="flex -space-x-2">
              <img src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/31fbea14-e02d-4a72-97f4-b537413e9a6c/3M8A3300.jpeg" alt="Dooley" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
              <img src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/621fabef-a85b-466b-beac-a5e4b06b0ba7/2I1A0769.jpeg" alt="Coach Reggie" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
              <img src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/6e0e46c3-1f3d-471d-8ced-5486d6a0cfe0/merch-36.png" alt="Coach Cali" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
              <img src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/128154e1-652c-4de3-b566-7038f6b1f80a/DajaProfileEffect.png" alt="Coach Daja" className="w-8 h-8 rounded-full border-2 border-black object-cover" />
            </div>
            <span>
              Joined by <strong className="text-white font-semibold">10,000+ members</strong> • Ranked #1 Performing Arts Gym in Atlanta
            </span>
          </div>
        </div>
      </div>

      {/* Hero Bottom Stats Ribbon with Animated Counters */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-[#111116]/90 border border-[#23232e] rounded-2xl backdrop-blur-md shadow-2xl">
          <div className="space-y-0.5">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display text-white">
              <AnimatedCounter target={15} suffix="+ ELITE" duration={1800} />
            </div>
            <div className="text-zinc-400 text-xs font-condensed tracking-wider uppercase">Coaches & Pro Athletes</div>
          </div>

          <div className="space-y-0.5 border-l border-zinc-800/80 pl-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display text-[#E52328]">
              <AnimatedCounter target={40} suffix="+ SESSIONS" duration={2000} />
            </div>
            <div className="text-zinc-400 text-xs font-condensed tracking-wider uppercase">Weekly Bootcamp & Cycles</div>
          </div>

          <div className="space-y-0.5 border-l border-zinc-800/80 pl-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display text-white">
              <AnimatedCounter target={10000} suffix="+" duration={2400} />
            </div>
            <div className="text-zinc-400 text-xs font-condensed tracking-wider uppercase">Lives Transformed</div>
          </div>

          <div className="space-y-0.5 border-l border-zinc-800/80 pl-4">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display text-amber-400 flex items-center gap-1">
              <AnimatedCounter target={4.9} decimals={1} suffix=" ★" duration={1500} />
            </div>
            <div className="text-zinc-400 text-xs font-condensed tracking-wider uppercase">1,200+ Verified Reviews</div>
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
