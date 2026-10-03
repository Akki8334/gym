import React, { useState } from 'react';
import { X, CheckCircle2, Clock, MapPin, User, Flame, Smartphone, Calendar, AlertCircle } from 'lucide-react';
import { ScheduleItem } from '../data/scheduleData';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedClass: ScheduleItem | null;
  onClaimFreePass: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedClass,
  onClaimFreePass
}) => {
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [attendeePhone, setAttendeePhone] = useState('');
  const [bookingStatus, setBookingStatus] = useState<'form' | 'confirmed'>('form');

  if (!isOpen || !selectedClass) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!attendeeName || !attendeeEmail) return;

    setBookingStatus('confirmed');
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E52328', '#ffffff', '#ff4444']
      });
    } catch {
      //
    }
  };

  const handleClose = () => {
    setBookingStatus('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-[#111116] border border-[#2a2a36] rounded-xl shadow-2xl p-6 sm:p-8 text-white animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
      >
        <button 
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {bookingStatus === 'form' ? (
          <>
            <div className="flex items-center gap-2 text-[#E52328] font-condensed tracking-wider uppercase text-xs font-bold mb-1">
              <span>Reserve Class Spot</span>
            </div>

            <h3 className="font-display text-3xl tracking-wide uppercase text-white mb-4">
              Book Your Session
            </h3>

            {/* Class Summary Box */}
            <div className="bg-[#181822] border border-[#2c2c3c] rounded-xl p-4 mb-6">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-display text-xl text-white tracking-wide">{selectedClass.title}</h4>
                <span className="bg-[#E52328]/20 text-[#E52328] text-xs font-bold px-2 py-0.5 rounded border border-[#E52328]/30 uppercase">
                  {selectedClass.category}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E52328]" />
                  <span>{selectedClass.time} ({selectedClass.duration})</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Coach {selectedClass.trainer}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{selectedClass.studio}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-amber-400 font-semibold">{selectedClass.spotsLeft} spots available</span>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Smith"
                  value={attendeeName}
                  onChange={(e) => setAttendeeName(e.target.value)}
                  className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@domain.com"
                    value={attendeeEmail}
                    onChange={(e) => setAttendeeEmail(e.target.value)}
                    className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1">
                    Phone (SMS reminder)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(404) 555-0199"
                    value={attendeePhone}
                    onChange={(e) => setAttendeePhone(e.target.value)}
                    className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl tracking-wider uppercase rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
                >
                  <span>CONFIRM CLASS RESERVATION</span>
                </button>
              </div>

              <div className="p-3 bg-zinc-900/70 border border-zinc-800 rounded-lg text-xs text-zinc-400 space-y-1">
                <div className="flex items-center gap-1.5 text-zinc-300 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                  <span>First time at E.F.F.E.C.T.?</span>
                </div>
                <p>
                  Your first class is 100% complimentary! No payment needed. Existing members can also book instantly through the official mobile app.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    onClaimFreePass();
                  }}
                  className="text-[#E52328] hover:underline font-semibold text-xs pt-1 block"
                >
                  Or claim a 7-Day / 1st Class Free Pass instead →
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-4 space-y-5 animate-in fade-in duration-300">
            <div className="inline-flex p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E52328]">Spot Reserved</span>
              <h3 className="font-display text-4xl tracking-wide uppercase text-white">
                You're On The Roster!
              </h3>
              <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                See you on the turf, <strong className="text-white">{attendeeName}</strong>! A calendar invitation has been sent to <strong>{attendeeEmail}</strong>.
              </p>
            </div>

            <div className="bg-[#181822] border border-[#2a2a38] rounded-xl p-4 text-left text-xs space-y-2 text-zinc-300">
              <div className="font-display text-xl text-white">{selectedClass.title}</div>
              <div className="flex justify-between border-t border-zinc-800 pt-2">
                <span>Time & Studio:</span>
                <span className="text-white font-semibold">{selectedClass.time} • {selectedClass.studio}</span>
              </div>
              <div className="flex justify-between">
                <span>Trainer:</span>
                <span className="text-white font-semibold">Coach {selectedClass.trainer}</span>
              </div>
              <div className="flex justify-between">
                <span>What to bring:</span>
                <span className="text-zinc-400">Water bottle, hand towel, athletic sneakers</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="https://apps.apple.com/us/app/effect-on-demand/id1512223068"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Smartphone className="w-4 h-4 text-[#E52328]" />
                <span>Open in E.F.F.E.C.T. App</span>
              </a>
              <button
                onClick={handleClose}
                className="flex-1 py-2.5 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-lg tracking-wider uppercase rounded-lg transition-colors"
              >
                DONE • LET'S WORK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
