import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeStoryTeaser = () => {
  return (
    <section className="relative w-full bg-[#050505] border-y border-[#d4af37]/20 flex items-center h-[500px] md:h-[550px] overflow-hidden my-12">
      
      {/* Right Image Background (Full height, 60% width on right) */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-full z-0">
        <img 
          src="/asset/our story/image 2.png" 
          onError={(e) => { e.target.src = '/asset/restaurant-bg.jpg' }}
          alt="Obsidian Interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft gradient fade into the black left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex items-center">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full md:w-[50%] flex flex-col items-start py-16"
        >
          <h4 className="text-[#d4af37] font-sans font-semibold tracking-[0.2em] text-[12px] md:text-[13px] mb-4 uppercase">
            Our Story
          </h4>
          
          <h2 className="text-white font-serif text-3xl md:text-[42px] lg:text-[46px] leading-[1.15] mb-6">
            A Legacy of <br /> Passion & Precision
          </h2>
          
          <p className="text-[#a0a0a0] font-sans text-[14px] md:text-[15px] leading-[1.8] max-w-[400px] mb-10">
            Obsidian is a tribute to timeless culinary tradition and bold innovation. Every dish is a story. Every detail, deliberate.
          </p>
          
          <Link 
            to="/story"
            onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
            className="px-8 py-3 border border-[#d4af37]/40 text-[#d4af37] font-sans font-medium uppercase tracking-[0.2em] text-[11px] transition-all duration-500 hover:bg-[#d4af37] hover:text-black"
          >
            Discover Our Story
          </Link>
        </motion.div>

      </div>

      {/* Circular Stamp Badge */}
      <div className="absolute right-[-40px] md:right-16 top-1/2 -translate-y-1/2 w-[240px] h-[240px] z-20 opacity-[0.15] md:opacity-20 pointer-events-none mix-blend-screen">
        {/* Spinning Text SVG */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full text-[#d4af37]">
            <path id="circlePathTeaser" d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" fill="transparent" />
            <text className="text-[13.5px] uppercase tracking-[0.4em]" style={{ fill: 'currentColor', fontFamily: 'sans-serif' }}>
              <textPath href="#circlePathTeaser" startOffset="0%" textAnchor="start">
                  OBSIDIAN • NEW YORK • OBSIDIAN • NEW YORK • 
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Center Logo/Initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-serif text-[#d4af37] text-[55px] font-light tracking-widest ml-3">
            OS
          </span>
        </div>
      </div>
      
    </section>
  );
};

export default HomeStoryTeaser;
