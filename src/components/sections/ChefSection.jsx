import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChefSection = ({ isEntered }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textGroupRef = useRef(null);
  const headingRef = useRef(null);

  // Restore the scroll reveal animation for the name
  const nameChars = "Alexander Pierce".split("");
  const [activeCharIndex, setActiveCharIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;
      const { top, height } = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = (windowHeight / 1.3 - top) / (height + windowHeight / 3);
      const clamped = Math.max(0, Math.min(1, scrollProgress));
      setActiveCharIndex(Math.floor(clamped * nameChars.length));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nameChars.length]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Seal rotates continuously on loop
      gsap.to(".rotating-seal-svg", {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1
      });

      // Chef Image Zoom Reveal
      gsap.fromTo(imageRef.current,
        { scale: 1.15, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // Text Entrance Reveal
      gsap.fromTo('.chef-reveal', 
         { opacity: 0, y: 30 },
         { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top 75%",
            }
         }
      );

    }, containerRef);
    return () => ctx.revert();
  }, [isEntered]);

  return (
    <section id="chef" ref={containerRef} className="relative w-full bg-black flex items-center justify-center pt-16 pb-0 overflow-hidden">
      <div className="max-w-[1500px] w-full mx-auto px-6 md:px-12 relative z-10 flex items-center justify-center">
        
        <div className="flex flex-col lg:flex-row items-center justify-between w-full min-h-[550px] gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div ref={textGroupRef} className="w-full lg:w-[35%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-20 pb-16 lg:pb-0">
            <div className="chef-reveal flex items-center mb-4">
               <p className="text-[#d4af37] tracking-[0.25em] text-[11px] md:text-[13px] uppercase font-bold">
                 OUR CHEF
               </p>
            </div>
            
            <h2 ref={headingRef} className="chef-reveal text-[46px] md:text-[54px] lg:text-[60px] font-serif mb-2 leading-[1] text-white">
              Chef <br />
              <span className="block whitespace-nowrap mt-1">
                {nameChars.map((char, idx) => (
                  <span 
                    key={idx}
                    className={`inline-block transition-colors duration-500 ease-out ${
                      idx < activeCharIndex ? 'text-[#d4af37]' : 'text-[#d4af37]/30'
                    }`}
                  >
                     {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h2>
            
            <p className="chef-reveal text-[#d4af37] tracking-widest text-[11px] md:text-[13px] uppercase mb-6 font-medium">
              Executive Chef & Founder
            </p>

            <div className="chef-reveal space-y-4 text-white/60 font-sans leading-[1.8] text-[14px] md:text-[15px] max-w-[380px]">
              <p>
                With a career shaped by the world's finest kitchens, Chef Pierce creates with purpose, seasonality, and an uncompromising commitment to excellence.
              </p>
            </div>
            
            {/* White Signature Mask - Left */}
            <div className="chef-reveal mt-8 drop-shadow-[0_10px_15px_rgba(255,255,255,0.15)] md:drop-shadow-[0_15px_25px_rgba(255,255,255,0.2)]">
              <div 
                className="h-20 md:h-28 w-64 md:w-80 bg-white opacity-100"
                style={{
                  WebkitMaskImage: `url("/asset/our story/alex sign.png")`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left'
                }}
              />
            </div>
          </div>

          {/* Center Image Frame */}
          <div className="relative w-full lg:w-[30%] h-[500px] lg:h-[600px] flex justify-center items-end z-10 mt-0 lg:mt-8">
             <img 
               ref={imageRef}
               src="https://res.cloudinary.com/dicb5gkab/image/upload/v1774725703/medium-shot-professional-chef-posing_rwpzbw.png" 
               alt="Chef Alexander Pierce" 
               className="w-auto h-full max-h-[100%] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)] relative z-10"
             />
             
             {/* Fade out bottom cut-off of the image */}
             <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

             {/* Circular Badge */}
             <div className="absolute bottom-[15%] lg:bottom-[25%] left-[-10px] md:left-[10%] lg:left-[-30px] w-36 h-36 md:w-40 md:h-40 z-30 rounded-full border border-[#d4af37]/30 flex items-center justify-center mix-blend-screen bg-black/40 backdrop-blur-sm">
                <svg viewBox="0 0 100 100" className="rotating-seal-svg absolute w-full h-full scale-[0.85]">
                  <path id="textCircleChef" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                  <text className="text-[12px] font-serif font-medium uppercase fill-[#d4af37] tracking-[0.2em]">
                    <textPath href="#textCircleChef" startOffset="0%">
                       MICHELIN STAR • 3X WINNER •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 border border-[#d4af37]/10 rounded-full scale-[0.7]" />
                <div className="absolute flex items-center justify-center text-[#d4af37] font-serif text-3xl font-bold">
                  08
                </div>
             </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-20 pl-0 lg:pl-12 pb-16 lg:pb-0">
            <p className="chef-reveal font-serif text-[#e6d5b8] text-[26px] md:text-[32px] leading-[1.4] italic max-w-[320px] mb-8">
              "Perfection is not a goal, it's our standard."
            </p>
            
            {/* Golden Signature Mask - Right */}
            <div className="chef-reveal w-full max-w-[320px] flex justify-center lg:justify-start pr-0">
              <div 
                className="h-10 md:h-12 w-32 bg-[#d4af37] opacity-90"
                style={{
                  WebkitMaskImage: `url("/asset/our story/Asign.png")`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'left'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChefSection;
