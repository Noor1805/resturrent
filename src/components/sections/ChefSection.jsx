import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ChefSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="chef" ref={containerRef} className="relative w-full min-h-screen bg-black py-32 overflow-hidden flex items-center">
      <div className="container mx-auto px-6 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-20">
          
          {/* Left Text Content */}
          <div className="flex-1 md:pr-12 text-center md:text-left z-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-gold-500 tracking-[0.3em] text-sm uppercase mb-4"
            >
              Meet The Maestro
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
            >
              Chef <br/><span className="italic font-light">Alexander Pierce</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6 text-gray-400 font-light leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              <p>
                With over two decades of culinary excellence forged in the fires of Paris and Tokyo's most demanding kitchens, Chef Pierce brings an unprecedented level of precision to Obsidian.
              </p>
              <p>
                His philosophy is simple: uncompromising quality, relentless innovation, and a profound respect for the interplay between shadow and flavor. Every plate is a carefully constructed narrative, designed not just to be eaten, but to be experienced.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <img src="/images/signature.png" alt="Chef Signature" className="h-16 opacity-50 mx-auto md:mx-0 filter invert" onError={(e) => e.target.style.display = 'none'} />
            </motion.div>
          </div>

          {/* Right Image Content */}
          <div className="flex-1 relative w-full aspect-[3/4] md:aspect-[4/5] max-w-lg mx-auto">
             <div className="absolute inset-x-0 bottom-0 top-10 border border-gold-500/20 translate-x-4 translate-y-4" />
             <div className="absolute inset-0 overflow-hidden bg-neutral-900 border border-white/5">
                {/* Fallback texture / color if image fails */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                <motion.img 
                  style={{ y: imgY, scale: 1.1 }}
                  src="/images/image3.png" 
                  alt="Chef Alexander Pierce" 
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChefSection;
