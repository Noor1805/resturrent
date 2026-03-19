import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

const ScrollSequence = ({ isEntered }) => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const textContainerRef = useRef(null);
  
  // Images 1 to 6
  // Note: user mentioned image1 -> image6. 
  // image1 is the "closed door" used in IntroOverlay.
  // The scroll sequence usually starts *after* entering, or maybe includes image1 fading into image2?
  // User says "Phase 2... Images stack fullscreen... Transition Rules (for image2 -> image6)"
  // So likely the sequence starts with Image 2 visible? Or starts with Image 1 and transitions to 2?
  // "Phase 1... Show image1... On click... Animate transition into the experience... Immediately transition into scroll-driven sequence"
  // Let's assume the sequence manages Image 1 -> 6 for continuity, or starts at 2.
  // Given "Walking slowly deeper", starting at 1 (the door) and then 2 (entering) makes sense.
  // Let's include all images 1-6 in the stack.
  const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
    '/images/image6.png'
  ];

  useEffect(() => {
    if (!isEntered) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=9000", // Increased distance for slower progression
          scrub: 3.5, // Moderate scrub for control + smoothness
          pin: true,
          anticipatePin: 1,
        }
      });

      // Logic: "Smooth Blend" (Soft Dissolve)
      // We want images to melt into each other.
      // Top image zooms in slowly.
      // Fade out happens over a LONG duration (overlap), not a quick cut.
      
      const totalImages = images.length;
      
      // Initial State
      imagesRef.current.forEach((img, i) => {
         gsap.set(img, { 
             zIndex: totalImages - i, 
             opacity: 1, 
             scale: 1 
         });
      });

      const zoomScale = 1.6; // Comfortable immersive zoom
      const stepDuration = 8; // Longer step for slower pacing

      for (let i = 0; i < totalImages - 1; i++) {
        const img = imagesRef.current[i];
        const nextImg = imagesRef.current[i+1];
        
        // 1. Current Image Zooms In Smoothly
        tl.to(img, {
            scale: zoomScale, 
            duration: stepDuration,
            ease: "power1.inOut"
        });
        
        // 2. Slow Dissolve (Fade Out)
        // Starts halfway through and takes half the duration -> 50% Overlap
        tl.to(img, {
            opacity: 0,
            duration: stepDuration * 0.5, // Long slow fade
            ease: "none" // Linear fade for predictable blending
        }, `-=${stepDuration * 0.5}`); 

        if (nextImg) {
            // 3. Next Image pushes forward slightly to meet the incoming zoom
            tl.fromTo(nextImg, 
                { scale: 1 },
                { scale: 1.05, duration: stepDuration, ease: "none" },
                "<"
            );
        }
      }
      
      // Final Image
      tl.to(imagesRef.current[totalImages - 1], {
          scale: 1.2,
          duration: stepDuration,
          ease: "none"
      });

      // Text Reveal
      tl.call(animateText);

      // Spacer
      tl.to({}, { duration: 2 });
      
    }, containerRef);

    return () => ctx.revert();
  }, [isEntered]);

  const animateText = () => {
      // Independent Typography Reveal
      if (!textContainerRef.current) return;
      
      const titleChars = textContainerRef.current.querySelectorAll('.title-char');
      const subChars = textContainerRef.current.querySelectorAll('.sub-char');
      const tagline = textContainerRef.current.querySelector('.tagline');
      const ctas = textContainerRef.current.querySelectorAll('.cta-btn');

      const textTl = gsap.timeline();

      // Ensure initial states
      gsap.set([titleChars, subChars, tagline, ctas], { opacity: 0 });
      gsap.set(titleChars, { y: 60, rotateX: -20 });
      gsap.set(subChars, { y: 30 });
      gsap.set(tagline, { y: 20 });
      gsap.set(ctas, { scale: 0.9 });

      // 1. Title Reveal
      textTl.to(titleChars, {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out"
      });

      // 2. Subheading (New York)
      textTl.to(subChars, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.03,
        ease: "power3.out"
      }, "-=0.5");

      // 3. Tagline
      textTl.to(tagline, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
      }, "-=0.5");

      // 4. CTA Buttons
      textTl.to(ctas, {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out"
      }, "-=1");
  };

  // Helper to split text
  const splitText = (text, charClass) => {
    return text.split('').map((char, i) => (
      <span key={i} className={clsx("inline-block", charClass)} style={{ opacity: 0 }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Stacked Images 
          Rendered in normal order, but GSAP controls zIndex.
          We initialize them visible because we are doing a "reveal from top" strategy.
      */}
      {images.map((src, i) => (
        <div 
          key={i}
          ref={el => imagesRef.current[i] = el}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      ))}

      {/* Typography Overlay */}
      <div 
        ref={textContainerRef} 
        className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center pointer-events-none"
      >
         <div className="overflow-hidden mb-2">
            <h1 className="text-6xl md:text-9xl font-serif font-bold text-white tracking-tighter perspective-text">
                {splitText("OBSIDIAN", "title-char")}
            </h1>
         </div>
         
         <div className="overflow-hidden mb-8">
            <p className="text-xl md:text-2xl font-serif text-white/80 italic">
                {splitText("New York", "sub-char")}
            </p>
         </div>

         <div className="overflow-hidden mb-12">
            <p className="tagline text-sm md:text-lg text-gold-400 max-w-lg mx-auto font-light tracking-[0.3em] uppercase opacity-0">
                Where Shadow Meets Flavor.
            </p>
         </div>
         
         <div className="flex gap-6 pointer-events-auto">
            <button className="cta-btn px-8 py-3 border border-white/30 text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 opacity-0">
               Reserve
            </button>
            <button className="cta-btn px-8 py-3 bg-gold-500 text-black border border-gold-500 uppercase tracking-widest hover:bg-transparent hover:text-gold-500 transition-all duration-500 opacity-0">
               Experience
            </button>
         </div>
      </div>
    </div>
  );
};

export default ScrollSequence;
