import React, { useState } from 'react';
import { FAQ_DATA, FAQItem } from '../data/faqData';
import { ChevronDown, Search, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'fv-1': true // First question open by default
  });

  const toggle = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'first-visit', label: 'First Visit' },
    { id: 'classes', label: 'Classes & Culture' },
    { id: 'membership', label: 'Memberships & Passes' },
    { id: 'personal-training', label: 'Personal Training' },
    { id: 'on-demand', label: 'On-Demand App' }
  ];

  const filteredFaqs = FAQ_DATA.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = !searchQuery || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0c0c10] border-t border-b border-[#1c1c24] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>GOT QUESTIONS? WE’VE GOT ANSWERS.</span>
          </div>

          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-[0.9]">
            FREQUENTLY ASKED <br />
            <span className="text-[#E52328]">QUESTIONS.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base">
            Everything you need to know about starting your fitness journey at E.F.F.E.C.T. Fitness Atlanta.
          </p>
        </div>

        {/* Search Bar & Category Filter Pills */}
        <div className="space-y-4 mb-10">
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search answers (e.g., parking, drop-in, trial, gear)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#14141c] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328] transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-condensed uppercase tracking-wider font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#E52328] text-white shadow-md shadow-red-900/40'
                    : 'bg-[#14141c] hover:bg-zinc-800 text-zinc-400 hover:text-white border border-[#23232c]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];

              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-[#111116] border border-[#22222c] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm sm:text-base text-white group-hover:text-[#E52328] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 group-hover:text-white shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#E52328]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-900/60 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 text-zinc-400 bg-[#111116] rounded-xl border border-zinc-800">
              No matching questions found for "{searchQuery}". Call us at (404) 254-0684 for instant support!
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 bg-[#14141c] border border-zinc-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-display text-xl text-white uppercase tracking-wide">
              Still Have A Question?
            </h4>
            <p className="text-xs text-zinc-400">
              Our front desk coaches on Metropolitan Parkway are here to help you get started.
            </p>
          </div>

          <a
            href="tel:4042540684"
            className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white font-condensed uppercase tracking-wider text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#E52328]" />
            <span>Speak With Front Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
};
