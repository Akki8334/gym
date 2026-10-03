import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Calendar, Phone, Mail, User, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FreePassModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClass?: string;
}

export const FreePassModal: React.FC<FreePassModalProps> = ({ isOpen, onClose, defaultClass }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDay: 'Tomorrow Morning (5:30 AM or 6:30 AM)',
    preferredClass: defaultClass || 'Signature Bootcamp',
    experienceLevel: 'First Time in Bootcamp'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passCode, setPassCode] = useState('');

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleReset();
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
    if (!formData.name || !formData.email || !formData.phone) return;

    // Generate unique VIP pass code
    const generatedCode = `EFF-${Math.random().toString(36).substring(2, 7).toUpperCase()}-2026`;
    setPassCode(generatedCode);
    setIsSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E52328', '#ffffff', '#222228']
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleReset();
      }}
    >
      <div 
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#111116] border border-[#262632] rounded-xl shadow-2xl p-5 sm:p-8 text-white animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button 
          onClick={handleReset}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="flex items-center gap-2 text-[#E52328] font-condensed tracking-wider uppercase text-sm font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Complimentary VIP Access</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl tracking-wide uppercase text-white leading-none mb-2">
              Claim Your Free Class Pass
            </h3>

            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Experience Atlanta’s most electrifying fitness environment. Your first class is completely free—no credit card or long-term commitment required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="tel"
                      required
                      placeholder="(404) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1.5">
                    Preferred Session
                  </label>
                  <select
                    value={formData.preferredClass}
                    onChange={(e) => setFormData({ ...formData, preferredClass: e.target.value })}
                    className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#E52328] transition-colors"
                  >
                    <option value="Signature Bootcamp">The Signature Bootcamp</option>
                    <option value="Rhythm Spin">Rhythm Spin Experience</option>
                    <option value="GlideZone Step">GlideZone with Coach Daja</option>
                    <option value="GLT Lower Body">G.L.T. with Coach Cali</option>
                    <option value="Stretch Mobility">Stretch & Mobility Lab</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={formData.preferredDay}
                    onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                    className="w-full bg-[#181820] border border-[#2a2a38] rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#E52328] transition-colors"
                  >
                    <option value="Tomorrow Morning (5:30 AM)">Early Morning (5:30 AM)</option>
                    <option value="Tomorrow Morning (6:30 AM)">Morning (6:30 AM)</option>
                    <option value="Tomorrow Midday (12:00 PM)">Midday Lunch (12:00 PM)</option>
                    <option value="Tomorrow Evening (5:30 PM)">Evening (5:30 PM)</option>
                    <option value="Tomorrow Evening (6:30 PM)">Night (6:30 PM)</option>
                    <option value="Saturday All-Star (8:00 AM)">Saturday All-Star (8:00 AM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl tracking-wider uppercase rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-red-900/30 flex items-center justify-center gap-2"
                >
                  <span>GET FREE VIP PASS INSTANTLY</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero obligations. Bring photo ID when arriving at 1995B Metropolitan Pkwy.</span>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-4 space-y-5 animate-in fade-in duration-300">
            <div className="inline-flex p-3 bg-red-500/10 border border-[#E52328]/30 rounded-full text-[#E52328]">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E52328]">You're Locked In!</span>
              <h3 className="font-display text-4xl tracking-wide uppercase text-white">
                VIP Pass Activated
              </h3>
              <p className="text-zinc-400 text-sm max-w-sm mx-auto">
                Welcome to the family, <strong className="text-white">{formData.name}</strong>. Your free class pass has been reserved!
              </p>
            </div>

            {/* Digital Pass Card */}
            <div className="bg-[#181822] border-2 border-dashed border-[#E52328]/60 rounded-xl p-5 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#E52328] !text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl shadow-sm">
                CONFIRMED $0 PASS
              </div>

              <div className="space-y-2">
                <div className="text-xs font-condensed tracking-wider uppercase text-zinc-400">E.F.F.E.C.T. FITNESS ATLANTA</div>
                <div className="font-display text-2xl text-white tracking-wide">{formData.preferredClass}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-zinc-800 text-zinc-300">
                  <div>
                    <span className="text-zinc-500 block">Pass Code:</span>
                    <span className="font-mono font-bold text-[#E52328] text-sm">{passCode}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block">Target Window:</span>
                    <span className="font-semibold text-white">{formData.preferredDay}</span>
                  </div>
                </div>

                <div className="text-[11px] text-zinc-400 pt-2 border-t border-zinc-800/60">
                  📍 1995B Metropolitan Pkwy SW, Atlanta, GA 30315 • Arrive 15 min early with Photo ID
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-500">
              A copy of this digital pass and directions have been sent to <strong>{formData.email}</strong>.
            </p>

            <button
              onClick={handleReset}
              className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-display text-lg tracking-wider uppercase rounded-lg transition-colors"
            >
              DONE • LET'S GET PAID!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
