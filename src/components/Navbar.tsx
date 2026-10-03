import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Phone, ChevronRight, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenFreePass: () => void;
  onOpenSearch: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenFreePass,
  onOpenSearch,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Classes', href: '#classes' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Training', href: '#training' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'On-Demand', href: '#on-demand' },
    { name: 'Community', href: '#community' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/95 backdrop-blur-md border-b border-[#22222a] py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="E.F.F.E.C.T. Fitness Home"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#E52328] flex items-center justify-center font-display text-white text-2xl tracking-tighter shadow-lg shadow-red-900/40 group-hover:scale-105 transition-transform">
                <span>E</span>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl sm:text-2xl tracking-wider text-white uppercase leading-none group-hover:text-[#E52328] transition-colors">
                  E.F.F.E.C.T.
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-zinc-400 font-condensed font-bold uppercase">
                  FITNESS • ATLANTA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase font-condensed tracking-wider text-zinc-300 hover:text-[#E52328] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E52328] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Icons & Primary CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={onOpenSearch}
                className="p-2.5 rounded-lg border border-transparent hover:border-zinc-700/80 text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all flex items-center gap-1.5 text-xs font-condensed"
                title="Search (Ctrl+K)"
                aria-label="Search site"
              >
                <Search className="w-4 h-4" />
                <span className="hidden lg:inline text-[11px] text-zinc-500">Ctrl+K</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="px-3.5 py-2 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-200 hover:text-white text-xs font-condensed uppercase tracking-wider font-bold transition-all"
              >
                Book Class
              </button>

              <button
                onClick={onOpenFreePass}
                className="relative group px-4 py-2.5 rounded-lg bg-[#E52328] hover:bg-[#c4181d] text-white font-condensed font-extrabold uppercase text-xs sm:text-sm tracking-wider shadow-lg shadow-red-900/40 transition-all transform active:scale-95 flex items-center gap-1.5 animate-glow-pulse"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span className="text-white">START FREE WEEK</span>
              </button>
            </div>

            {/* Mobile Actions: Quick Free Pass & Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenFreePass}
                className="px-2.5 py-1.5 rounded bg-[#E52328] text-white font-condensed uppercase text-[11px] font-bold tracking-wider"
              >
                FREE PASS
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200 xl:hidden text-white">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded bg-[#E52328] flex items-center justify-center font-display text-white text-lg">
                  E
                </div>
                <div className="font-display text-xl text-white">
                  E.F.F.E.C.T. FITNESS
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-800/80"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-lg font-condensed tracking-wider uppercase text-zinc-200 hover:text-[#E52328] py-2 border-b border-zinc-900"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-zinc-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFreePass();
              }}
              className="w-full py-3.5 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl tracking-wider uppercase rounded-lg shadow-xl shadow-red-900/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>CLAIM YOUR FREE WEEK</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-condensed uppercase tracking-wider text-sm font-bold rounded-lg transition-colors"
            >
              BOOK A CLASS
            </button>

            <div className="pt-2 flex items-center justify-between text-xs text-zinc-400">
              <a href="tel:4042540684" className="flex items-center gap-1.5 text-zinc-300 hover:text-[#E52328]">
                <Phone className="w-3.5 h-3.5 text-[#E52328]" />
                <span>(404) 254-0684</span>
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E52328]" />
                <span>Atlanta, GA</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
