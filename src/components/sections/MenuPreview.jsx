import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuPreview = () => {
  const [activeTab, setActiveTab] = useState('Cocktails');

  const tabs = ['Cocktails', 'Main', 'Rump'];

  const menuData = {
    'Cocktails': [
      { id: 1, name: "Obsidian Old Fashioned", desc: "Smoked hickory, angostura, orange peel", price: "$24" },
      { id: 2, name: "Midnight Martini", desc: "Charcoal infused gin, dry vermouth, edible silver", price: "$28" },
      { id: 3, name: "Golden Elixir", desc: "Aged rum, saffron honey, lemon, gold flakes", price: "$32" }
    ],
    'Main': [
      { id: 4, name: "Blue Moon Meat", desc: "Grilled Lamb Cutlets, Pomegranate Glaze, Butternut Squash", price: "$240.00", img: "/images/image4.png" },
      { id: 5, name: "El Spicy Sausage Pizza", desc: "Wood-fired crust, artisan sausage, chili honey", price: "$145.00" },
      { id: 6, name: "El Bean And Cheese Burrito", desc: "Classic Greek Salad, Barrel Aged Feta Cheese, Bread", price: "$310.00", img: "/images/image5.png" }
    ],
    'Rump': [
      { id: 7, name: "Truffle Rump Steak", desc: "300g premium cut, black truffle butter, asparagus", price: "$180.00" },
      { id: 8, name: "Garlic Butter Rump", desc: "Slow roasted, garlic herb crust, fondant potatoes", price: "$160.00" }
    ]
  };

  return (
    <section id="menu" className="relative w-full py-32 bg-black overflow-hidden text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">
          
          {/* Left Column: Image & Rotating Badge */}
          <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
             <div className="relative aspect-[4/5] max-w-md mx-auto">
               {/* Gold Wireframe Box */}
               <div className="absolute -inset-4 border border-gold-500/30 rounded-sm translate-x-6 translate-y-6 pointer-events-none" />
               {/* Main Image */}
               <div className="w-full h-full overflow-hidden bg-black">
                 <img src="/images/image2.png" alt="Restaurant Interior" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000" />
               </div>
               
               {/* Rotating Badge */}
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                 className="absolute -left-12 bottom-12 w-32 h-32 md:w-40 md:h-40 rounded-full border border-gold-500 flex items-center justify-center bg-black shadow-2xl z-20"
               >
                 <div className="relative w-full h-full rounded-full border border-gold-500/30 flex justify-center items-center">
                    <span className="text-gold-500 font-serif text-3xl font-bold italic">OB.</span>
                    {/* SVG circular text */}
                    <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                       <path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circleTextPath" fill="none" />
                       <text className="text-[10px] uppercase tracking-widest fill-gray-400 font-light">
                          <textPath href="#circleTextPath" startOffset="0%">
                             WE SERVE QUALITY • DECENT FOOD SINCE 2018 • 
                          </textPath>
                       </text>
                    </svg>
                 </div>
               </motion.div>
             </div>
          </div>

          {/* Right Column: Menu Tabs and List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-6 md:gap-12 mb-16 border-b border-white/10 pb-6">
              {tabs.map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={`text-3xl md:text-5xl font-serif text-white transition-all duration-300 flex items-center gap-4 hover:text-gold-400
                    ${activeTab === tab ? 'opacity-100 text-shadow-glow' : 'opacity-30'}`}
                >
                  {tab}
                  {tab !== 'Rump' && <span className="text-gold-500 text-sm opacity-50 block mt-2">◇</span>}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {menuData[activeTab].map((item, idx) => (
                    <div key={item.id} className="group relative border-b border-white/10 pb-6">
                       <div className="flex justify-between items-end mb-2 gap-4">
                          <div className="flex items-center gap-4">
                             {item.img && (
                                <div className="w-12 h-12 rounded bg-black overflow-hidden shrink-0">
                                   <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                             )}
                             <h4 className="text-xl font-medium tracking-wide text-white group-hover:text-gold-400 transition-colors whitespace-nowrap">
                               {item.name}
                             </h4>
                          </div>
                          
                          <div className="flex-1 border-b border-dashed border-gray-600 mb-2 mx-4" />
                          
                          <span className="text-gold-500 font-serif text-xl whitespace-nowrap">{item.price}</span>
                       </div>
                       
                       <p className="text-gray-400 text-sm font-light w-full md:w-3/4">
                          {item.desc}
                       </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Explore CTA */}
            <div className="mt-12 inline-flex">
               <button 
                  onClick={(e) => e.preventDefault()} 
                  className="group relative px-10 py-4 border border-gold-500 text-gold-500 uppercase tracking-[0.3em] text-[10px] transition-all duration-700 font-light overflow-hidden"
               >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500">Explore Full Menu</span>
                  <div className="absolute inset-0 bg-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
               </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
