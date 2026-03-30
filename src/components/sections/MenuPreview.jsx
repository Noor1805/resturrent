import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuPreview = () => {
  const [activeTab, setActiveTab] = useState('Cocktails');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isCtaPressed, setIsCtaPressed] = useState(false);

  const tabs = ['Cocktails', 'Main', 'Rump'];

  const menuData = {
    'Cocktails': [
      { id: 1, name: "Obsidian Old Fashioned", desc: "Smoked hickory, angostura, orange peel", price: "$24", img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725786/ChatGPT_Image_Mar_29_2026_12_49_56_AM_pt5mpd.png" },
      { id: 2, name: "Midnight Martini", desc: "Charcoal infused gin, dry vermouth, edible silver", price: "$28", img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725717/ChatGPT_Image_Mar_29_2026_12_50_00_AM_askqkw.png" },
      { id: 3, name: "Golden Elixir", desc: "Aged rum, saffron honey, lemon, gold flakes", price: "$32", img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774727854/ChatGPT_Image_Mar_29_2026_01_26_18_AM-Photoroom_xox4wr.png" }
    ],
    'Main': [
      { id: 4, name: "Blue Moon Meat", desc: "Grilled Lamb Cutlets, Pomegranate Glaze, Butternut Squash", price: "$240.00", img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725786/ChatGPT_Image_Mar_29_2026_12_49_56_AM_pt5mpd.png" },
      { id: 5, name: "El Spicy Sausage Pizza", desc: "Wood-fired crust, artisan sausage, chili honey", price: "$145.00", img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725717/ChatGPT_Image_Mar_29_2026_12_50_00_AM_askqkw.png" },
      { id: 6, name: "El Bean And Cheese Burrito", desc: "Classic Greek Salad, Barrel Aged Feta Cheese, Bread", price: "$310.00", img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774727854/ChatGPT_Image_Mar_29_2026_01_26_18_AM-Photoroom_xox4wr.png" }
    ],
    'Rump': [
      { id: 7, name: "Truffle Rump Steak", desc: "300g premium cut, black truffle butter, asparagus", price: "$180.00", img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725786/ChatGPT_Image_Mar_29_2026_12_49_56_AM_pt5mpd.png" },
      { id: 8, name: "Garlic Butter Rump", desc: "Slow roasted, garlic herb crust, fondant potatoes", price: "$160.00", img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725717/ChatGPT_Image_Mar_29_2026_12_50_00_AM_askqkw.png" }
    ]
  };

  return (
    <section id="menu" className="relative w-full py-32 bg-black overflow-hidden text-white border-t border-white/5">
      
      {/* Full-section background image — very dim, acts as ambient depth */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://res.cloudinary.com/dicb5gkab/image/upload/v1774802034/ChatGPT_Image_Mar_29_2026_10_03_36_PM_ivyti9.png" 
          alt="" 
          className="w-full h-full object-cover opacity-[0.15] filter blur-[3px] brightness-[0.5]" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center lg:items-start">
          
          {/* Left Column: Image dissolves into background */}
          <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center">
             <div className="relative w-full max-w-xl mx-auto pointer-events-none z-10">
                
                <div 
                  className="w-full aspect-[4/5] relative overflow-hidden flex items-center justify-center"
                  style={{ 
                    WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 50% 45%, black 10%, transparent 55%)',
                    maskImage: 'radial-gradient(ellipse 95% 90% at 50% 45%, black 10%, transparent 55%)'
                  }}
                >
                  <motion.img 
                    src="https://res.cloudinary.com/dicb5gkab/image/upload/v1774802034/ChatGPT_Image_Mar_29_2026_10_03_36_PM_ivyti9.png" 
                    alt="Restaurant Interior Table" 
                    className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05]" 
                    animate={{ scale: [1.05, 1.15, 1.05] }}
                    transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                  />
                </div>
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
                  className={`text-3xl md:text-5xl font-serif transition-colors duration-500 flex items-center gap-4
                    ${activeTab === tab ? 'text-gold-500 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'text-white/50 hover:text-white'}`}
                >
                  {tab}
                  {tab !== 'Rump' && <span className="text-white/20 text-sm block mt-2 ml-4">◇</span>}
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
                  className="space-y-2"
                >
                  {menuData[activeTab].map((item) => (
                    <div 
                      key={item.id} 
                      className="group relative border-b border-white/10 py-6 cursor-pointer"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                       <div className="flex items-center mb-2 gap-4">
                          {/* Inline Image Reveal — small, crisp, Devacia-style */}
                          <motion.div
                            initial={false}
                            animate={{ 
                              width: hoveredItem === item.id ? 80 : 0, 
                              opacity: hoveredItem === item.id ? 1 : 0,
                              marginRight: hoveredItem === item.id ? 12 : 0
                            }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="h-16 overflow-hidden origin-left flex-shrink-0 rounded-md"
                          >
                            <img 
                              src={item.img} 
                              alt={item.name} 
                              className="h-full w-20 object-cover" 
                              style={{ 
                                imageRendering: '-webkit-optimize-contrast',
                                backfaceVisibility: 'hidden',
                                transform: 'translateZ(0)'
                              }}
                              loading="eager"
                            />
                          </motion.div>

                          <h4 className={`text-xl md:text-2xl font-medium tracking-wide transition-colors duration-300 whitespace-nowrap ${hoveredItem === item.id ? 'text-gold-400' : 'text-white'}`}>
                            {item.name}
                          </h4>
                          
                          <div className="flex-1 border-b border-dashed border-gray-600/50 mb-2 mx-4 hidden md:block" />
                          
                          <span className="text-gold-500 font-serif text-xl whitespace-nowrap">{item.price}</span>
                       </div>
                       
                       <p className={`text-sm font-light w-full md:w-3/4 transition-colors duration-300 ${hoveredItem === item.id ? 'text-gray-300' : 'text-gray-500'}`} style={{ marginLeft: hoveredItem === item.id ? '92px' : '0px', transition: 'margin-left 0.35s ease-out' }}>
                          {item.desc}
                       </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Explore CTA — micro-interactions + white hover text */}
            <div className="mt-12 inline-flex">
               <motion.button 
                  onClick={(e) => e.preventDefault()} 
                  onMouseDown={() => setIsCtaPressed(true)}
                  onMouseUp={() => setIsCtaPressed(false)}
                  onMouseLeave={() => setIsCtaPressed(false)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="group relative px-10 py-4 border border-gold-500 text-gold-500 uppercase tracking-[0.3em] text-[10px] transition-all duration-700 font-light overflow-hidden"
               >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Explore Full Menu</span>
                  <div className="absolute inset-0 bg-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
               </motion.button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
