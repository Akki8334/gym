import React, { useState } from 'react';
import { Sparkles, Trophy, Award, Flame, ArrowRight, ArrowLeftRight, CheckCircle2 } from 'lucide-react';

export const TransformationBeforeAfter: React.FC<{ onClaimFreePass: () => void }> = ({ onClaimFreePass }) => {
  const [sliderPos, setSliderPos] = useState(50);
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

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <div className="py-16 bg-[#111116] border border-[#22222e] rounded-3xl p-6 sm:p-10 my-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
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
              className={`px-3.5 py-1.5 rounded-lg text-xs font-condensed uppercase tracking-wider font-bold transition-all ${
                activeStory === idx
                  ? 'bg-[#E52328] text-white shadow'
                  : 'bg-[#181822] text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {s.name.split(' ')[0]} ({s.stat.split(' ')[0]})
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Drag Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Slider Visual Container */}
        <div 
          className="lg:col-span-8 relative h-80 sm:h-[420px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-zinc-800 shadow-2xl"
          onMouseMove={handleSliderMove}
          onTouchMove={handleSliderMove}
        >
          {/* AFTER Image (Full Background) */}
          <img
            src={current.afterImg}
            alt={`${current.name} After`}
            className="absolute inset-0 w-full h-full object-cover filter brightness-105"
          />
          <div className="absolute top-4 right-4 bg-emerald-600 text-white font-condensed uppercase tracking-wider text-xs font-bold px-3 py-1 rounded shadow">
            RESULT / PRESENT
          </div>

          {/* BEFORE Image (Clipped Left Layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={current.beforeImg}
              alt={`${current.name} Before`}
              className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-125 max-w-none"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="absolute top-4 left-4 bg-zinc-800 text-zinc-200 font-condensed uppercase tracking-wider text-xs font-bold px-3 py-1 rounded shadow">
              DAY 1 START
            </div>
          </div>

          {/* Draggable Divider Handle Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#E52328] border-2 border-white flex items-center justify-center text-white shadow-xl">
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Instruction helper tag */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-zinc-300 font-condensed uppercase tracking-wider pointer-events-none">
            Drag left / right to compare
          </div>
        </div>

        {/* Narrative & Milestone Data */}
        <div className="lg:col-span-4 space-y-5">
          <div className="space-y-1">
            <span className="text-[11px] font-condensed uppercase tracking-widest text-[#E52328] font-bold">
              VERIFIED ATLANTA ATHLETE
            </span>
            <h4 className="font-display text-3xl text-white uppercase tracking-wide leading-tight">
              {current.name}
            </h4>
            <div className="font-display text-2xl text-emerald-400">
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
            className="w-full py-3 bg-[#E52328] hover:bg-[#c4181d] text-white font-condensed uppercase tracking-wider text-xs font-bold rounded-lg transition-all shadow-md shadow-red-900/30 flex items-center justify-center gap-2"
          >
            <span>START YOUR TRANSFORMATION TODAY</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
