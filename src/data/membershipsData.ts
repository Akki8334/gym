export interface MembershipPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  priceAutopay: number;
  priceMonthly: number;
  period: string;
  description: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  ctaType: 'primary' | 'secondary' | 'trial';
}

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'first-class-free',
    name: 'First Class Free Pass',
    badge: 'NEW ATHLETE OFFER',
    isPopular: false,
    priceAutopay: 0,
    priceMonthly: 0,
    period: 'one-time',
    description: 'Experience the electric drumline atmosphere of Atlanta’s premier performing arts gym with zero risk or upfront commitment.',
    features: [
      'Access to any Signature Bootcamp class',
      'Full facility tour & coach introduction',
      'Complimentary pre-workout hydration check',
      'No credit card required to claim'
    ],
    ctaText: 'CLAIM FREE PASS',
    ctaType: 'trial'
  },
  {
    id: 'three-days-bootcamp',
    name: '3 Days / Week Bootcamp',
    badge: 'FOCUSED CONSISTENCY',
    isPopular: false,
    priceAutopay: 99,
    priceMonthly: 125,
    period: 'per month',
    description: 'Designed for busy professionals seeking a consistent 3-day workout cadence with high-energy accountability.',
    features: [
      'Attend any 3 bootcamp sessions per week (12/mo)',
      'Access to all morning, noon & evening bootcamps',
      'Locker room & amenities access',
      'Spreading the Health Juice Bar member discounts',
      'Cancel autopay anytime without penalty'
    ],
    notIncluded: ['GlideZone Step & GLT Auxiliary classes', 'Spin Studio sessions'],
    ctaText: 'JOIN 3 DAYS/WEEK',
    ctaType: 'secondary'
  },
  {
    id: 'unlimited-bootcamp',
    name: 'Unlimited All-Access Bootcamp',
    badge: 'MOST POPULAR — BEST VALUE',
    isPopular: true,
    priceAutopay: 159,
    priceMonthly: 179,
    period: 'per month',
    description: 'Our flagship all-access tier. Come as much as you like, stay for multiple classes each day, and experience total transformation.',
    features: [
      'UNLIMITED Signature Bootcamp sessions (come anytime)',
      'Full access to GLIDEZONE Step with Coach Daja',
      'Full access to G.L.T. Lower Body with Coach Cali',
      'Full access to Stretch & Mobility recovery labs',
      'Multiple classes per day permitted',
      'Priority booking window for popular classes',
      '10% off at Spreading the Health Juice Bar',
      'VIP invites to All-Star Saturday events & gym trips'
    ],
    ctaText: 'START UNLIMITED',
    ctaType: 'primary'
  },
  {
    id: 'unlimited-spin',
    name: 'Unlimited Spin Experience',
    badge: 'CYCLING ENTHUSIAST',
    isPopular: false,
    priceAutopay: 85,
    priceMonthly: 85,
    period: 'per month',
    description: 'Dedicated cycling membership for high-intensity, rhythm-driven indoor cardio with heavy bass playlists.',
    features: [
      'Unlimited Rhythm Spin classes each month',
      'Shoe clip compatibility and bike fitting support',
      'Locker room & shower amenities',
      'Flexible drop-in or autopay options ($60 for 10-pack)'
    ],
    notIncluded: ['Bootcamp turf access', 'GlideZone / GLT auxiliary'],
    ctaText: 'RIDE UNLIMITED',
    ctaType: 'secondary'
  },
  {
    id: 'on-demand-virtual',
    name: 'E.F.F.E.C.T. On-Demand App',
    badge: 'GLOBAL DIGITAL ACCESS',
    isPopular: false,
    priceAutopay: 40,
    priceMonthly: 40,
    period: 'per month',
    description: 'Take the Atlanta hype anywhere in the world. Mon-Sat livestreamed bootcamps and an archive of 150+ high-intensity workouts.',
    features: [
      '7-Day Free Trial included',
      'Daily live broadcast bootcamps (5:30 AM, 6:30 AM, 12 PM, 5:30 PM)',
      '150+ categorized on-demand video workouts',
      'Available on iOS App Store & Google Play',
      'Home gym equipment guides & minimal-gear tracks'
    ],
    ctaText: 'START 7-DAY FREE TRIAL',
    ctaType: 'trial'
  }
];

export const DROP_IN_RATES = [
  { name: 'Bootcamp Single Drop-In', price: '$30', note: 'First class is always free' },
  { name: 'GLIDEZONE Step Drop-In', price: '$25', note: 'Free for Unlimited Members' },
  { name: 'G.L.T. Lower Body Drop-In', price: '$25', note: 'Free for Unlimited Members' },
  { name: 'Spin Single Ride', price: '$10', note: '10-Session Pack for $60' },
  { name: 'Senior (65+) Unlimited', price: '$79/mo', note: 'Valid ID required' },
  { name: 'Military & First Responder', price: '$109/mo', note: 'Autopay rate with credentials' }
];
