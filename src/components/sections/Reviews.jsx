import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const reviews = [
    {
       id: 1,
       author: "The New York Times",
       text: "A masterclass in culinary theater. Obsidian redefines what it means to dine in the dark, revealing flavors you never knew existed.",
    },
    {
       id: 2,
       author: "Michelin Guide",
       text: "Impeccable execution meets daring innovation. Alexander Pierce has created a temple of gastronomy that demands absolute attention.",
    },
    {
       id: 3,
       author: "Vogue",
       text: "The sexiest dining room in Manhattan. The ambiance is as intoxicating as their signature Old Fashioned.",
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Title Entrance
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
      });

      // Individual Review Entrance
      const reviewElements = gsap.utils.toArray('.review-item');
      reviewElements.forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 80,
          opacity: 0,
          duration: 2,
          delay: i * 0.1,
          ease: "expo.out"
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" ref={containerRef} className="relative w-full py-48 bg-black overflow-hidden select-none border-t border-white/5">
      
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
             <path d="M50 0 L100 50 L50 100 L0 50 Z" />
          </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
         <div ref={titleRef} className="text-center mb-40">
            <p className="text-gold-500 font-serif text-sm italic tracking-[0.4em] mb-4">Critical Acclaim</p>
            <h2 className="text-5xl md:text-8xl font-serif text-white uppercase italic leading-[0.9] tracking-tighter">
               Press & <span className="font-light not-italic text-white ml-2">Appreciation</span>
            </h2>
         </div>

         <div className="flex flex-col gap-32">
            {reviews.map((review, i) => (
              <div 
                key={review.id} 
                className={`review-item relative flex flex-col md:flex-row items-center gap-16 md:gap-32 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                 {/* Massive Background Quote */}
                 <div className="absolute top-0 opacity-[0.03] text-[20rem] md:text-[30rem] font-serif select-none pointer-events-none text-white leading-none">
                    “
                 </div>

                 {/* Content Frame */}
                 <div className="relative z-10 w-full md:w-3/4 flex flex-col items-center text-center px-6">
                    <div className="flex justify-center gap-2 mb-10">
                       {[...Array(5)].map((_, j) => (
                          <div key={j} className="w-1.5 h-1.5 rounded-full bg-gold-500 opacity-60" />
                       ))}
                    </div>

                    <p className="text-3xl md:text-6xl text-white font-serif italic mb-12 leading-tight tracking-tight">
                       {review.text}
                    </p>

                    <div className="flex flex-col items-center gap-4">
                       <div className="w-16 h-[1px] bg-gold-500/40" />
                       <span className="text-gold-500 uppercase tracking-[0.5em] text-xs font-medium">
                          {review.author}
                       </span>
                    </div>
                 </div>

                 {/* Decorative Image Frame (Minimal) */}
                 <div className="hidden lg:block w-1/4 h-80 relative rounded-sm overflow-hidden border border-white/5 opacity-40">
                    <img src={`/images/image${i+1}.png`} alt="" className="w-full h-full object-cover grayscale brightness-50" />
                    <div className="absolute inset-0 bg-gold-950/20 mix-blend-color" />
                 </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default Reviews;
