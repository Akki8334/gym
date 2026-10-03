import React, { useState } from 'react';
import { CLASSES_DATA, FitnessClass } from '../data/classesData';
import { Flame, Clock, Dumbbell, ArrowRight, Sparkles, Filter } from 'lucide-react';

interface ClassExperienceProps {
  onSelectClass: (fitnessClass: FitnessClass) => void;
  onBookClassDirect: (className: string) => void;
}

export const ClassExperience: React.FC<ClassExperienceProps> = ({
  onSelectClass,
  onBookClassDirect
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Classes' },
    { id: 'bootcamp', label: 'Signature Bootcamp' },
    { id: 'spin', label: 'Rhythm Spin' },
    { id: 'auxiliary', label: 'GlideZone & GLT' },
    { id: 'recovery', label: 'Stretch & Recovery' },
    { id: 'personal', label: '1-on-1 Performance' }
  ];

  const filteredClasses = activeCategory === 'all'
    ? CLASSES_DATA
    : CLASSES_DATA.filter(c => c.category === activeCategory);

  return (
    <section id="classes" className="py-24 sm:py-32 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE E.F.F.E.C.T. CLASS MATRIX</span>
            </div>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
              FIND YOUR FAVORITE <br />
              <span className="text-[#E52328]">WAY TO MOVE.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Seven days a week. Multiple high-energy training formats designed to sculpt lean muscle, incinerate fat, and test your mental limits. Your first class is completely free.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-condensed uppercase tracking-wider font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#E52328] text-white shadow-lg shadow-red-900/30'
                    : 'bg-[#15151c] hover:bg-zinc-800 text-zinc-400 hover:text-white border border-[#23232c]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Classes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#111116] border border-[#22222c] hover:border-[#E52328] rounded-2xl overflow-hidden hover-card-3d flex flex-col justify-between"
            >
              {/* Image Area with Athletic Overlays */}
              <div className="relative h-64 overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-[#111116]/40 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-[#E52328] text-white text-[11px] font-condensed font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 text-white text-xs font-semibold">
                    <Flame className="w-3.5 h-3.5 text-[#E52328] fill-[#E52328]" />
                    <span>Lvl {item.intensity} / 5</span>
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-zinc-300 font-condensed uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{item.durationMinutes} Mins</span>
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <Dumbbell className="w-3.5 h-3.5" />
                    <span>{item.caloriesBurned}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] font-condensed uppercase tracking-wider text-zinc-400 font-semibold">
                    Lead: {item.trainerRole}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase group-hover:text-[#E52328] transition-colors leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2">
                  <button
                    onClick={() => onSelectClass(item)}
                    className="flex-1 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-condensed uppercase tracking-wider text-xs font-bold transition-colors"
                  >
                    View Class Details
                  </button>

                  <button
                    onClick={() => onBookClassDirect(item.name)}
                    className="p-2.5 bg-[#E52328] hover:bg-[#c4181d] text-white rounded-lg transition-colors group-hover:scale-105"
                    title={`Book ${item.name}`}
                    aria-label={`Book ${item.name}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
