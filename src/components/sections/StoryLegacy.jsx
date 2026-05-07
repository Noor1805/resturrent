import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: "1998",
    title: "OBSIDIAN IS BORN",
    desc: "A vision takes shape in the heart of NYC."
  },
  {
    year: "2005",
    title: "FIRST MICHELIN STAR",
    desc: "Recognition for relentless excellence."
  },
  {
    year: "2012",
    title: "WORLD'S 50 BEST",
    desc: "Named among the world's finest."
  },
  {
    year: "2018",
    title: "GLOBAL EXPANSION",
    desc: "Obsidian experiences reach the world."
  },
  {
    year: "2023",
    title: "NEW CHAPTER",
    desc: "Redefining luxury dining for a new era."
  }
];

const StoryLegacy = () => {
  return (
    <section className="w-full bg-[#030303] py-32 overflow-hidden border-t border-white/[0.05]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center gap-4 mb-32"
        >
          <h2 className="text-[#e6d5b8] font-serif text-3xl md:text-[36px] lg:text-[40px] uppercase tracking-[0.2em]">
            OUR LEGACY
          </h2>
          <div className="w-16 h-[1px] bg-[#a68a56]" />
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full relative">
          {milestones.map((item, index) => {
            // Chain reaction timing: each item triggers at 0.8s intervals
            const baseDelay = index * 0.9; 

            return (
              <div key={index} className="flex-1 flex flex-row md:flex-col items-center md:items-center text-left md:text-center relative w-full mb-16 md:mb-0">
                
                {/* Top Content: Year & Title */}
                <div className="flex flex-col ml-6 md:ml-0 md:items-center justify-end w-full mb-6 md:mb-10 min-h-[80px]">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: baseDelay }}
                    className="text-white font-sans text-lg md:text-xl lg:text-2xl font-semibold tracking-widest mb-3 md:mb-5"
                  >
                    {item.year}
                  </motion.span>
                  
                  <motion.h4 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: baseDelay + 0.2 }}
                    className="text-[#d4af37] text-[13px] md:text-[16px] lg:text-[18px] uppercase tracking-[0.15em] font-semibold"
                  >
                    {item.title}
                  </motion.h4>
                </div>
                
                {/* Dot and Line Container */}
                <div className="flex-col md:flex-row flex items-center justify-center relative w-8 md:w-full h-full md:h-auto my-0 md:my-3">
                   
                   {/* Connecting Line (Horizontal on Desktop) */}
                   {index < milestones.length - 1 && (
                     <motion.div 
                       initial={{ scaleX: 0 }}
                       whileInView={{ scaleX: 1 }}
                       viewport={{ once: false, margin: "-100px" }}
                       transition={{ duration: 0.5, delay: baseDelay + 0.4, ease: "linear" }}
                       className="hidden md:block absolute left-1/2 right-[-50%] top-1/2 -translate-y-1/2 h-[1px] bg-[#d4af37]/30 origin-left"
                     />
                   )}

                   {/* Travelling Glow Particle for Horizontal Line */}
                   {index < milestones.length - 1 && (
                     <motion.div
                       initial={{ left: "50%", opacity: 0 }}
                       whileInView={{ left: "150%", opacity: [0, 1, 1, 0] }}
                       viewport={{ once: false, margin: "-100px" }}
                       transition={{ duration: 0.5, delay: baseDelay + 0.4, ease: "linear", times: [0, 0.1, 0.9, 1] }}
                       className="hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-[#e6d5b8] to-transparent shadow-[0_0_12px_#d4af37] z-20 pointer-events-none"
                     />
                   )}

                   {/* Connecting Line (Vertical on Mobile) */}
                   {index < milestones.length - 1 && (
                     <motion.div 
                       initial={{ scaleY: 0 }}
                       whileInView={{ scaleY: 1 }}
                       viewport={{ once: false, margin: "-100px" }}
                       transition={{ duration: 0.5, delay: baseDelay + 0.4, ease: "linear" }}
                       className="block md:hidden absolute top-[20px] bottom-[-20px] left-1/2 -translate-x-1/2 w-[1px] bg-[#d4af37]/30 origin-top"
                     />
                   )}

                   {/* Diamond Dot */}
                   <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: baseDelay, type: "spring", stiffness: 200 }}
                      className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-[#d4af37] rotate-45 z-30 relative shadow-[0_0_10px_#d4af37]"
                   />
                </div>

                {/* Bottom Content: Description */}
                <div className="flex flex-col ml-6 md:ml-0 md:items-center justify-start w-full mt-4 md:mt-10 min-h-[100px]">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: baseDelay + 0.3 }}
                    className="text-white/60 text-[14px] md:text-[16px] lg:text-[17px] leading-[1.8] md:max-w-[260px] md:px-4"
                  >
                    {item.desc}
                  </motion.p>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default StoryLegacy;
