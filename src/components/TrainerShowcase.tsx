import React from 'react';
import { TRAINERS_DATA, Trainer } from '../data/trainersData';
import { User, Quote, ArrowRight, Sparkles } from 'lucide-react';

interface TrainerShowcaseProps {
  onSelectTrainer: (trainer: Trainer) => void;
}

export const TrainerShowcase: React.FC<TrainerShowcaseProps> = ({ onSelectTrainer }) => {
  return (
    <section id="trainers" className="py-24 sm:py-32 bg-[#0c0c10] border-t border-b border-[#1c1c24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE E.F.F.E.C.T. COACHING ROSTER</span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
              MEET THE PEOPLE <br />
              <span className="text-[#E52328]">BEHIND THE EFFECT.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Led by founder <strong className="text-white font-semibold">Dooley</strong>, our elite staff is comprised of former Division-I standouts, pro athletes, and certified fitness leaders who hold you accountable every single repetition.
            </p>
          </div>

          <div className="text-zinc-400 text-xs font-condensed uppercase tracking-wider flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E52328]" />
            <span>Click any coach to view full biography & class schedule</span>
          </div>
        </div>

        {/* Trainers Editorial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRAINERS_DATA.map((trainer) => (
            <div
              key={trainer.id}
              onClick={() => onSelectTrainer(trainer)}
              className="group relative bg-[#121218] border border-[#22222e] hover:border-[#E52328] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-red-950/20"
            >
              {/* Photo Area */}
              <div className="relative h-80 sm:h-96 overflow-hidden bg-zinc-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-[#121218]/40 to-transparent" />

                {/* Experience Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E52328] text-white text-[10px] font-condensed font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                    {trainer.experienceYears}+ YRS COACHING
                  </span>
                </div>

                {/* Nickname pill */}
                {trainer.nickname && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/10 text-[11px] font-condensed font-semibold uppercase text-zinc-300">
                    "{trainer.nickname}"
                  </div>
                )}
              </div>

              {/* Information Body */}
              <div className="p-6 relative z-10 space-y-3">
                <div>
                  <div className="text-[11px] font-condensed uppercase tracking-widest text-[#E52328] font-bold">
                    {trainer.role}
                  </div>
                  <h3 className="font-display text-3xl text-white tracking-wide uppercase group-hover:text-[#E52328] transition-colors">
                    {trainer.name}
                  </h3>
                </div>

                {/* Quote Snippet */}
                <p className="text-zinc-400 text-xs italic line-clamp-2">
                  "{trainer.quote}"
                </p>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {trainer.specialty.slice(0, 2).map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-condensed uppercase tracking-wider bg-zinc-800/80 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Hover CTA Indicator */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-condensed uppercase tracking-wider text-zinc-400 group-hover:text-white transition-colors">
                  <span className="font-bold">View Profile & Schedule</span>
                  <ArrowRight className="w-4 h-4 text-[#E52328] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
