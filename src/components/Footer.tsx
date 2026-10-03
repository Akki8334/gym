import React, { useState } from 'react';
import { Mail, Phone, MapPin, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-[#060608] text-zinc-400 text-xs border-t border-[#181820] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E52328] flex items-center justify-center font-display text-white text-2xl">
                E
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-wider text-white uppercase leading-none">
                  E.F.F.E.C.T. FITNESS
                </span>
                <span className="text-[9px] tracking-widest text-[#E52328] font-condensed font-bold uppercase">
                  PERFORMING ARTS GYM • ATLANTA, GA
                </span>
              </div>
            </a>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              <strong className="text-zinc-300">Effective • Focused • Fast • Exceptional • Creative Training.</strong> <br />
              Atlanta’s premier physical performing arts facility. Where health, hustle, and heart collide on Metropolitan Parkway. Let's Get Paid!
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2 max-w-sm">
              <span className="text-[11px] font-condensed uppercase tracking-wider text-zinc-300 font-bold block mb-2">
                Join The E.F.F.E.C.T. Newsletter
              </span>

              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-[#121218] border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#E52328]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#E52328] hover:bg-[#c4181d] text-white font-condensed uppercase tracking-wider text-xs font-bold rounded-lg transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>You're subscribed to E.F.F.E.C.T. alerts!</span>
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Classes & Schedule */}
          <div className="space-y-3">
            <h4 className="font-condensed uppercase tracking-widest text-white text-xs font-bold">
              Classes & Programs
            </h4>
            <ul className="space-y-2">
              <li><a href="#classes" className="hover:text-white transition-colors">The Signature Bootcamp</a></li>
              <li><a href="#classes" className="hover:text-white transition-colors">Rhythm Spin Experience</a></li>
              <li><a href="#classes" className="hover:text-white transition-colors">GlideZone with Coach Daja</a></li>
              <li><a href="#classes" className="hover:text-white transition-colors">G.L.T. with Coach Cali</a></li>
              <li><a href="#classes" className="hover:text-white transition-colors">Stretch & Mobility Lab</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">1-on-1 Performance Training</a></li>
              <li><a href="#schedule" className="hover:text-[#E52328] transition-colors font-semibold">Live Weekly Timetable →</a></li>
            </ul>
          </div>

          {/* Column 3: Membership & Digital */}
          <div className="space-y-3">
            <h4 className="font-condensed uppercase tracking-widest text-white text-xs font-bold">
              Memberships & Apps
            </h4>
            <ul className="space-y-2">
              <li><a href="#membership" className="hover:text-white transition-colors">Unlimited All-Access ($159/mo)</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">3 Days / Week ($99/mo)</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">Spin Unlimited ($85/mo)</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">On-Demand App ($40/mo)</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">Single Class Drop-Ins ($30)</a></li>
              <li><a href="#membership" className="hover:text-white transition-colors">Senior (65+) & Military Rates</a></li>
              <li>
                <a
                  href="https://apps.apple.com/us/app/effect-on-demand/id1512223068"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#E52328]"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>iOS On-Demand App</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-condensed uppercase tracking-widest text-white text-xs font-bold">
              Visit The Gym
            </h4>
            <div className="space-y-2 text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E52328] shrink-0 mt-0.5" />
                <span>
                  1995B Metropolitan Pkwy SW <br />
                  Atlanta, GA 30315
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E52328] shrink-0" />
                <a href="tel:4042540684" className="hover:text-white">(404) 254-0684</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E52328] shrink-0" />
                <a href="mailto:info@effect.fitness" className="hover:text-white">info@effect.fitness</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/effectfitness/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141c] hover:bg-zinc-800 text-zinc-300 hover:text-pink-500 border border-zinc-800 flex items-center justify-center transition-colors"
                title="Instagram @effectfitness"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/EffectFitnessGetPaid/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141c] hover:bg-zinc-800 text-zinc-300 hover:text-blue-500 border border-zinc-800 flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://apps.apple.com/us/app/effect-on-demand/id1512223068"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#14141c] hover:bg-zinc-800 text-zinc-300 hover:text-[#E52328] border border-zinc-800 flex items-center justify-center transition-colors"
                title="Apple App Store"
              >
                <Smartphone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
          <div>
            © {new Date().getFullYear()} Effect Fitness, LLC. All rights reserved. Slogan "Let's Get Paid!" is a registered trademark of Effect Fitness.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-zinc-400 transition-colors">Accessibility</a>
            <span>•</span>
            <a href="https://www.causeofeffect.fitness/giving-page-1-1" target="_blank" rel="noreferrer" className="text-[#E52328] hover:underline">
              Cause of E.F.F.E.C.T. Non-Profit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
