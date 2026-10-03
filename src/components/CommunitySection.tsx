import { Heart, Store, GlassWater, Plane, Sparkles, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { PRESS_FEATURES } from '../data/testimonialsData';

export const CommunitySection: React.FC = () => {
  const communityHubs = [
    {
      icon: <GlassWater className="w-6 h-6 text-[#E52328]" />,
      title: 'Spreading the Health Juice Bar',
      badge: 'NEXT DOOR FUEL',
      description: 'Right next door to our gym floor. Fuel your recovery with organic cold-pressed wellness shots, fresh smoothies, and post-workout protein bowls.'
    },
    {
      icon: <Store className="w-6 h-6 text-[#E52328]" />,
      title: 'All-Star Saturday Vendor Market',
      badge: 'ENTREPRENEURSHIP',
      description: 'E.F.F.E.C.T. is the birthplace of dozens of thriving Black-owned businesses. Our monthly vendor markets celebrate local commerce, creators, and wellness.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#E52328]" />,
      title: 'Cause of E.F.F.E.C.T. Non-Profit',
      badge: 'COMMUNITY IMPACT',
      description: 'Our 501(c)(3) initiative dedicated to health equity, youth sports clinics, grocery giveaways, and fitness education across Southwest Atlanta.'
    },
    {
      icon: <Plane className="w-6 h-6 text-[#E52328]" />,
      title: 'The Gym Traveling Family',
      badge: 'GLOBAL BROTHERHOOD',
      description: 'We don’t just stay in Atlanta. Our members travel together across the country to take over fitness festivals in Miami, LA, DC, and beyond.'
    }
  ];

  const communityPhotos = [
    'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974447609-FD9M8UA9FV4L4I5V15QH/2I1A3517.jpeg',
    'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974736960-59CTIF3HZ9JUT1HKFFDJ/2I1A1595.jpeg',
    'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974565682-VOLB5OCECFITDWLREHQ3/2I1A2434.jpeg',
    'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974109646-8WVOA6LQRX48PL2ECTAC/2I1A7941.jpeg',
    'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974515549-5TJPWSZCOAT73CT3X3HA/2I1A1100.jpeg',
    'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/02666826-1878-4912-a360-7bd57fdc6683/2I1A0640.jpeg'
  ];

  return (
    <section id="community" className="py-24 sm:py-32 bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#E52328] font-condensed font-bold uppercase tracking-widest text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MORE THAN IRON & SWEAT</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[0.9]">
            THE ENERGY IS <br />
            <span className="text-[#E52328]">DIFFERENT HERE.</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            At E.F.F.E.C.T. Fitness, connection is the ultimate flex. We have cultivated an unapologetic culture of Black excellence, mutual elevation, and community empowerment that extends far beyond the gym floor.
          </p>
        </div>

        {/* 4 Community Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {communityHubs.map((hub, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111116] border border-[#22222c] hover:border-[#E52328]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#181822] border border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {hub.icon}
                  </div>
                  <span className="text-[9px] font-condensed uppercase tracking-wider font-bold bg-[#E52328]/15 text-[#E52328] px-2 py-0.5 rounded border border-[#E52328]/30">
                    {hub.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-white tracking-wide uppercase mb-2">
                  {hub.title}
                </h3>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {hub.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Press Badges Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#111118] border border-[#22222e] mb-20">
          <div className="text-xs uppercase font-condensed tracking-widest text-zinc-500 font-bold mb-4 text-center">
            AS FEATURED IN NATIONAL MEDIA
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            {PRESS_FEATURES.map((press, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center gap-6 pt-4 md:pt-0 sm:px-6">
                <img
                  src={press.logo}
                  alt={press.name}
                  className="h-10 object-contain filter brightness-90 hover:brightness-100 transition-all shrink-0"
                />
                <p className="text-xs sm:text-sm text-zinc-300 italic text-center sm:text-left">
                  "{press.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Grid Showcase */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
            <div>
              <div className="text-xs uppercase font-condensed tracking-wider text-[#E52328] font-bold">
                COMMUNITY MOMENTS
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wide">
                Follow The Movement @effectfitness
              </h3>
            </div>

            <a
              href="https://www.instagram.com/effectfitness/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-condensed uppercase tracking-wider font-bold transition-colors w-fit"
            >
              <InstagramIcon className="w-4 h-4 text-pink-500" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {communityPhotos.map((photo, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/effectfitness/"
                target="_blank"
                rel="noreferrer"
                className="group relative h-48 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800"
              >
                <img
                  src={photo}
                  alt={`E.F.F.E.C.T. Community Moment ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
