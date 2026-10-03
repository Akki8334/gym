import React, { useState } from 'react';
import { MEMBERSHIP_PLANS, DROP_IN_RATES, MembershipPlan } from '../data/membershipsData';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface MembershipSectionProps {
  onSelectPlan: (plan: MembershipPlan) => void;
  onOpenCompare: () => void;
  onOpenFreePass: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onSelectPlan,
  onOpenCompare,
  onOpenFreePass
}) => {
  const [isAutopay, setIsAutopay] = useState(true);

  return (
    <section id="membership" className="py-24 sm:py-32 bg-[#0c0c10] border-t border-b border-[#1c1c24] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
              <Zap className="w-3.5 h-3.5" />
              <span>TRANSPARENT ATLANTA PRICING</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
              CHOOSE YOUR <br />
              <span className="text-[#E52328]">WAY TO TRAIN.</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              No hidden initiation fees, no punitive cancellation lock-ins. Choose an autopay plan for maximum savings, or pay month-to-month. Your first class is completely free!
            </p>
          </div>

          {/* Autopay vs Monthly Switcher */}
          <div className="bg-[#14141c] p-1.5 rounded-xl border border-zinc-800 flex items-center shrink-0">
            <button
              onClick={() => setIsAutopay(true)}
              className={`px-4 py-2 rounded-lg font-condensed uppercase tracking-wider text-xs font-bold transition-all ${
                isAutopay
                  ? 'bg-[#E52328] !text-white shadow-md shadow-red-900/40'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Autopay (Save $25/mo)
            </button>
            <button
              onClick={() => setIsAutopay(false)}
              className={`px-4 py-2 rounded-lg font-condensed uppercase tracking-wider text-xs font-bold transition-all ${
                !isAutopay
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Month-to-Month
            </button>
          </div>
        </div>

        {/* Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {MEMBERSHIP_PLANS.slice(1, 4).map((plan) => {
            const currentPrice = isAutopay ? plan.priceAutopay : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-[#14141e] border-2 border-[#E52328] shadow-2xl shadow-red-950/30 scale-100 lg:-translate-y-2'
                    : 'bg-[#111116] border border-[#22222e] hover:border-zinc-700'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="mb-4">
                    <span
                      className={`text-[10px] font-condensed font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        plan.isPopular
                          ? 'bg-[#E52328] !text-white shadow-md'
                          : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="font-display text-3xl text-white tracking-wide uppercase mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-zinc-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl sm:text-6xl text-white tracking-tight">
                        ${currentPrice}
                      </span>
                      <span className="text-zinc-400 text-sm font-sans">
                        / month
                      </span>
                    </div>
                    {isAutopay && plan.priceMonthly > plan.priceAutopay && (
                      <div className="text-[11px] text-emerald-400 font-semibold mt-1">
                        Save ${plan.priceMonthly - plan.priceAutopay}/month with Autopay agreement
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs uppercase font-condensed font-bold tracking-wider text-zinc-300">
                      Included Privileges:
                    </div>
                    <ul className="space-y-2.5 text-xs text-zinc-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#E52328] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 rounded-xl font-display text-xl tracking-wider uppercase transition-all shadow-lg flex items-center justify-center gap-2 ${
                      plan.isPopular
                        ? 'bg-[#E52328] hover:bg-[#c4181d] text-white shadow-red-900/40 active:scale-95'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Drop-In Rates & Special Discount Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111118] border border-[#22222e] mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1 max-w-sm">
              <h4 className="font-display text-2xl text-white uppercase tracking-wide">
                Drop-In Passes & Special Rates
              </h4>
              <p className="text-zinc-400 text-xs">
                Traveling through Atlanta or preferring session-by-session flexibility?
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
              {DROP_IN_RATES.map((item, idx) => (
                <div key={idx} className="bg-[#181822] p-3 rounded-xl border border-zinc-800/80 space-y-1">
                  <div className="font-display text-xl text-white">{item.price}</div>
                  <div className="text-[11px] font-condensed uppercase tracking-wider text-zinc-300 font-semibold line-clamp-1">{item.name}</div>
                  <div className="text-[10px] text-zinc-500">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Modal Link & Free Pass Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-zinc-400">
          <button
            onClick={onOpenCompare}
            className="text-white hover:text-[#E52328] underline font-condensed uppercase tracking-wider font-bold transition-colors"
          >
            Compare All Membership Features Side-By-Side →
          </button>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Still not sure?</span>
            <button
              onClick={onOpenFreePass}
              className="text-[#E52328] hover:underline font-bold"
            >
              Start With A 100% Free Class First →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
