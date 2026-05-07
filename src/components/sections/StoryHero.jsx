import React from 'react';
import { motion } from 'framer-motion';

const StoryHero = () => {
  const paragraphText = "Obsidian is a tribute to contrast—where elemental fire meets precious gold, and silence elevates every detail. In the heart of New York, we craft unforgettable experiences for those who seek the exceptional.";
  
  // Split paragraph into characters for typewriter effect
  const characters = paragraphText.split("");

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* You mentioned "image to move PSD" converted to PNG. Using image.png from our story folder */}
        <img 
            src="/asset/our story/image.png" 
            alt="Obsidian Dining Room" 
            className="w-full h-full object-cover opacity-50 scale-105" 
        />
        {/* Gradient overlay to make text readable (symmetrical for centered layout) */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 pt-24">
        <div className="max-w-5xl flex flex-col items-center text-center mx-auto">
          
          {/* Eyebrow / Top Title */}
          <div className="overflow-hidden mb-2">
            <motion.h3 
              initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="text-gold-500 font-serif text-lg md:text-2xl uppercase tracking-[0.2em]"
              style={{ color: '#d4af37' }}
            >
              The Story Of
            </motion.h3>
          </div>

          {/* Main Title (Movie Text Reveal Effect) */}
          <div className="mb-8 w-full flex justify-center">
            <h1 className="text-7xl md:text-[8rem] lg:text-[11rem] xl:text-[12rem] font-serif font-light text-white tracking-widest leading-none flex items-center justify-center -ml-1">
              {"OBSIDIAN".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ 
                    duration: 1.6, 
                    delay: 0.4 + (index * 0.1), 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Separator Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            className="w-24 h-px bg-gold-500/60 mb-8 origin-center"
            style={{ backgroundColor: '#d4af37' }}
          />

          {/* Subtitle */}
          <div className="overflow-hidden mb-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 1.4, ease: "easeOut" }}
              className="text-xl md:text-3xl font-serif tracking-widest uppercase leading-snug"
              style={{ color: '#d4af37' }}
            >
              A Legacy of Fire, Gold,<br />and Silence.
            </motion.h2>
          </div>

          {/* Paragraph with Typewriter effect */}
          <div className="mb-12 max-w-2xl min-h-[80px]">
            <motion.p 
              className="text-white/60 font-sans text-sm md:text-base leading-loose tracking-wide"
            >
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.1, 
                    delay: 2.0 + (index * 0.015) 
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-6 pointer-events-auto"
          >
            {/* Filled Gold Button */}
            <a 
              href="/reservations" 
              className="group relative px-8 py-4 flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: '#c69c3a' }}
            >
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-black font-semibold uppercase tracking-[0.2em] text-xs">
                Reserve A Table
              </span>
            </a>
            
            {/* Outlined Button */}
            <a 
              href="/menu" 
              className="group relative px-8 py-4 flex items-center justify-center border border-white/30 transition-all duration-500 overflow-hidden hover:border-white/60 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-white/5 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-white uppercase tracking-[0.2em] text-xs transition-colors duration-500">
                Explore Menu
              </span>
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default StoryHero;
