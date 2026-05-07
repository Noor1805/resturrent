import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const LoungeSection = () => {
  const sectionRef = useRef(null);
  const cocktailRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.lounge-reveal',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );

      if (cocktailRef.current) {
        gsap.fromTo(cocktailRef.current,
          { rotation: -12, y: 30 },
          {
            rotation: -2,
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            }
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#050505] py-24 border-y border-[#d4af37]/10 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,rgba(0,0,0,1)_80%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="relative flex items-center justify-center w-full max-w-[320px] lounge-reveal">
            <img 
              ref={cocktailRef}
              src="/asset/ChatGPT Image May 6, 2026, 01_21_55 PM-Photoroom.png" 
              alt="Lounge Cocktail" 
              className="relative z-10 w-64 md:w-80 h-auto object-contain 
                         drop-shadow-[0_30px_50px_rgba(212,175,55,0.15)]"
              onError={(e) => { e.target.src = "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725717/ChatGPT_Image_Mar_29_2026_12_50_00_AM_askqkw.png" }}
            />
            {/* Ambient glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold-500/5 rounded-full blur-[60px] pointer-events-none" />
          </div>
        </div>

        {/* Center: Text Content */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left z-20">
          <p className="lounge-reveal text-[#d4af37] tracking-[0.25em] text-[10px] md:text-[11px] uppercase font-bold mb-5">
            COCKTAILS & LOUNGE
          </p>
          <h2 className="lounge-reveal text-[42px] md:text-[54px] font-serif text-white mb-6 leading-[1.1] tracking-wide drop-shadow-lg">
            Crafted for <br className="hidden md:block" /> the Night
          </h2>
          <p className="lounge-reveal text-[#a0a0a0] font-sans text-[15px] leading-[1.7] max-w-[320px] mb-10 font-light tracking-wide">
            Signature cocktails, rare spirits, and a lounge experience that lingers long after dinner.
          </p>
          <Link to="/menu#menu-cocktails" className="lounge-reveal group relative px-10 py-4 border border-[#d4af37]/40 text-[#d4af37] uppercase tracking-[0.2em] text-[10px] overflow-hidden rounded-sm transition-all duration-500 inline-block text-center">
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">EXPLORE COCKTAILS</span>
            <div className="absolute inset-0 bg-[#d4af37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </Link>
        </div>

        {/* Right: Logo / Graphic (Faint) */}
        <div className="hidden md:flex w-full md:w-1/3 justify-center md:justify-start items-center opacity-10 pointer-events-none lounge-reveal [transform:perspective(1000px)_rotateY(-15deg)]">
          <img 
            src="/asset/our story/Asign.png" 
            alt="Obsidian Lounge" 
            className="w-80 h-auto object-contain"
            style={{ filter: "invert(63%) sepia(51%) saturate(583%) hue-rotate(7deg) brightness(93%) contrast(89%)" }}
          />
        </div>

      </div>
    </section>
  );
};

export default LoungeSection;
