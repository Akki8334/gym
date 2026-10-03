export interface Trainer {
  id: string;
  name: string;
  nickname?: string;
  role: string;
  specialty: string[];
  bio: string;
  quote: string;
  instagram: string;
  image: string;
  experienceYears: number;
  classesTaught: string[];
}

export const TRAINERS_DATA: Trainer[] = [
  {
    id: 'dooley',
    name: 'Keundric Loucious',
    nickname: 'Dooley',
    role: 'Founder & Visionary Head Coach',
    specialty: ['High-Intensity Conditioning', 'Culture & Mindset', 'Radical Transformation'],
    bio: 'Founder and heartbeat of E.F.F.E.C.T. Fitness. Dooley conceived the concept of the "Performing Arts Gym," blending electrifying drumline energy with relentless athletic conditioning. Under his leadership, thousands of members have transformed their bodies and minds, building a national fitness brotherhood and sisterhood.',
    quote: "Let's Get Paid! When one wins, we all win. Surrender your excuses and show up.",
    instagram: '@effectfitness',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/31fbea14-e02d-4a72-97f4-b537413e9a6c/3M8A3300.jpeg',
    experienceYears: 14,
    classesTaught: ['The Signature E.F.F.E.C.T. Bootcamp', 'Master Coach Sessions']
  },
  {
    id: 'reggie-ball',
    name: 'Reggie Ball',
    nickname: 'Coach Reggie',
    role: 'Head Performance Coach',
    specialty: ['Athletic Performance', 'Quarterback & Agility Drills', 'Power Spin'],
    bio: 'Former starting Georgia Tech Quarterback and professional athlete. Reggie brings Division-I collegiate precision, mental discipline, and explosive athletic speed drills to the E.F.F.E.C.T. community. He leads both turf performance drills and high-wattage spin sessions.',
    quote: 'Championship habits start before the sun rises. Lock in and control your tempo.',
    instagram: '@reggieball1',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/621fabef-a85b-466b-beac-a5e4b06b0ba7/2I1A0769.jpeg',
    experienceYears: 12,
    classesTaught: ['E.F.F.E.C.T. Rhythm Spin Experience', 'Athletic Speed & Conditioning']
  },
  {
    id: 'coach-cali',
    name: 'Leiana Williams',
    nickname: 'Coach Cali',
    role: 'Director of Auxiliary & Lower Body',
    specialty: ['G.L.T. (Glutes, Legs & Thighs)', 'Hypertrophy Sculpting', 'Women’s Conditioning'],
    bio: 'Creator of the famed G.L.T. program at E.F.F.E.C.T. Coach Cali is renowned for high-energy playlists, intense lower-body resistance circuits, and unmatched hype. Her classes build muscle density, confidence, and sisterhood under one roof.',
    quote: 'Feel the burn, embrace the beat, and don’t drop the band!',
    instagram: '@coachcali_effect',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/6e0e46c3-1f3d-471d-8ced-5486d6a0cfe0/merch-36.png',
    experienceYears: 9,
    classesTaught: ['G.L.T. with Coach Cali', 'Total Body Sculpt']
  },
  {
    id: 'coach-daja',
    name: 'Daja Jennings',
    nickname: 'Coach Daja',
    role: 'GlideZone Lead Instructor',
    specialty: ['Step Aerobics Choreography', 'Cardiovascular Agility', 'Rhythm Training'],
    bio: 'The mastermind behind the viral GlideZone step movement. Coach Daja merges hip-hop choreography with fast-paced plyometric step conditioning, creating an infectious cardio experience where attendees burn hundreds of calories without realizing how hard they are working.',
    quote: 'Step into your power. When your feet find the rhythm, your mind finds freedom.',
    instagram: '@dajajennings',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/128154e1-652c-4de3-b566-7038f6b1f80a/DajaProfileEffect.png',
    experienceYears: 7,
    classesTaught: ['GlideZone with Coach Daja', 'Athletic Step Fusion']
  },
  {
    id: 'shayon-green',
    name: 'Shayon Green',
    nickname: 'Shay',
    role: 'Strength & Conditioning Coach',
    specialty: ['Explosive Power', 'Functional Hypertrophy', 'Olympic Barbell'],
    bio: 'Former Miami Hurricanes defensive standout and professional football athlete. Shayon brings relentless intensity and defensive-line strength training fundamentals to the weight room and bootcamps.',
    quote: 'Excuses don’t burn calories. Sweat is just fat crying.',
    instagram: '@shayongreen',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974759383-ML5HHI5FJ3VQIDM2VRJD/IMG_8081.jpeg',
    experienceYears: 10,
    classesTaught: ['The Signature E.F.F.E.C.T. Bootcamp', '1-on-1 Performance Training']
  },
  {
    id: 'zan-johnson',
    name: 'Zan Johnson',
    nickname: 'Coach Zan',
    role: 'Senior Performance Coach',
    specialty: ['Metabolic Conditioning', 'Core Stability', 'Endurance Intervals'],
    bio: 'Known for his motivational cadence and creative high-speed interval circuits. Coach Zan makes sure every muscle group is tested, keeping athletes in the fat-burning sweet spot throughout the 45-minute gauntlet.',
    quote: 'Push beyond what you think your limit is. That’s where the growth lives.',
    instagram: '@zanjohnson_',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/b94e9591-2f9b-4847-9aa6-f6b8a033a1fd/ZAN.jpeg',
    experienceYears: 8,
    classesTaught: ['Signature Bootcamp', 'Core & Shred']
  },
  {
    id: 'coach-ball',
    name: 'Coach Ball',
    nickname: 'The Enforcer',
    role: 'High-Intensity Conditioning Lead',
    specialty: ['Bootcamp Intensity', 'Battle Ropes & Turf', 'Speed & Stamina'],
    bio: 'No-nonsense accountability, infectious energy, and relentless encouragement. Coach Ball commands the floor with unshakeable presence and holds the standard high for every single member in the room.',
    quote: 'Don’t cheat the grind. The grind knows.',
    instagram: '@coachball_fitness',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/d2b31f2f-a484-41b6-8f0c-fc1981e43b8a/COACH+BALL.jpg',
    experienceYears: 11,
    classesTaught: ['The Signature E.F.F.E.C.T. Bootcamp', 'Weekend Warrior Gauntlet']
  },
  {
    id: 'marques-grant',
    name: 'Marques Grant',
    nickname: 'Ques',
    role: 'Strength & Biomechanics Coach',
    specialty: ['Body Composition', 'Functional Strength', 'Personal Training'],
    bio: 'Marques brings a methodical approach to human biomechanics, postural alignment, and raw strength. He works closely with 1-on-1 clients seeking progressive overload and long-term functional capability.',
    quote: 'Form first, weight second, consistency always.',
    instagram: '@marquesgrant_fit',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/bb871789-b79f-4582-8ef9-bf7325711cb2/QUES.jpg',
    experienceYears: 9,
    classesTaught: ['1-on-1 Performance Training', 'Small Group Power']
  },
  {
    id: 'coach-b',
    name: 'Brodney',
    nickname: 'Coach B',
    role: 'Metabolic Conditioning Coach',
    specialty: ['Full-Body Fat Loss', 'Agility Ladders', 'Motivation'],
    bio: 'Coach B brings high-octane southern energy and unwavering faith in his clients. His classes are famous for high-fives, heavy sweat, and an electric atmosphere where everyone is pushed to victory.',
    quote: 'Stay hungry, stay humble, and let your work make the noise.',
    instagram: '@coach_brodney',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/2b5d02ff-b034-4e6d-a393-2b04233275b5/Image+1-5-26+at+12.24%E2%80%AFPM.jpeg',
    experienceYears: 8,
    classesTaught: ['The Signature E.F.F.E.C.T. Bootcamp', 'HIIT Shred']
  }
];
