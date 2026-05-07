import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const signatures = [
  {
    year: "2002",
    title: "TRUFFLE CAVIAR PASTA",
    desc: "Silky house-made pasta with black truffle and ossetra caviar.",
    image: "/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (1)-Photoroom.png"
  },
  {
    year: "2008",
    title: "GOLD LEAF LOBSTER",
    desc: "Maine lobster with 24k gold leaf and saffron beurre blanc.",
    image: "/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (2)-Photoroom.png"
  },
  {
    year: "2015",
    title: "CHOCOLATE GOLD LAVA",
    desc: "Warm dark chocolate souffle with molten center and gold.",
    image: "/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (3)-Photoroom.png"
  },
  {
    year: "2023",
    title: "WAGYU TOMAHAWK",
    desc: "A5 Wagyu, charred to perfection and finished with obsidian salt.",
    image: "/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (4)-Photoroom.png"
  }
];

const StorySignatures = () => {
  return (
    <section className="w-full bg-black py-24 px-4 md:px-8 border-t border-[#d4af37]/10 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="text-[#e6d5b8] font-serif text-2xl md:text-3xl text-center uppercase tracking-[0.2em] mb-16"
        >
          OUR SIGNATURES <span className="text-[#a68a56]">—</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border border-[#d4af37]/20 bg-[#030303] group overflow-hidden flex flex-col hover:border-[#d4af37]/40 transition-colors duration-500"
            >
              <div className="w-full h-52 overflow-hidden bg-black flex items-center justify-center p-6 border-b border-white/[0.02]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-2xl" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[#a68a56] font-sans text-[11px] tracking-widest mb-2 font-medium">{item.year}</span>
                <h3 className="text-[#e6d5b8] font-serif text-[15px] tracking-wider uppercase mb-3 leading-snug">{item.title}</h3>
                <p className="text-white/50 font-sans text-[13px] leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>
                <Link to="/menu#menu-signatures" className="text-[#a68a56] text-[10px] font-semibold tracking-widest uppercase flex items-center gap-2 group-hover:text-[#e6d5b8] transition-colors duration-300 w-max">
                  DISCOVER 
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySignatures;
