import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Ambiance = () => {
  const containerRef = useRef(null);
  const titleGroupRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Title Entrance
      gsap.from(titleGroupRef.current, {
        scrollTrigger: {
          trigger: titleGroupRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 60,
        opacity: 0,
        duration: 2,
        ease: "expo.out"
      });

      // Parallax Items
      const parallaxItems = gsap.utils.toArray('.parallax-item');
      parallaxItems.forEach((item, i) => {
        const speed = (i + 1) * 40;
        gsap.to(item, {
          y: -speed,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        });
      });

      // Image Scale on Scroll (Breathing effect)
      gsap.utils.toArray('.parallax-img').forEach(img => {
        gsap.to(img, {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="ambiance" ref={containerRef} className="relative w-full py-48 bg-black overflow-hidden select-none">
      
      {/* Background NYC / Ambient Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute bottom-1/4 left-1/4 w-[1000px] h-[1000px] bg-gold-900/5 rounded-full blur-[250px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={titleGroupRef} className="mb-40 max-w-2xl">
          <p className="text-gold-500 font-serif text-sm italic tracking-[0.4em] mb-6">The Atmosphere</p>
          <h3 className="text-6xl md:text-[9.5rem] font-serif text-white uppercase italic leading-none tracking-tighter">
            Dark <span className="font-light not-italic ml-4 lg:ml-12 text-gold-500/80">Elegance</span>
          </h3>
        </div>

        {/* Asymmetrical High-Fashion Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 h-auto lg:h-[120vh]">
          
          {/* Main Hero Ambiance (Column 1-7) */}
          <div className="parallax-item md:col-span-7 h-[60vh] md:h-[85%] relative z-20 mt-12">
             <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl border border-white/5">
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-30 z-10" />
                <img src="/images/image1.png" alt="Ambiance 1" className="parallax-img w-full h-full object-cover scale-[1.05]" />
             </div>
             {/* Floating Label */}
             <div className="hidden lg:block absolute -right-12 -bottom-12 z-30 transform rotate-90 text-white/20 uppercase tracking-[0.6em] text-[10px] pointer-events-none">
                Obsidian • Curated Vibe
             </div>
          </div>

          {/* Secondary Ambiance (Column 8-12, Top) */}
          <div className="parallax-item md:col-start-8 md:col-span-5 h-[45vh] md:h-[45%] relative z-10 md:mt-[-10%]">
             <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl border border-white/5">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <div className="absolute inset-0 bg-gold-950/10 mix-blend-overlay z-10" />
                <img src="/images/image4.png" alt="Ambiance 2" className="parallax-img w-full h-full object-cover" />
             </div>
          </div>

          {/* Tertiary Detail (Column 7-11, Bottom) */}
          <div className="parallax-item md:col-start-6 md:col-span-6 h-[40vh] md:h-[50%] relative z-30 lg:mt-[-15%] ml-auto w-full">
             <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl border border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
                <img src="/images/image1.png" alt="Ambiance 3" className="parallax-img w-full h-full object-cover grayscale-[0.2] contrast-[1.1]" />
             </div>
             {/* Micro Gold Trace Line */}
             <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-gold-500/40 z-0" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ambiance;
