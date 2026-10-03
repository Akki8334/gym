import React from 'react';
import { ArrowRight, Flame, Shield, Users, Trophy, Sparkles } from 'lucide-react';

interface BrandIntroProps {
  onOpenFreePass: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onOpenFreePass }) => {
  const pillars = [
    {
      icon: <Flame className="w-6 h-6 text-[#E52328]" />,
      title: 'Drumline Energy',
      description: 'Bass-heavy playlists, synchronized rhythm, and high-octane tempo that transforms ordinary cardio into an HBCU halftime drumline experience.'
    },
    {
      icon: <Shield className="w-6 h-6 text-[#E52328]" />,
      title: 'Radical Accountability',
      description: '“When one wins, we all win.” Trainers know your name from day one, classmates celebrate your PRs, and no one is left behind.'
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#E52328]" />,
      title: 'Performing Arts Movement',
      description: 'Not a sterile chain gym. We treat athletic conditioning as a physical craft—building agility, explosive functional power, and mental resilience.'
    },
    {
      icon: <Users className="w-6 h-6 text-[#E52328]" />,
      title: 'Culture & Community',
      description: 'The birthplace of dozens of member-owned businesses. Home to our All-Star Saturday Market, Spreading the Health Juice Bar, and community giving.'
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0c0c10] border-t border-b border-[#1c1c24] relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#E52328]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          {/* Left Column: Big Statement */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE E.F.F.E.C.T. PHENOMENON</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
              MORE THAN A WORKOUT. <br />
              <span className="text-[#E52328]">IT'S AN EXPERIENCE.</span>
            </h2>
          </div>

          {/* Right Column: Narrative & Acronym */}
          <div className="lg:col-span-6 space-y-6 lg:pt-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
            <p>
              Welcome to <strong className="text-white font-semibold">E.F.F.E.C.T. Fitness Performing Arts Gym</strong> — where Health, Hustle, and Heart collide. Located in the heart of Southwest Atlanta on Metropolitan Parkway, we don't just train bodies; we build character, consistency, and unrelenting confidence.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base">
              Founded by visionary head coach <strong className="text-white">Dooley</strong>, our community was built on a singular promise: when you surrender your excuses and commit to the process, we commit to you. Thousands have changed their bodies, shedding hundreds of pounds and reclaiming vitality.
            </p>

            {/* Acronym Breakdown Card */}
            <div className="p-5 rounded-xl bg-[#14141c] border border-[#262634] space-y-2">
              <div className="text-xs font-condensed uppercase tracking-wider text-zinc-400 font-bold">
                THE E.F.F.E.C.T. FORMULA:
              </div>
              <div className="grid grid-cols-5 gap-2 text-center pt-1 font-display tracking-wider">
                <div className="bg-[#1c1c28] p-2 rounded border border-zinc-800">
                  <span className="text-[#E52328] block text-xl">E</span>
                  <span className="text-[9px] uppercase font-condensed text-zinc-300">Effective</span>
                </div>
                <div className="bg-[#1c1c28] p-2 rounded border border-zinc-800">
                  <span className="text-[#E52328] block text-xl">F</span>
                  <span className="text-[9px] uppercase font-condensed text-zinc-300">Focused</span>
                </div>
                <div className="bg-[#1c1c28] p-2 rounded border border-zinc-800">
                  <span className="text-[#E52328] block text-xl">F</span>
                  <span className="text-[9px] uppercase font-condensed text-zinc-300">Fast</span>
                </div>
                <div className="bg-[#1c1c28] p-2 rounded border border-zinc-800">
                  <span className="text-[#E52328] block text-xl">E</span>
                  <span className="text-[9px] uppercase font-condensed text-zinc-300">Exceptional</span>
                </div>
                <div className="bg-[#1c1c28] p-2 rounded border border-zinc-800">
                  <span className="text-[#E52328] block text-xl">C</span>
                  <span className="text-[9px] uppercase font-condensed text-zinc-300">Creative</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenFreePass}
                className="inline-flex items-center gap-2 text-sm font-condensed uppercase tracking-wider text-white hover:text-[#E52328] font-bold transition-colors group"
              >
                <span>CLAIM YOUR FIRST CLASS FOR FREE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#E52328]" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cultural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121218] border border-[#20202c] hover:border-[#E52328]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a1a24] border border-zinc-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#E52328]/40 transition-all">
                {pillar.icon}
              </div>
              <h3 className="font-display text-2xl text-white tracking-wide uppercase mb-2 group-hover:text-[#E52328] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
