import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { useLenis } from '../common/SmoothScroll';
import restaurantBg from '../../assets/Images/restaurant-bg.jpg';

const IntroOverlay = ({ onEnter }) => {
  const [entered, setEntered] = useState(false);
  const lenis = useLenis();

  const containerRef    = useRef(null);
  const logoRef         = useRef(null);
  const hintRef         = useRef(null);

  // Curtain panels
  const curtainLeftRef  = useRef(null);
  const curtainRightRef = useRef(null);

  // Post-curtain elements
  const bgRef           = useRef(null);
  const overlayRef      = useRef(null);
  const navbarRef       = useRef(null);
  const contentRef      = useRef(null);
  const eyebrowRef      = useRef(null);
  const headlineRef     = useRef(null);
  const subheadRef      = useRef(null);
  const ctaRef          = useRef(null);
  const scrollHintRef   = useRef(null);

  // ── Stop scroll while overlay is active ──────────────────────────────────
  useEffect(() => {
    if (lenis) { lenis.stop(); document.body.style.overflow = 'hidden'; }
    return () => {
      if (lenis) { lenis.start(); document.body.style.overflow = ''; }
    };
  }, [lenis]);

  // ── Scene 0: single clean logo fade-in ───────────────────────────────────
  useEffect(() => {
    gsap.set([
      bgRef.current, overlayRef.current, navbarRef.current,
      eyebrowRef.current, subheadRef.current, scrollHintRef.current,
    ], { autoAlpha: 0 });

    gsap.fromTo(logoRef.current,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.4 }
    );
    gsap.fromTo(hintRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.9, ease: 'power2.out', delay: 1.4 }
    );
  }, []);

  // ── On click: curtain splits → bg reveals → content cascades ─────────────
  const handleEnter = useCallback(() => {
    if (entered) return;
    setEntered(true);

    gsap.killTweensOf([logoRef.current, hintRef.current]);
    const tl = gsap.timeline();

    // Fade out scene-0 logo
    tl.to([logoRef.current, hintRef.current], {
      autoAlpha: 0, duration: 0.35, ease: 'power2.in',
    }, 0);

    // Show BG underneath
    tl.set(bgRef.current, { autoAlpha: 1 }, 0.1);

    // Curtain halves slide out
    tl.to(curtainLeftRef.current,  { xPercent: -100, duration: 1.4, ease: 'expo.inOut' }, 0.15);
    tl.to(curtainRightRef.current, { xPercent:  100, duration: 1.4, ease: 'expo.inOut' }, 0.15);

    // Dark gradient overlay
    tl.to(overlayRef.current, { autoAlpha: 1, duration: 0.9, ease: 'power2.out' }, 0.8);

    // Navbar slides in from top
    tl.fromTo(navbarRef.current,
      { autoAlpha: 0, y: -20 },
      { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      1.2
    );

    // Headline chars (OBSIDIAN is first)
    tl.fromTo(
      headlineRef.current.querySelectorAll('.c'),
      { autoAlpha: 0, y: 55, rotateX: -18 },
      { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.95, stagger: 0.04, ease: 'power4.out' },
      1.35
    );

    // Eyebrow (New York)
    tl.fromTo(eyebrowRef.current,
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      2.1
    );

    // Subheading (Tagline)
    tl.fromTo(subheadRef.current,
      { autoAlpha: 0, y: 12 },
      { autoAlpha: 1, y: 0, duration: 0.75, ease: 'power3.out' },
      2.3
    );

    // CTA buttons
    tl.fromTo(
      ctaRef.current.querySelectorAll('button'),
      { autoAlpha: 0, y: 14 },
      { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.13, ease: 'power2.out' },
      2.65
    );

    // Scroll hint
    tl.fromTo(scrollHintRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.6 },
      3.2
    );
  }, [entered]);

  // ── Exit (Scroll or Background Click) ──────────────────────────────────────
  const handleExit = useCallback(() => {
    if (lenis) { lenis.start(); document.body.style.overflow = ''; }
    gsap.to(containerRef.current, {
      autoAlpha: 0, duration: 1.1, ease: 'power2.inOut', onComplete: onEnter,
    });
  }, [lenis, onEnter]);

  // ── Listen for scroll intent ──────────────────────────────────────────────
  useEffect(() => {
    if (!entered) return;

    const onScrollIntent = (e) => {
      // Ignore very small scrolls
      if (Math.abs(e.deltaY) > 10) {
        handleExit();
      }
    };

    window.addEventListener('wheel', onScrollIntent);
    window.addEventListener('touchmove', onScrollIntent);
    return () => {
      window.removeEventListener('wheel', onScrollIntent);
      window.removeEventListener('touchmove', onScrollIntent);
    };
  }, [entered, handleExit]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] select-none"
      style={{ cursor: 'pointer' }}
      onClick={!entered ? handleEnter : handleExit}
    >

      {/* ── Full-screen background photo ──────────────────────────── */}
      <div ref={bgRef} className="absolute inset-0" style={{ opacity: 0 }}>
        <img
          src={restaurantBg}
          alt="OBSIDIAN Restaurant"
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* Cinematic dark gradient */}
        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.60) 100%)',
            opacity: 0,
          }}
        />
      </div>

      {/* ── Curtain: LEFT half ────────────────────────────────────── */}
      <div
        ref={curtainLeftRef}
        className="absolute inset-y-0 left-0 bg-black z-20"
        style={{ width: '50%' }}
      />
      {/* ── Curtain: RIGHT half ───────────────────────────────────── */}
      <div
        ref={curtainRightRef}
        className="absolute inset-y-0 right-0 bg-black z-20"
        style={{ width: '50%' }}
      />

      {/* ── SCENE 0: Minimal dark logo ────────────────────────────── */}
      <div
        ref={logoRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-30 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <div className="w-px h-12 bg-white/12" />
        <p className="font-sans text-[9px] uppercase tracking-[0.7em] text-white/30">
          Est. 2018 · New York
        </p>
        <h1 className="font-serif text-[clamp(3rem,10vw,8rem)] text-white leading-none tracking-tight uppercase">
          OBSIDIAN
        </h1>
        <p className="font-sans text-[9px] uppercase tracking-[0.7em] text-white/30">
          Fine Dining · Private Events
        </p>
        <div className="w-px h-12 bg-white/12" />
      </div>

      {/* ── Click hint ────────────────────────────────────────────── */}
      {!entered && (
        <div
          ref={hintRef}
          className="absolute bottom-[7vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.5em] text-white/40">
            Click anywhere to enter
          </span>
          <svg width="13" height="20" viewBox="0 0 13 20" fill="none">
            <line x1="6.5" y1="0" x2="6.5" y2="16" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
            <polyline points="1,11 6.5,17 12,11" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      )}

      {/* ── SCENE 1: Centered heading + CTA over background ──────── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none px-4">

        {/* Main headline – char-by-char stagger */}
        <div
          ref={headlineRef}
          style={{ perspective: '800px', opacity: 1 }}
        >
          <div className="flex justify-center">
            {'OBSIDIAN'.split('').map((char, i) => (
              <span
                key={i}
                className="c font-serif text-[clamp(3.5rem,10vw,9rem)] text-white leading-none tracking-tight uppercase inline-block"
                style={{ opacity: 0, transformStyle: 'preserve-3d' }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Eyebrow / location pill */}
        <p
          ref={eyebrowRef}
          className="font-sans text-[10px] uppercase tracking-[0.6em] text-white/55 mt-2"
          style={{ opacity: 0 }}
        >
          New York
        </p>

        {/* Subheading / tagline */}
        <p
          ref={subheadRef}
          className="font-serif text-[clamp(1.1rem,2.5vw,1.6rem)] text-white/80 mt-6 mb-9 tracking-wide"
          style={{ opacity: 0 }}
        >
          Where Shadow Meets Flavor
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-wrap gap-4 justify-center pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/35 text-white text-[11px] tracking-[0.22em] uppercase hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300"
            style={{ opacity: 0 }}
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
          >
            Reserve
          </button>
          <button
            className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/35 text-white text-[11px] tracking-[0.22em] uppercase hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300"
            style={{ opacity: 0 }}
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
          >
            Experience
          </button>
        </div>
      </div>

      {/* ── Scroll hint ───────────────────────────────────────────── */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-[6vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <span className="font-sans text-[8px] uppercase tracking-[0.5em] text-white/35">
          Scroll to explore
        </span>
        <svg width="13" height="20" viewBox="0 0 13 20" fill="none">
          <line x1="6.5" y1="0" x2="6.5" y2="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <polyline points="1,11 6.5,17 12,11" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none"/>
        </svg>
      </div>

    </div>
  );
};

export default IntroOverlay;
