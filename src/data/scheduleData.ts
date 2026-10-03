export interface ScheduleItem {
  id: string;
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  time: string;
  title: string;
  category: 'bootcamp' | 'spin' | 'auxiliary' | 'recovery';
  trainer: string;
  studio: string;
  duration: string;
  totalSpots: number;
  spotsLeft: number;
  intensity: number;
}

export const SCHEDULE_DAYS = [
  { id: 'monday', label: 'Monday', short: 'Mon' },
  { id: 'tuesday', label: 'Tuesday', short: 'Tue' },
  { id: 'wednesday', label: 'Wednesday', short: 'Wed' },
  { id: 'thursday', label: 'Thursday', short: 'Thu' },
  { id: 'friday', label: 'Friday', short: 'Fri' },
  { id: 'saturday', label: 'Saturday', short: 'Sat' },
  { id: 'sunday', label: 'Sunday', short: 'Sun' },
] as const;

export const WEEKLY_SCHEDULE: ScheduleItem[] = [
  // Monday
  { id: 'm-1', day: 'monday', time: '05:30 AM', title: 'The Signature Bootcamp (Sunrise Gauntlet)', category: 'bootcamp', trainer: 'Dooley', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 3, intensity: 5 },
  { id: 'm-2', day: 'monday', time: '06:30 AM', title: 'Rhythm Spin Experience', category: 'spin', trainer: 'Reggie Ball', studio: 'Cycle Sanctuary', duration: '45 min', totalSpots: 24, spotsLeft: 2, intensity: 4.5 },
  { id: 'm-3', day: 'monday', time: '06:30 AM', title: 'Morning Signature Bootcamp', category: 'bootcamp', trainer: 'Coach Ball', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 6, intensity: 5 },
  { id: 'm-4', day: 'monday', time: '12:00 PM', title: 'Midday Power Hour Bootcamp', category: 'bootcamp', trainer: 'Zan Johnson', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 30, spotsLeft: 8, intensity: 4.5 },
  { id: 'm-5', day: 'monday', time: '05:30 PM', title: 'G.L.T. (Glutes, Legs & Thighs)', category: 'auxiliary', trainer: 'Coach Cali', studio: 'Studio B', duration: '45 min', totalSpots: 30, spotsLeft: 1, intensity: 4.5 },
  { id: 'm-6', day: 'monday', time: '05:30 PM', title: 'Prime Time Bootcamp', category: 'bootcamp', trainer: 'Dooley', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 4, intensity: 5 },
  { id: 'm-7', day: 'monday', time: '06:30 PM', title: 'Sunset Heavy Bass Spin', category: 'spin', trainer: 'Reggie Ball', studio: 'Cycle Sanctuary', duration: '45 min', totalSpots: 24, spotsLeft: 5, intensity: 4.5 },
  { id: 'm-8', day: 'monday', time: '06:30 PM', title: 'Night Shift Bootcamp', category: 'bootcamp', trainer: 'Coach B', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 7, intensity: 5 },

  // Tuesday
  { id: 'tu-1', day: 'tuesday', time: '05:30 AM', title: 'The Signature Bootcamp (Sunrise Gauntlet)', category: 'bootcamp', trainer: 'Coach Ball', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 4, intensity: 5 },
  { id: 'tu-2', day: 'tuesday', time: '06:30 AM', title: 'Morning Signature Bootcamp', category: 'bootcamp', trainer: 'Shayon Green', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 5, intensity: 5 },
  { id: 'tu-3', day: 'tuesday', time: '12:00 PM', title: 'Midday Power Hour Bootcamp', category: 'bootcamp', trainer: 'Marques Grant', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 30, spotsLeft: 9, intensity: 4.5 },
  { id: 'tu-4', day: 'tuesday', time: '05:30 PM', title: 'Rhythm Spin Power Ride', category: 'spin', trainer: 'Reggie Ball', studio: 'Cycle Sanctuary', duration: '45 min', totalSpots: 24, spotsLeft: 2, intensity: 4.5 },
  { id: 'tu-5', day: 'tuesday', time: '05:30 PM', title: 'Prime Time Bootcamp', category: 'bootcamp', trainer: 'Dooley', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 3, intensity: 5 },
  { id: 'tu-6', day: 'tuesday', time: '06:30 PM', title: 'GlideZone Step with Coach Daja', category: 'auxiliary', trainer: 'Coach Daja', studio: 'Studio B', duration: '45 min', totalSpots: 28, spotsLeft: 0, intensity: 4 },
  { id: 'tu-7', day: 'tuesday', time: '06:30 PM', title: 'Night Shift Bootcamp', category: 'bootcamp', trainer: 'Zan Johnson', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 6, intensity: 5 },

  // Wednesday
  { id: 'w-1', day: 'wednesday', time: '05:30 AM', title: 'The Signature Bootcamp', category: 'bootcamp', trainer: 'Dooley', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 2, intensity: 5 },
  { id: 'w-2', day: 'wednesday', time: '06:30 AM', title: 'Rhythm Spin Experience', category: 'spin', trainer: 'Reggie Ball', studio: 'Cycle Sanctuary', duration: '45 min', totalSpots: 24, spotsLeft: 4, intensity: 4.5 },
  { id: 'w-3', day: 'wednesday', time: '06:30 AM', title: 'Morning Signature Bootcamp', category: 'bootcamp', trainer: 'Coach Ball', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 7, intensity: 5 },
  { id: 'w-4', day: 'wednesday', time: '12:00 PM', title: 'Midday Power Hour Bootcamp', category: 'bootcamp', trainer: 'Coach B', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 30, spotsLeft: 10, intensity: 4.5 },
  { id: 'w-5', day: 'wednesday', time: '05:30 PM', title: 'G.L.T. Lower Body Burnout', category: 'auxiliary', trainer: 'Coach Cali', studio: 'Studio B', duration: '45 min', totalSpots: 30, spotsLeft: 2, intensity: 4.5 },
  { id: 'w-6', day: 'wednesday', time: '05:30 PM', title: 'Prime Time Bootcamp', category: 'bootcamp', trainer: 'Dooley', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 1, intensity: 5 },
  { id: 'w-7', day: 'wednesday', time: '06:30 PM', title: 'Trap Sprint Spin', category: 'spin', trainer: 'Reggie Ball', studio: 'Cycle Sanctuary', duration: '45 min', totalSpots: 24, spotsLeft: 3, intensity: 4.5 },

  // Thursday
  { id: 'th-1', day: 'thursday', time: '05:30 AM', title: 'The Signature Bootcamp', category: 'bootcamp', trainer: 'Coach Ball', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 5, intensity: 5 },
  { id: 'th-2', day: 'thursday', time: '06:30 AM', title: 'Morning Signature Bootcamp', category: 'bootcamp', trainer: 'Zan Johnson', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 8, intensity: 5 },
  { id: 'th-3', day: 'thursday', time: '12:00 PM', title: 'Midday Power Hour Bootcamp', category: 'bootcamp', trainer: 'Shayon Green', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 30, spotsLeft: 6, intensity: 4.5 },
  { id: 'th-4', day: 'thursday', time: '05:30 PM', title: 'Rhythm Spin Power Ride', category: 'spin', trainer: 'Reggie Ball', studio: 'Cycle Sanctuary', duration: '45 min', totalSpots: 24, spotsLeft: 3, intensity: 4.5 },
  { id: 'th-5', day: 'thursday', time: '05:30 PM', title: 'Prime Time Bootcamp', category: 'bootcamp', trainer: 'Dooley', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 2, intensity: 5 },
  { id: 'th-6', day: 'thursday', time: '06:30 PM', title: 'GlideZone Step Aerobics', category: 'auxiliary', trainer: 'Coach Daja', studio: 'Studio B', duration: '45 min', totalSpots: 28, spotsLeft: 1, intensity: 4 },

  // Friday
  { id: 'f-1', day: 'friday', time: '05:30 AM', title: 'Friday Beast Mode Bootcamp', category: 'bootcamp', trainer: 'Dooley', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 3, intensity: 5 },
  { id: 'f-2', day: 'friday', time: '06:30 AM', title: 'Morning Bootcamp Gauntlet', category: 'bootcamp', trainer: 'Coach Ball', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 35, spotsLeft: 6, intensity: 5 },
  { id: 'f-3', day: 'friday', time: '12:00 PM', title: 'Weekend Warmup Bootcamp', category: 'bootcamp', trainer: 'Coach B', studio: 'Main Arena Turf', duration: '45 min', totalSpots: 30, spotsLeft: 11, intensity: 4.5 },
  { id: 'f-4', day: 'friday', time: '06:00 PM', title: 'Deep Stretch & Fascia Mobility Lab', category: 'recovery', trainer: 'Daniel Warren', studio: 'Studio B', duration: '50 min', totalSpots: 25, spotsLeft: 8, intensity: 2 },

  // Saturday
  { id: 'sa-1', day: 'saturday', time: '08:00 AM', title: 'All-Star Saturday Morning Bootcamp', category: 'bootcamp', trainer: 'Dooley & Staff', studio: 'Main Arena Turf', duration: '50 min', totalSpots: 45, spotsLeft: 2, intensity: 5 },
  { id: 'sa-2', day: 'saturday', time: '09:00 AM', title: 'Weekend Heavy Rhythm Spin', category: 'spin', trainer: 'Reggie Ball', studio: 'Cycle Sanctuary', duration: '45 min', totalSpots: 24, spotsLeft: 1, intensity: 4.5 },
  { id: 'sa-3', day: 'saturday', time: '10:00 AM', title: 'All-Star Community Mega Bootcamp', category: 'bootcamp', trainer: 'Dooley & Guest Coaches', studio: 'Main Arena Turf', duration: '50 min', totalSpots: 45, spotsLeft: 4, intensity: 5 },
  { id: 'sa-4', day: 'saturday', time: '10:15 AM', title: 'G.L.T. Weekend Glute Sculpt', category: 'auxiliary', trainer: 'Coach Cali', studio: 'Studio B', duration: '45 min', totalSpots: 30, spotsLeft: 3, intensity: 4.5 },
  { id: 'sa-5', day: 'saturday', time: '11:15 AM', title: 'GlideZone Party Step', category: 'auxiliary', trainer: 'Coach Daja', studio: 'Studio B', duration: '45 min', totalSpots: 28, spotsLeft: 2, intensity: 4 },

  // Sunday
  { id: 'su-1', day: 'sunday', time: '10:30 AM', title: 'Sunday Restoration & Joint Mobility', category: 'recovery', trainer: 'Daniel Warren', studio: 'Studio B', duration: '50 min', totalSpots: 30, spotsLeft: 12, intensity: 2 }
];
