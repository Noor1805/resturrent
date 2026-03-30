import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChefSection = ({ isEntered }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textGroupRef = useRef(null);
  const iconRef = useRef(null);
  const headingRef = useRef(null);

  // Devacia-style scroll reveal for "Alexander"
  const alexanderChars = "Alexander".split("");
  const [activeCharIndex, setActiveCharIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;
      const { top, height } = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = (windowHeight / 1.3 - top) / (height + windowHeight / 3);
      const clamped = Math.max(0, Math.min(1, scrollProgress));
      setActiveCharIndex(Math.floor(clamped * alexanderChars.length));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alexanderChars.length]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      // Icon rotation parallax
      gsap.to(".rotating-seal-svg", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });

      // Image Floating Effect (Loop)
      gsap.to(imageRef.current, {
        y: "-=20",
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      // Text Entrance Reveal (Headers)
      gsap.fromTo('.chef-reveal', 
         { opacity: 0, y: 50 },
         { 
            opacity: 1, 
            y: 0, 
            duration: 1.5, 
            stagger: 0.15,
            ease: "expo.out",
            scrollTrigger: {
               trigger: textGroupRef.current,
               start: "top 75%",
               toggleActions: "play none none reverse"
            }
         }
      );

      // Paragraph Typewriter Effect
      gsap.fromTo('.typewriter-word',
         { opacity: 0 },
         {
            opacity: 1,
            duration: 0.01,
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
               trigger: textGroupRef.current,
               start: "top 70%",
               toggleActions: "play none none reverse"
            }
         }
      );

    }, containerRef);
    return () => ctx.revert();
  }, [isEntered]);

  const p1 = "Forged in the demanding fires of Europe's most decorated three-star kitchens, Chef Pierce commands culinary architecture with unforgiving precision.".split(" ");
  const p2 = "His philosophy strips away the superfluous. He isolates flavor at its absolute peak, utilizing ancient preservation techniques and avant-garde molecular precision to craft a narrative you can taste.".split(" ");

  return (
    <section id="chef" ref={containerRef} className="relative w-full min-h-[900px] xl:h-[100vh] bg-black py-32 overflow-hidden flex items-center">
      


      <div className="container mx-auto px-6 h-full relative z-10 flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 w-full">
          
          {/* Left Text Content */}
          <div ref={textGroupRef} className="flex-1 w-full lg:pr-12 text-center lg:text-left z-10">
            <div className="chef-reveal flex items-center justify-center lg:justify-start gap-6 mb-10">
               <div className="w-12 h-px bg-gold-500/50" />
               <p className="text-gold-500 tracking-[0.4em] text-xs uppercase font-light">
                 Meet The Maestro
               </p>
            </div>
            
            <h2 ref={headingRef} className="chef-reveal text-6xl md:text-7xl xl:text-[7.5rem] font-serif mb-8 leading-[0.85] tracking-tight text-white">
              Chef <br />
              <span className="ml-2 lg:ml-8 block whitespace-nowrap">
                {alexanderChars.map((char, idx) => (
                  <span 
                    key={idx}
                    className={`inline-block transition-colors duration-500 ease-out ${
                      idx < activeCharIndex ? 'text-gold-500' : 'text-white/30'
                    }`}
                  >
                     {char}
                  </span>
                ))}
              </span>
              <span className="text-white ml-4 lg:ml-16 block">Pierce</span>
            </h2>

            <div className="space-y-6 text-white font-light leading-relaxed max-w-xl mx-auto lg:mx-0 tracking-wide text-lg md:text-xl">
              <p>
                {p1.map((word, i) => (
                  <span key={i} className="typewriter-word inline-block mr-[0.25em]">{word}</span>
                ))}
              </p>
              <p>
                {p2.map((word, i) => (
                  <span key={i} className="typewriter-word inline-block mr-[0.25em]">{word}</span>
                ))}
              </p>
            </div>
            
            <div className="chef-reveal mt-16 flex justify-center lg:justify-start">
              <img 
                src="/images/signature.png" 
                alt="Alexander Pierce Signature" 
                className="h-12 md:h-16 opacity-30 filter invert mix-blend-screen" 
                onError={(e) => e.target.style.display = 'none'} 
              />
            </div>
          </div>

          {/* Right Image Frame (No Background, 3D Floating) */}
          <div className="flex-1 relative w-full h-[600px] md:h-[700px] max-w-md lg:max-w-xl mx-auto z-10">
             
             <div className="absolute inset-x-0 bottom-0 pointer-events-none flex justify-center h-full items-end">
                <img 
                  ref={imageRef}
                  src="https://res.cloudinary.com/dicb5gkab/image/upload/v1774725703/medium-shot-professional-chef-posing_rwpzbw.png" 
                  alt="Chef Alexander Pierce" 
                  className="w-[120%] h-auto max-h-[110%] object-contain filter contrast-[1.1] grayscale-[0.2] drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
                />
             </div>

             {/* Dynamic Rotating Seal */}
             <div className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 w-32 h-32 md:w-48 md:h-48 z-40 rounded-full border border-gold-500/30 bg-black/60 backdrop-blur-md flex items-center justify-center shadow-2xl">
                <svg viewBox="0 0 100 100" className="rotating-seal-svg absolute w-full h-full scale-[0.85]">
                  <path id="textCircle" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                  <text className="text-[14px] font-sans font-medium uppercase fill-white tracking-[0.2em]">
                    <textPath href="#textCircle" startOffset="0%">
                       OBSIDIAN • CULINARY EXCELLENCE •
                    </textPath>
                  </text>
                </svg>
                {/* Inner Dots */}
                <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-full scale-[0.65]" />
                <div className="absolute flex items-center justify-center w-full h-full">
                  <span className="text-gold-500 font-serif text-3xl md:text-5xl font-bold pr-1 -mt-1 tracking-tighter mix-blend-screen drop-shadow-md">OB.</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChefSection;
