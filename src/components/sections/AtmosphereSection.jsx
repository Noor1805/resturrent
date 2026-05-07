import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const AtmosphereSection = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Fade in text elements
      gsap.fromTo('.atmosphere-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
      
      // Parallax effect on images
      gsap.fromTo('.atmosphere-img-left',
        { x: '-5%' },
        {
          x: '0%',
          duration: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      );

      gsap.fromTo('.atmosphere-img-right',
        { x: '5%' },
        {
          x: '0%',
          duration: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-0 overflow-hidden border-y border-[#d4af37]/10">
      
      {/* CSS for Premium Mask Blending */}
      <style>
        {`
          .blend-img-left {
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
          }
          .blend-img-right {
            -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
            mask-image: linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
          }
          @media (min-width: 768px) {
            .blend-img-left {
              -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
              mask-image: linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
            }
            .blend-img-right {
              -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
              mask-image: linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
            }
          }
        `}
      </style>

      <div className="w-full relative flex flex-col md:flex-row items-stretch justify-between min-h-[700px] lg:min-h-[800px]">
        
        {/* Left Image Background */}
        <div className="w-full md:w-[50%] h-[350px] md:h-auto relative overflow-hidden bg-black">
          <img 
            src="/asset/our story/place1.png" 
            alt="Atmosphere Dining" 
            className="blend-img-left atmosphere-img-left w-full h-full object-cover scale-[1.1]"
            onError={(e) => { e.target.src = "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725703/medium-shot-professional-chef-posing_rwpzbw.png" }}
          />
        </div>

        {/* Right Image Background */}
        <div className="w-full md:w-[50%] h-[350px] md:h-auto relative overflow-hidden bg-black">
          <img 
            src="/asset/our story/place2.png" 
            alt="Atmosphere Bar" 
            className="blend-img-right atmosphere-img-right w-full h-full object-cover scale-[1.1]"
            onError={(e) => { e.target.src = "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725703/medium-shot-professional-chef-posing_rwpzbw.png" }}
          />
        </div>

        {/* Absolute Centered Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none">
          <div className="bg-black/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none p-8 rounded-2xl flex flex-col items-center pointer-events-auto">
            <p className="atmosphere-reveal text-[#d4af37] tracking-[0.3em] text-[11px] md:text-[13px] uppercase font-bold mb-4">
              DARK ELEGANCE
            </p>
            
            <h2 className="atmosphere-reveal text-[50px] md:text-[70px] lg:text-[85px] font-serif mb-6 text-white leading-none tracking-wide drop-shadow-2xl">
              Atmosphere
            </h2>
            
            <p className="atmosphere-reveal text-[#b0b0b0] font-serif italic text-[18px] md:text-[22px] lg:text-[24px] leading-[1.6] max-w-[420px] mb-12 drop-shadow-md">
              Moody lighting. Refined textures. <br/>
              An atmosphere designed for unforgettable evenings.
            </p>
            
            <Link to="/story" className="atmosphere-reveal flex flex-col items-center group cursor-pointer no-underline pointer-events-auto">
              <span className="text-[#d4af37] tracking-[0.2em] text-[11px] md:text-[13px] uppercase font-bold mb-3 transition-transform duration-300 group-hover:-translate-y-1">
                EXPERIENCE OBSIDIAN
              </span>
              <svg width="40" height="15" viewBox="0 0 40 15" className="fill-[#d4af37] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                 <path d="M20 0 L23 6 L30 6 L24 10 L26 15 L20 12 L14 15 L16 10 L10 6 L17 6 Z" transform="scale(0.8) translate(5, 2)" />
                 <line x1="0" y1="7.5" x2="12" y2="7.5" stroke="#d4af37" strokeWidth="1" />
                 <line x1="28" y1="7.5" x2="40" y2="7.5" stroke="#d4af37" strokeWidth="1" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AtmosphereSection;
