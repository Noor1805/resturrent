import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StoryJourney = () => {
  const headingRef = useRef(null);
  const headingChars = 'WHEN ICONS WERE BORN'.split('');
  const [activeCharIndex, setActiveCharIndex] = useState(-1);
  const [activeIndex, setActiveIndex] = useState(4); // Start at center "EXPANSION"

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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 9); // 9 dial items
    }, 3500); // changes every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

  const storyImages = [
    '/asset/our story/ChatGPT Image May 6, 2026, 05_35_50 PM-Photoroom.png',
    '/asset/our story/ChatGPT Image May 6, 2026, 05_52_41 PM (2)-Photoroom.png',
    '/asset/our story/ChatGPT Image May 6, 2026, 05_52_41 PM (3)-Photoroom.png',
    '/asset/our story/ChatGPT Image May 6, 2026, 05_43_53 PM (3)-Photoroom.png',
    '/asset/our story/ChatGPT Image May 6, 2026, 05_52_42 PM (4)-Photoroom.png'
  ];

  const dialItems = [
    { label: "1998", text: "THE BEGINNING", angle: -70 },
    { label: "2002", text: "FIRST RECIPE", angle: -52.5 },
    { label: "2005", text: "TRADITION", angle: -35 },
    { label: "2010", text: "MICHELIN", angle: -17.5 },
    { label: "2015", text: "EXPANSION", angle: 0 },
    { label: "2018", text: "INNOVATION", angle: 17.5 },
    { label: "2020", text: "NEW ERA", angle: 35 },
    { label: "2023", text: "LEGACY", angle: 52.5 },
    { label: "2026", text: "FUTURE", angle: 70 }
  ];

  return (
    <section className="relative h-[110vh] md:h-[110vh] w-full flex flex-col items-center justify-end overflow-hidden border-t border-b border-white/5 pt-24 bg-[#050505]">
        
        {/* Background elements (Olives/Leaves) */}
        <div className="absolute top-[10%] left-[15%] opacity-50 blur-[1px] rotate-45 text-white/20">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>
        </div>
        <div className="absolute top-[40%] right-[10%] opacity-40 blur-[2px] -rotate-12 text-white/20">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="6"/></svg>
        </div>
        <div className="absolute bottom-[30%] left-[10%] opacity-60 rotate-12 text-green-500/30">
           <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3c-3 0-6.5 1.5-9 4C5.5 10 3.5 14.5 3.5 18c0 .8.2 1.5.5 2 .3.5 1.2.5 2 .5 3.5 0 8-2 11-5 2.5-2.5 4-6 4-9 0-.5 0-1.5-.5-2-.5-.5-1.5-.5-2-.5zM15 15l-6 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>

        {/* Spice Sprinkles (Generated) */}
        <div className="absolute top-[15%] left-[-15%] md:left-[-5%] w-[250px] md:w-[350px] mix-blend-screen opacity-50 rotate-12 pointer-events-none z-10">
           <img src="/asset/our story/spices_scattered.png" alt="spices" className="w-full h-full object-contain filter contrast-125 saturate-150" />
        </div>
        <div className="absolute top-[35%] right-[-10%] md:right-[-5%] w-[300px] md:w-[400px] mix-blend-screen opacity-40 -rotate-45 pointer-events-none z-10">
           <img src="/asset/our story/spices_scattered.png" alt="spices" className="w-full h-full object-contain filter contrast-125 saturate-150 scale-x-[-1]" />
        </div>
        <div className="absolute bottom-[10%] left-[-5%] w-[200px] md:w-[300px] mix-blend-screen opacity-35 rotate-[135deg] pointer-events-none z-10">
           <img src="/asset/our story/spices_scattered.png" alt="spices" className="w-full h-full object-contain filter contrast-125 saturate-150" />
        </div>

        {/* Heading Component that we preserved */}
        <div className="absolute top-[5%] md:top-[8%] flex w-full flex-col items-center px-5 text-center sm:px-6 md:px-4 z-20">
          <div className="flex w-full items-center justify-center max-w-[1200px] gap-4 md:gap-8">
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }} className="hidden sm:block h-[1px] w-12 md:w-32 bg-gradient-to-l from-[#d4af37]/60 to-transparent origin-right" />
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
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: false }} className="hidden sm:block h-[1px] w-12 md:w-32 bg-gradient-to-r from-[#d4af37]/60 to-transparent origin-left" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mb-8 mt-4 text-[10px] uppercase tracking-[0.28em] text-white/60 md:mb-10 md:text-xs md:tracking-[0.3em]"
          >
            The journey of our signature dishes
          </motion.p>
        </div>

        {/* The Giant Dial / Arc Layout from user code */}
        <div className="relative w-full max-w-[1200px] h-[450px] md:h-[550px] flex justify-center items-end mt-auto pointer-events-none z-10">
           
           {/* The Arc Line (Bigger so it does not hide behind food) */}
           <div className="absolute bottom-[-450px] md:bottom-[-550px] w-[900px] md:w-[1100px] h-[900px] md:h-[1100px] rounded-full border-[1px] border-white/20 z-0"></div>

           {/* The Ticks and Labels */}
           {dialItems.map((item, i) => {
             const isActive = i === activeIndex;
             return (
               <div 
                 key={i} 
                 className="absolute bottom-0 left-1/2 w-[1px] h-[450px] md:h-[550px] origin-bottom z-40 pointer-events-auto cursor-pointer group"
                 style={{ transform: `translateX(-50%) rotate(${item.angle}deg)` }}
                 onClick={() => setActiveIndex(i)}
               >
                  {/* Dot */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${isActive ? 'bg-[#f97316] scale-125' : 'bg-[#050505] border border-white/60 group-hover:bg-white/20'}`}>
                     {isActive && <div className="absolute inset-0 m-auto w-8 h-8 rounded-full border border-[#f97316] animate-ping opacity-50"></div>}
                  </div>
                  {/* Label */}
                  <div 
                    className={`absolute top-[-35px] left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] md:text-[11px] uppercase font-bold tracking-[0.2em] transition-all duration-500 drop-shadow-md ${isActive ? 'text-[#f97316] scale-110' : 'text-white/60 group-hover:text-white'}`}
                  >
                    {item.label}
                  </div>
               </div>
             );
           })}

           {/* The Big Food Image emerging from the bottom */}
           <div className="absolute bottom-[-400px] md:bottom-[-450px] w-[800px] md:w-[900px] h-[800px] md:h-[900px] z-20 pointer-events-auto flex justify-center items-start">
              
              <AnimatePresence mode="popLayout">
                <motion.img 
                  key={activeIndex}
                  src={storyImages[activeIndex % storyImages.length]} 
                  alt="Signature Dish" 
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                  className="absolute top-0 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                />
              </AnimatePresence>
              
           </div>

        </div>
      </section>
  );
};

export default StoryJourney;
