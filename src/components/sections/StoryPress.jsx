import React from 'react';
import { motion } from 'framer-motion';

const PRESS_ITEMS = [
  {
    quote: '"Obsidian is not just a restaurant. It\'s a masterclass in modern luxury."',
    source: 'Forbes',
    sourceStyle: 'font-serif font-bold text-2xl tracking-wider text-white'
  },
  {
    quote: '"A place where every detail is a love letter to craftsmanship."',
    source: 'The New York Times',
    sourceStyle: 'font-serif italic font-bold text-2xl tracking-wider text-white'
  },
  {
    quote: '"Obsidian delivers an experience that lingers long after the last bite."',
    source: 'MICHELIN GUIDE',
    sourceStyle: 'font-sans font-bold text-xl tracking-[0.2em] uppercase flex items-center justify-center gap-3 text-white',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
      </svg>
    )
  }
];

const StoryPress = () => {
  return (
    <section className="w-full bg-[#030303] py-24 md:py-32 border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center mb-16 md:mb-24"
        >
          <div className="flex items-center gap-6 mb-2">
            <h2 className="text-[#e6d5b8] font-serif text-3xl md:text-[40px] uppercase tracking-[0.2em]">
              PRESS & PRAISE
            </h2>
          </div>
          <div className="w-20 h-[1px] bg-[#a68a56] mt-6" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {PRESS_ITEMS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative border border-white/10 bg-[#050505] p-10 md:p-16 flex flex-col items-center text-center justify-between min-h-[320px] overflow-hidden"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Animated Top Border Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

              <p className="relative z-10 text-[#e6d5b8]/80 font-serif text-[18px] md:text-[22px] leading-[1.8] mb-12">
                {item.quote}
              </p>
              <div className={`relative z-10 ${item.sourceStyle}`}>
                {item.source}
                {item.icon && item.icon}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StoryPress;
