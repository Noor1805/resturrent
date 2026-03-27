import React from 'react';
import { motion } from 'framer-motion';

const InstaReels = () => {
  const reels = [
    { id: 1, img: "/images/image2.png", likes: "1.2k" },
    { id: 2, img: "/images/image3.png", likes: "845" },
    { id: 3, img: "/images/image5.png", likes: "2.1k" },
    { id: 4, img: "/images/image6.png", likes: "3.4k" },
  ];

  return (
    <section id="instagram" className="relative w-full py-24 bg-neutral-950 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-end mb-12">
         <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white italic mb-2">#ObsidianNYC</h2>
            <p className="text-gray-400 font-light text-sm tracking-wide">Join the sensory experience on Instagram</p>
         </div>
         <button 
            onClick={(e) => e.preventDefault()}
            className="group relative px-8 py-3 border border-gold-500/40 text-gold-500 uppercase tracking-[0.3em] text-[10px] transition-all duration-700 font-light overflow-hidden mt-6 md:mt-0"
         >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">Follow Us</span>
            <div className="absolute inset-0 bg-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
         </button>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="w-full overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing">
         <div className="flex gap-6 px-6 w-max">
            {reels.map((reel, i) => (
               <motion.div 
                 key={reel.id}
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.1 }}
                 className="relative w-64 h-96 md:w-80 md:h-[30rem] rounded-md overflow-hidden group flex-shrink-0"
               >
                  <img src={reel.img} alt={`Reel ${reel.id}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                     <span className="text-white text-sm font-medium flex items-center gap-2">
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                        {reel.likes}
                     </span>
                  </div>
                  {/* Play Icon */}
                  <div className="absolute top-4 right-4 text-white/80">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default InstaReels;
