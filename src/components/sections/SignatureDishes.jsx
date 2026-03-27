import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    id: 1,
    name: "Truffle Caviar Pasta",
    desc: "Handmade linguine, aged parmesan, fresh black truffle shavings and premium sturgeon caviar.",
    price: "$85",
    img: "/images/dish1.png",
    align: "left"
  },
  {
    id: 2,
    name: "Wagyu Tomahawk",
    desc: "A5 Grade Wagyu, smoked sea salt, rosemary infusion, and 24k gold leaf finishing.",
    price: "$210",
    img: "/images/dish2.png",
    align: "right"
  },
  {
    id: 3,
    name: "Gold Leaf Lobster",
    desc: "Butter-poached lobster tail wrapped in 24k edible gold with micro-greens and saffron emulsion.",
    price: "$150",
    img: "/images/dish3.png",
    align: "left"
  }
];

const SignatureDishes = () => {
  const containerRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const dishRefs = useRef([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Title Animation
      gsap.from(sectionTitleRef.current, {
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      // Dishes Animation
      dishRefs.current.forEach((el, index) => {
        const isLeft = dishes[index].align === 'left';
        
        const img = el.querySelector('.dish-img');
        const content = el.querySelector('.dish-content');
        const bgText = el.querySelector('.bg-text');

        // Image Parallax & Reveal
        gsap.fromTo(img, 
          { 
            y: 100, 
            opacity: 0,
            scale: 0.8,
            rotate: isLeft ? -5 : 5
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 20%",
              scrub: 1
            }
          }
        );

        // Content Reveal
        gsap.fromTo(content,
          { x: isLeft ? 100 : -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Background Text Parallax
        if (bgText) {
          gsap.to(bgText, {
            y: -200,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="signature-dishes" ref={containerRef} className="relative w-full bg-black py-40 overflow-hidden">
      
      {/* Background NYC / Ambient Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold-900/20 rounded-full blur-[180px]" />
         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neutral-900/40 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={sectionTitleRef} className="text-center mb-40">
          <p className="text-gold-500 font-light tracking-[0.5em] uppercase text-xs mb-6">
            The Culinary Masterpieces
          </p>
          <h2 className="text-6xl md:text-9xl font-serif text-white uppercase leading-none">
            Signature <span className="italic font-light text-white/40">Selection</span>
          </h2>
        </div>

        <div className="flex flex-col gap-40 md:gap-72">
          {dishes.map((dish, i) => (
            <div 
              key={dish.id} 
              ref={el => dishRefs.current[i] = el}
              className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 ${dish.align === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Giant Background Text */}
              <div className={`absolute top-1/2 -translate-y-1/2 ${dish.align === 'left' ? 'right-0' : 'left-0'} pointer-events-none z-0 opacity-[0.03] overflow-hidden hidden lg:block`}>
                 <h3 className="bg-text text-[25vw] font-serif font-bold uppercase whitespace-nowrap leading-none tracking-tighter">
                    {dish.name.split(' ')[0]}
                 </h3>
              </div>

              {/* Image Side */}
              <div className="relative w-full md:w-1/2 z-10">
                <div className="relative aspect-square max-w-xl mx-auto flex items-center justify-center">
                  {/* Glowing Aura */}
                  <div className="absolute inset-0 bg-gold-500/5 blur-[100px] rounded-full" />
                  
                  <img 
                    src={dish.img} 
                    alt={dish.name}
                    className="dish-img w-full h-full object-contain filter drop-shadow-[0_35px_35px_rgba(0,0,0,0.8)] z-10"
                  />
                  
                  {/* Decorative Circle */}
                  <div className="absolute inset-0 border border-gold-500/10 rounded-full scale-110 pointer-events-none" />
                </div>
              </div>

              {/* Text Side */}
              <div className="dish-content w-full md:w-1/3 z-10 text-center md:text-left">
                <p className="text-gold-500 font-serif text-2xl italic mb-4">{dish.price}</p>
                <h4 className="text-4xl md:text-6xl font-serif text-white mb-8 border-l-2 border-gold-500 pl-6 ml-[-2px]">
                  {dish.name}
                </h4>
                <p className="text-gray-400 font-light text-lg leading-relaxed mb-10 max-w-md mx-auto md:mx-0">
                  {dish.desc}
                </p>
                
                <button 
                   onClick={(e) => e.preventDefault()}
                   className="px-10 py-4 border border-gold-500/30 text-gold-500 uppercase tracking-widest text-[11px] hover:bg-gold-500 hover:text-black transition-all duration-500 group"
                >
                   Discover Flavors
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
