import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useLenis } from '../common/SmoothScroll';

const IntroOverlay = ({ onEnter }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.stop();
      document.body.style.overflow = 'hidden';
    }
  }, [lenis]);

  const handleEnter = () => {
    if (lenis) {
      lenis.start();
      document.body.style.overflow = '';
    }
    
    const tl = gsap.timeline({
      onComplete: onEnter
    });

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      pointerEvents: "none"
    });
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white cursor-pointer"
      onClick={handleEnter}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
         <img 
            src="/images/image1.png" 
            alt="Closed Door" 
            className="w-full h-full object-cover opacity-80"
         />
         <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <motion.div 
        className="relative z-10 flex flex-col items-center gap-4"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="text-xs uppercase tracking-[0.5em] text-gold-400">Welcome to</span>
        <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest">OBSIDIAN</h1>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/70 border-b border-white/20 pb-1">
          Click to Enter
        </p>
      </motion.div>
    </div>
  );
};

export default IntroOverlay;
