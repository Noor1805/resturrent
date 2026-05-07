import React from 'react';
import { motion } from 'framer-motion';

const StoryPhilosophy = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#030303] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24">
         
         {/* Premium Header */}
         <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-2xl"
            >
               <span className="text-[#d4af37] tracking-[0.4em] text-xs uppercase mb-4 block font-bold">Core Values</span>
               <h2 className="font-serif text-5xl md:text-7xl text-white leading-tight">The Philosophy <br/><span className="text-white/40 italic">of Taste</span></h2>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="md:max-w-sm pb-2"
            >
               <p className="text-white/50 text-sm leading-relaxed font-light">
                 It is not just about the ingredients. It is the ritual, the unwavering respect for tradition, and the courage to innovate.
               </p>
            </motion.div>
         </div>

         {/* Modern Premium Bento Grid */}
         <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
           
           {/* Box 1 (Tall Image) */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="md:col-span-2 relative overflow-hidden group border border-white/10 bg-black h-[400px] md:h-[624px] rounded-[30px]"
           >
              <img src="/asset/our story/place1.png" alt="Precision" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-1000 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 md:p-10 flex flex-col justify-end">
                 <div className="w-12 h-[2px] bg-[#d4af37] mb-6"></div>
                 <h3 className="font-serif text-3xl md:text-5xl text-white mb-4">Precision & Fire</h3>
                 <p className="text-sm text-gray-300 max-w-md font-light leading-relaxed">
                   Every cut, every temperature, every plate is calculated to deliver absolute perfection. Precision is the language of our kitchen, spoken through the intensity of the flame.
                 </p>
              </div>
           </motion.div>

           <div className="md:col-span-3 flex flex-col gap-4 md:gap-6">
               
               {/* Box 2 (Text Heavy & Abstract) */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="relative overflow-hidden group border border-white/10 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500 h-[300px] rounded-[30px] flex items-center p-8 md:p-12"
               >
                  <div className="relative z-10 w-full">
                     <span className="text-[#d4af37] text-xs tracking-widest uppercase mb-2 block">The Commitment</span>
                     <h3 className="font-serif text-4xl md:text-5xl text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-500">Relentless Passion</h3>
                     <p className="text-base text-gray-400 max-w-xl font-light leading-relaxed">
                       Cooking is not a job; it is a calling. Our culinary team lives for the heat of the kitchen and the satisfaction of a flawless service. We pour our soul into every reduction, every garnish, every bite.
                     </p>
                  </div>
                  {/* Huge background text watermark */}
                  <div className="absolute right-[-5%] bottom-[-20%] opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none select-none">
                     <h1 className="font-cursive text-[180px] leading-none text-white">Passion</h1>
                  </div>
               </motion.div>

               {/* Box 3 (Wide Image) */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="relative overflow-hidden group border border-white/10 bg-black h-[300px] rounded-[30px]"
               >
                  <img src="/asset/our story/place3.png" alt="Ingredients" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105" />
                  
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-start bg-black/20">
                     <div className="w-12 h-[2px] bg-[#d4af37] mb-6"></div>
                     <h3 className="font-serif text-4xl text-white mb-4">Uncompromised Quality</h3>
                     <p className="text-base text-gray-200 max-w-xl font-light leading-relaxed">
                       We partner with local artisans and sustainable farms to ensure that only the purest, most flavorful ingredients cross our threshold. Quality is our gold standard.
                     </p>
                  </div>
               </motion.div>

           </div>

         </div>
      </div>
    </section>
  );
};

export default StoryPhilosophy;
