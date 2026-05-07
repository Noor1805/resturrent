import React from 'react';
import { motion } from 'framer-motion';

const MARQUEE_ITEMS = [
  {
    title: 'PRIVATE DINING',
    subtitle: 'Intimate. Exclusive.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[#d4af37]">
        {/* Ground */}
        <path d="M2 22h20" />
        {/* Outer Arch Frame */}
        <path d="M4 22V8a8 8 0 0 1 16 0v14" />
        {/* Inner Doors */}
        <path d="M7 22V9a5 5 0 0 1 10 0v14" />
        {/* Center Split */}
        <path d="M12 9v13" />
        {/* Handles */}
        <path d="M10 15h.01" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 15h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    title: 'CHEF-LED TASTING MENU',
    subtitle: 'Seasonal. Refined. Unforgettable.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#d4af37]">
        {/* Chef hat */}
        <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
        <line x1="6" y1="17" x2="18" y2="17" />
      </svg>
    )
  },
  {
    title: 'COCKTAILS & LOUNGE',
    subtitle: 'Crafted. Curated. Timeless.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#d4af37]">
        {/* Cocktail */}
        <path d="m2 2 20 0-10 10Z" />
        <path d="M12 12v10" />
        <path d="M8 22h8" />
      </svg>
    )
  },
  {
    title: 'RESERVATION ONLY',
    subtitle: 'Limited Seating. Unrushed.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#d4af37]">
        {/* Padlock */}
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
];

// Duplicate items multiple times to ensure smooth scrolling on ultrawide screens
const MARQUEE_DATA = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

const HomeMarquee = () => {
  return (
    <section className="w-full bg-[#030303] py-6 border-y border-[#d4af37]/20 overflow-hidden flex items-center relative z-20">
      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{ x: ["0%", "-25%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35 // Smooth, slow crawl
        }}
      >
        {MARQUEE_DATA.map((item, index) => (
          <div key={index} className="flex items-center">
            
            {/* Item Content with Hover Animation */}
            <div className="flex items-center gap-4 px-10 md:px-16 group cursor-pointer">
              <div className="shrink-0 scale-125 drop-shadow-[0_0_8px_rgba(212,175,55,0.2)] transition-all duration-500 group-hover:scale-150 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] group-hover:-translate-y-1">
                {item.icon}
              </div>
              <div className="flex flex-col text-left transition-transform duration-500 group-hover:translate-x-2">
                <span className="text-white font-serif tracking-widest text-[13px] md:text-[15px] uppercase font-bold mb-1 transition-colors duration-500 group-hover:text-[#d4af37]">
                  {item.title}
                </span>
                <span className="text-white/60 font-sans tracking-wide text-[12px] md:text-[14px] transition-colors duration-500 group-hover:text-white/90">
                  {item.subtitle}
                </span>
              </div>
            </div>

            {/* Separator */}
            <div className="w-[1px] h-10 bg-[#d4af37]/40" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HomeMarquee;
