import React, { useEffect } from 'react';
import { X, Award, Flame, Calendar, Quote, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { Trainer } from '../data/trainersData';

interface TrainerModalProps {
  trainer: Trainer | null;
  isOpen: boolean;
  onClose: () => void;
  onBookSession: (trainerName: string) => void;
}

export const TrainerModal: React.FC<TrainerModalProps> = ({
  trainer,
  isOpen,
  onClose,
  onBookSession
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

  if (!isOpen || !trainer) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[88vh] bg-[#111116] border border-[#2a2a36] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row text-white animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 !text-white hover:text-white rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 transition-all shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 !text-white" />
        </button>

        <div className="flex flex-col md:flex-row w-full max-h-[88vh] overflow-y-auto md:overflow-hidden">
          {/* Trainer Image Column */}
          <div className="relative h-52 sm:h-64 md:h-auto md:w-5/12 bg-zinc-900 shrink-0">
            <img 
              src={trainer.image} 
              alt={trainer.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:hidden" />
            <div className="absolute bottom-3 left-3 z-10">
              <span className="bg-[#E52328] !text-white text-[11px] font-condensed font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow-md">
                {trainer.experienceYears}+ Years Coaching
              </span>
            </div>
          </div>

          {/* Trainer Info Column */}
          <div className="p-5 sm:p-6 md:w-7/12 flex flex-col justify-between overflow-y-auto space-y-4">
            <div>
              <div className="text-xs uppercase font-condensed tracking-widest text-[#E52328] font-bold mb-1">
                {trainer.role}
              </div>
              <h3 className="font-display text-4xl text-white tracking-wide uppercase leading-none">
                {trainer.name}
              </h3>
              {trainer.nickname && (
                <div className="text-zinc-400 text-sm font-semibold mb-3">
                  "{trainer.nickname}"
                </div>
              )}

              {/* Motivational Quote */}
              <div className="relative bg-[#181822] border-l-2 border-[#E52328] p-3 rounded-r-lg my-4 text-xs italic text-zinc-300">
                <Quote className="w-3.5 h-3.5 text-[#E52328] absolute -top-1.5 -left-2 bg-[#181822] rounded-full" />
                "{trainer.quote}"
              </div>

              {/* Bio */}
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                {trainer.bio}
              </p>

              {/* Specialties */}
              <div className="space-y-2 mb-4">
                <div className="text-xs uppercase font-semibold tracking-wider text-zinc-400">Specialties</div>
                <div className="flex flex-wrap gap-1.5">
                  {trainer.specialty.map((s, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] bg-zinc-800/80 border border-zinc-700/60 text-zinc-200 px-2.5 py-0.5 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Classes Taught */}
              <div className="space-y-1.5 mb-5 text-xs text-zinc-400">
                <div className="uppercase font-semibold tracking-wider text-zinc-300">Signature Classes:</div>
                <ul className="list-disc list-inside text-zinc-300 space-y-0.5">
                  {trainer.classesTaught.map((c, idx) => (
                    <li key={idx}><span className="text-white">{c}</span></li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 border-t border-zinc-800 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  onBookSession(trainer.name);
                }}
                className="flex-1 py-3 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-lg tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>BOOK WITH {trainer.nickname || trainer.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://www.instagram.com/effectfitness/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg flex items-center justify-center transition-colors"
                title="Follow on Instagram"
              >
                <InstagramIcon className="w-5 h-5 text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
