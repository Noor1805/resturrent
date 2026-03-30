import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InstaReels = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const reels = [
    { id: 1, img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774802034/ChatGPT_Image_Mar_29_2026_10_03_36_PM_ivyti9.png", likes: "1.2k" },
    { id: 2, img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725786/ChatGPT_Image_Mar_29_2026_12_49_56_AM_pt5mpd.png", likes: "845" },
    { id: 3, img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725717/ChatGPT_Image_Mar_29_2026_12_50_00_AM_askqkw.png", likes: "2.1k" },
    { id: 4, img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774727854/ChatGPT_Image_Mar_29_2026_01_26_18_AM-Photoroom_xox4wr.png", likes: "3.4k" },
    { id: 5, img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1774725703/medium-shot-professional-chef-posing_rwpzbw.png", likes: "5.2k" },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Horizontal Scroll Animation
      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const xDistance = -(totalWidth - viewportWidth + 100);

      gsap.to(trackRef.current, {
        x: xDistance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Individual Card Tilt Logic (Subtle Mouse Parallax)
      const cards = gsap.utils.toArray('.reel-card');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;
          
          gsap.to(card.querySelector('.reel-inner'), {
            rotateY: x * 10,
            rotateX: -y * 10,
            scale: 1.02,
            duration: 0.5,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card.querySelector('.reel-inner'), {
            rotateY: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.3)"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="instagram" 
      ref={sectionRef} 
      className="relative w-full h-screen bg-black overflow-hidden flex flex-col justify-center"
    >
      {/* Background NYC / Ambient Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gold-900/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end">
          <div>
            <p className="text-gold-500 font-serif text-sm italic tracking-[0.3em] mb-4">The Digital Experience</p>
            <h2 className="text-5xl md:text-8xl font-serif text-white uppercase tracking-tighter leading-none italic">
              #Obsidian<span className="text-gold-500 font-light not-italic">NYC</span>
            </h2>
          </div>

          <button 
            onClick={(e) => e.preventDefault()}
            className="group relative px-12 py-5 rounded-full border border-white/10 text-white uppercase tracking-[0.4em] text-[10px] transition-all duration-700 font-light overflow-hidden hover:border-gold-500/50 hover:scale-[1.04] active:scale-[0.96]"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Capture the Moment</span>
            <div className="absolute inset-0 bg-gold-950/80 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-out" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="relative w-full h-[60vh] flex items-center">
         <div 
           ref={trackRef} 
           className="flex gap-12 px-[10vw] items-center h-full"
         >
            {reels.map((reel) => (
               <div 
                 key={reel.id}
                 className="reel-card relative w-72 md:w-96 aspect-[3/4] flex-shrink-0 cursor-pointer group"
                 style={{ perspective: "1000px" }}
               >
                  <div className="reel-inner relative w-full h-full transition-transform duration-100 ease-out preserve-3d shadow-2xl overflow-hidden rounded-xl border border-white/5 bg-neutral-900">
                      <img 
                        src={reel.img} 
                        alt={`Reel ${reel.id}`} 
                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000" 
                      />
                      
                      {/* Glass Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Play Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100 text-white">
                          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                             <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                          </div>
                      </div>

                      {/* Info Overlay */}
                      <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <span className="text-white text-xs font-light tracking-[0.2em] uppercase flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                            View Reel
                         </span>
                         <span className="text-white/60 text-xs font-medium flex items-center gap-2">
                            <svg className="w-4 h-4 fill-white/40" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            {reel.likes}
                         </span>
                      </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default InstaReels;
