import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ClassExperience } from './components/ClassExperience';
import { ClassSchedule } from './components/ClassSchedule';
import { PersonalTraining } from './components/PersonalTraining';
import { TrainerShowcase } from './components/TrainerShowcase';
import { CommunitySection } from './components/CommunitySection';
import { TransformationSection } from './components/TransformationSection';
import { OnDemandSection } from './components/OnDemandSection';
import { MembershipSection } from './components/MembershipSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Modals & Interactive Widgets
import { FreePassModal } from './components/FreePassModal';
import { BookingModal } from './components/BookingModal';
import { TrainerModal } from './components/TrainerModal';
import { ClassModal } from './components/ClassModal';
import { CompareMembershipsModal } from './components/CompareMembershipsModal';
import { ConsultationModal } from './components/ConsultationModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { AudioPlayerWidget } from './components/AudioPlayerWidget';
import { KineticMarquee } from './components/KineticMarquee';
import { EnergyCalculator } from './components/EnergyCalculator';

// Data types
import { FitnessClass, CLASSES_DATA } from './data/classesData';
import { Trainer, TRAINERS_DATA } from './data/trainersData';
import { ScheduleItem, WEEKLY_SCHEDULE } from './data/scheduleData';
import { MembershipPlan } from './data/membershipsData';

export default function App() {
  // Modal states
  const [isFreePassOpen, setIsFreePassOpen] = useState(false);
  const [defaultFreePassClass, setDefaultFreePassClass] = useState<string>('Signature Bootcamp');

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingClass, setBookingClass] = useState<ScheduleItem | null>(null);

  const [selectedClass, setSelectedClass] = useState<FitnessClass | null>(null);
  const [isClassModalOpen, setIsClassModalOpen] = useState(false);

  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [isTrainerModalOpen, setIsTrainerModalOpen] = useState(false);

  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTrainerPref, setConsultationTrainerPref] = useState<string | undefined>(undefined);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global keyboard shortcuts (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handlers
  const handleOpenFreePass = (className?: string) => {
    setDefaultFreePassClass(className || 'Signature Bootcamp');
    setIsFreePassOpen(true);
  };

  const handleOpenScheduleBooking = (scheduleItem: ScheduleItem) => {
    setBookingClass(scheduleItem);
    setIsBookingOpen(true);
  };

  const handleBookClassDirect = (className: string) => {
    // Find matching schedule item or construct fallback
    const matched = WEEKLY_SCHEDULE.find(s => s.title.toLowerCase().includes(className.toLowerCase())) || WEEKLY_SCHEDULE[0];
    setBookingClass(matched);
    setIsBookingOpen(true);
  };

  const handleSelectClass = (fitnessClass: FitnessClass) => {
    setSelectedClass(fitnessClass);
    setIsClassModalOpen(true);
  };

  const handleSelectTrainer = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setIsTrainerModalOpen(true);
  };

  const handleOpenConsultation = (trainerName?: string) => {
    setConsultationTrainerPref(trainerName);
    setIsConsultationOpen(true);
  };

  const handleSelectPlan = (plan: MembershipPlan | string) => {
    const planName = typeof plan === 'string' ? plan : plan.name;
    if (planName.toLowerCase().includes('free')) {
      handleOpenFreePass('Signature Bootcamp');
    } else {
      // Direct to booking/membership activation
      handleOpenFreePass(planName);
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#f4f4f6] font-sans selection:bg-[#E52328] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onOpenFreePass={() => handleOpenFreePass()}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBooking={() => {
          setBookingClass(WEEKLY_SCHEDULE[0]);
          setIsBookingOpen(true);
        }}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Cinematic Hero */}
        <Hero
          onOpenFreePass={() => handleOpenFreePass()}
          onExploreClasses={() => {
            document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Kinetic Ticker Marquee */}
        <KineticMarquee theme="dark" />

        {/* 2. Brand Introduction & Pillars */}
        <BrandIntro onOpenFreePass={() => handleOpenFreePass()} />

        {/* 3. Class Experience Matrix */}
        <ClassExperience
          onSelectClass={handleSelectClass}
          onBookClassDirect={handleBookClassDirect}
        />

        {/* Interactive Calorie Burn & Energy Calculator */}
        <EnergyCalculator onBookClass={handleBookClassDirect} />

        {/* 4. Interactive Class Schedule & Booking */}
        <ClassSchedule
          onBookClass={handleOpenScheduleBooking}
          onOpenFreePass={() => handleOpenFreePass()}
        />

        {/* 5. Personal Training & Matchmaker */}
        <PersonalTraining onOpenConsultation={handleOpenConsultation} />

        {/* 6. Editorial Trainer Showcase */}
        <TrainerShowcase onSelectTrainer={handleSelectTrainer} />

        {/* 7. Community, Juice Bar, Market & Press */}
        <CommunitySection />

        {/* 8. Verified Transformations & Stories */}
        <TransformationSection onOpenFreePass={() => handleOpenFreePass()} />

        {/* 9. On-Demand App & Global Virtual Stream */}
        <OnDemandSection onOpenFreePass={() => handleOpenFreePass()} />

        {/* 10. Transparent Memberships & Pricing */}
        <MembershipSection
          onSelectPlan={handleSelectPlan}
          onOpenCompare={() => setIsCompareOpen(true)}
          onOpenFreePass={() => handleOpenFreePass()}
        />

        {/* 11. Location & Physical Gym Facility */}
        <LocationSection />

        {/* 12. Searchable Accordion FAQ */}
        <FAQSection />

        {/* Red Kinetic Ticker Marquee */}
        <KineticMarquee theme="red" reverse={true} />

        {/* 13. High-Impact Closing CTA */}
        <FinalCTA
          onOpenFreePass={() => handleOpenFreePass()}
          onExploreSchedule={() => {
            document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </main>

      {/* Multi-Column Footer */}
      <Footer />

      {/* Floating Drumline Hype Audio Synthesizer */}
      <AudioPlayerWidget />

      {/* Interactive Modals */}
      <FreePassModal
        isOpen={isFreePassOpen}
        onClose={() => setIsFreePassOpen(false)}
        defaultClass={defaultFreePassClass}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedClass={bookingClass}
        onClaimFreePass={() => {
          setIsBookingOpen(false);
          setIsFreePassOpen(true);
        }}
      />

      <ClassModal
        fitnessClass={selectedClass}
        isOpen={isClassModalOpen}
        onClose={() => setIsClassModalOpen(false)}
        onBookClass={(className) => {
          setIsClassModalOpen(false);
          handleBookClassDirect(className);
        }}
      />

      <TrainerModal
        trainer={selectedTrainer}
        isOpen={isTrainerModalOpen}
        onClose={() => setIsTrainerModalOpen(false)}
        onBookSession={(trainerName) => {
          setIsTrainerModalOpen(false);
          handleOpenConsultation(trainerName);
        }}
      />

      <CompareMembershipsModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        onSelectPlan={(planName) => {
          setIsCompareOpen(false);
          handleSelectPlan(planName);
        }}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        trainerPreference={consultationTrainerPref}
      />

      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectClass={(id) => {
          const matched = CLASSES_DATA.find(c => c.id === id);
          if (matched) handleSelectClass(matched);
        }}
        onSelectTrainer={(id) => {
          const matched = TRAINERS_DATA.find(t => t.id === id);
          if (matched) handleSelectTrainer(matched);
        }}
        onSelectMembership={(id) => {
          handleSelectPlan(id);
        }}
      />
    </div>
  );
}
