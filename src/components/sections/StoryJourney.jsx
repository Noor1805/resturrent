import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const StoryJourney = () => {
  const headingRef = useRef(null);
  const headingChars = 'WHEN ICONS WERE BORN'.split('');
  const [activeCharIndex, setActiveCharIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;

      const { top, height } = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = (windowHeight / 1.1 - top) / (height + windowHeight / 4);
      const clamped = Math.max(0, Math.min(1, scrollProgress));

      setActiveCharIndex(Math.floor(clamped * headingChars.length));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headingChars.length]);

  return (
    <section className="relative flex min-h-[72vh] w-full flex-col items-center justify-start overflow-hidden border-t border-white/[0.05] bg-black pt-20 md:min-h-[90vh] md:pt-24">
      <div className="absolute inset-0 flex h-full w-full items-center justify-center">
        <img src="/asset/our story/test.png" alt="Journey Timeline" className="h-full w-full object-cover opacity-85 md:object-contain md:opacity-90" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent md:h-48" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent md:h-32" />
      </div>

      <div className="relative z-10 flex w-full flex-col items-center px-5 text-center sm:px-6 md:px-4">
        <h2
          ref={headingRef}
          className="flex max-w-4xl flex-wrap justify-center gap-x-1 font-serif text-[1.85rem] uppercase tracking-[0.16em] text-white md:text-4xl lg:text-[40px] lg:tracking-[0.2em]"
        >
          {headingChars.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className={`transition-colors duration-300 ease-out ${char === ' ' ? 'w-3 md:w-4' : ''} ${index <= activeCharIndex ? 'text-[#d4af37]' : 'text-white'}`}
            >
              {char}
            </span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mb-8 mt-4 text-[10px] uppercase tracking-[0.28em] text-white/60 md:mb-10 md:text-xs md:tracking-[0.3em]"
        >
          The journey of our signature dishes
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, delay: 1.8, ease: 'easeOut' }}
          className="h-px w-16"
          style={{ backgroundColor: '#a68a56' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 1.5, delay: 2, ease: 'easeOut' }}
          className="mt-14 flex flex-col items-center rounded-[24px] border border-white/8 bg-black/45 px-6 py-6 backdrop-blur-[2px] md:mt-24 md:border-transparent md:bg-transparent md:px-0 md:py-0"
        >
          <span className="mb-2 font-serif text-3xl tracking-widest text-[#e6d5b8] md:mb-3 md:text-[32px]">1998</span>
          <span className="mb-4 font-serif text-xs font-medium uppercase tracking-[0.25em] text-[#a68a56] md:text-sm">
            The Beginning
          </span>
          <p className="max-w-[260px] text-[12px] italic leading-7 text-white/60 md:text-[13px] md:leading-loose">
            Our first signature creation,
            <br />
            marking the birth of Obsidian.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StoryJourney;
