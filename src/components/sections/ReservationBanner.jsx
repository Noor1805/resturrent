import React from 'react';
import { motion } from 'framer-motion';

const ReservationBanner = () => {
  return (
    <section id="reservations" className="relative w-full py-32 bg-neutral-950 overflow-hidden border-y border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[200px] bg-gold-900/30 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gold-500 tracking-[0.4em] text-xs md:text-sm uppercase mb-6"
        >
          Secure Your Table
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif text-white mb-10 max-w-3xl"
        >
          An Unforgettable Evening Awaits at <span className="italic text-gold-100">Obsidian</span>
        </motion.h2>

        <button 
          onClick={(e) => e.preventDefault()}
          className="group relative px-12 py-4 border border-gold-500 text-gold-500 uppercase tracking-[0.3em] text-[11px] transition-all duration-700 font-light overflow-hidden"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
             Secure A Table
          </span>
          <div className="absolute inset-0 bg-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
        </button>
        
      </div>
    </section>
  );
};

export default ReservationBanner;
