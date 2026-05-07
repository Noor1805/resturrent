import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    id: 1,
    quote: "A masterclass in modern luxury dining. Obsidian sets a new standard in New York.",
    source: "Forbes",
    isMichelin: false
  },
  {
    id: 2,
    quote: "An unforgettable experience from the first bite to the last detail.",
    source: "The New York Times",
    isMichelin: false
  },
  {
    id: 3,
    quote: "Refined, innovative, and utterly remarkable. A true culinary destination.",
    source: "MICHELIN GUIDE",
    isMichelin: true
  }
];

const InspireReviews = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.inspire-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-black py-28 overflow-hidden border-b border-[#d4af37]/10">
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.02)_0%,rgba(0,0,0,1)_60%)]" />

      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center relative z-10">
        
        <p className="text-[#d4af37] tracking-[0.3em] text-[10px] md:text-[11px] uppercase font-bold mb-16 text-center">
          WORDS THAT INSPIRE
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-14">
          {REVIEWS.map((review) => (
            <div key={review.id} className="inspire-card flex flex-col items-center justify-center p-12 bg-[#060606] border border-[#d4af37]/20 rounded-sm hover:border-[#d4af37]/50 hover:bg-[#0a0a0a] hover:-translate-y-2 shadow-2xl transition-all duration-500 min-h-[250px]">
              <p className="text-[#e0e0e0] font-serif italic text-[17px] md:text-[19px] text-center leading-[1.6] mb-10 drop-shadow-sm">
                "{review.quote}"
              </p>
              
              <div className="flex items-center justify-center gap-3 mt-auto">
                {review.isMichelin && (
                  <svg className="w-5 h-5 text-[#d4af37] fill-current drop-shadow-md" viewBox="0 0 24 24">
                     <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
                  </svg>
                )}
                <span className={`text-[#d4af37] text-[13px] tracking-wide ${review.isMichelin ? 'uppercase font-sans font-bold tracking-[0.2em]' : 'font-serif font-bold text-[15px]'}`}>
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-[5px] h-[5px] rounded-full transition-colors duration-300 ${i === 2 ? 'bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'bg-white/20'}`} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default InspireReviews;
