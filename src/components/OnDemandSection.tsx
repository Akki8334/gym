import React from 'react';
import { Smartphone, Tv, Radio, CheckCircle2, ArrowRight, Sparkles, Download, Layers } from 'lucide-react';

interface OnDemandSectionProps {
  onOpenFreePass: () => void;
}

export const OnDemandSection: React.FC<OnDemandSectionProps> = ({ onOpenFreePass }) => {
  const streamSchedule = [
    { days: 'Monday – Thursday', times: '5:30 AM | 6:30 AM | 12:00 PM | 5:30 PM' },
    { days: 'Friday', times: '5:30 AM | 6:30 AM | 12:00 PM' },
    { days: 'Saturday', times: '8:00 AM | 10:00 AM' }
  ];

  const gearItems = [
    'Loop Leg Resistance Bands',
    'Thigh / Hip Resistance Band',
    'Light & Heavy Dumbbells',
    'Ankle Weights & Step Brick'
  ];

  return (
    <section id="on-demand" className="py-24 sm:py-32 bg-[#08080a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#E52328]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>GLOBAL LIVESTREAM & ON-DEMAND ARCHIVE</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
              TAKE E.F.F.E.C.T. <br />
              <span className="text-[#E52328]">WITH YOU.</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Can't make it to Metropolitan Parkway? Stream the full Atlanta gym experience from your living room, hotel, or backyard. Join daily livestreams or access our library of 150+ on-demand sessions anytime.
            </p>

            {/* Pricing Callout Badge */}
            <div className="inline-flex items-center gap-3 p-3 px-4 rounded-xl bg-[#14141c] border border-[#282838]">
              <span className="font-display text-3xl text-white tracking-wide">$40<span className="text-sm font-sans text-zinc-400"> / month</span></span>
              <span className="text-zinc-600">|</span>
              <span className="text-xs font-condensed uppercase tracking-wider font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                Includes 7-Day Free Trial
              </span>
            </div>

            {/* Daily Livestream Timetable */}
            <div className="p-4 rounded-xl bg-[#111116] border border-zinc-800 space-y-2">
              <div className="text-xs font-condensed uppercase tracking-wider text-zinc-400 font-bold flex items-center justify-between">
                <span>Daily Broadcast Schedule:</span>
                <span className="text-[#E52328]">Streaming Live</span>
              </div>
              <div className="space-y-1.5 text-xs text-zinc-300">
                {streamSchedule.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-zinc-900 last:border-0">
                    <span className="font-semibold text-white">{item.days}:</span>
                    <span className="text-zinc-400 font-mono">{item.times}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Checklist */}
            <div className="space-y-2">
              <span className="text-xs uppercase font-condensed tracking-wider font-bold text-zinc-400 block">
                Recommended At-Home Gear:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                {gearItems.map((gear, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E52328] shrink-0" />
                    <span>{gear}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Store Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://apps.apple.com/us/app/effect-on-demand/id1512223068"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-white text-black hover:bg-zinc-200 font-condensed uppercase tracking-wider text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD ON APPLE APP STORE</span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.nonestop.gymapp&hl=en"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-condensed uppercase tracking-wider text-xs font-bold rounded-xl border border-zinc-700 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-zinc-400" />
                <span>GET ON GOOGLE PLAY</span>
              </a>
            </div>
          </div>

          {/* Right Column: App & Stream Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-sm rounded-[36px] bg-black border-4 border-zinc-800 p-3 shadow-2xl shadow-red-950/30 overflow-hidden">
              {/* Phone Camera Notch */}
              <div className="w-32 h-4 bg-zinc-800 rounded-full mx-auto mb-2" />

              {/* Screen Preview */}
              <div className="rounded-[28px] bg-[#111116] overflow-hidden border border-zinc-900 relative">
                {/* Live Video Banner */}
                <div className="relative h-60 bg-zinc-900">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974736960-59CTIF3HZ9JUT1HKFFDJ/2I1A1595.jpeg"
                    alt="E.F.F.E.C.T. Live Stream Workout"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#E52328] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                    <span>LIVESTREAM NOW</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur text-white text-[10px] font-mono px-2 py-0.5 rounded">
                    428 Watching
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <div className="text-[10px] uppercase font-condensed tracking-wider text-zinc-300">Coach Dooley & Team</div>
                    <div className="font-display text-lg text-white">Full-Body High-Impact Burn</div>
                  </div>
                </div>

                {/* Workout Library Items in App */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-condensed uppercase tracking-wider text-zinc-400 font-bold">
                    <span>On-Demand Category Tracks</span>
                    <span className="text-[#E52328]">150+ Videos</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { title: 'GlideZone Step Flow #42', coach: 'Coach Daja', dur: '45m' },
                      { title: 'GLT Resistance Band Fire', coach: 'Coach Cali', dur: '40m' },
                      { title: 'Core Shred & Ab Gauntlet', coach: 'Zan Johnson', dur: '20m' },
                      { title: 'Sunday Deep Hip Mobility', coach: 'Daniel Warren', dur: '30m' }
                    ].map((track, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-[#181822] border border-zinc-800/80 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-semibold text-white text-xs">{track.title}</div>
                          <div className="text-[11px] text-zinc-400">{track.coach}</div>
                        </div>
                        <span className="font-mono text-[11px] text-[#E52328] font-bold">{track.dur}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
