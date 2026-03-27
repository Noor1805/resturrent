import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Ambiance = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="ambiance" ref={containerRef} className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16 text-center">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 tracking-[0.4em] text-xs uppercase mb-4"
         >
            The Atmosphere
         </motion.h2>
         <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-white italic"
         >
            Dark Elegance
         </motion.h3>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-6 h-[80vh] min-h-[600px] max-w-7xl mx-auto">
         {/* Left Large Column */}
         <motion.div style={{ y: y1 }} className="w-full md:w-1/2 h-full rounded-sm overflow-hidden border border-white/5 relative group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img src="/images/image1.png" alt="Ambiance 1" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
         </motion.div>
         
         {/* Right Stacked Column */}
         <div className="w-full md:w-1/2 h-full flex flex-col gap-8">
            <motion.div style={{ y: y2 }} className="w-full h-1/2 rounded-sm overflow-hidden border border-white/5 relative group">
               <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
               <img src="/images/image4.png" alt="Ambiance 2" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
            </motion.div>
            <motion.div style={{ y: y1 }} className="w-full h-1/2 rounded-sm overflow-hidden border border-white/5 relative group">
               <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
               <img src="/images/image6.png" alt="Ambiance 3" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
            </motion.div>
         </div>
      </div>
    </section>
  );
};

export default Ambiance;
