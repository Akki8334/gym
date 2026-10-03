import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, GlassWater, Dumbbell, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const hours = [
    { days: 'Monday – Thursday', time: '5:00 AM – 8:00 PM' },
    { days: 'Friday', time: '5:00 AM – 6:00 PM' },
    { days: 'Saturday', time: '7:30 AM – 2:00 PM' },
    { days: 'Sunday', time: 'Rest & Recovery Clinics' }
  ];

  const amenities = [
    { title: 'Free On-Site Parking', desc: 'Large secure dedicated parking lot directly in front of the facility.' },
    { title: 'Spreading the Health Juice Bar', desc: 'Fresh cold-pressed juices, ginger shots, and protein shakes right next door.' },
    { title: 'Pro Indoor Turf Arena', desc: 'High-traction agility turf for sled pushes, cone drills, and plyometrics.' },
    { title: 'Full Cycle Sanctuary', desc: 'Dedicated rhythm spin studio equipped with high-wattage sound & ambient lights.' },
    { title: 'Heavy Iron & Boxing Rig', desc: 'Dumbbells to 100+ lbs, bumper plates, kettlebells, and heavy leather strike bags.' },
    { title: 'Locker Storage & Amenities', desc: 'Restrooms, hydration refill stations, and secure personal storage cubbies.' }
  ];

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>THE PHYSICAL ARENA</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
            THE HOME OF <br />
            <span className="text-[#E52328]">THE EFFECT.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Located in Southwest Atlanta on Metropolitan Parkway. Step inside our physical performing arts arena and witness why E.F.F.E.C.T. is named one of the top fitness environments in Georgia.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Details & Hours Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222e] space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#181824] border border-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#E52328]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white tracking-wide uppercase">
                    Facility Address
                  </h3>
                  <p className="text-zinc-300 text-sm mt-1">
                    1995B Metropolitan Parkway Southwest <br />
                    Atlanta, GA 30315, United States
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    (Adjacent to Spreading the Health Juice Bar)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80 text-xs text-zinc-300">
                <a
                  href="tel:4042540684"
                  className="flex items-center gap-2 p-3 rounded-xl bg-[#181822] hover:bg-zinc-800 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E52328]" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-condensed">Direct Phone</span>
                    <span className="font-semibold text-white">(404) 254-0684</span>
                  </div>
                </a>

                <a
                  href="mailto:info@effect.fitness"
                  className="flex items-center gap-2 p-3 rounded-xl bg-[#181822] hover:bg-zinc-800 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E52328]" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-condensed">Support Email</span>
                    <span className="font-semibold text-white">info@effect.fitness</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="p-6 rounded-2xl bg-[#111116] border border-[#22222e] space-y-3">
              <div className="flex items-center gap-2 text-xs font-condensed uppercase tracking-wider text-zinc-400 font-bold">
                <Clock className="w-4 h-4 text-[#E52328]" />
                <span>Gym Operating Hours:</span>
              </div>

              <div className="space-y-2 text-xs">
                {hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between py-1.5 border-b border-zinc-800/60 last:border-0">
                    <span className="text-white font-medium">{item.days}</span>
                    <span className="text-zinc-400 font-mono">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=1995B+Metropolitan+Parkway+Southwest,+Atlanta,+GA+30315"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 bg-[#E52328] hover:bg-[#c4181d] text-white font-display text-xl tracking-wider uppercase rounded-xl transition-all shadow-xl shadow-red-900/30 flex items-center justify-center gap-2"
              >
                <span>GET GPS DIRECTIONS</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="tel:4042540684"
                className="px-6 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-condensed uppercase tracking-wider text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E52328]" />
                <span>CALL FRONT DESK</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#22222e] bg-[#111116] relative h-[420px] sm:h-[460px]">
            <iframe
              title="E.F.F.E.C.T. Fitness Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.467406888206!2d-84.41076962369684!3d33.698952873292415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5038c7f9ea175%3A0xe4a1b02b55f11cb2!2s1995%20Metropolitan%20Pkwy%20SW%20b%2C%20Atlanta%2C%20GA%2030315%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 filter invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 bg-[#08080a]/90 backdrop-blur-md border border-zinc-800 p-3 rounded-xl text-xs max-w-xs text-white">
              <div className="font-display text-lg text-white">E.F.F.E.C.T. FITNESS</div>
              <p className="text-[11px] text-zinc-400">1995B Metropolitan Pkwy SW, Atlanta</p>
              <div className="text-[10px] text-emerald-400 font-semibold mt-1">✓ Free Visitor Parking On-Site</div>
            </div>
          </div>
        </div>

        {/* Facility Amenities Grid */}
        <div>
          <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide mb-6">
            Facility Amenities & Highlights
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#111116] border border-[#20202a] flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#181822] border border-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#E52328]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm">{item.title}</h4>
                  <p className="text-zinc-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
