import React, { useState } from 'react';
import { Flame, Activity, Zap, Heart, ArrowRight, Sparkles, Clock, Target } from 'lucide-react';

interface EnergyCalculatorProps {
  onBookClass: (className: string) => void;
}

export const EnergyCalculator: React.FC<EnergyCalculatorProps> = ({ onBookClass }) => {
  const [selectedClass, setSelectedClass] = useState('bootcamp');
  const [intensity, setIntensity] = useState<'standard' | 'beast'>('beast');
  const [duration, setDuration] = useState<number>(45);

  const classData: Record<string, { name: string; baseCal: number; bpm: string; focus: string }> = {
    bootcamp: { name: 'The Signature Bootcamp', baseCal: 750, bpm: '155 - 180 BPM', focus: 'Total Body Metabolic Torch' },
    spin: { name: 'Rhythm Spin Experience', baseCal: 680, bpm: '150 - 175 BPM', focus: 'Aerobic Power & Leg Endurance' },
    glidezone: { name: 'GlideZone Step with Coach Daja', baseCal: 580, bpm: '140 - 165 BPM', focus: 'Agility, Coordination & Calves' },
    glt: { name: 'G.L.T. with Coach Cali', baseCal: 560, bpm: '135 - 160 BPM', focus: 'Glutes, Quads & Hamstring Sculpt' },
    recovery: { name: 'Active Stretch & Mobility', baseCal: 240, bpm: '100 - 120 BPM', focus: 'Fascia Release & Parasympathetic Reset' }
  };

  const active = classData[selectedClass];
  const multiplier = (duration / 45) * (intensity === 'beast' ? 1.22 : 1.0);
  const estimatedCalories = Math.round(active.baseCal * multiplier);

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0e] border-y border-[#1c1c24] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E52328]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181824] border border-[#2a2a3c] text-[#E52328] font-condensed uppercase tracking-widest text-xs font-bold">
            <Activity className="w-3.5 h-3.5" />
            <span>INTERACTIVE PERFORMANCE LAB</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.9]">
            ESTIMATE YOUR <span className="text-[#E52328]">BURN & OUTPUT.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            See how much energy you will unleash when health, hustle, and heart collide on our arena floor.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="max-w-4xl mx-auto bg-[#121218] border border-[#232330] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select Class */}
              <div className="space-y-2">
                <label className="text-xs font-condensed uppercase tracking-wider font-bold text-zinc-300 flex items-center justify-between">
                  <span>1. Select Workout Format:</span>
                  <span className="text-[#E52328] font-mono text-[11px]">{active.name}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'bootcamp', label: 'Bootcamp' },
                    { id: 'spin', label: 'Rhythm Spin' },
                    { id: 'glidezone', label: 'GlideZone Step' },
                    { id: 'glt', label: 'G.L.T. Sculpt' },
                    { id: 'recovery', label: 'Mobility Lab' }
                  ].map(c => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedClass(c.id)}
                      className={`p-2.5 rounded-xl border text-xs font-condensed uppercase tracking-wider font-bold transition-all text-center ${
                        selectedClass === c.id
                          ? 'bg-[#E52328] text-white border-[#E52328] shadow-md shadow-red-950/40'
                          : 'bg-[#181822] text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensity & Duration Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-condensed uppercase tracking-wider font-bold text-zinc-300 block">
                    2. Intensity Cadence:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setIntensity('standard')}
                      className={`p-2 rounded-lg border text-xs font-condensed uppercase tracking-wider font-semibold transition-all ${
                        intensity === 'standard'
                          ? 'bg-zinc-200 text-black border-white'
                          : 'bg-[#181822] text-zinc-400 border-zinc-800 hover:text-white'
                      }`}
                    >
                      Standard Hustle
                    </button>
                    <button
                      onClick={() => setIntensity('beast')}
                      className={`p-2 rounded-lg border text-xs font-condensed uppercase tracking-wider font-semibold transition-all ${
                        intensity === 'beast'
                          ? 'bg-[#E52328] text-white border-[#E52328] shadow'
                          : 'bg-[#181822] text-zinc-400 border-zinc-800 hover:text-white'
                      }`}
                    >
                      🔥 Beast Mode
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-condensed uppercase tracking-wider font-bold text-zinc-300 block">
                    3. Workout Stack:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setDuration(45)}
                      className={`p-2 rounded-lg border text-xs font-condensed uppercase tracking-wider font-semibold transition-all ${
                        duration === 45
                          ? 'bg-zinc-200 text-black border-white'
                          : 'bg-[#181822] text-zinc-400 border-zinc-800 hover:text-white'
                      }`}
                    >
                      45m (Single Class)
                    </button>
                    <button
                      onClick={() => setDuration(90)}
                      className={`p-2 rounded-lg border text-xs font-condensed uppercase tracking-wider font-semibold transition-all ${
                        duration === 90
                          ? 'bg-[#E52328] text-white border-[#E52328] shadow'
                          : 'bg-[#181822] text-zinc-400 border-zinc-800 hover:text-white'
                      }`}
                    >
                      90m (Double Stack)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Result Display Gauge */}
            <div className="lg:col-span-5 bg-[#181824] border border-[#2a2a3c] rounded-2xl p-6 sm:p-8 text-center space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E52328]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-1">
                <span className="text-[10px] font-condensed uppercase tracking-widest text-[#E52328] font-bold">
                  PROJECTED ENERGY EXPENDITURE
                </span>
                <div className="font-display text-6xl sm:text-7xl text-white tracking-tight leading-none animate-in zoom-in-95 duration-200">
                  {estimatedCalories}
                  <span className="text-2xl font-sans text-zinc-400 font-normal"> kcal</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-zinc-300 pt-2 border-t border-zinc-800">
                <div className="flex justify-between py-1 border-b border-zinc-800/60">
                  <span className="text-zinc-500">Target Heart Rate:</span>
                  <span className="font-mono text-white font-semibold flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-[#E52328] fill-[#E52328]" />
                    {active.bpm}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800/60">
                  <span className="text-zinc-500">Metabolic Focus:</span>
                  <span className="text-zinc-300 font-medium">{active.focus}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Post-Workout Recovery:</span>
                  <span className="text-emerald-400 font-medium">Spreading the Health Juice</span>
                </div>
              </div>

              <button
                onClick={() => onBookClass(active.name)}
                className="w-full py-3.5 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl tracking-wider uppercase rounded-xl transition-all shadow-xl shadow-red-900/40 flex items-center justify-center gap-2 group transform active:scale-95"
              >
                <span>BOOK THIS CLASS • FIRST IS FREE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
