import React from 'react';
import StoryHero from '../components/sections/StoryHero';
import StoryAbout from '../components/sections/StoryAbout';
import StoryPhilosophy from '../components/sections/StoryPhilosophy';
import StoryChef from '../components/sections/StoryChef';
import StoryJourney from '../components/sections/StoryJourney';
import StorySignatures from '../components/sections/StorySignatures';
import StoryAtmosphere from '../components/sections/StoryAtmosphere';
import StoryVision from '../components/sections/StoryVision';
import StoryLegacy from '../components/sections/StoryLegacy';
import StoryPress from '../components/sections/StoryPress';
import StoryCTA from '../components/sections/StoryCTA';
import Footer from '../components/sections/Footer';

const Story = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden pb-[calc(7.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <StoryHero />
      <StoryAbout />
      <StoryPhilosophy />
      <StoryChef />
      <StoryJourney />
      <StorySignatures />
      <StoryAtmosphere />
      <StoryVision />
      <StoryLegacy />
      <StoryPress />
      <StoryCTA />
      <Footer />
    </div>
  );
};

export default Story;
