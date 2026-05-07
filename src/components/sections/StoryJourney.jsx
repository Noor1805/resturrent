import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StoryJourney = () => {
  const headingRef = useRef(null);
  const headingChars = "WHEN ICONS WERE BORN".split("");
  const [activeCharIndex, setActiveCharIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;
      const { top, height } = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress of the element passing through the viewport
      const scrollProgress = (windowHeight / 1.1 - top) / (height + windowHeight / 4);
      const clamped = Math.max(0, Math.min(1, scrollProgress));
      
      // Smoothly map progress to character index
      setActiveCharIndex(Math.floor(clamped * headingChars.length));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger immediately on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headingChars.length]);

  return (
    <section className="relative w-full min-h-[90vh] bg-black flex flex-col items-center justify-start pt-24 overflow-hidden border-t border-white/[0.05]">
      
      {/* Background Image (test.png) */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center">
        <img 
          src="/asset/our story/test.png" 
          alt="Journey Timeline" 
          className="w-full h-full object-cover md:object-contain opacity-90" 
        />
        {/* Gradients to fade edges cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-4 pointer-events-none">
        
        {/* Heading with Scroll Scrub Color Reveal */}
        <h2 
          ref={headingRef}
          className="font-serif text-3xl md:text-4xl lg:text-[40px] uppercase tracking-[0.2em] mb-4 flex justify-center flex-wrap"
        >
          {headingChars.map((char, index) => (
            <span 
              key={index} 
              className={`transition-colors duration-300 ease-out ${char === " " ? "w-4" : ""} ${
                index <= activeCharIndex ? 'text-[#d4af37]' : 'text-white'
              }`}
            >
              {char}
            </span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-white/60 font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase mb-10"
        >
          The Journey of our signature dishes
        </motion.p>
        
        {/* Gold Separator */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
          className="w-16 h-[1px]"
          style={{ backgroundColor: '#a68a56' }}
        />

        {/* Center Text 
            Assuming test.png has the visual timeline and dishes,
            we place the center typographic block here.
        */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
          className="flex flex-col items-center mt-20 md:mt-24"
        >
          <span className="text-[#e6d5b8] font-serif text-3xl md:text-[32px] mb-3 tracking-widest">
            1998
          </span>
          <span className="text-[#a68a56] font-serif text-xs md:text-sm tracking-[0.25em] uppercase mb-4 font-medium">
            The Beginning
          </span>
          <p className="text-white/60 font-sans text-[12px] md:text-[13px] max-w-[260px] leading-loose italic">
            Our first signature creation,<br/>marking the birth of Obsidian.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default StoryJourney;
