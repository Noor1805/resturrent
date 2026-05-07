import React from 'react';
import { motion } from 'framer-motion';

const StoryAbout = () => {
  return (
    <section className="relative w-full bg-black flex flex-col md:flex-row-reverse items-stretch">
      {/* Right Side Image (previously Left) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative">
        <img 
            src="/asset/our story/image 2.png" 
            alt="Obsidian Interior" 
            className="w-full h-full object-cover" 
        />
        {/* Fade to black on the left edge to blend with text section */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent hidden md:block"></div>
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent md:hidden"></div>
      </div>

      {/* Left Side Content (previously Right) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 py-16 md:p-16 lg:p-24 bg-black z-10">
        <div className="max-w-lg flex flex-col items-start">
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl lg:text-5xl font-serif text-white uppercase tracking-wider leading-snug mb-8"
          >
            <span className="text-[#d4af37]">Born in New York.</span><br />
            <span className="text-[#d4af37] opacity-80">Built for the rare few.</span>
          </motion.h2>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            className="w-20 h-[1px] mb-8 origin-left"
            style={{ backgroundColor: '#d4af37' }}
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="text-white/60 font-sans text-sm md:text-base leading-loose tracking-wide mb-6"
          >
            Founded in 1998 in the heart of Manhattan, Obsidian was created with a singular vision—to build a sanctuary of culinary excellence where luxury is felt, not flaunted.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
            className="text-white/60 font-sans text-sm md:text-base leading-loose tracking-wide mb-12"
          >
            From a single, daring idea to an international reputation, our journey has always been guided by obsession, intention, and an unwavering commitment to timelessness.
          </motion.p>

          {/* Signature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
            className="flex flex-col items-center self-start md:ml-4"
          >
            <img 
              src="/asset/sign1-Photoroom.png" 
              alt="Founder Signature" 
              className="w-48 mb-2" 
              style={{ filter: 'brightness(0) invert(1) opacity(0.85) sepia(0.2)' }}
            />
            <span className="text-gold-500/50 font-serif text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(212, 175, 55, 0.5)' }}>
              1998
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StoryAbout;
