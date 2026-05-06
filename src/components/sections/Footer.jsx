import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal animation for footer elements when scrolling into view
      gsap.from('.footer-anim', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'expo.out',
      });

      // Animate the big OBSIDIAN text entrance
      gsap.from('.footer-logo-container', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out',
        delay: 0.2,
      });

      // Text Reveal Fill Animation (Gray to Gold)
      gsap.to('.footer-logo-fill', {
        clipPath: 'inset(0% 0 0 0)',
        ease: 'none',
        scrollTrigger: {
          trigger: '.footer-logo-container',
          start: 'top 90%',
          end: 'bottom 80%',
          scrub: true,
        }
      });

      // Parallax effect on the footer background
      gsap.fromTo('.footer-bg', 
        { y: -100 },
        {
          y: 0,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative z-40 w-full bg-[#050505] text-white pt-32 pb-12 overflow-hidden border-t border-white/10">
      {/* Ambient glowing background */}
      <div className="footer-bg absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gold-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-1 footer-anim">
            <h2 className="text-3xl font-serif text-white tracking-widest uppercase mb-6">OBSIDIAN</h2>
            <p className="text-white/40 text-sm font-sans tracking-wide leading-relaxed mb-8 max-w-sm">
              Where shadow meets flavor. Redefining the boundaries of fine dining in the heart of New York City.
            </p>
            <div className="flex gap-6">
              {['Ig', 'Fb', 'X'].map((social, i) => (
                <button key={i} className="group relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-500 hover:border-gold-500/50">
                  <span className="relative z-10 text-xs font-sans tracking-wider text-white/50 group-hover:text-gold-400 transition-colors duration-500">{social}</span>
                  <div className="absolute inset-0 bg-gold-950/40 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 ease-out" />
                </button>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-1 footer-anim">
            <h4 className="text-gold-500/60 uppercase tracking-[0.3em] text-xs font-sans mb-8 flex items-center gap-4">
              <span className="w-4 h-px bg-gold-500/40"></span>
              Explore
            </h4>
            <ul className="space-y-4">
              {['Menu', 'Private Events', 'The Chef', 'Reservations'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="group inline-flex items-center text-white/50 hover:text-white transition-colors duration-300 font-sans text-sm tracking-wide">
                    <span className="w-0 h-px bg-gold-400 mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-3"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1 footer-anim">
            <h4 className="text-gold-500/60 uppercase tracking-[0.3em] text-xs font-sans mb-8 flex items-center gap-4">
              <span className="w-4 h-px bg-gold-500/40"></span>
              Contact
            </h4>
            <ul className="space-y-4 text-white/50 text-sm font-sans tracking-wide">
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">+1 (212) 555-0199</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">reservations@obsidian.nyc</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">press@obsidian.nyc</li>
            </ul>
          </div>

          {/* Visit */}
          <div className="lg:col-span-1 footer-anim">
            <h4 className="text-gold-500/60 uppercase tracking-[0.3em] text-xs font-sans mb-8 flex items-center gap-4">
              <span className="w-4 h-px bg-gold-500/40"></span>
              Visit
            </h4>
            <ul className="space-y-4 text-white/50 text-sm font-sans tracking-wide">
              <li>125 West 55th Street<br/>New York, NY 10019</li>
              <li className="pt-2 text-white/30 text-xs">Mon-Wed: 5pm - 11pm</li>
              <li className="text-white/30 text-xs">Thu-Sat: 5pm - 1am</li>
              <li className="text-gold-500/40 text-xs italic mt-2">Sun: Closed</li>
            </ul>
          </div>
          
        </div>

        {/* Big Logo Text */}
        <div className="footer-logo-container relative w-full flex justify-center items-center py-10 border-t border-white/5 overflow-hidden">
           {/* Background text (Gray/Dim) */}
           <h1 className="font-serif text-[15vw] leading-none tracking-tighter text-white/[0.05] select-none pointer-events-none">
             OBSIDIAN
           </h1>
           {/* Foreground text (Gold Fill) */}
           <h1 
             className="footer-logo-fill absolute inset-0 flex justify-center items-center font-serif text-[15vw] leading-none tracking-tighter text-gold-500 select-none pointer-events-none"
             style={{ clipPath: 'inset(100% 0 0 0)' }}
           >
             OBSIDIAN
           </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[10px] uppercase tracking-[0.3em] text-white/30 font-sans footer-anim">
           <p>&copy; {new Date().getFullYear()} Obsidian Restaurant.</p>
           <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-gold-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors duration-300">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
