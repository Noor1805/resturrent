import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import gsap from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 border-b border-transparent",
      isScrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif text-white tracking-widest uppercase hover:text-gold-500 transition-colors duration-300">
          OBSIDIAN
        </Link>
        
        <ul className="hidden md:flex gap-8 items-center cursor-pointer">
          {[
            { label: 'Home',         to: '/'            },
            { label: 'Menu',         to: '/menu'        },
            { label: 'Story',        to: '/'            },
            { label: 'Reservations', to: '/'            },
          ].map(({ label, to }) => (
            <li key={label} className="relative group">
              <Link to={to} className="text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover:text-gold-400 transition-colors duration-300">
                {label}
              </Link>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <button className="hidden md:block px-6 py-2 border border-white/20 text-[10px] uppercase tracking-widest text-white hover:bg-gold-500 hover:border-gold-500 hover:text-black transition-all duration-400">
          Book Now
        </button>

        {/* Mobile Menu Button Placeholder */}
        <div className="md:hidden text-white cursor-pointer">
          <span className="block w-6 h-[1px] bg-white mb-1.5"></span>
          <span className="block w-6 h-[1px] bg-white"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
