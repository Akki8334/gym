import React, { useState, useEffect } from 'react';
import { Search, X, Dumbbell, User, Calendar, CreditCard, HelpCircle, ArrowRight } from 'lucide-react';
import { CLASSES_DATA } from '../data/classesData';
import { TRAINERS_DATA } from '../data/trainersData';
import { MEMBERSHIP_PLANS } from '../data/membershipsData';
import { FAQ_DATA } from '../data/faqData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectClass: (id: string) => void;
  onSelectTrainer: (id: string) => void;
  onSelectMembership: (id: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectClass,
  onSelectTrainer,
  onSelectMembership
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle or open
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredClasses = cleanQuery
    ? CLASSES_DATA.filter(c => c.name.toLowerCase().includes(cleanQuery) || c.description.toLowerCase().includes(cleanQuery))
    : CLASSES_DATA.slice(0, 3);

  const filteredTrainers = cleanQuery
    ? TRAINERS_DATA.filter(t => t.name.toLowerCase().includes(cleanQuery) || t.role.toLowerCase().includes(cleanQuery) || (t.nickname && t.nickname.toLowerCase().includes(cleanQuery)))
    : TRAINERS_DATA.slice(0, 3);

  const filteredMemberships = cleanQuery
    ? MEMBERSHIP_PLANS.filter(m => m.name.toLowerCase().includes(cleanQuery) || m.description.toLowerCase().includes(cleanQuery))
    : MEMBERSHIP_PLANS.slice(0, 3);

  const filteredFaqs = cleanQuery
    ? FAQ_DATA.filter(f => f.question.toLowerCase().includes(cleanQuery) || f.answer.toLowerCase().includes(cleanQuery)).slice(0, 3)
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/85 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl bg-[#111116] border border-[#2c2c3c] rounded-2xl shadow-2xl overflow-hidden text-white animate-in fade-in duration-150"
        role="dialog"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 bg-[#16161e]">
          <Search className="w-5 h-5 text-zinc-400 mr-3" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search classes, trainers, memberships, schedule, or FAQs..."
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-zinc-400 hover:text-white mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white px-2 py-1 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Classes */}
          {filteredClasses.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-condensed uppercase tracking-wider text-[#E52328] font-bold mb-2">
                <Dumbbell className="w-3.5 h-3.5" />
                <span>Classes & Programs</span>
              </div>
              <div className="space-y-1.5">
                {filteredClasses.map(c => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onClose();
                      onSelectClass(c.id);
                      document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 rounded-lg bg-[#181822] hover:bg-[#20202c] border border-zinc-800/80 hover:border-zinc-700 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-xs text-white group-hover:text-[#E52328] transition-colors">{c.name}</div>
                      <div className="text-[11px] text-zinc-400 line-clamp-1">{c.tagline}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Trainers */}
          {filteredTrainers.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-condensed uppercase tracking-wider text-[#E52328] font-bold mb-2">
                <User className="w-3.5 h-3.5" />
                <span>Coaches & Trainers</span>
              </div>
              <div className="space-y-1.5">
                {filteredTrainers.map(t => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onClose();
                      onSelectTrainer(t.id);
                      document.getElementById('trainers')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 rounded-lg bg-[#181822] hover:bg-[#20202c] border border-zinc-800/80 hover:border-zinc-700 flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <img src={t.image} alt={t.name} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <div className="font-semibold text-xs text-white group-hover:text-[#E52328] transition-colors">
                          {t.name} {t.nickname && <span className="text-zinc-400">"{t.nickname}"</span>}
                        </div>
                        <div className="text-[11px] text-zinc-400">{t.role}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Memberships */}
          {filteredMemberships.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-condensed uppercase tracking-wider text-[#E52328] font-bold mb-2">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Memberships & Pricing</span>
              </div>
              <div className="space-y-1.5">
                {filteredMemberships.map(m => (
                  <button
                    key={m.id}
                    onClick={() => {
                      onClose();
                      onSelectMembership(m.id);
                      document.getElementById('membership')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left p-2.5 rounded-lg bg-[#181822] hover:bg-[#20202c] border border-zinc-800/80 hover:border-zinc-700 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-semibold text-xs text-white group-hover:text-[#E52328] transition-colors">
                        {m.name} — <span className="text-emerald-400 font-bold">${m.priceAutopay > 0 ? `${m.priceAutopay}/mo` : 'FREE'}</span>
                      </div>
                      <div className="text-[11px] text-zinc-400 line-clamp-1">{m.description}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {filteredFaqs.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-condensed uppercase tracking-wider text-[#E52328] font-bold mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <div className="space-y-1.5">
                {filteredFaqs.map(f => (
                  <div key={f.id} className="p-2.5 rounded-lg bg-[#181822] border border-zinc-800/80 text-xs">
                    <div className="font-semibold text-white mb-1">{f.question}</div>
                    <div className="text-zinc-400 text-[11px]">{f.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Footer Links */}
        <div className="p-3 bg-[#0d0d12] border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
          <span>Tip: Press <strong>Esc</strong> to close</span>
          <span>E.F.F.E.C.T. Fitness • 1995B Metropolitan Pkwy</span>
        </div>
      </div>
    </div>
  );
};
