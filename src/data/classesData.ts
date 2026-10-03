export interface FitnessClass {
  id: string;
  name: string;
  tagline: string;
  category: 'bootcamp' | 'spin' | 'auxiliary' | 'recovery' | 'personal';
  intensity: number; // 1 to 5
  durationMinutes: number;
  caloriesBurned: string;
  description: string;
  longDescription: string;
  trainer: string;
  trainerRole: string;
  image: string;
  whatToBring: string[];
  scheduleHighlights: string[];
  spotsDefault: number;
}

export const CLASSES_DATA: FitnessClass[] = [
  {
    id: 'signature-bootcamp',
    name: 'The Signature E.F.F.E.C.T. Bootcamp',
    tagline: 'High-intensity, drumline energy, functional total-body transformation',
    category: 'bootcamp',
    intensity: 5,
    durationMinutes: 45,
    caloriesBurned: '600 - 950 kcal',
    description: 'Our legendary full-body conditioning class designed to push both mental and physical limits. Fast-paced, explosive athletic movements and radical accountability.',
    longDescription: 'The E.F.F.E.C.T. Signature Bootcamp is where health, hustle, and heart collide. Built on our core philosophy of Effective, Focused, Fast, Exceptional, Creative Training, this 45-minute class pushes your endurance through high-intensity intervals, athletic turf drills, dumbbell complexes, and bodyweight conditioning. The energy in the room moves like a live HBCU drumline—you won\'t be allowed to quit, and when you finish, you\'ll understand what "Let\'s Get Paid!" really means.',
    trainer: 'Dooley & Master Team',
    trainerRole: 'Founder & Master Coaches',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974895759-0VJASP3QTWVMN2PGL3I1/2I1A0569.jpeg',
    whatToBring: ['Hydration / Water bottle (mandatory)', 'Small workout hand towel', 'Cross-training athletic shoes', 'High-energy mindset'],
    scheduleHighlights: ['Mon-Thu: 5:30 AM, 6:30 AM, 12:00 PM, 5:30 PM, 6:30 PM', 'Fri: 5:30 AM, 6:30 AM, 12:00 PM', 'Sat: 8:00 AM, 10:00 AM'],
    spotsDefault: 35
  },
  {
    id: 'rhythm-spin',
    name: 'E.F.F.E.C.T. Rhythm Spin Experience',
    tagline: 'Cardio endurance synced to heavy bass, sprints, and heavy climbs',
    category: 'spin',
    intensity: 4.5,
    durationMinutes: 45,
    caloriesBurned: '500 - 800 kcal',
    description: 'Low-impact, high-power indoor cycling synchronized to heart-pumping hip-hop and trap beats. Build monstrous aerobic capacity and torch calories.',
    longDescription: 'Step into the dark, neon-lit cycling sanctuary. Our Spin classes are an immersive cardio journey designed to tone legs, strengthen cardiovascular output, and build mental toughness. Instructors curate high-energy playlists where every sprint, hill climb, and tap-back is synchronized with the rhythm. Clip in, dial up the resistance, and ride with the pack.',
    trainer: 'Reggie Ball & Spin Crew',
    trainerRole: 'Performance Cycle Lead',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974447609-FD9M8UA9FV4L4I5V15QH/2I1A3517.jpeg',
    whatToBring: ['Cycling shoes (SPD cleats) or stiff athletic sneakers', 'Hand towel (mandatory)', 'Electrolyte water bottle'],
    scheduleHighlights: ['Mon & Wed: 6:30 AM, 6:30 PM', 'Tue & Thu: 5:30 PM', 'Sat: 9:00 AM'],
    spotsDefault: 24
  },
  {
    id: 'glidezone-step',
    name: 'GlideZone with Coach Daja',
    tagline: 'Modern athletic step aerobics with explosive rhythm and footwork',
    category: 'auxiliary',
    intensity: 4,
    durationMinutes: 45,
    caloriesBurned: '450 - 700 kcal',
    description: 'An electrifying modern twist on classic step aerobics. Fast footwork, agility combinations, and high-energy hip-hop grooves that make cardio feel like choreography.',
    longDescription: 'Step into the Zone! Coach Daja Jennings takes step aerobics into a whole new athletic stratosphere. Suitable for ambitious beginners and seasoned steppers alike, GlideZone combines precision coordination, rhythm-driven combinations, and continuous plyometric movement. Spaces fill up notoriously fast for this community favorite!',
    trainer: 'Coach Daja Jennings',
    trainerRole: 'GlideZone Master Coach',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974736960-59CTIF3HZ9JUT1HKFFDJ/2I1A1595.jpeg',
    whatToBring: ['Supportive athletic sneakers', 'Towel', 'Plenty of water'],
    scheduleHighlights: ['Tuesday & Thursday: 6:30 PM', 'Saturday: 11:15 AM'],
    spotsDefault: 28
  },
  {
    id: 'glt-glutes-legs-thighs',
    name: 'G.L.T. with Coach Cali',
    tagline: 'Glutes, Legs & Thighs targeted hypertrophy and sculpting',
    category: 'auxiliary',
    intensity: 4.5,
    durationMinutes: 45,
    caloriesBurned: '450 - 650 kcal',
    description: 'Hyper-focused lower-body resistance training with bands, dumbbells, and high-volume burnouts to sculpt, build, and tone glutes, quads, and hamstrings.',
    longDescription: 'Created and commanded by Coach Leiana "Cali" Williams, G.L.T. is our dedicated lower-body architecture lab. We isolate the glute medius, maximus, quads, and posterior chain using resistance loops, kettlebell hinges, and pulse sets. Set to the hardest hitting playlist in Atlanta, this class is guaranteed to make your legs shake and your glutes ignite.',
    trainer: 'Coach Leiana "Cali" Williams',
    trainerRole: 'GLT Specialist Coach',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974565682-VOLB5OCECFITDWLREHQ3/2I1A2434.jpeg',
    whatToBring: ['Thick fabric resistance bands (or borrow on site)', 'Water bottle', 'Workout mat if preferred'],
    scheduleHighlights: ['Monday & Wednesday: 5:30 PM', 'Saturday: 10:15 AM'],
    spotsDefault: 30
  },
  {
    id: 'stretch-mobility',
    name: 'Active Stretch & Mobility Lab',
    tagline: 'Deep fascia release, joint restoration, and active recovery',
    category: 'recovery',
    intensity: 2,
    durationMinutes: 45,
    caloriesBurned: '180 - 300 kcal',
    description: 'Restore your muscles, open tight hips and shoulders, and accelerate workout recovery through dynamic flow, myofascial release, and breathwork.',
    longDescription: 'Intense training demands intelligent recovery. The E.F.F.E.C.T. Mobility Lab is designed to decompress the nervous system, release tight hip flexors and lower back tension from heavy lifting and sprint sessions, and lengthen overworked muscle fibers. Essential for injury prevention and long-term athletic longevity.',
    trainer: 'Coach Daniel "Lito" Warren',
    trainerRole: 'Mobility & Recovery Specialist',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974515549-5TJPWSZCOAT73CT3X3HA/2I1A1100.jpeg',
    whatToBring: ['Comfortable loose athletic clothing', 'Yoga mat (or gym provided)', 'Hydration'],
    scheduleHighlights: ['Friday: 6:00 PM', 'Sunday: 10:30 AM Recovery Special'],
    spotsDefault: 25
  },
  {
    id: 'personal-performance-training',
    name: '1-on-1 Performance Training',
    tagline: 'Customized programming tailored to your unique anatomy and goals',
    category: 'personal',
    intensity: 5,
    durationMinutes: 60,
    caloriesBurned: '500 - 900 kcal',
    description: 'Direct mentorship with an elite collegiate or pro-level trainer. Custom periodized strength cycles, body composition tracking, and nutritional oversight.',
    longDescription: 'For those who want individual attention and precision calibration, our 1-on-1 training program connects you with our roster of elite coaches. Whether your goal is dramatic weight loss, athletic competition prep, or corrective rehabilitation, your trainer designs every rep, set, and nutritional protocol specifically for your body.',
    trainer: 'Assigned Master Coach',
    trainerRole: 'Personal Performance Coach',
    image: 'https://images.squarespace-cdn.com/content/v1/5665daf8df40f3d958f6d59c/1762974694526-AIC4T12U2J9SNJNN1IUF/IMG_8083.jpeg',
    whatToBring: ['Workout log/phone', 'Water bottle', 'Towel', 'Determined commitment'],
    scheduleHighlights: ['Flexible booking from 5:00 AM to 8:00 PM by trainer appointment'],
    spotsDefault: 4
  }
];
