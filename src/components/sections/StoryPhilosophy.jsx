import React from 'react';
import { motion } from 'framer-motion';

const PHILOSOPHY_CARDS = [
  {
    title: 'FIRE',
    text: 'The spark of passion. We cook with intensity, intuition, and the pursuit of perfection.',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" className="mb-6" style={{ color: '#d4af37' }}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
    )
  },
  {
    title: 'GOLD',
    text: 'A symbol of rarity and reverence. We use only the finest ingredients, handled with honor and care.',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="mb-6" style={{ color: '#d4af37' }}>
        {/* Three gold nuggets / rare elements */}
        <path d="M12 4C14.2 4 16 5.8 16 8C16 10.2 14.2 12 12 12C9.8 12 8 10.2 8 8C8 5.8 9.8 4 12 4Z" />
        <path d="M7 11C9.2 11 11 12.8 11 15C11 17.2 9.2 19 7 19C4.8 19 3 17.2 3 15C3 12.8 4.8 11 7 11Z" />
        <path d="M17 11C19.2 11 21 12.8 21 15C21 17.2 19.2 19 17 19C14.8 19 13 17.2 13 15C13 12.8 14.8 11 17 11Z" />
        <circle cx="12" cy="8" r="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="7" cy="15" r="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="17" cy="15" r="2" fill="currentColor" fillOpacity="0.2" />
      </svg>
    )
  },
  {
    title: 'SILENCE',
    text: 'In silence, details speak louder. We create space for connection, reflection, and wonder.',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" className="mb-6" style={{ color: '#d4af37' }}>
        {/* Eclipse / Silence Circle */}
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="10" strokeOpacity="0.4" />
        <circle cx="12" cy="12" r="6" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.1" />
      </svg>
    )
  }
];

const StoryPhilosophy = () => {
  return (
    <section className="relative w-full bg-[#030303] py-24 md:py-32 flex justify-center border-t border-white/[0.05]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center mb-24"
        >
          <div className="flex items-center gap-6 mb-2">
            <h2 className="font-serif text-[#e6d5b8] uppercase tracking-[0.2em] text-3xl md:text-[40px]">
              OUR PHILOSOPHY
            </h2>
          </div>
          <div className="w-20 h-[1px] bg-[#a68a56] mt-6" />
        </motion.div>

        {/* Philosophy Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 w-full max-w-[1400px]">
          {PHILOSOPHY_CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              className={`group relative flex flex-col items-center text-center p-12 md:p-16 min-h-[380px] overflow-hidden ${
                index !== 2 ? 'md:border-r md:border-white/[0.03]' : ''
              }`}
            >
              {/* Premium Hover Glow Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Animated Top Border Line on Hover */}
              <div className="absolute top-0 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

              {/* Icon */}
              <div className="transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-3 mb-8 opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                {card.icon}
              </div>

              {/* Title */}
              <h4 className="relative z-10 font-serif text-[#e6d5b8] text-2xl md:text-[28px] uppercase tracking-[0.15em] mb-6 transition-colors duration-500 group-hover:text-[#d4af37]">
                {card.title}
              </h4>

              {/* Description */}
              <p className="relative z-10 font-sans text-white/60 text-[15px] md:text-[17px] leading-[2] max-w-[280px]">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StoryPhilosophy;
