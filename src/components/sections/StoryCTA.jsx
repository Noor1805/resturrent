import React from 'react';
import { motion } from 'framer-motion';

const StoryCTA = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-black flex items-center justify-center overflow-hidden border-t border-white/[0.05]">
      
      {/* Background Image Setup (Centered) */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src="/asset/our story/image.png" 
          alt="Obsidian Atmosphere" 
          onError={(e) => { e.target.src = '/asset/restaurant-bg.jpg' }}
          className="w-full h-full object-cover object-center opacity-[0.35] mix-blend-luminosity"
        />
        {/* Deep vignette to focus on the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_80%)]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="max-w-[1000px] mx-auto px-4 md:px-8 w-full relative z-10 flex justify-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center pt-8 md:pt-0"
        >
          {/* Accent Line */}
          <div className="w-12 h-[1px] bg-[#d4af37] mb-8" />

          <h2 className="text-[#e6d5b8] font-serif text-3xl md:text-[42px] lg:text-[50px] uppercase tracking-[0.2em] mb-6 leading-tight">
            BECOME PART OF <br className="hidden md:block" /> THE STORY
          </h2>
          
          <p className="text-white/60 font-sans text-[15px] md:text-[18px] tracking-[0.15em] mb-12 uppercase">
            Reserve your table and experience Obsidian.
          </p>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                window.location.href = '/reservations';
              }, 300);
            }}
            className="group relative px-14 py-5 border border-[#d4af37]/50 bg-[#050505]/50 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all duration-700 hover:border-[#d4af37] active:scale-[0.95] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          >
            <div className="absolute inset-0 bg-[#d4af37] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out" />
            <span className="relative z-10 text-[#d4af37] group-hover:text-black font-semibold uppercase tracking-[0.2em] text-[13px] transition-colors duration-500">
              RESERVE A TABLE
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default StoryCTA;
