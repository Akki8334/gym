import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Quote, Sparkles, ChevronLeft, ChevronRight, Award, Flame, ArrowRight } from 'lucide-react';
import { TransformationBeforeAfter } from './TransformationBeforeAfter';

interface TransformationSectionProps {
  onOpenFreePass: () => void;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({ onOpenFreePass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0c10] border-t border-b border-[#1c1c24] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-[#E52328]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AUTHENTIC COMMUNITY TRANSFORMATIONS</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
            REAL PEOPLE. <br />
            <span className="text-[#E52328]">REAL WORK. REAL RESULTS.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            No empty marketing promises. Real men and women who showed up, surrendered their excuses, and put in the work on Metropolitan Parkway.
          </p>
        </div>

        {/* Featured Story Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111116] border border-[#22222c] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
          {/* Left: Member Photo */}
          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <img
              src={active.image}
              alt={active.name}
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <span className="bg-[#E52328] !text-white text-[10px] font-condensed font-bold uppercase tracking-wider px-2.5 py-1 rounded inline-block mb-1 shadow-md">
                {active.achievement}
              </span>
              <div className="text-xs !text-white/90 font-medium">
                E.F.F.E.C.T. Member Since {active.memberSince}
              </div>
            </div>
          </div>

          {/* Right: Member Story Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative">
              <Quote className="w-10 h-10 text-[#E52328]/30 mb-2" />
              <blockquote className="text-zinc-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed italic">
                "{active.quote}"
              </blockquote>
            </div>

            <div>
              <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase leading-tight">
                {active.name}
              </h3>
              <p className="text-[#E52328] text-xs uppercase font-condensed tracking-wider font-bold">
                {active.role}
              </p>
            </div>

            {/* Slider Controls & Conversion Trigger */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-condensed uppercase tracking-wider text-zinc-400 px-2">
                  {currentIndex + 1} of {TESTIMONIALS_DATA.length}
                </span>
                <button
                  onClick={next}
                  className="p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={onOpenFreePass}
                className="px-6 py-3 bg-[#E52328] hover:bg-[#c4181d] text-white font-condensed uppercase tracking-wider text-xs font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-red-900/30"
              >
                <span>WRITE YOUR OWN SUCCESS STORY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Before & After Drag Comparison */}
        <TransformationBeforeAfter onClaimFreePass={onOpenFreePass} />
      </div>
    </section>
  );
};
