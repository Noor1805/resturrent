import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroOverlay from '../components/sections/IntroOverlay';
import Hero from '../components/sections/Hero';
import HomeMarquee from '../components/sections/HomeMarquee';
import SignatureDishes from '../components/sections/SignatureDishes';
import HomeStoryTeaser from '../components/sections/HomeStoryTeaser';
import ChefSection from '../components/sections/ChefSection';
import AtmosphereSection from '../components/sections/AtmosphereSection';
import ReservationBanner from '../components/sections/ReservationBanner';
import MenuPreview from '../components/sections/MenuPreview';
import LoungeSection from '../components/sections/LoungeSection';
import InspireReviews from '../components/sections/InspireReviews';
import VisitSection from '../components/sections/VisitSection';
import Ambiance from '../components/sections/Ambiance';
import InstaReels from '../components/sections/InstaReels';
import Footer from '../components/sections/Footer';
import Preloader from '../components/ui/Preloader';
import { useLayout } from '../components/layout/Layout';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEntered, setIsEntered] = useState(false);
  const { setIsFrameVisible } = useLayout();

  useEffect(() => {
     setIsFrameVisible(false);
  }, [setIsFrameVisible]);

  const handleEnter = () => {
      setIsEntered(true);
      setIsFrameVisible(true);
  };

  return (
    <main className="relative bg-black w-full overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
         <div className="flex flex-col">
            <Hero isEntered={isEntered} />
            <HomeMarquee />
            <SignatureDishes isEntered={isEntered} />
            <HomeStoryTeaser />
            <ChefSection />
            <AtmosphereSection />
            <MenuPreview />
            <LoungeSection />
            <InspireReviews />
            <VisitSection />
            <ReservationBanner />
            <Ambiance />
            <InstaReels />
            <Footer />
         </div>
      )}

      {!isLoading && !isEntered && (
        <IntroOverlay onEnter={handleEnter} />
      )}
    </main>
  );
};

export default Home;
