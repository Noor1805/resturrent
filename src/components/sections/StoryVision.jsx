import React from 'react';
import { motion } from 'framer-motion';

const StoryVision = () => {
  return (
    <section className="relative w-full py-24 border-t border-white/[0.05] bg-black">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-stretch px-4 md:px-8">
        
        {/* Left Side Image */}
        <div className="w-full md:w-[45%] h-[450px] md:h-[500px] lg:h-[550px] relative">
          <img 
              src="/asset/our story/main chef.png" 
              alt="Chef Adrian Moreau" 
              className="w-full h-full object-cover object-top opacity-90" 
          />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent hidden md:block"></div>
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-[55%] flex items-center justify-start p-8 md:p-12 lg:pl-24 bg-black z-10">
          <div className="max-w-xl flex flex-col items-start w-full">
            
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[#a68a56] font-sans text-[11px] md:text-[13px] font-semibold tracking-widest uppercase mb-5"
            >
              CHEF & VISION
            </motion.span>

            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-[#e6d5b8] font-serif text-2xl md:text-3xl lg:text-[34px] uppercase tracking-widest leading-[1.4] mb-8"
            >
              THE VISION BEHIND THE OBSESSION
            </motion.h3>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="w-16 h-[1px] mb-10 origin-left"
              style={{ backgroundColor: '#a68a56' }}
            />

            <motion.blockquote 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-white/80 font-sans text-[16px] md:text-[18px] lg:text-[20px] leading-[1.8] tracking-wide mb-8"
            >
              "Obsidian is not about impressing.<br/>It's about expressing truth through flavor,<br/>texture, and memory."
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="text-white/50 font-sans text-[15px] md:text-[16px] italic tracking-wide mb-12"
            >
              — Chef Adrian Moreau
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >
              <a 
                href="#chef" 
                className="group relative px-10 py-5 flex items-center justify-center border border-[#a68a56]/50 transition-all duration-500 overflow-hidden hover:border-[#a68a56] hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-[#a68a56]/10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-[#a68a56] font-medium uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-colors duration-500">
                  MEET CHEF ADRIAN
                </span>
              </a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default StoryVision;
