import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

/* ─── MENU DATA ──────────────────────────────────────────────────────────── */
const CATEGORIES = ['signatures', 'mains', 'desserts', 'cocktails'];

const MENU = {
  signatures: {
    label: "Chef's Signatures",
    number: '01',
    subtitle: 'The pinnacle of our craft — composed for those who seek the extraordinary.',
    items: [
      {
        id: 1,
        name: 'Truffle Caviar Pasta',
        desc: 'Creamy handmade pasta with black caviar, shaved truffle, parmesan dust, and herb oil.',
        price: '$120',
        img: '/asset/ChatGPT Image May 5, 2026, 09_50_18 PM-Photoroom.png',
      },
      {
        id: 2,
        name: 'Wagyu Tomahawk',
        desc: 'A5-style wagyu tomahawk with smoked sea salt, rosemary jus, roasted garlic, and gold-finished plating.',
        price: '$210',
        img: '/asset/ChatGPT Image May 6, 2026, 01_25_36 PM (1)-Photoroom.png',
      },
      {
        id: 3,
        name: 'Gold Leaf Lobster',
        desc: 'Butter-poached lobster tail with saffron cream, caviar, edible gold leaf, and citrus zest.',
        price: '$185',
        img: '/asset/ChatGPT Image May 6, 2026, 01_25_36 PM (4)-Photoroom.png',
      },
    ],
  },
  mains: {
    label: 'Mains',
    number: '02',
    subtitle: 'Masterfully composed plates — each one a study in restraint and intensity.',
    items: [
      {
        id: 4,
        name: 'Black Cod Miso',
        desc: 'Charcoal-glazed black cod with bok choy, sesame, yuzu glaze, and spring onion.',
        price: '$145',
        img: '/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (1)-Photoroom.png',
      },
      {
        id: 5,
        name: "Duck Breast à l'Orange",
        desc: 'Crispy duck breast with orange glaze, citrus segments, thyme, and golden sauce pearls.',
        price: '$150',
        img: '/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (2)-Photoroom.png',
      },
      {
        id: 6,
        name: 'Lamb Rack Royale',
        desc: 'Herb-crusted lamb rack with potato purée, red wine jus, rosemary salt, and micro herbs.',
        price: '$170',
        img: '/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (3)-Photoroom.png',
      },
    ],
  },
  desserts: {
    label: 'Desserts',
    number: '03',
    subtitle: 'Sweet conclusions — delicate, gilded, and worthy of the evening.',
    items: [
      {
        id: 7,
        name: 'Chocolate Gold Lava Cake',
        desc: 'Molten chocolate cake with vanilla ice cream, berries, cocoa dust, and edible gold.',
        price: '$65',
        img: '/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (4)-Photoroom.png',
      },
      {
        id: 8,
        name: 'Pistachio Rose Mille-Feuille',
        desc: 'Crisp pastry layers with pistachio cream, rose petals, powdered sugar, and gold flakes.',
        price: '$58',
        img: '/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (5)-Photoroom.png',
      },
      {
        id: 9,
        name: 'Vanilla Caviar Crème Brûlée',
        desc: 'Vanilla bean crème brûlée with caramelized sugar, golden pearls, and delicate sugar crystals.',
        price: '$55',
        img: '/asset/ChatGPT Image May 6, 2026, 01_25_36 PM (2)-Photoroom.png',
      },
    ],
  },
  cocktails: {
    label: 'Cocktails',
    number: '04',
    subtitle: 'Liquid poetry — each cocktail an extension of the Obsidian philosophy.',
    items: [
      {
        id: 10,
        name: 'Obsidian Old Fashioned',
        desc: 'A smoky amber old fashioned with orange peel, crystal ice sphere, bitters, and gold-rimmed glass.',
        price: '$42',
        img: '/asset/ChatGPT Image May 6, 2026, 01_25_36 PM (3)-Photoroom.png',
      },
      {
        id: 11,
        name: 'Vintage Negroni',
        desc: 'Deep red negroni with dried citrus, bitter orange, herbal finish, and gold cocktail pin.',
        price: '$38',
        img: '/asset/ChatGPT Image May 6, 2026, 01_21_55 PM-Photoroom.png',
      },
      {
        id: 12,
        name: 'Golden Martini',
        desc: 'Clear golden martini with lemon twist, olive, chilled glass, and refined botanical notes.',
        price: '$40',
        img: '/asset/ChatGPT Image May 6, 2026, 01_25_36 PM (1)-Photoroom.png',
      },
    ],
  },
};

/* ─── SIGNATURE DISH CARD (large, with image) ──────────────────────────── */
const SignatureCard = ({ item, index }) => {
  const isReversed = index % 2 !== 0;
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const el = cardRef.current;
    const img = imgRef.current;
    if (!el || !img) return;

    let localSpin, localFloat;

    let ctx = gsap.context(() => {
      // Card Container Animation
      gsap.fromTo(el,
        { y: 70, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.4, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );

      // Image entrance, landing upright (0°)
      const entryTl = gsap.timeline({
        paused: true,
        onComplete: () => {
          localSpin = gsap.fromTo(img,
            { rotation: -15 },
            {
              rotation: 15,
              duration: 20,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              transformOrigin: "50% 50%"
            }
          );
          localFloat = gsap.to(img, {
            y: "-=12",
            duration: 3.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          });
        }
      });

      entryTl.fromTo(img,
        { y: -80, opacity: 0, scale: 0.85, rotation: -25 },
        { y: 0, opacity: 1, scale: 1, rotation: 0, duration: 2.4, ease: "power3.out" }
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
    }, el);

    return () => {
      if (localSpin) localSpin.kill();
      if (localFloat) localFloat.kill();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
                  items-center gap-10 md:gap-20 py-16 border-b border-white/5 last:border-0`}
    >
      {/* Ghost number */}
      <span className="absolute top-4 right-4 font-serif text-[8rem] leading-none text-white/[0.03] select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Image side */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center py-6 md:py-8">
        <img
          ref={imgRef}
          src={item.img}
          alt={item.name}
          className="relative z-10 w-64 md:w-80 xl:w-96 h-auto object-contain
                     drop-shadow-[0_40px_80px_rgba(0,0,0,0.9)]
                     transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content side */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-8 bg-gold-500/50" />
          <span className="text-gold-500/70 font-serif italic text-xs tracking-[0.35em] uppercase">
            {String(index + 1).padStart(2, '0')} / Signature
          </span>
        </div>
        <h3 className="font-serif text-white text-3xl md:text-5xl uppercase tracking-tight leading-none mb-5
                       group-hover:text-amber-50 transition-colors duration-500">
          {item.name}
        </h3>
        <p className="text-white/40 font-sans text-sm md:text-base leading-relaxed mb-8 max-w-sm tracking-wide">
          {item.desc}
        </p>
        <div className="flex items-center gap-6">
          <span className="font-serif text-gold-400 text-2xl tracking-wide">{item.price}</span>
          <button className="group/btn relative px-8 py-3 border border-white/15 text-white text-[9px]
                             uppercase tracking-[0.4em] overflow-hidden transition-all duration-500
                             hover:border-gold-500/50">
            <span className="relative z-10">Order Dish</span>
            <div className="absolute inset-0 bg-gold-950/70 scale-x-0 group-hover/btn:scale-x-100
                            origin-left transition-transform duration-600 ease-out" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ─── REFINED MENU ROW (mains / desserts / cocktails) ──────────────────── */
const MenuRow = ({ item, index, total }) => {
  const rowRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useLayoutEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    gsap.fromTo(el,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.1, ease: 'expo.out',
        delay: index * 0.10,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
      },
    );
  }, []);

  return (
    <div
      ref={rowRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex items-center justify-between gap-6 py-7
                  border-b transition-all duration-300 cursor-default
                  ${hovered ? 'border-gold-500/20' : 'border-white/5'}`}
    >
      {/* Index */}
      <span className={`font-serif italic text-xs tracking-[0.3em] flex-shrink-0 w-8 transition-colors duration-400
                        ${hovered ? 'text-white' : 'text-white/15'}`}>
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Image Thumbnail */}
      {item.img && (
        <div className="hidden md:flex w-24 h-24 items-center justify-center flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
           <img
             src={item.img}
             alt={item.name}
             className="max-w-full max-h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-500"
           />
        </div>
      )}

      {/* Name + desc */}
      <div className="flex-1 min-w-0">
        <h4 className={`font-serif uppercase tracking-wide leading-none text-lg md:text-2xl mb-1
                        transition-colors duration-400
                        ${hovered ? 'text-amber-50' : 'text-white'}`}>
          {item.name}
        </h4>
        <p className={`font-sans text-xs md:text-sm leading-relaxed max-w-lg tracking-wide
                       transition-all duration-400
                       ${hovered ? 'text-white/50 max-h-20' : 'text-white/25 max-h-0 overflow-hidden md:max-h-20 md:text-white/30'}`}>
          {item.desc}
        </p>
      </div>

      {/* Dot line */}
      <div className="hidden lg:flex flex-1 items-center mx-4">
        <div className={`h-px flex-1 transition-all duration-500 ${hovered ? 'bg-gold-500/30' : 'bg-white/5'}`} />
      </div>

      {/* Price */}
      <span className={`font-serif text-lg md:text-xl flex-shrink-0 transition-colors duration-300
                        ${hovered ? 'text-gold-400' : 'text-white/60'}`}>
        {item.price}
      </span>
    </div>
  );
};

/* ─── MENU SECTION WRAPPER ───────────────────────────────────────────────── */
const MenuSection = ({ category }) => {
  const data = MENU[category];
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isSignatures = category === 'signatures';

  useLayoutEffect(() => {
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.6, ease: 'expo.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      },
    );
  }, []);

  return (
    <section
      id={`menu-${category}`}
      ref={sectionRef}
      className="relative w-full py-24 md:py-36"
    >
      {/* Section header */}
      <div ref={titleRef} className="container mx-auto px-6 lg:px-16 mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px w-10 bg-gold-500/50" />
          <span className="text-gold-500/60 font-serif italic text-xs tracking-[0.4em] uppercase">
            {data.number}
          </span>
        </div>
        <div className="relative">
          {/* Ghost section number */}
          <span className="absolute -top-8 -left-4 font-serif text-[10rem] leading-none
                           text-white/[0.03] select-none pointer-events-none hidden lg:block">
            {data.number}
          </span>
          <h2 className="font-serif text-white uppercase text-4xl md:text-6xl xl:text-8xl
                         tracking-tight leading-none mb-4 relative z-10">
            {data.label}
          </h2>
        </div>
        <p className="text-white/30 font-sans text-sm md:text-base max-w-xl leading-relaxed tracking-wide mt-4">
          {data.subtitle}
        </p>
      </div>

      {/* Thin gold rule */}
      <div className="container mx-auto px-6 lg:px-16 mb-12">
        <div className="h-px w-full" style={{ background: 'linear-gradient(to right, rgba(212,175,55,0.3), transparent)' }} />
      </div>

      {/* Items */}
      <div className="container mx-auto px-6 lg:px-16">
        {isSignatures ? (
          <div>
            {data.items.map((item, i) => (
              <SignatureCard key={item.id} item={item} index={i} />
            ))}
          </div>
        ) : (
          <div>
            {data.items.map((item, i) => (
              <MenuRow key={item.id} item={item} index={i} total={data.items.length} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

/* ─── MAIN MENU PAGE ─────────────────────────────────────────────────────── */
const Menu = () => {
  const [activeTab, setActiveTab] = useState('signatures');
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1); // e.g. menu-signatures
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (hash.startsWith('menu-')) {
            setActiveTab(hash.replace('menu-', ''));
          }
        }, 300); // Slight delay to ensure DOM is ready
      }
    } else {
      // Guarantee that if there is no hash, the user lands at the very top (Hero section)
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title letter reveal
      gsap.from('.hero-letter', {
        y: 60,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 1.2,
        stagger: 0.06,
        ease: 'expo.out',
        delay: 0.2,
      });
      gsap.from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        delay: 0.9,
      });

      // Hero Image Entrance + Float + Spin
      const heroImg = document.querySelector('.hero-img');
      if (heroImg) {
         gsap.fromTo(heroImg, 
            { y: -80, opacity: 0, scale: 0.85, rotation: -25 },
            { 
              y: 0, opacity: 1, scale: 1, rotation: 0, 
              duration: 2.4, ease: 'power3.out', delay: 0.5,
              onComplete: () => {
                gsap.fromTo(heroImg, { rotation: -15 }, { rotation: 15, duration: 20, ease: 'sine.inOut', yoyo: true, repeat: -1, transformOrigin: '50% 50%' });
                gsap.to(heroImg, { y: "-=12", duration: 3.5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
              }
            }
         );
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (cat) => {
    setActiveTab(cat);
    const el = document.getElementById(`menu-${cat}`);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 w-[700px] h-[700px] rounded-full blur-[250px]"
            style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px]"
            style={{ background: 'radial-gradient(circle, rgba(180,120,20,0.05) 0%, transparent 70%)' }} />
        </div>

        {/* Background texture pattern */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px), repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(255,255,255,0.5) 80px, rgba(255,255,255,0.5) 81px)',
          }} />

        <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

            {/* Left: text */}
            <div>
              {/* Gold tag */}
              <div className="hero-sub flex items-center gap-3 mb-10">
                <div className="h-px w-10 bg-gold-500/60" />
                <span className="text-gold-500/70 font-serif italic text-xs tracking-[0.5em] uppercase">
                  Obsidian Signature Dining
                </span>
              </div>

              {/* Giant MENU title */}
              <div className="overflow-hidden mb-6">
                <h1 className="font-serif uppercase text-white leading-none tracking-tight text-[5rem] md:text-[9rem] xl:text-[11rem]">
                  {'Menu'.split('').map((l, i) => (
                    <span key={i} className="hero-letter inline-block">{l}</span>
                  ))}
                </h1>
              </div>

              <p className="hero-sub text-white/35 font-sans text-base md:text-lg leading-relaxed
                            max-w-md tracking-wide mb-12 font-light italic">
                "A curated journey of fire, gold, caviar, smoke, and elegance."
              </p>

              {/* Scroll hint */}
              <div className="hero-sub flex items-center gap-4">
                <div className="h-px w-16 bg-white/15" />
                <span className="text-white/25 text-[10px] uppercase tracking-[0.4em] font-sans">
                  Scroll to explore
                </span>
              </div>
            </div>

            {/* Right: floating hero dish image */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full blur-[120px]"
                style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 65%)' }} />
              <img
                className="hero-img relative z-10 w-full max-w-lg object-contain
                           drop-shadow-[0_60px_100px_rgba(0,0,0,0.95)]"
                src="/asset/ChatGPT Image May 6, 2026, 01_25_36 PM (1)-Photoroom.png"
                alt="Signature Dish"
              />
              {/* Corner accent */}
              <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-gold-500/30 pointer-events-none" />
              <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-gold-500/30 pointer-events-none" />
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ── STICKY CATEGORY NAV ──────────────────────────────────────────── */}
      <div className="sticky top-[60px] z-40 bg-black/90 backdrop-blur-md border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => scrollToSection(cat)}
                  className={`relative px-6 md:px-10 py-5 text-[10px] uppercase tracking-[0.35em] font-sans
                              whitespace-nowrap transition-all duration-300 flex-shrink-0
                              ${isActive ? 'text-gold-400' : 'text-white/35 hover:text-white/70'}`}
                >
                  {MENU[cat].label}
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold-500"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── MENU SECTIONS ────────────────────────────────────────────────── */}
      <div className="relative">
        {/* Subtle vertical gold line */}
        <div className="absolute left-[50%] top-0 bottom-0 w-px pointer-events-none hidden xl:block"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.04), transparent)' }} />

        {CATEGORIES.map((cat) => (
          <div key={cat}>
            <MenuSection category={cat} />
            {cat !== 'cocktails' && (
              <div className="container mx-auto px-6 lg:px-16">
                <div className="h-px w-full bg-white/[0.04]" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── HIGH-END RESERVATION CTA (REDESIGNED IMMERSIVE) ───────────────── */}
      <section className="relative w-full py-40 md:py-60 flex items-center justify-center overflow-hidden border-t border-white/5">
        
        {/* Full-bleed Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="/asset/our story/image 1.png" 
            alt="Obsidian Atmosphere" 
            className="w-full h-[120%] -top-[10%] relative object-cover filter brightness-[0.35] contrast-[1.2]"
            onError={(e) => { e.target.src = '/asset/restaurant-bg.jpg' }}
          />
          {/* Gradients for smooth blending into the page */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-[#d4af37]/60" />
            <span className="text-[#d4af37] font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase">
              Join the Experience
            </span>
            <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-[#d4af37]/60" />
          </div>

          <h2 className="font-serif text-white uppercase text-5xl md:text-7xl lg:text-[7rem] tracking-tight leading-[0.9] mb-6 drop-shadow-2xl">
            Reserve <br />
            <span className="italic text-[#d4af37] font-light lowercase text-6xl md:text-8xl lg:text-[8rem]">a table</span>
          </h2>

          <p className="text-white/50 font-sans text-sm md:text-base leading-relaxed max-w-lg mx-auto tracking-widest uppercase font-light mb-14 drop-shadow-md">
            Step out of the ordinary. Immerse yourself in culinary excellence.
          </p>

          <button 
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                window.location.href = '/reservations';
              }, 300);
            }}
            className="group relative px-14 py-5 border border-[#d4af37]/50 bg-black/30 backdrop-blur-md text-[#d4af37] uppercase tracking-[0.3em] text-[11px] md:text-xs font-bold overflow-hidden transition-all duration-700 hover:border-[#d4af37] active:scale-[0.95] hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Book Your Evening</span>
            <div className="absolute inset-0 bg-[#d4af37] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-out" />
          </button>

        </div>
      </section>

      {/* ── GLOBAL LUXURY FOOTER ─────────────────────────────────────────── */}
      <Footer />

    </div>
  );
};

export default Menu;
