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
      "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 border-b border-transparent",
      isScrolled ? "bg-black/80 backdrop-blur-xl border-white/10 py-4 md:py-5" : "bg-transparent py-6 md:py-8"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
          className="text-2xl md:text-3xl font-serif text-white tracking-widest uppercase hover:text-gold-500 transition-colors duration-300 block py-2"
        >
          OBSIDIAN
        </Link>
        
        <ul className="hidden md:flex gap-8 items-center cursor-pointer">
          {[
            { label: 'Home',         to: '/'            },
            { label: 'Menu',         to: '/menu'        },
            { label: 'Story',        to: '/story'       },
            { label: 'Reservations', to: '/reservations'},
            { label: 'Contact',      to: '/contact'     },
          ].map(({ label, to }) => (
            <li key={label} className="relative group">
              <Link 
                to={to} 
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="block py-2 text-[11px] md:text-xs uppercase tracking-[0.25em] text-white/70 group-hover:text-gold-400 transition-colors duration-300"
              >
                {label}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <Link 
          to="/reservations" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
          className="hidden md:block px-8 py-3 border border-white/20 text-xs uppercase tracking-[0.2em] text-white hover:bg-gold-500 hover:border-gold-500 hover:text-black transition-all duration-400"
        >
          Book Now
        </Link>

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
