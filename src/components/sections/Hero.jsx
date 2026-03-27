import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ isEntered }) => {
  if (!isEntered) return null;

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="/images/image2.png" 
            alt="Obsidian Interior" 
            className="w-full h-full object-cover opacity-60" 
        />
        {/* Soft gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
      </div>

      {/* Typography Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="overflow-hidden mb-2"
         >
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-white tracking-tighter shadow-sm">
                OBSIDIAN
            </h1>
         </motion.div>
         
         <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="overflow-hidden mb-8"
         >
            <p className="text-xl md:text-2xl font-serif text-white/90 italic tracking-wider">
                New York
            </p>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
            className="overflow-hidden mb-12"
         >
            <p className="text-sm md:text-lg text-gold-400 max-w-lg mx-auto font-light tracking-[0.3em] uppercase">
                Where Shadow Meets Flavor.
            </p>
         </motion.div>
         
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2, ease: "easeOut" }}
            className="flex gap-6 pointer-events-auto"
         >
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()} 
              className="group relative px-12 py-4 border border-gold-500/30 text-white uppercase tracking-[0.3em] text-[10px] transition-all duration-700 font-light overflow-hidden"
            >
               <span className="relative z-10 group-hover:text-black transition-colors duration-500">Reserve</span>
               <div className="absolute inset-0 bg-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
            </a>
            <a 
              href="#" 
              onClick={(e) => e.preventDefault()} 
              className="group relative px-12 py-4 bg-transparent border border-gold-500 text-gold-500 uppercase tracking-[0.3em] text-[10px] transition-all duration-700 font-light overflow-hidden"
            >
               <span className="relative z-10 group-hover:text-black transition-colors duration-500">Experience</span>
               <div className="absolute inset-0 bg-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
            </a>
         </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/50 uppercase tracking-[0.2em] text-xs mb-2">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
