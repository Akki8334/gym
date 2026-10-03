import React, { useState } from 'react';
import { X, CheckCircle2, UserCheck, Dumbbell, Calendar, Target } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  trainerPreference?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  trainerPreference
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trainer: trainerPreference || 'Any Master Coach',
    primaryGoal: 'Fat Loss & Athletic Conditioning',
    preferredSchedule: 'Early Morning (5:00 AM - 8:00 AM)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E52328', '#ffffff']
      });
    } catch {
      //
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#111116] border border-[#2a2a36] rounded-xl shadow-2xl p-5 sm:p-8 text-white animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="text-xs uppercase font-condensed tracking-widest text-[#E52328] font-bold mb-1">
              1-on-1 Performance Consultation
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase mb-2">
              Train With Purpose
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Match with one of our certified Division-I and professional trainers. Custom periodized programming, body composition tracking, and radical accountability.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(404) 555-0100"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E52328]"
                  >
                    <option value="Fat Loss & Athletic Conditioning">Fat Loss & Conditioning</option>
                    <option value="Muscle Hypertrophy & Strength">Muscle & Raw Strength</option>
                    <option value="Athletic Sport Performance">Collegiate / Pro Athlete Prep</option>
                    <option value="Lower Body / Glutes Sculpting">G.L.T. Lower Body Sculpting</option>
                    <option value="Mobility & Injury Rehabilitation">Mobility & Rehab</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1">
                    Preferred Trainer
                  </label>
                  <select
                    value={formData.trainer}
                    onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
                    className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E52328]"
                  >
                    <option value="Any Master Coach">Best Available Match</option>
                    <option value="Dooley (Founder)">Dooley (Founder & Head Coach)</option>
                    <option value="Reggie Ball">Coach Reggie Ball</option>
                    <option value="Coach Cali (Leiana)">Coach Cali (GLT Specialist)</option>
                    <option value="Coach Daja (GlideZone)">Coach Daja Jennings</option>
                    <option value="Shayon Green">Coach Shayon Green</option>
                    <option value="Marques Grant">Coach Marques Grant</option>
                    <option value="Coach Ball">Coach Ball</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1">
                  Target Training Time
                </label>
                <select
                  value={formData.preferredSchedule}
                  onChange={(e) => setFormData({ ...formData, preferredSchedule: e.target.value })}
                  className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#E52328]"
                >
                  <option value="Early Morning (5:00 AM - 8:00 AM)">Early Morning (5:00 AM - 8:00 AM)</option>
                  <option value="Midday Lunch (11:00 AM - 1:30 PM)">Midday Lunch (11:00 AM - 1:30 PM)</option>
                  <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  <option value="Saturday Morning">Saturday Morning</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl tracking-wider uppercase rounded-lg transition-all shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
                >
                  <span>SUBMIT CONSULTATION REQUEST</span>
                </button>
              </div>

              <div className="text-[11px] text-zinc-500 text-center">
                * Note: Trainees pay a $15/month facility fee to E.F.F.E.C.T. Fitness. Trainer fees are billed per individual agreement.
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
            <div className="inline-flex p-3 bg-red-500/10 border border-[#E52328]/30 rounded-full text-[#E52328]">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E52328]">Consultation Requested</span>
              <h3 className="font-display text-4xl tracking-wide uppercase text-white">
                We're Reviewing Your Goals
              </h3>
              <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our head training coordinator and selected coach will contact you within 24 hours at <strong>{formData.phone}</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#181822] border border-zinc-800 rounded-xl text-left text-xs text-zinc-300 space-y-1">
              <div><strong>Matched Focus:</strong> {formData.primaryGoal}</div>
              <div><strong>Coach Selection:</strong> {formData.trainer}</div>
              <div><strong>Time Window:</strong> {formData.preferredSchedule}</div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-lg tracking-wider uppercase rounded-lg transition-colors"
            >
              GOT IT • LET'S GET PAID!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
