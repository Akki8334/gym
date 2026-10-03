import React, { useState } from 'react';
import { Target, Dumbbell, UserCheck, Flame, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface PersonalTrainingProps {
  onOpenConsultation: (trainer?: string) => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ onOpenConsultation }) => {
  // Interactive mini-matchmaker
  const [goal, setGoal] = useState('fat-loss');
  const [format, setFormat] = useState('1-on-1');

  const getMatchRecommendation = () => {
    if (goal === 'glutes') return { name: 'Coach Leiana "Cali" Williams', role: 'GLT & Lower Body Specialist', photo: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/6e0e46c3-1f3d-471d-8ced-5486d6a0cfe0/merch-36.png' };
    if (goal === 'athletic') return { name: 'Coach Reggie Ball', role: 'Former Division-I & NFL Athlete', photo: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/621fabef-a85b-466b-beac-a5e4b06b0ba7/2I1A0769.jpeg' };
    if (goal === 'strength') return { name: 'Coach Shayon Green', role: 'Explosive Strength & Barbell Specialist', photo: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974759383-ML5HHI5FJ3VQIDM2VRJD/IMG_8081.jpeg' };
    return { name: 'Dooley & Master Staff', role: 'Head Transformation Coach', photo: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/31fbea14-e02d-4a72-97f4-b537413e9a6c/3M8A3300.jpeg' };
  };

  const match = getMatchRecommendation();

  return (
    <section id="training" className="py-24 sm:py-32 bg-[#08080a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>INDIVIDUAL & SMALL GROUP MASTERY</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
              TRAIN FOR <br />
              <span className="text-[#E52328]">MORE.</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              When group workouts need individual precision, our 1-on-1 and small group performance coaching bridges the gap. Mentored directly by collegiate standouts, former professional athletes, and seasoned biomechanics experts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-300 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#121218] border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#E52328] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">1-on-1 Programming</strong>
                  Custom periodized lifting cycles & metabolic conditioning tailored to your body.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#121218] border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#E52328] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Small Group Squads</strong>
                  Intimate pods of ~15 athletes sharing intense coaching and shared camaraderie.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#121218] border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#E52328] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Composition & Metrics</strong>
                  Regular body composition assessments, strength PR logs, and milestone benchmarks.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#121218] border border-zinc-800">
                <CheckCircle2 className="w-4 h-4 text-[#E52328] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Transparent Structure</strong>
                  $15/mo gym facility check-in fee + trainer rates set directly per coach.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation()}
                className="px-8 py-4 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl tracking-wider uppercase rounded-xl shadow-xl shadow-red-900/40 transition-all transform active:scale-95 flex items-center gap-2 group"
              >
                <span>EXPLORE PERSONAL TRAINING</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Interactive Trainer Matchmaker Card */}
          <div className="lg:col-span-6 bg-[#121218] border border-[#232330] rounded-2xl p-6 sm:p-8 relative">
            <div className="absolute top-4 right-4 bg-[#E52328]/20 border border-[#E52328]/40 text-[#E52328] text-[10px] font-condensed font-bold uppercase tracking-wider px-2.5 py-1 rounded">
              MATCHMAKER ENGINE
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                  Find Your Ideal Coach
                </h3>
                <p className="text-zinc-400 text-xs mt-1">
                  Select your objective below to see your recommended E.F.F.E.C.T. specialist:
                </p>
              </div>

              {/* Goal Pills */}
              <div className="space-y-2">
                <label className="text-xs uppercase font-condensed font-semibold tracking-wider text-zinc-300 block">
                  1. Your Primary Focus:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'fat-loss', label: 'Total Fat Loss & Conditioning' },
                    { id: 'athletic', label: 'Speed & Sports Athleticism' },
                    { id: 'glutes', label: 'Glutes, Legs & Sculpting' },
                    { id: 'strength', label: 'Powerlifting & Muscle Mass' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setGoal(item.id)}
                      className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                        goal === item.id
                          ? 'bg-[#E52328] !text-white border-[#E52328] shadow-sm'
                          : 'bg-[#181822] border-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format Buttons */}
              <div className="space-y-2">
                <label className="text-xs uppercase font-condensed font-semibold tracking-wider text-zinc-300 block">
                  2. Training Format:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => setFormat('1-on-1')}
                    className={`p-2.5 rounded-lg border text-center font-condensed uppercase tracking-wider font-bold transition-all ${
                      format === '1-on-1'
                        ? 'bg-[#E52328] !text-white border-[#E52328] shadow-sm'
                        : 'bg-[#181822] border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    1-on-1 Dedicated
                  </button>
                  <button
                    onClick={() => setFormat('small-group')}
                    className={`p-2.5 rounded-lg border text-center font-condensed uppercase tracking-wider font-bold transition-all ${
                      format === 'small-group'
                        ? 'bg-[#E52328] !text-white border-[#E52328] shadow-sm'
                        : 'bg-[#181822] border-zinc-800 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Small Group Squad (~15)
                  </button>
                </div>
              </div>

              {/* Matched Coach Result Box */}
              <div className="p-4 rounded-xl bg-[#181824] border border-[#2c2c3c] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={match.photo}
                    alt={match.name}
                    className="w-14 h-14 rounded-xl object-cover border border-[#E52328]"
                  />
                  <div>
                    <span className="text-[10px] font-condensed uppercase tracking-wider text-[#E52328] font-bold block">
                      Recommended Specialist:
                    </span>
                    <h4 className="font-display text-xl text-white tracking-wide leading-tight">
                      {match.name}
                    </h4>
                    <span className="text-xs text-zinc-400">{match.role}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation(match.name)}
                  className="px-4 py-2 bg-[#E52328] hover:bg-[#c4181d] text-white font-condensed uppercase tracking-wider text-xs font-bold rounded-lg transition-colors shrink-0 shadow"
                >
                  Consult Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
