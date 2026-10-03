import React, { useState, useRef, useCallback } from 'react';
import { 
  Sparkles, 
  Trophy, 
  ArrowRight, 
  ArrowLeftRight, 
  CheckCircle2, 
  ChevronsLeftRight,
  Flame,
  RotateCcw
} from 'lucide-react';

export const TransformationBeforeAfter: React.FC<{ onClaimFreePass: () => void }> = ({ onClaimFreePass }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      name: 'Marcus Holloway',
      stat: '-58 LBS SHED',
      subtitle: 'From High Blood Pressure to Sub-4hr Marathoner',
      timeframe: '9 Months Consistent Work',
      beforeImg: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974481071-ADYX81G04U0HAS6DX0TY/2I1A5221.jpeg',
      afterImg: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974895759-0VJASP3QTWVMN2PGL3I1/2I1A0569.jpeg',
      quote: 'The drumline energy keeps you going when your legs want to stop. E.F.F.E.C.T. changed my entire life trajectory.'
    },
    {
      name: 'Keisha Robinson',
      stat: '-42 LBS • REVERSED PRE-DIABETES',
      subtitle: 'GlideZone & G.L.T. Dedicated Athlete',
      timeframe: '12 Months Consistent Work',
      beforeImg: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974786186-XJU6QRTO4ZJZFNRVM7XW/IMG_8071.jpeg',
      afterImg: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974565682-VOLB5OCECFITDWLREHQ3/2I1A2434.jpeg',
      quote: 'Coach Cali and Coach Daja pushed me every single week. My bloodwork is completely clean today.'
    },
    {
      name: 'David & Alexis Morales',
      stat: '-85 LBS COMBINED',
      subtitle: 'Couples Transformation & Saturday Market Founders',
      timeframe: '3-Year Streak',
      beforeImg: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974515549-5TJPWSZCOAT73CT3X3HA/2I1A1100.jpeg',
      afterImg: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974109646-8WVOA6LQRX48PL2ECTAC/2I1A7941.jpeg',
      quote: 'Training together at 5:30 AM strengthened our marriage, our endurance, and our business mindset.'
    }
  ];

  const current = stories[activeStory];

  // Precise pointer calculation
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(Math.round(percentage * 10) / 10);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback if setPointerCapture is unsupported
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Fallback
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPos(prev => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPos(prev => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPos(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <div className="py-16 bg-[#111116] border border-[#22222e] rounded-3xl p-6 sm:p-10 my-12 shadow-2xl relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#E52328]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header & Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs mb-2">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>INTERACTIVE TRANSFORMATION COMPARISON</span>
          </div>
          <h3 className="font-display text-4xl sm:text-5xl text-white tracking-wide uppercase leading-tight">
            Drag To Reveal <span className="text-[#E52328]">The Transformation</span>
          </h3>
        </div>

        {/* Story Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {stories.map((s, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveStory(idx);
                setSliderPos(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-condensed uppercase tracking-wider font-bold transition-all flex items-center gap-2 ${
                activeStory === idx
                  ? 'bg-[#E52328] text-white shadow-lg shadow-red-900/40 ring-2 ring-red-500/50'
                  : 'bg-[#181822] text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 ${activeStory === idx ? 'text-white' : 'text-[#E52328]'}`} />
              <span>{s.name.split(' ')[0]} ({s.stat.split(' ')[0]})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Drag Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Slider Visual Container */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div 
            ref={containerRef}
            role="slider"
            aria-label="Drag to reveal before and after comparison"
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onKeyDown={handleKeyDown}
            className="relative h-80 sm:h-[460px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-zinc-800 shadow-2xl touch-none focus:outline-none focus:ring-2 focus:ring-[#E52328]"
          >
            {/* 1. AFTER Image (Base Layer - 100% Full Width & Height) */}
            <img
              src={current.afterImg}
              alt={`${current.name} After Transformation`}
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-105 pointer-events-none select-none"
              draggable={false}
            />

            {/* AFTER Badge (Top Right) */}
            <div className="absolute top-4 right-4 bg-emerald-600/90 backdrop-blur-md text-white font-condensed uppercase tracking-wider text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 z-10 pointer-events-none">
              <Trophy className="w-3.5 h-3.5" />
              <span>PRESENT RESULT</span>
            </div>

            {/* 2. BEFORE Image (Clipped Overlay - ZERO STRETCHING / NO DISTORTION) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none will-change-[clip-path]"
              style={{
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                transition: isDragging ? 'none' : 'clip-path 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <img
                src={current.beforeImg}
                alt={`${current.name} Before Transformation`}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95 contrast-110 pointer-events-none select-none"
                draggable={false}
              />

              {/* BEFORE Badge (Top Left) */}
              <div className="absolute top-4 left-4 bg-zinc-900/95 backdrop-blur-md text-white border border-zinc-700/60 font-condensed uppercase tracking-wider text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 z-10 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#E52328] animate-pulse" />
                <span>DAY 1 START</span>
              </div>
            </div>

            {/* 3. Divider Line & Ergonomic Handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_15px_rgba(229,35,40,0.9),0_0_30px_rgba(255,255,255,0.8)] z-20 pointer-events-none will-change-[left]"
              style={{ 
                left: `${sliderPos}%`,
                transition: isDragging ? 'none' : 'left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Center Handle Knob */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E52328] border-2 border-white flex items-center justify-center text-white shadow-[0_0_20px_rgba(229,35,40,0.85)] transition-all duration-200 pointer-events-none ${
                  isDragging ? 'scale-115 ring-4 ring-[#E52328]/50 shadow-[0_0_30px_rgba(229,35,40,1)]' : 'scale-100'
                }`}
              >
                <ChevronsLeftRight className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Floating Instructional Pill */}
            <div 
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-md px-4 py-1.5 rounded-full text-[11px] text-white font-condensed uppercase tracking-wider pointer-events-none shadow-2xl border border-white/10 z-10 transition-opacity duration-300 ${
                isDragging ? 'opacity-30' : 'opacity-100'
              }`}
            >
              <span className="text-[#E52328] font-bold">DRAG OR CLICK</span> TO REVEAL TRANSFORMATION
            </div>
          </div>

          {/* Quick Preset Buttons & Reveal Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                className={`px-3 py-1.5 rounded-lg text-xs font-condensed uppercase tracking-wider font-semibold transition-all ${
                  sliderPos >= 95 
                    ? 'bg-zinc-700 text-white border border-zinc-600' 
                    : 'bg-[#181822] text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                Day 1 (100% Start)
              </button>

              <button
                type="button"
                onClick={() => setSliderPos(50)}
                className={`px-3 py-1.5 rounded-lg text-xs font-condensed uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5 ${
                  sliderPos >= 45 && sliderPos <= 55 
                    ? 'bg-[#E52328] text-white shadow-md' 
                    : 'bg-[#181822] text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                <RotateCcw className="w-3 h-3" />
                <span>Split (50/50)</span>
              </button>

              <button
                type="button"
                onClick={() => setSliderPos(0)}
                className={`px-3 py-1.5 rounded-lg text-xs font-condensed uppercase tracking-wider font-semibold transition-all ${
                  sliderPos <= 5 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-[#181822] text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                Result (100% Present)
              </button>
            </div>

            <div className="text-[11px] font-condensed uppercase tracking-wider text-zinc-400 flex items-center gap-2 font-mono">
              <span className="text-zinc-300 font-bold">{Math.round(sliderPos)}%</span> Before
              <span className="text-zinc-600">/</span>
              <span className="text-emerald-400 font-bold">{Math.round(100 - sliderPos)}%</span> After
            </div>
          </div>
        </div>

        {/* Narrative & Milestone Data */}
        <div className="lg:col-span-4 space-y-5">
          <div className="space-y-1">
            <span className="text-[11px] font-condensed uppercase tracking-widest text-[#E52328] font-bold">
              VERIFIED ATLANTA ATHLETE
            </span>
            <h4 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide leading-tight">
              {current.name}
            </h4>
            <div className="font-display text-2xl text-emerald-400 tracking-wide">
              {current.stat}
            </div>
            <p className="text-xs text-zinc-400 font-medium">
              {current.subtitle} • {current.timeframe}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#181822] border-l-2 border-[#E52328] text-xs sm:text-sm text-zinc-300 italic">
            "{current.quote}"
          </div>

          <div className="space-y-2 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E52328]" />
              <span>Program: Unlimited Signature Bootcamp</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E52328]" />
              <span>Nutrition: Spreading the Health Daily Juices</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#E52328]" />
              <span>Attendance: 4x Weekly Consistency</span>
            </div>
          </div>

          <button
            onClick={onClaimFreePass}
            className="w-full py-3.5 bg-[#E52328] hover:bg-[#c4181d] text-white font-condensed uppercase tracking-wider text-xs font-bold rounded-xl transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>START YOUR TRANSFORMATION TODAY</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
