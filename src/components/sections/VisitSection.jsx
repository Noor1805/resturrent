import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VisitSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.visit-reveal',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const googleMapsUrl = "https://www.google.com/maps/place/212+W+55th+St,+New+York,+NY+10019";

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-20 border-b border-[#d4af37]/10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <p className="visit-reveal text-[#d4af37] tracking-[0.25em] text-[10px] md:text-[11px] uppercase font-bold mb-3">
            VISIT OBSIDIAN
          </p>
          <h2 className="visit-reveal text-[36px] md:text-[46px] font-serif text-white leading-none tracking-wide">
            Plan Your Evening
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-8 justify-between items-start">
          
          {/* Info Columns */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 flex-1 w-full pt-2">
            
            {/* Address */}
            <div className="visit-reveal flex-1 max-w-[320px] group cursor-default">
              <div className="relative p-7 border border-[#d4af37]/20 rounded-[2px] bg-[#070707] hover:border-[#d4af37]/60 hover:bg-[#0a0a0a] transition-all duration-500 flex items-start gap-4 h-full shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] overflow-hidden">
                {/* Subtle Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-out pointer-events-none" />
                
                <svg className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-1 group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="relative z-10">
                  <h4 className="text-white font-serif text-[17px] tracking-wide mb-3 group-hover:text-[#d4af37] transition-colors duration-500">Obsidian New York</h4>
                  <p className="text-[#909090] font-sans text-[14px] leading-relaxed tracking-wide font-light group-hover:text-white/80 transition-colors duration-500">
                    212 W 55th St<br />
                    New York, NY 10019
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="visit-reveal flex-1 flex flex-col justify-center border-l border-[#d4af37]/10 pl-10 relative group">
              <h5 className="text-[#d4af37] text-[10px] uppercase tracking-[0.25em] font-bold mb-5 flex items-center gap-4 group-hover:tracking-[0.3em] transition-all duration-500">
                 HOURS
              </h5>
              <ul className="space-y-3 text-[14px] font-sans text-[#909090] tracking-wide font-light">
                <li className="flex justify-between hover:translate-x-2 hover:text-white transition-all duration-300 cursor-default"><span className="w-32 text-white/80">Tuesday - Thursday</span><span>5:00 PM - 11:00 PM</span></li>
                <li className="flex justify-between hover:translate-x-2 hover:text-white transition-all duration-300 cursor-default"><span className="w-32 text-white/80">Friday - Saturday</span><span>5:00 PM - 12:00 AM</span></li>
                <li className="flex justify-between hover:translate-x-2 hover:text-white transition-all duration-300 cursor-default"><span className="w-32 text-white/80">Sunday</span><span>5:00 PM - 10:00 PM</span></li>
                <li className="flex justify-between hover:translate-x-2 transition-all duration-300 cursor-default"><span className="w-32 text-white/80">Monday</span><span className="text-white/30">Closed</span></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="visit-reveal flex-1 flex flex-col justify-center border-l border-[#d4af37]/10 pl-10 group">
              <h5 className="text-[#d4af37] text-[10px] uppercase tracking-[0.25em] font-bold mb-5 flex items-center gap-4 group-hover:tracking-[0.3em] transition-all duration-500">
                 CONTACT
              </h5>
              <ul className="space-y-4 text-[14px] font-sans text-[#909090] tracking-wide font-light">
                <li className="group/link flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                  <div className="w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  <a href="tel:2125550199" className="hover:text-white hover:text-shadow-sm transition-colors duration-300">(212) 555-0199</a>
                </li>
                <li className="group/link flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                  <div className="w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  <a href="mailto:info@obsidian-nyc.com" className="hover:text-white hover:text-shadow-sm transition-colors duration-300">info@obsidian-nyc.com</a>
                </li>
                <li className="group/link flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                  <div className="w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                  <a href="#" className="hover:text-[#d4af37] hover:text-shadow-sm transition-colors duration-300">@obsidian.nyc</a>
                </li>
              </ul>
            </div>
            
          </div>

          {/* Map Redirect Box */}
          <div className="visit-reveal w-full xl:w-[350px] flex-shrink-0 mt-8 xl:mt-0">
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-[200px] rounded-[2px] overflow-hidden border border-[#d4af37]/30 group bg-[#080808] hover:border-[#d4af37]/80 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-700"
            >
              {/* CSS Dark Map Grid Pattern */}
              <div className="absolute inset-0 opacity-20 transition-transform duration-[2s] group-hover:scale-[1.2] group-hover:-translate-y-4 ease-out"
                   style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px', transform: 'perspective(400px) rotateX(30deg) scale(1.5)' }} />
              
              {/* Map Accent Lines */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-0 w-full h-px bg-[#d4af37]/40 rotate-12 group-hover:bg-[#d4af37]/80 transition-colors duration-700" />
                <div className="absolute top-0 left-1/3 w-px h-full bg-[#d4af37]/40 -rotate-12 group-hover:bg-[#d4af37]/80 transition-colors duration-700" />
              </div>

              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] group-hover:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] transition-colors duration-700" />
              
              {/* Pin */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 group-hover:-translate-y-5 group-hover:scale-110 transition-transform duration-700 ease-out z-10">
                <svg className="w-7 h-7 text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.9)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div className="flex flex-col">
                   <span className="text-[#d4af37] font-serif text-[12px] font-bold tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] leading-tight group-hover:text-white transition-colors duration-500">
                     OBSIDIAN
                   </span>
                   <span className="text-[#a0a0a0] text-[8px] tracking-[0.2em] font-sans uppercase group-hover:text-[#d4af37] transition-colors duration-500">
                     NEW YORK
                   </span>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-black/80 backdrop-blur-md border-t border-[#d4af37]/20 flex justify-center transition-all duration-700 group-hover:bg-[#d4af37] z-20">
                <span className="text-[#d4af37] text-[9px] uppercase tracking-[0.2em] group-hover:text-black font-bold group-hover:tracking-[0.25em] transition-all duration-500">Get Directions</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisitSection;
