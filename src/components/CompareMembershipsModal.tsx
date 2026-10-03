import React from 'react';
import { X, Check, Minus, Zap, ShieldCheck } from 'lucide-react';

interface CompareMembershipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (planName: string) => void;
}

export const CompareMembershipsModal: React.FC<CompareMembershipsModalProps> = ({
  isOpen,
  onClose,
  onSelectPlan
}) => {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const comparisonFeatures = [
    { name: 'Monthly Autopay Rate', threeDay: '$99 / mo', unlimited: '$159 / mo', spin: '$85 / mo', onDemand: '$40 / mo' },
    { name: 'Month-to-Month Rate', threeDay: '$125 / mo', unlimited: '$179 / mo', spin: '$85 / mo', onDemand: '$40 / mo' },
    { name: 'Signature Bootcamp Access', threeDay: '3 sessions / wk', unlimited: 'Unlimited (daily)', spin: false, onDemand: 'Virtual streams' },
    { name: 'GLIDEZONE Step Aerobics', threeDay: false, unlimited: true, spin: false, onDemand: 'Virtual streams' },
    { name: 'G.L.T. (Glutes, Legs & Thighs)', threeDay: false, unlimited: true, spin: false, onDemand: 'Virtual streams' },
    { name: 'Active Stretch & Mobility', threeDay: false, unlimited: true, spin: false, onDemand: 'Virtual streams' },
    { name: 'Indoor Rhythm Spin Studio', threeDay: 'Drop-in ($10)', unlimited: 'Drop-in ($10)', spin: 'Unlimited', onDemand: false },
    { name: 'Multiple Visits in a Single Day', threeDay: false, unlimited: true, spin: true, onDemand: true },
    { name: 'Spreading the Health Juice Discount', threeDay: false, unlimited: '10% Off Orders', spin: false, onDemand: false },
    { name: 'Priority Booking Window', threeDay: false, unlimited: true, spin: true, onDemand: false },
    { name: 'Cancel Autopay Anytime', threeDay: true, unlimited: true, spin: true, onDemand: true },
    { name: 'First Class Free Trial', threeDay: true, unlimited: true, spin: true, onDemand: '7-Day Free Trial' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#111116] border border-[#2a2a36] rounded-2xl shadow-2xl p-5 sm:p-7 text-white flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="shrink-0 mb-4">
          <div className="text-xs uppercase font-condensed tracking-widest text-[#E52328] font-bold mb-1">
            Plan Breakdown
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase mb-1">
            Compare All Memberships
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl">
            Transparent pricing directly from E.F.F.E.C.T. Fitness Atlanta. No hidden initiation fees, no long-term contracts.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="flex-1 overflow-auto border border-zinc-800 rounded-xl">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#181822] border-b border-zinc-800 text-zinc-300">
                <th className="p-3 sm:p-4 font-semibold text-zinc-400">Features & Access</th>
                <th className="p-3 sm:p-4 text-center">
                  <div className="font-display text-base text-zinc-300">3 Days / Wk</div>
                  <div className="text-xs text-zinc-400">$99 / mo</div>
                </th>
                <th className="p-3 sm:p-4 text-center bg-[#E52328]/15 border-x border-[#E52328]/30">
                  <div className="inline-block bg-[#E52328] text-white text-[9px] uppercase font-bold px-2 py-0.5 rounded-full mb-1">
                    BEST VALUE
                  </div>
                  <div className="font-display text-lg text-white">Unlimited All-Access</div>
                  <div className="text-xs text-[#E52328] font-bold">$159 / mo</div>
                </th>
                <th className="p-3 sm:p-4 text-center">
                  <div className="font-display text-base text-zinc-300">Unlimited Spin</div>
                  <div className="text-xs text-zinc-400">$85 / mo</div>
                </th>
                <th className="p-3 sm:p-4 text-center">
                  <div className="font-display text-base text-zinc-300">On-Demand App</div>
                  <div className="text-xs text-zinc-400">$40 / mo</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-[#121217]' : 'bg-[#15151c]'}>
                  <td className="p-3 sm:p-4 font-medium text-white">{row.name}</td>
                  
                  {/* 3 Days */}
                  <td className="p-3 sm:p-4 text-center">
                    {typeof row.threeDay === 'boolean' ? (
                      row.threeDay ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <Minus className="w-4 h-4 text-zinc-600 mx-auto" />
                    ) : (
                      <span className="text-zinc-300 text-xs">{row.threeDay}</span>
                    )}
                  </td>

                  {/* Unlimited */}
                  <td className="p-3 sm:p-4 text-center bg-[#E52328]/10 border-x border-[#E52328]/20 font-semibold text-white">
                    {typeof row.unlimited === 'boolean' ? (
                      row.unlimited ? <Check className="w-4 h-4 text-[#E52328] mx-auto font-bold" /> : <Minus className="w-4 h-4 text-zinc-600 mx-auto" />
                    ) : (
                      <span className="text-[#E52328] font-bold text-xs">{row.unlimited}</span>
                    )}
                  </td>

                  {/* Spin */}
                  <td className="p-3 sm:p-4 text-center">
                    {typeof row.spin === 'boolean' ? (
                      row.spin ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <Minus className="w-4 h-4 text-zinc-600 mx-auto" />
                    ) : (
                      <span className="text-zinc-300 text-xs">{row.spin}</span>
                    )}
                  </td>

                  {/* On Demand */}
                  <td className="p-3 sm:p-4 text-center">
                    {typeof row.onDemand === 'boolean' ? (
                      row.onDemand ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <Minus className="w-4 h-4 text-zinc-600 mx-auto" />
                    ) : (
                      <span className="text-zinc-300 text-xs">{row.onDemand}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-[#181822] border-t border-zinc-800">
                <td className="p-4"></td>
                <td className="p-3 text-center">
                  <button 
                    onClick={() => { onClose(); onSelectPlan('3 Days / Week Bootcamp'); }}
                    className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded font-condensed uppercase tracking-wider text-xs font-bold"
                  >
                    SELECT
                  </button>
                </td>
                <td className="p-3 text-center bg-[#E52328]/15 border-x border-[#E52328]/30">
                  <button 
                    onClick={() => { onClose(); onSelectPlan('Unlimited All-Access Bootcamp'); }}
                    className="w-full py-2.5 bg-[#E52328] hover:bg-[#c4181d] text-white rounded font-condensed uppercase tracking-wider text-xs font-bold shadow-md shadow-red-900/40"
                  >
                    JOIN UNLIMITED
                  </button>
                </td>
                <td className="p-3 text-center">
                  <button 
                    onClick={() => { onClose(); onSelectPlan('Unlimited Spin Experience'); }}
                    className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded font-condensed uppercase tracking-wider text-xs font-bold"
                  >
                    SELECT
                  </button>
                </td>
                <td className="p-3 text-center">
                  <button 
                    onClick={() => { onClose(); onSelectPlan('E.F.F.E.C.T. On-Demand App'); }}
                    className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded font-condensed uppercase tracking-wider text-xs font-bold"
                  >
                    FREE TRIAL
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-500 mt-4 flex-wrap gap-2">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Senior 65+ ($79/mo) and Military ($109/mo) discounts available in person with ID.</span>
          </div>
          <div className="text-zinc-400">
            Questions? Call us at <a href="tel:4042540684" className="text-white hover:text-[#E52328] underline">(404) 254-0684</a>
          </div>
        </div>
      </div>
    </div>
  );
};
