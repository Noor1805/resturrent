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

  // ── Stop scroll while overlay is active ──────────────────────────────────
  useEffect(() => {
    if (lenis) { lenis.stop(); document.body.style.overflow = 'hidden'; }
    return () => {
      if (lenis) { lenis.start(); document.body.style.overflow = ''; }
    };
  }, [lenis]);

  // ── Scene 0: single clean logo fade-in ───────────────────────────────────
  useEffect(() => {
    gsap.set([curtainLeftRef.current, curtainRightRef.current], { xPercent: 0 });

    gsap.fromTo(logoRef.current,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.4 }
    );
    gsap.fromTo(hintRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.9, ease: 'power2.out', delay: 1.4 }
    );
  }, []);

  // ── On click: curtain splits ─────────────────────────────────────────────
  const handleEnter = useCallback(() => {
    if (entered) return;
    setEntered(true);

    gsap.killTweensOf([logoRef.current, hintRef.current]);
    const tl = gsap.timeline({
        onComplete: () => {
             // Let the parent know we're inside so it can take over
             // We delay the unmount slightly to ensure curtains are fully off-screen
             setTimeout(onEnter, 100);
        }
    });

    // Fade out scene-0 logo
    tl.to([logoRef.current, hintRef.current], {
      autoAlpha: 0, duration: 0.4, ease: 'power2.in',
    }, 0);

    // Curtain halves slide out
    tl.to(curtainLeftRef.current,  { xPercent: -100, duration: 1.6, ease: 'expo.inOut' }, 0.1);
    tl.to(curtainRightRef.current, { xPercent:  100, duration: 1.6, ease: 'expo.inOut' }, 0.1);

    // Fade out the whole container at the end for smooth handoff
    tl.to(containerRef.current, { autoAlpha: 0, duration: 0.5 }, 1.2);

  }, [entered, onEnter]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] select-none bg-transparent"
      style={{ cursor: 'pointer' }}
      onClick={handleEnter}
    >
      {/* ── Curtain: LEFT half ────────────────────────────────────── */}
      <div
        ref={curtainLeftRef}
        className="absolute inset-y-0 left-0 bg-black z-20"
        style={{ width: '50.5%' }} // Tiny overlap to prevent gap
      />
      {/* ── Curtain: RIGHT half ───────────────────────────────────── */}
      <div
        ref={curtainRightRef}
        className="absolute inset-y-0 right-0 bg-black z-20"
        style={{ width: '50.5%' }}
      />

      {/* ── SCENE 0: Minimal dark logo ────────────────────────────── */}
      <div
        ref={logoRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-30 pointer-events-none"
        style={{ opacity: 0 }}
      >
        <div className="w-px h-12 bg-white/10" />
        <p className="font-sans text-[9px] uppercase tracking-[0.7em] text-white/30">
          Est. 2018 · New York
        </p>
        <h1 className="font-serif text-[clamp(3.5rem,10vw,8.5rem)] text-white leading-none tracking-tight uppercase">
          OBSIDIAN
        </h1>
        <p className="font-sans text-[9px] uppercase tracking-[0.7em] text-white/30">
          Fine Dining · Private Events
        </p>
        <div className="w-px h-12 bg-white/10" />
      </div>

      {/* ── Click hint ────────────────────────────────────────────── */}
      {!entered && (
        <div
          ref={hintRef}
          className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.6em] text-white/35">
            Click to enter
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent mt-2" />
        </div>
      )}
    </div>
  );
};

export default IntroOverlay;
