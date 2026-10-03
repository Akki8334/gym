import React from 'react';
import { X, Clock, Flame, User, Check, ArrowRight, ShieldCheck, Dumbbell } from 'lucide-react';
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
  if (!isOpen || !fitnessClass) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-[#111116] border border-[#2a2a36] rounded-2xl shadow-2xl overflow-hidden text-white animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-white rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Image */}
        <div className="relative h-56 sm:h-64 bg-zinc-900">
          <img 
            src={fitnessClass.image} 
            alt={fitnessClass.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/50 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
            <div>
              <span className="bg-[#E52328] text-white text-[11px] font-condensed font-bold uppercase tracking-wider px-2.5 py-1 rounded inline-block mb-1.5">
                {fitnessClass.category}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase leading-none">
                {fitnessClass.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3 bg-[#181822] border border-[#262634] rounded-xl text-center">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-semibold">Intensity</span>
              <div className="flex items-center justify-center gap-1 text-[#E52328] font-bold text-sm mt-0.5">
                <Flame className="w-4 h-4 fill-[#E52328]" />
                <span>{fitnessClass.intensity} / 5</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-semibold">Duration</span>
              <div className="flex items-center justify-center gap-1 text-white font-bold text-sm mt-0.5">
                <Clock className="w-4 h-4 text-zinc-400" />
                <span>{fitnessClass.durationMinutes} Minutes</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-semibold">Burn Rate</span>
              <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-sm mt-0.5">
                <Dumbbell className="w-4 h-4 text-emerald-500" />
                <span>{fitnessClass.caloriesBurned}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase font-condensed tracking-wider text-zinc-400 font-bold mb-2">
              The Experience & What to Expect
            </h4>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {fitnessClass.longDescription}
            </p>
          </div>

          {/* What to Bring Checklist */}
          <div>
            <h4 className="text-xs uppercase font-condensed tracking-wider text-zinc-400 font-bold mb-2">
              What to Bring / Requirements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              {fitnessClass.whatToBring.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#181822] p-2.5 rounded-lg border border-zinc-800">
                  <Check className="w-4 h-4 text-[#E52328] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Highlights */}
          <div className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl text-xs space-y-1">
            <span className="text-zinc-400 uppercase font-semibold tracking-wider block mb-1">
              Class Times:
            </span>
            {fitnessClass.scheduleHighlights.map((s, idx) => (
              <div key={idx} className="text-zinc-300 font-medium">
                • {s}
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="pt-2 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBookClass(fitnessClass.name);
              }}
              className="flex-1 py-3.5 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl tracking-wider uppercase rounded-lg transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
            >
              <span>BOOK THIS CLASS (FIRST CLASS FREE)</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
