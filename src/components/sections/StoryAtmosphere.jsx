import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "/asset/our story/place1.png",
  "/asset/our story/place2.png",
  "/asset/our story/place3.png",
  "/asset/our story/place4.png"
];

const StoryAtmosphere = () => {
  return (
    <section className="w-full bg-black pb-32 pt-12 px-4 md:px-8 lg:px-12 border-t border-white/[0.05]">
      <div className="w-full mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="text-[#e6d5b8] font-serif text-2xl md:text-[28px] text-center uppercase tracking-[0.2em] mb-12"
        >
          AN ATMOSPHERE LIKE NO OTHER
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="border border-[#d4af37]/20 aspect-[16/10] overflow-hidden relative group cursor-pointer rounded-[2px]"
            >
              <img 
                src={img} 
                alt={`Atmosphere ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out opacity-60 group-hover:opacity-100" 
              />
              {/* Dark overlay that fades out on hover */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-[1.5s] ease-out"></div>
              {/* Golden border glow on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#d4af37]/80 transition-colors duration-700 pointer-events-none"></div>
              {/* Subtle inner white border */}
              <div className="absolute inset-0 border border-white/[0.03] pointer-events-none rounded-[2px]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryAtmosphere;
