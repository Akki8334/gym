import React, { useEffect } from 'react';
import { X, Clock, Flame, Check, ArrowRight, Dumbbell, Sparkles } from 'lucide-react';
import { FitnessClass } from '../data/classesData';

interface ClassModalProps {
  fitnessClass: FitnessClass | null;
  isOpen: boolean;
  onClose: () => void;
  onBookClass: (className: string) => void;
}

export const ClassModal: React.FC<ClassModalProps> = ({
  fitnessClass,
  isOpen,
  onClose,
  onBookClass
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !fitnessClass) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[88vh] bg-[#111116] border border-[#2a2a36] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="class-modal-title"
      >
        {/* Close Button - Always pinned top-right */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 text-zinc-300 hover:text-white rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/10 transition-all shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Banner - Compact athletic height */}
        <div className="relative h-28 sm:h-36 bg-zinc-900 shrink-0 overflow-hidden">
          <img 
            src={fitnessClass.image} 
            alt={fitnessClass.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/60 to-black/30" />
          
          <div className="absolute bottom-3 left-4 sm:left-6 right-14">
            <span className="bg-[#E52328] text-white text-[10px] font-condensed font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-1 shadow">
              {fitnessClass.category}
            </span>
            <h3 
              id="class-modal-title"
              className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight line-clamp-1 drop-shadow-md"
            >
              {fitnessClass.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 p-2.5 sm:p-3 bg-[#181822] border border-[#262634] rounded-xl text-center">
            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 block font-semibold">Intensity</span>
              <div className="flex items-center justify-center gap-1 text-[#E52328] font-bold text-xs sm:text-sm mt-0.5">
                <Flame className="w-3.5 h-3.5 fill-[#E52328]" />
                <span>{fitnessClass.intensity} / 5</span>
              </div>
            </div>

            <div className="border-x border-zinc-800">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 block font-semibold">Duration</span>
              <div className="flex items-center justify-center gap-1 text-white font-bold text-xs sm:text-sm mt-0.5">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                <span>{fitnessClass.durationMinutes} Min</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-zinc-400 block font-semibold">Burn Rate</span>
              <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-xs sm:text-sm mt-0.5">
                <Dumbbell className="w-3.5 h-3.5 text-emerald-500" />
                <span>{fitnessClass.caloriesBurned}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase font-condensed tracking-wider text-zinc-400 font-bold mb-1.5 flex items-center gap-1.5">
              <span>The Experience & What to Expect</span>
            </h4>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {fitnessClass.longDescription}
            </p>
          </div>

          {/* What to Bring Checklist */}
          <div>
            <h4 className="text-xs uppercase font-condensed tracking-wider text-zinc-400 font-bold mb-1.5">
              What to Bring / Requirements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              {fitnessClass.whatToBring.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#181822] p-2.5 rounded-lg border border-zinc-800/80">
                  <Check className="w-3.5 h-3.5 text-[#E52328] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Highlights */}
          <div className="bg-[#181822]/80 border border-zinc-800/80 p-3 sm:p-3.5 rounded-xl text-xs space-y-1.5">
            <span className="text-zinc-400 uppercase font-semibold tracking-wider block text-[11px]">
              Available Times & Sessions:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {fitnessClass.scheduleHighlights.map((s, idx) => (
                <div key={idx} className="text-zinc-300 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52328]" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pinned Sticky Footer - Always Accessible */}
        <div className="p-3 sm:p-4 border-t border-zinc-800/80 bg-[#14141c] flex items-center justify-between gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
            <Sparkles className="w-4 h-4 text-[#E52328]" />
            <span>First Class is 100% Free</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookClass(fitnessClass.name);
            }}
            className="flex-1 sm:flex-initial sm:min-w-[260px] py-3 px-5 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-lg tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
          >
            <span>BOOK THIS CLASS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
