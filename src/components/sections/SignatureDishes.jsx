import React, { useLayoutEffect, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    id: 1,
    name: "Truffle Caviar Pasta",
    desc: "Handmade linguine, aged parmesan, fresh black truffle shavings and premium sturgeon caviar.",
    price: "$85",
    img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1778055106/ChatGPT_Image_May_5_2026_09_50_18_PM-Photoroom_og2hx2.png",
    align: "left"
  },
  {
    id: 2,
    name: "Chocolate Gold Lava Cake",
    desc: "Molten Valrhona chocolate cake with vanilla bean gelato, forest berries, and 24k gold leaf.",
    price: "$65",
    img: "/asset/our story/ChatGPT Image May 6, 2026, 05_35_50 PM-Photoroom.png",
    align: "right"
  },
  {
    id: 3,
    name: "Gold Leaf Lobster",
    desc: "Butter-poached lobster tail wrapped in 24k edible gold with micro-greens and saffron emulsion.",
    price: "$150",
    img: "https://res.cloudinary.com/dicb5gkab/image/upload/v1778055101/ChatGPT_Image_May_6_2026_01_25_36_PM_4_-Photoroom_wy0w0p.png",
    align: "left"
  }
];

const SignatureDishes = ({ isEntered }) => {
  const containerRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const headingRef = useRef(null);
  const dishRefs = useRef([]);

  // Devacia-style scroll reveal for "Chef's" — characters go white/30 → gold
  const chefChars = "Chef's".split("");
  const [activeCharIndex, setActiveCharIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current) return;
      const { top, height } = headingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = (windowHeight / 1.3 - top) / (height + windowHeight / 3);
      const clamped = Math.max(0, Math.min(1, scrollProgress));
      setActiveCharIndex(Math.floor(clamped * chefChars.length));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [chefChars.length]);

  // Refresh ScrollTrigger when layout is fully established (after Hero appears)
  useEffect(() => {
    if (isEntered) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [isEntered]);

  useLayoutEffect(() => {
    // Track all infinite loops so we can kill them if needed
    const spinLoops = [];
    const floatLoops = [];

    let ctx = gsap.context(() => {
      // Title Block Entrance Animation
      gsap.from(sectionTitleRef.current, {
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 80,
        opacity: 0,
        duration: 2,
        ease: "power4.out"
      });

      // Dishes Animation
      dishRefs.current.forEach((el, index) => {
        if (!el) return;
        const isLeft = dishes[index].align === 'left';

        const img = el.querySelector('.dish-img');
        const content = el.querySelector('.dish-content');
        const bgNum = el.querySelector('.bg-number');

        if (!img) return;

        let localSpin, localFloat;

        // ─── Step 1: Entry from top, landing upright (0°) ───────────────
        const entryTl = gsap.timeline({
          paused: true,
          onComplete: () => {
            // ─── Step 2: Slow pendulum spin (left to right) ───
            localSpin = gsap.fromTo(img,
              { rotation: -15 },
              {
                rotation: 15,
                duration: 20,          // very slow, elegant sweep
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                transformOrigin: "50% 50%"
              }
            );
            spinLoops.push(localSpin);

            // ─── Step 3: Subtle floating up/down ────────────────────────
            localFloat = gsap.to(img, {
              y: "-=12",
              duration: 3.5,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1
            });
            floatLoops.push(localFloat);
          }
        });

        entryTl
          .fromTo(img,
            {
              y: -80,                // comes from top
              opacity: 0,
              scale: 0.85,
              rotation: -25          // start slightly tilted left
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,           // smoothly lands perfectly upright (0 degrees)
              duration: 2.4,
              ease: "power3.out"
            }
          );

        ScrollTrigger.create({
          trigger: el,
          start: "top 82%",
          onEnter: () => entryTl.play(),
          onLeaveBack: () => {
            if (localSpin) localSpin.kill();
            if (localFloat) localFloat.kill();
            entryTl.reverse();
          }
        });

        // ─── Content Reveal ────────────────────────────────────────────────
        gsap.fromTo(content,
          { x: isLeft ? 70 : -70, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 65%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // ─── Background Number Parallax ───────────────────────────────────
        if (bgNum) {
          gsap.to(bgNum, {
            y: -150,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          });
        }

        // ─── Typewriter Reveal ────────────────────────────────────────────
        const words = el.querySelectorAll('.typewriter-word');
        gsap.fromTo(words,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.01,
            stagger: 0.03,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => {
      spinLoops.forEach(t => t.kill());
      floatLoops.forEach(t => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section id="signature-dishes" ref={containerRef} className="relative w-full bg-black py-40 overflow-hidden select-none">

      {/* Background NYC / Ambient Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gold-900/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-neutral-900/30 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={sectionTitleRef} className="text-center mb-56">
          <p className="text-gold-500/60 font-serif text-sm italic tracking-[0.2em] mb-4">
            Curated Artisanal Cuisine
          </p>
          <h2 ref={headingRef} className="text-5xl md:text-[7rem] font-serif uppercase leading-[0.9] tracking-tight">
            <span className="inline-block whitespace-nowrap">
              {chefChars.map((char, idx) => (
                <span
                  key={idx}
                  className={`inline-block transition-colors duration-500 ease-out ${idx < activeCharIndex ? 'text-gold-500' : 'text-white/30'
                    }`}
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="italic font-light text-white ml-4">
              Signatures
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-64 md:gap-96">
          {dishes.map((dish, i) => (
            <div
              key={dish.id}
              ref={el => dishRefs.current[i] = el}
              className={`relative flex flex-col md:flex-row items-center gap-16 md:gap-32 ${dish.align === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Elegant Luxury Numbering */}
              <div className={`bg-number absolute top-[-10%] ${dish.align === 'left' ? 'left-[-5%]' : 'right-[-5%]'} pointer-events-none z-0 opacity-[0.07]`}>
                <span className="text-[25vw] md:text-[20vw] font-serif font-extralight text-white leading-none">
                  0{i + 1}
                </span>
              </div>

              {/* Image Side - Cinematic Framing */}
              <div className="relative w-full md:w-1/2 z-10">
                <div className="relative aspect-square max-w-xl mx-auto flex items-center justify-center">
                  {/* Luxury Glow */}
                  <div className="absolute left-1/2 top-1/2 h-[12rem] w-[12rem] md:h-[15rem] md:w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/6 blur-[90px]" />

                  <div className="relative w-full h-full p-8">
                    <img
                      src={dish.img}
                      alt={dish.name}
                      className="dish-img w-full h-full object-contain filter drop-shadow-[0_40px_60px_rgba(0,0,0,0.95)] z-10"
                    />
                  </div>
                </div>
              </div>

              {/* Text Side - Tailored Typography */}
              <div className="dish-content w-full md:w-1/3 z-10 text-center md:text-left">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="h-px w-8 bg-gold-500/40" />
                  <p className="text-gold-500 font-serif text-2xl italic tracking-wide">{dish.price}</p>
                </div>

                <h4 className="text-4xl md:text-7xl font-serif text-white mb-10 tracking-tight leading-[1] font-medium">
                  {dish.name}
                </h4>

                <p className="text-white font-light text-lg md:text-xl leading-relaxed mb-12 max-w-sm mx-auto md:mx-0 font-sans tracking-wide">
                  {dish.desc.split(" ").map((word, idx) => (
                    <span key={idx} className="typewriter-word inline-block mr-[0.25em]">{word}</span>
                  ))}
                </p>

                <motion.a
                  href="/menu#menu-signatures"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-block text-center group relative px-14 py-4.5 bg-transparent border border-white/20 text-white uppercase tracking-[0.4em] text-[9px] transition-all duration-700 font-light overflow-hidden hover:border-gold-500/50"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500">Discover Dish</span>
                  <div className="absolute inset-0 bg-gold-950/80 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-500/30" />
                </motion.a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
