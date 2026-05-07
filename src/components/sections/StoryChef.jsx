import React from 'react';
import { motion } from 'framer-motion';

const StoryChef = () => {
  const textContent = "Every plate is a culmination of relentless refinement. From sourcing the world's rarest ingredients to executing with surgical precision—our kitchen is driven by discipline, creativity, and respect for the craft.";
  const words = textContent.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.3 },
    },
  };

  const child = {
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    hidden: { opacity: 0, y: 5, filter: "blur(2px)" },
  };

  return (
    <section className="relative w-full flex flex-col md:flex-row items-stretch border-y border-white/[0.05]">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 h-[350px] md:h-[450px] lg:h-[500px] relative bg-[#050505]">
        <img 
            src="/asset/our story/chef image.png" 
            alt="Chef Plating" 
            className="w-full h-full object-cover" 
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-5 py-10 sm:px-6 md:p-12 lg:p-20 bg-black z-10 border-t border-[#d4af37]/30 md:border-t-0 md:border-l">
        <div className="max-w-md flex flex-col items-start w-full">
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[#e6d5b8] font-serif text-[1.7rem] md:text-2xl lg:text-[28px] uppercase tracking-[0.14em] leading-snug mb-5"
          >
            Crafted Without Compromise
          </motion.h3>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="w-12 h-[1px] mb-8 origin-left"
            style={{ backgroundColor: '#a68a56' }}
          />

          <motion.p 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="text-white font-sans text-[14px] md:text-[15px] leading-8 md:leading-loose tracking-wide mb-10 pr-0 md:pr-4"
          >
            {words.map((word, index) => (
              <motion.span variants={child} key={index} className="inline-block mr-[0.25em]">
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <a 
              href="#kitchen" 
              className="group relative px-8 py-4 flex items-center justify-center border border-[#a68a56]/50 transition-all duration-500 overflow-hidden hover:border-[#a68a56] hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-[#a68a56]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-[#a68a56] font-medium uppercase tracking-[0.2em] text-[11px] md:text-xs transition-colors duration-500">
                Meet Our Kitchen
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StoryChef;
