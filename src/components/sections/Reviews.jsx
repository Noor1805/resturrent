import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    {
       id: 1,
       author: "The New York Times",
       text: "A masterclass in culinary theater. Obsidian redefines what it means to dine in the dark, revealing flavors you never knew existed.",
       stars: 5
    },
    {
       id: 2,
       author: "Michelin Guide",
       text: "Impeccable execution meets daring innovation. Alexander Pierce has created a temple of gastronomy that demands your absolute attention.",
       stars: 5
    },
    {
       id: 3,
       author: "Vogue",
       text: "The sexiest dining room in Manhattan right now. The ambiance is as intoxicating as their signature Old Fashioned.",
       stars: 5
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(curr => (curr === reviews.length - 1 ? 0 : curr + 1));
  const prev = () => setCurrent(curr => (curr === 0 ? reviews.length - 1 : curr - 1));

  return (
    <section id="reviews" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
         
         <div className="mb-12 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
               <motion.span 
                  key={i} 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gold-500 text-2xl shadow-gold-glow"
               >
                  ★
               </motion.span>
            ))}
         </div>

         <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
               <motion.div
                 key={current}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.5 }}
                 className="absolute inset-0 flex flex-col items-center justify-center"
               >
                  <p className="text-2xl md:text-4xl text-white font-serif italic mb-8 leading-snug">
                     "{reviews[current].text}"
                  </p>
                  <span className="text-gold-500 uppercase tracking-widest text-sm font-medium">
                     — {reviews[current].author}
                  </span>
               </motion.div>
            </AnimatePresence>
         </div>

         <div className="flex justify-center gap-8 mt-16">
            <button onClick={prev} className="text-gray-500 hover:text-white transition-colors">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <div className="flex gap-2 items-center">
               {reviews.map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === current ? 'bg-gold-500' : 'bg-gray-700'}`} />
               ))}
            </div>
            <button onClick={next} className="text-gray-500 hover:text-white transition-colors">
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
            </button>
         </div>

      </div>
    </section>
  );
};

export default Reviews;
