import React, { lazy, Suspense } from 'react';

// Lazy load components
const HeroSection = lazy(() => import('../Components/HeroSection'));
const CallBackForm = lazy(() => import('../Components/CallBackForm'));
const TowerSection = lazy(() => import('../Components/TowerSection'));
const AboutSection = lazy(() => import('../Components/AboutSection'));
const Enquiry = lazy(() => import('../Components/Enquiry'));
const UnitsSection = lazy(() => import('../Components/UnitsSection'));
const AmenitiesSection = lazy(() => import('../Components/AmenitiesSection'));

const Home = () => {
  return (
    <Suspense fallback={<div className="text-white p-4 text-center">Loading...</div>}>
      <div>
        <HeroSection />
        <CallBackForm />
        <TowerSection />
        <AboutSection />
        <Enquiry />
        <AmenitiesSection />
        <UnitsSection />
      </div>
    </Suspense>
  );
};

export default Home;
