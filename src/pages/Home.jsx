import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroOverlay from '../components/sections/IntroOverlay';
import ScrollSequence from '../components/sections/ScrollSequence';
import Preloader from '../components/ui/Preloader';
import { useLayout } from '../components/layout/Layout';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isEntered, setIsEntered] = useState(false);
  const { setIsFrameVisible } = useLayout();

  useEffect(() => {
     // Hide Navbar/Footer initially
     setIsFrameVisible(false);
  }, [setIsFrameVisible]);

  const handleEnter = () => {
      setIsEntered(true);
      // Show Navbar/Footer after entering
      setIsFrameVisible(true);
  };

  return (
    <main className="relative overflow-hidden bg-black">
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && !isEntered && <IntroOverlay onEnter={handleEnter} />}
      
      {/* Mount ScrollSequence but keep it hidden/inactive until entered to ensure DOM is ready */}
      {!isLoading && (
          <div className={isEntered ? "opacity-100 transition-opacity duration-1000" : "opacity-0 h-0 overflow-hidden"}>
             <ScrollSequence isEntered={isEntered} />
          </div>
      )}

    </main>
  );
};

export default Home;
