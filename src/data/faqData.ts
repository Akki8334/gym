export interface FAQItem {
  id: string;
  category: 'first-visit' | 'classes' | 'membership' | 'personal-training' | 'on-demand';
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'fv-1',
    category: 'first-visit',
    question: 'Is my first class really free?',
    answer: 'Yes! Your first Signature Bootcamp class is 100% free. We want you to experience our drumline energy, meet the trainers, and feel the culture first-hand before making any commitment. Simply click "Start Your Free Week" or claim your pass online, and bring a valid photo ID upon arrival.'
  },
  {
    id: 'fv-2',
    category: 'first-visit',
    question: 'What do I need to bring for my first visit?',
    answer: 'Please bring a valid photo ID for first-time check-in, a large water bottle (hydration is mandatory), a small workout hand towel, and wear supportive cross-training shoes. We recommend arriving 15 minutes before class time so our front desk team can tour you and introduce you to your coach.'
  },
  {
    id: 'fv-3',
    category: 'first-visit',
    question: 'Where is E.F.F.E.C.T. Fitness located and is there parking?',
    answer: 'We are located at 1995B Metropolitan Parkway Southwest, Atlanta, GA 30315 (directly adjacent to the Spreading the Health Juice Bar). We offer generous free on-site parking for all members and visitors.'
  },
  {
    id: 'cl-1',
    category: 'classes',
    question: 'How long are the classes and how intense are they?',
    answer: 'All bootcamp, spin, and auxiliary classes run between 40 and 45 minutes. They are high-intensity functional workouts designed to test your limits, but every drill can be modified for beginners or scaled up for advanced athletes. Our coaches ensure safe form and proper pacing.'
  },
  {
    id: 'cl-2',
    category: 'classes',
    question: 'When should I eat before attending a high-intensity class?',
    answer: 'Do not eat anything heavy within 2 hours of class. We recommend having a balanced whole-food meal 2-3 hours beforehand, or a light easily-digestible snack (such as a banana or energy bar) 45 minutes prior. Staying well hydrated throughout the entire day before your workout is crucial.'
  },
  {
    id: 'cl-3',
    category: 'classes',
    question: 'Does the music in class contain explicit lyrics?',
    answer: 'Yes. Our workouts feature high-energy hip-hop, trap, drumline, and R&B soundtracks curated to match the relentless tempo of our training. Explicit language and authentic content are part of our authentic gym culture.'
  },
  {
    id: 'mb-1',
    category: 'membership',
    question: 'Do memberships require long-term contracts?',
    answer: 'No long-term locks! You have the freedom to choose our discounted 12-month autopay rate (which can be cancelled anytime with standard notice) or pay month-to-month. There are no surprise hidden maintenance fees.'
  },
  {
    id: 'mb-2',
    category: 'membership',
    question: 'What is included in the Unlimited Bootcamp membership ($159/mo autopay)?',
    answer: 'The Unlimited Bootcamp membership is our most popular all-inclusive tier. It gives you unlimited access to all Signature Bootcamps (multiple times per day if you dare!), plus GLIDEZONE Step with Coach Daja, G.L.T. with Coach Cali, and Stretch & Mobility Recovery classes, along with juice bar discounts.'
  },
  {
    id: 'mb-3',
    category: 'membership',
    question: 'Can I add family members or transfer my membership to someone else?',
    answer: 'Because of our individualized accountability and profile tracking, each person must hold their own active membership. Memberships are non-transferable.'
  },
  {
    id: 'pt-1',
    category: 'personal-training',
    question: 'How do personal training rates work at E.F.F.E.C.T.?',
    answer: 'Personal training rates are set directly by each individual coach based on session frequency and programming depth. In addition, trainees pay a nominal $15/month facility fee at the front desk to cover gym access and equipment.'
  },
  {
    id: 'pt-2',
    category: 'personal-training',
    question: 'What is the difference between small group and 1-on-1 personal training?',
    answer: '1-on-1 personal training provides dedicated individual attention with custom periodized programming. Small group training involves a tight-knit squad of approximately 15 trainees working through specialized coach-led circuits together.'
  },
  {
    id: 'od-1',
    category: 'on-demand',
    question: 'How does the E.F.F.E.C.T. On-Demand App work?',
    answer: 'Our On-Demand App ($40/month with a 7-day free trial) streams live bootcamps Monday through Saturday (5:30 AM, 6:30 AM, 12:00 PM, 5:30 PM) and includes an expansive on-demand video archive of full workouts, target burns, and core routines accessible on iPhone, Android, and smart TVs.'
  },
  {
    id: 'od-2',
    category: 'on-demand',
    question: 'What equipment do I need for virtual and at-home workouts?',
    answer: 'Minimal gear is required! We recommend a set of loop leg bands, light and heavy sets of dumbbells (or resistance bands), an arm band, ankle weights, and a brick/step block. We also feature bodyweight-only workouts for travelers.'
  }
];
