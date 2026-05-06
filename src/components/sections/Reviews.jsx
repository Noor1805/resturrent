import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS_DATA = [
  {
    id: 'media',
    type: 'media',
    img: '/images/image4.png', // Ambiance image
  },
  {
    id: 1,
    type: 'text',
    author: 'ANGELA',
    stars: 5,
    text: 'I had dinner at this incredible place yesterday and was delighted. The interior is magnificent, everything is very stylish and consistent. The staff is responsive and attentive. We will come back again and again.',
  },
  {
    id: 2,
    type: 'text',
    author: 'MARIA',
    stars: 4,
    text: "I really love this place, it's cozy, stylish, and most importantly, very tasty. I really like natural fruits and vegetables in dishes, as well as delicious cocktails and pasta.",
  },
  {
    id: 3,
    type: 'text',
    author: 'VOGUE',
    stars: 5,
    text: 'The sexiest dining room in Manhattan. The ambiance is as intoxicating as their signature Old Fashioned. A pure masterclass in luxury.',
  },
  {
    id: 4,
    type: 'text',
    author: 'MICHELIN GUIDE',
    stars: 5,
    text: 'Impeccable execution meets daring innovation. Obsidian has created a temple of gastronomy that demands absolute attention.',
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-white' : 'text-white/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
  const sectionRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const wrapper = scrollWrapperRef.current;
      if (!wrapper) return;

      // Calculate total scroll distance
      // We want to scroll horizontally by the width of the content minus the viewport width
      const getScrollAmount = () => {
        let wrapperWidth = wrapper.scrollWidth;
        return -(wrapperWidth - window.innerWidth + 100); // 100px buffer
      };

      // Create the horizontal scroll animation
      const tween = gsap.to(wrapper, {
        x: getScrollAmount,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        pinSpacing: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true, // Recalculate on resize
      });

      // Title entrance animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="relative z-20 w-full h-screen bg-[#080808] overflow-hidden flex flex-col justify-center border-t border-white/5"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-900/5 rounded-full blur-[200px]" />
      </div>

      {/* Header section (fixed position during scroll) */}
      <div ref={titleRef} className="container mx-auto px-6 lg:px-16 pt-24 pb-12 relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <p className="text-gold-500/70 font-serif italic text-lg tracking-[0.1em] mb-4">
            Learn more about
          </p>
          <div className="h-px w-24 bg-gold-500/50 mb-6" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white tracking-tight">
            What Our Visitors Say
          </h2>
        </div>
        
        {/* Decorative scroll arrows */}
        <div className="hidden md:flex items-center gap-4 mt-8 md:mt-0 opacity-50">
           <div className="w-12 h-px bg-white/50 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-l border-white/50 transform -rotate-45" />
           </div>
           <div className="w-12 h-px bg-white/50 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-white/50 transform rotate-45" />
           </div>
        </div>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div className="relative z-10 w-full overflow-hidden pb-24">
        <div
          ref={scrollWrapperRef}
          className="flex flex-nowrap items-stretch gap-6 px-6 lg:px-16 w-max"
        >
          {REVIEWS_DATA.map((item, index) => {
            if (item.type === 'media') {
              return (
                <div
                  key={index}
                  className="group relative w-[300px] md:w-[400px] lg:w-[450px] flex-shrink-0 rounded-sm overflow-hidden border border-white/10 cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt="Ambiance"
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white ml-2" />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="group relative w-[300px] md:w-[350px] lg:w-[400px] flex-shrink-0 bg-[#0d0d0d] p-8 md:p-10 border border-white/5 rounded-sm hover:border-gold-500/30 transition-colors duration-500 cursor-default flex flex-col justify-between"
              >
                {/* Subtle top gradient on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h4 className="text-white font-sans text-sm tracking-[0.2em] uppercase">
                      {item.author}
                    </h4>
                    <StarRating rating={item.stars} />
                  </div>
                  
                  <p className="text-white/60 font-sans text-sm leading-relaxed tracking-wide mt-6">
                    {item.text}
                  </p>
                </div>
                
                {/* Bottom decorative element */}
                <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-px bg-gold-500/40" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
