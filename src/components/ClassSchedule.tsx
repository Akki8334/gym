import React, { useState } from 'react';
import { WEEKLY_SCHEDULE, SCHEDULE_DAYS, ScheduleItem } from '../data/scheduleData';
import { Clock, User, MapPin, Flame, Calendar, ArrowRight, ShieldCheck, Smartphone } from 'lucide-react';

interface ClassScheduleProps {
  onBookClass: (item: ScheduleItem) => void;
  onOpenFreePass: () => void;
}

export const ClassSchedule: React.FC<ClassScheduleProps> = ({ onBookClass, onOpenFreePass }) => {
  const [selectedDay, setSelectedDay] = useState<string>('monday');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const daySchedule = WEEKLY_SCHEDULE.filter(item => {
    const matchesDay = item.day === selectedDay;
    const matchesCat = filterCategory === 'all' || item.category === filterCategory;
    return matchesDay && matchesCat;
  });

  return (
    <section id="schedule" className="py-24 sm:py-32 bg-[#0c0c10] border-t border-b border-[#1c1c24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>WEEKLY TIMETABLE & SPOT RESERVATION</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
            READY TO <span className="text-[#E52328]">MOVE?</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Reserve your class spot below. Arrive 15 minutes before class with a valid photo ID, hydration, and your best energy. Your first class is on us!
          </p>
        </div>

        {/* Day of Week Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {SCHEDULE_DAYS.map((day) => (
            <button
              key={day.id}
              onClick={() => setSelectedDay(day.id)}
              className={`px-5 py-3 rounded-xl font-condensed uppercase tracking-wider text-sm font-bold transition-all shrink-0 flex flex-col items-center min-w-[90px] ${
                selectedDay === day.id
                  ? 'bg-[#E52328] text-white shadow-lg shadow-red-900/40 scale-105'
                  : 'bg-[#15151c] hover:bg-zinc-800 text-zinc-400 hover:text-white border border-[#23232c]'
              }`}
            >
              <span>{day.short}</span>
              <span className="text-[10px] font-normal opacity-80">{day.label}</span>
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-[#121218] p-3 rounded-xl border border-zinc-800">
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              { id: 'all', label: 'All Sessions' },
              { id: 'bootcamp', label: 'Bootcamp' },
              { id: 'spin', label: 'Spin Cycle' },
              { id: 'auxiliary', label: 'GlideZone / GLT' },
              { id: 'recovery', label: 'Mobility Lab' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-condensed uppercase tracking-wider font-semibold transition-colors ${
                  filterCategory === cat.id
                    ? 'bg-[#E52328] text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live Class Capacity Updated</span>
          </div>
        </div>

        {/* Schedule Listing Grid */}
        {daySchedule.length > 0 ? (
          <div className="space-y-3">
            {daySchedule.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-xl bg-[#14141c] hover:bg-[#181824] border border-[#22222e] hover:border-[#E52328]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                {/* Time & Class Title */}
                <div className="flex items-start sm:items-center gap-4">
                  <div className="min-w-[100px] bg-[#1a1a24] border border-zinc-800 py-2 px-3 rounded-lg text-center shrink-0">
                    <span className="font-display text-xl sm:text-2xl text-white tracking-wide block leading-none">
                      {item.time.split(' ')[0]}
                    </span>
                    <span className="text-[10px] uppercase font-condensed font-bold text-[#E52328]">
                      {item.time.split(' ')[1]}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#E52328]/20 text-[#E52328] text-[10px] font-condensed font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#E52328]/30">
                        {item.category}
                      </span>
                      <span className="text-zinc-500 text-xs">• {item.duration}</span>
                    </div>

                    <h3 className="font-display text-2xl text-white tracking-wide uppercase group-hover:text-[#E52328] transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400 pt-0.5">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-[#E52328]" />
                        <span>Coach {item.trainer}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{item.studio}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Spot Counter & Action Button */}
                <div className="flex items-center justify-between md:justify-end gap-4 pt-3 md:pt-0 border-t md:border-t-0 border-zinc-800">
                  <div className="text-right">
                    <div className={`text-xs font-bold font-condensed uppercase tracking-wider ${
                      item.spotsLeft <= 2 ? 'text-red-400' : 'text-amber-400'
                    }`}>
                      {item.spotsLeft === 0 ? 'CLASS FULL (WAITLIST)' : `${item.spotsLeft} SPOTS LEFT`}
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      Capacity: {item.totalSpots} max
                    </div>
                  </div>

                  <button
                    onClick={() => onBookClass(item)}
                    disabled={item.spotsLeft === 0}
                    className={`px-6 py-2.5 rounded-lg font-condensed uppercase tracking-wider text-xs sm:text-sm font-extrabold transition-all shrink-0 flex items-center gap-1.5 ${
                      item.spotsLeft === 0
                        ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                        : 'bg-[#E52328] hover:bg-[#c4181d] text-white shadow-lg shadow-red-900/30 group-hover:scale-105'
                    }`}
                  >
                    <span>BOOK CLASS</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#14141c] border border-zinc-800 rounded-xl text-zinc-400">
            <p className="text-base font-semibold text-white mb-2">No classes found in this category for {selectedDay}.</p>
            <p className="text-xs">Check out our virtual On-Demand sessions or choose another day above.</p>
          </div>
        )}

        {/* Footer Note & App Download Link */}
        <div className="mt-8 p-4 bg-[#111116] border border-zinc-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>New here? Claim your complimentary first class pass before booking your spot.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenFreePass}
              className="text-[#E52328] hover:underline font-bold font-condensed uppercase tracking-wider"
            >
              Get Free First Class Pass →
            </button>
            <span className="text-zinc-600">|</span>
            <a
              href="https://apps.apple.com/us/app/effect-on-demand/id1512223068"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-zinc-300 hover:text-white"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#E52328]" />
              <span>Download E.F.F.E.C.T. App</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
