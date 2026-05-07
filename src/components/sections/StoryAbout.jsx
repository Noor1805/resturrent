import React from 'react';
import { motion } from 'framer-motion';

const StoryAbout = () => {
  return (
    <section className="relative flex w-full flex-col items-stretch bg-black md:flex-row-reverse">
      <div className="relative h-[42vh] w-full md:h-[80vh] md:w-1/2">
        <img src="/asset/our story/image 2.png" alt="Obsidian Interior" className="h-full w-full object-cover" />
        <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-black to-transparent md:block" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent md:hidden" />
      </div>

      <div className="z-10 flex w-full items-center justify-center bg-black px-5 py-14 sm:px-6 md:w-1/2 md:p-16 lg:p-24">
        <div className="flex max-w-lg flex-col items-start">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-7 font-serif text-[2rem] uppercase leading-[1.06] tracking-[0.08em] text-white md:mb-8 md:text-5xl lg:text-5xl"
          >
            <span className="text-[#d4af37]">Born in New York.</span>
            <br />
            <span className="text-[#d4af37] opacity-80">Built for the rare few.</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
            className="mb-8 h-px w-20 origin-left"
            style={{ backgroundColor: '#d4af37' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            className="mb-6 text-sm leading-8 tracking-wide text-white/60 md:text-base md:leading-loose"
          >
            Founded in 1998 in the heart of Manhattan, Obsidian was created with a singular vision to build a sanctuary of culinary excellence where luxury is felt, not flaunted.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.7, ease: 'easeOut' }}
            className="mb-10 text-sm leading-8 tracking-wide text-white/60 md:mb-12 md:text-base md:leading-loose"
          >
            From a single, daring idea to an international reputation, our journey has always been guided by obsession, intention, and an unwavering commitment to timelessness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: '-50px' }}
            transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
            className="flex flex-col items-center self-start md:ml-4"
          >
            <img
              src="/asset/sign1-Photoroom.png"
              alt="Founder Signature"
              className="mb-2 w-40 md:w-48"
              style={{ filter: 'brightness(0) invert(1) opacity(0.85) sepia(0.2)' }}
            />
            <span className="font-serif text-xs uppercase tracking-[0.4em] text-gold-500/50" style={{ color: 'rgba(212, 175, 55, 0.5)' }}>
              1998
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryAbout;
