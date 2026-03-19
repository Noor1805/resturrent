import React, { useState, createContext, useContext } from 'react';
import Navbar from './Navbar';

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

const Layout = ({ children }) => {
  const [isFrameVisible, setIsFrameVisible] = useState(true);

  return (
    <LayoutContext.Provider value={{ isFrameVisible, setIsFrameVisible }}>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 selection:text-black">
        {/* Navbar and Footer are conditionally rendered based on Frame Visibility */}
        <div className={`transition-opacity duration-1000 ${isFrameVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
             <Navbar />
        </div>
        
        <main>
          {children}
        </main>

        <div className={`transition-opacity duration-1000 ${isFrameVisible ? 'opacity-100' : 'opacity-0'}`}>
            <footer className="p-10 text-center text-xs text-gray-600 border-t border-white/5 bg-black">
              <div className="mb-4">
                <h2 className="text-xl font-serif text-white mb-2">OBSIDIAN</h2>
                <p className="font-cursive text-2xl text-gold-500">Experience the Extraordinary</p>
              </div>
              &copy; {new Date().getFullYear()} OBSIDIAN. All rights reserved.
            </footer>
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
