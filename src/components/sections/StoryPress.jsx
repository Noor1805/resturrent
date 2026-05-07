import React from 'react';
import { motion } from 'framer-motion';

const PRESS_ITEMS = [
  {
    quote: '"Obsidian is not just a restaurant. It\'s a masterclass in modern luxury."',
    source: 'Forbes',
    sourceStyle: 'font-serif font-bold text-2xl tracking-wider text-white',
  },
  {
    quote: '"A place where every detail is a love letter to craftsmanship."',
    source: 'The New York Times',
    sourceStyle: 'font-serif italic font-bold text-2xl tracking-wider text-white',
  },
  {
    quote: '"Obsidian delivers an experience that lingers long after the last bite."',
    source: 'MICHELIN GUIDE',
    sourceStyle: 'font-sans font-bold text-xl tracking-[0.2em] uppercase flex items-center justify-center gap-3 text-white',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
        <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
      </svg>
    ),
  },
];

const StoryPress = () => {
  return (
    <section className="w-full border-t border-white/[0.05] bg-[#030303] py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="mb-14 flex flex-col items-center justify-center md:mb-24"
        >
          <div className="mb-2 flex items-center gap-6">
            <h2 className="font-serif text-[2rem] uppercase tracking-[0.14em] text-[#e6d5b8] md:text-[40px]">
              Press &amp; Praise
            </h2>
          </div>
          <div className="mt-6 h-px w-20 bg-[#a68a56]" />
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
          {PRESS_ITEMS.map((item, index) => (
            <motion.div
              key={item.source}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative flex min-h-[280px] flex-col items-center justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#050505] p-7 text-center md:min-h-[320px] md:rounded-none md:p-16"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#d4af37]/[0.08] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute top-0 left-0 right-0 h-[2px] origin-center scale-x-0 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-transform duration-700 group-hover:scale-x-100" />

              <p className="relative z-10 mb-10 font-serif text-[17px] leading-8 text-[#e6d5b8]/80 md:mb-12 md:text-[22px] md:leading-[1.8]">
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
