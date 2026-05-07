import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

/* ── NAV LINKS ──────────────────────────────────────── */
const navLinks = [
  { label: 'Home',         to: '/'            },
  { label: 'Menu',         to: '/menu'        },
  { label: 'Story',        to: '/story'       },
  { label: 'Reservations', to: '/reservations'},
  { label: 'Contact',      to: '/contact'     },
];

/* ── CLEAN APP-LIKE BOTTOM TAB ICONS ───────────────────────── */
const HomeIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={active ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const MenuDishIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={active ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
  </svg>
);

const ReserveIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={active ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ContactPhoneIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={active ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const bottomTabs = [
  { label: 'Home',    to: '/',            Icon: HomeIcon         },
  { label: 'Menu',    to: '/menu',        Icon: MenuDishIcon     },
  { label: 'Reserve', to: '/reservations',Icon: ReserveIcon      },
  { label: 'Contact', to: '/contact',     Icon: ContactPhoneIcon },
];

/* ══════════════════════════════════════════════════════ */
const Navbar = () => {
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [isDrawerOpen,  setIsDrawerOpen]  = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 50);

      if (current < 80) {
        setShowBottomNav(true);
      } else if (current > lastScrollY.current) {
        // Scrolling DOWN → hide bottom nav
        setShowBottomNav(false);
      } else {
        // Scrolling UP → show bottom nav
        setShowBottomNav(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isDrawerOpen]);

  const go = () => {
    setIsDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <>
      {/* ── TOP NAVBAR ──────────────────────────────────── */}
      <nav className={clsx(
        "fixed top-0 left-0 w-full z-[60] transition-all duration-500 px-6 md:px-12 border-b border-transparent",
        (isScrolled || isDrawerOpen)
          ? "bg-[#030303]/90 backdrop-blur-xl border-white/10 py-4 md:py-5"
          : "bg-transparent py-6 md:py-8"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={go}
            className="text-2xl md:text-3xl font-serif text-white tracking-widest uppercase hover:text-[#d4af37] transition-colors duration-300 py-2 relative z-10"
          >OBSIDIAN</Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map(({ label, to }) => (
              <li key={label} className="relative group">
                <Link to={to} onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                  className={clsx(
                    "block py-2 text-xs uppercase tracking-[0.25em] transition-colors duration-300",
                    location.pathname === to ? "text-[#d4af37]" : "text-white/70 group-hover:text-[#d4af37]"
                  )}
                >{label}</Link>
                <span className={clsx(
                  "absolute bottom-0 left-0 h-[1px] bg-[#d4af37] transition-all duration-300 group-hover:w-full",
                  location.pathname === to ? "w-full" : "w-0"
                )} />
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link to="/reservations" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
            className="hidden md:block px-8 py-3 border border-white/20 text-xs uppercase tracking-[0.2em] text-white hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all duration-300"
          >Book Now</Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="md:hidden relative z-[70] w-9 h-9 flex flex-col items-center justify-center gap-[5px] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={clsx("block w-6 h-[1.5px] transition-all duration-400 origin-center",
              isDrawerOpen ? "rotate-45 translate-y-[6.5px] bg-[#d4af37]" : "bg-white")} />
            <span className={clsx("block h-[1.5px] transition-all duration-400",
              isDrawerOpen ? "w-0 opacity-0" : "w-6 bg-white")} />
            <span className={clsx("block w-6 h-[1.5px] transition-all duration-400 origin-center",
              isDrawerOpen ? "-rotate-45 -translate-y-[6.5px] bg-[#d4af37]" : "bg-white")} />
          </button>
        </div>
      </nav>

      {/* ── SLIDE-IN DRAWER ─────────────────────────────── */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.aside key="drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-[82vw] max-w-[340px] z-[65] bg-[#030303] border-l border-white/5 flex flex-col pt-28 px-8 pb-[calc(8rem+env(safe-area-inset-bottom))] md:hidden overflow-y-auto"
            >
              <div className="absolute top-1/3 right-0 w-48 h-48 bg-[#d4af37]/5 blur-[80px] rounded-full pointer-events-none" />
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="absolute top-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-white/60 transition-colors duration-300 hover:border-[#d4af37]/40 hover:text-[#d4af37]"
                aria-label="Close menu"
              >
                <span>Close</span>
                <span className="relative h-3.5 w-3.5">
                  <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
              <p className="text-[#d4af37]/60 text-[9px] tracking-[0.45em] uppercase mb-10 font-semibold">Navigation</p>

              <ul className="space-y-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.li key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                  >
                    <Link to={link.to} onClick={go}
                      className={clsx(
                        "flex items-center justify-between py-5 border-b border-white/[0.04] group transition-colors duration-300",
                        location.pathname === link.to ? "text-[#d4af37]" : "text-white/50 hover:text-white"
                      )}
                    >
                      <span className="font-serif text-2xl tracking-wide">{link.label}</span>
                      <span className={clsx(
                        "text-base transition-all duration-300 group-hover:translate-x-1",
                        location.pathname === link.to ? "text-[#d4af37]" : "text-white/10 group-hover:text-white/40"
                      )}>→</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="mt-auto pt-8"
              >
                <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase mb-4">Fine Dining · New York</p>
                <Link to="/reservations" onClick={go}
                  className="block w-full text-center py-4 border border-[#d4af37]/30 text-[#d4af37] text-[10px] uppercase tracking-[0.3em] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-[#d4af37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500">Reserve Your Table</span>
                </Link>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── BOTTOM TAB BAR ──────────────────────────────── */}
      <AnimatePresence>
        {showBottomNav && (
          <motion.div
            key="bottomnav"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-50"
          >
            <div className="bg-[#030303]/95 backdrop-blur-xl border-t border-white/10 pt-3 pb-[calc(0.9rem+env(safe-area-inset-bottom))]">
              <div className="flex items-stretch justify-around px-4 max-w-md mx-auto">
                {bottomTabs.map(({ label, to, Icon }) => {
                  const active = location.pathname === to;
                  return (
                    <Link
                      key={label}
                      to={to}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
                      className="relative flex flex-col items-center justify-center gap-1.5 flex-1 py-1"
                    >
                      {/* Icon */}
                      <div className={clsx(
                        "relative z-10 transition-colors duration-300",
                        active ? "text-[#d4af37]" : "text-white/40"
                      )}>
                        <Icon active={active} />
                      </div>

                      {/* Label */}
                      <span className={clsx(
                        "relative z-10 text-[9px] uppercase font-semibold tracking-wider transition-colors duration-300",
                        active ? "text-[#d4af37]" : "text-white/40"
                      )}>{label}</span>
                    </Link>
                  );
                })}
              </div>
              <div className="h-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
