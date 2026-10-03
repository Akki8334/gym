export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  achievement: string;
  memberSince: string;
  image: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Marcus Holloway',
    role: 'Tech Executive & Marathoner',
    quote: 'Walking into E.F.F.E.C.T. for the 5:30 AM sunrise gauntlet was intimidating at first, but within five minutes the energy carried me through. Coach Dooley and Reggie push you to depths of grit you didn’t know you possessed. I dropped 58 pounds in 9 months, but more importantly, my mental endurance as an entrepreneur completely transformed.',
    achievement: 'Lost 58 lbs • Completed First Marathon',
    memberSince: '2021',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974481071-ADYX81G04U0HAS6DX0TY/2I1A5221.jpeg'
  },
  {
    id: 't-2',
    name: 'Keisha Robinson',
    role: 'Atlanta Educator & Mother',
    quote: 'This is not just a gym; it is an undeniable family and sanctuary. The music, the drumline tempo, and the way every single person cheers when you finish your last burpee set makes giving up impossible. GlideZone with Coach Daja and GLT with Coach Cali sculpted my body and restored my joy.',
    achievement: 'Reversed Pre-Diabetes • Lost 42 lbs',
    memberSince: '2020',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974786186-XJU6QRTO4ZJZFNRVM7XW/IMG_8071.jpeg'
  },
  {
    id: 't-3',
    name: 'David & Alexis Morales',
    role: 'Entrepreneurs & Couple Members',
    quote: 'We started coming to E.F.F.E.C.T. together on a free week pass. Four years later, we haven’t looked back. The accountability is unmatched. We’ve met business partners at the Saturday Vendor Market, grabbed post-workout smoothies at Spreading the Health, and transformed our physical health side by side.',
    achievement: '85 lbs Lost Combined • 4 Year Streaks',
    memberSince: '2020',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974565682-VOLB5OCECFITDWLREHQ3/2I1A2434.jpeg'
  },
  {
    id: 't-4',
    name: 'Brittany Sterling',
    role: 'Creative Director',
    quote: '“Let’s Get Paid!” is not just a catchphrase; it’s an entire standard of how you treat your health, your discipline, and your craft. E.F.F.E.C.T. gave me my athletic fire back after years of feeling sluggish behind a desk.',
    achievement: 'Gained 12 lbs Lean Muscle • Elite Energy',
    memberSince: '2022',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974109646-8WVOA6LQRX48PL2ECTAC/2I1A7941.jpeg'
  }
];

export const PRESS_FEATURES = [
  {
    name: '11Alive NBC News',
    logo: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1612178585945-QHEBPGFJ12HZFEODHP1D/11Alive_NBC_Color.png?format=300w',
    quote: 'Atlanta’s premiere performing arts gym turning physical fitness into a cultural institution of health and transformation.'
  },
  {
    name: 'Essence Magazine',
    logo: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1612179999887-TQAHMXK3EQWVSCLQHLEM/essence-png-logo+%281%29.png?format=300w',
    quote: 'How E.F.F.E.C.T. Fitness built a community powerhouse on Metropolitan Parkway where Black excellence and wellness thrive.'
  }
];
