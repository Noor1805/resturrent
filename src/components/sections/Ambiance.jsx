import React, { useLayoutEffect, useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────────────────────────────────────
   GRID LAYOUT (4 cols × 2 rows)
   ┌───────────┬───────────┬───────────┬───────────┐
   │  MODEL    │  FOOD IMG │ TEXT CARD │  FOOD IMG │  row 1
   │  (tall    ├───────────┼───────────┼───────────┤
   │  2 rows)  │ TEXT CARD │  FOOD IMG │  MODEL    │  row 2
   └───────────┴───────────┴───────────┴───────────┘
───────────────────────────────────────────────────────────────────────────── */

/* ─── 3D TILT MICRO-INTERACTION ─────────────────────────────────────────── */
function attachTilt(el) {
  if (!el) return () => {};

  const onMove = (e) => {
    const rect = el.getBoundingClientRect();
    const dx   = (e.clientX - rect.left) / rect.width  - 0.5;
    const dy   = (e.clientY - rect.top)  / rect.height - 0.5;
    gsap.to(el, {
      rotateY: dx * 9,
      rotateX: -dy * 9,
      transformPerspective: 800,
      duration: 0.45,
      ease: 'power2.out',
    });
    const shine = el.querySelector('.card-shine');
    if (shine) {
      gsap.to(shine, {
        opacity: 0.04 + Math.hypot(dx, dy) * 0.14,
        backgroundPositionX: `${50 + dx * 40}%`,
        backgroundPositionY: `${50 + dy * 40}%`,
        duration: 0.45,
      });
    }
  };

  const onLeave = () => {
    gsap.to(el, {
      rotateY: 0, rotateX: 0,
      duration: 0.9,
      ease: 'elastic.out(1, 0.4)',
    });
    const shine = el.querySelector('.card-shine');
    if (shine) gsap.to(shine, { opacity: 0, duration: 0.6 });
  };

  el.addEventListener('mousemove', onMove);
  el.addEventListener('mouseleave', onLeave);
  return () => {
    el.removeEventListener('mousemove', onMove);
    el.removeEventListener('mouseleave', onLeave);
  };
}

/* ─── IMAGE CARD ─────────────────────────────────────────────────────────── */
const ImageCard = React.forwardRef(({ src, label, tag, gridArea }, ref) => (
  <div
    ref={ref}
    data-cardtype="img"
    className="group relative overflow-hidden cursor-pointer"
    style={{
      gridArea,
      border: '1px solid rgba(255,255,255,0.05)',
      transformStyle: 'preserve-3d',
      willChange: 'transform',
    }}
  >
    {/* ── image ── */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt={label}
        className="gallery-img w-full h-full object-cover scale-[1.07]
                   transition-transform duration-[1100ms] ease-out group-hover:scale-[1.14]"
      />
    </div>

    {/* ── gradient ── */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/25 z-10" />

    {/* ── gold shimmer (mouse-tracked) ── */}
    <div
      className="card-shine absolute inset-0 z-20 pointer-events-none opacity-0"
      style={{
        background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(212,175,55,0.28) 0%, transparent 70%)',
        backgroundSize: '200% 200%',
      }}
    />

    {/* ── top-left corner bracket ── */}
    <div className="absolute top-5 left-5 z-30" style={{ width: 24, height: 24 }}>
      <div className="absolute top-0 left-0 h-px bg-amber-400/50 w-0 group-hover:w-full transition-all duration-500" />
      <div className="absolute top-0 left-0 w-px bg-amber-400/50 h-0 group-hover:h-full transition-all duration-500" />
    </div>

    {/* ── tag ── */}
    <span className="absolute top-5 right-5 z-30 font-serif italic text-[11px]
                     text-white/20 tracking-[0.3em] group-hover:text-amber-400/50
                     transition-colors duration-500">
      {tag}
    </span>

    {/* ── bottom label ── */}
    <div className="absolute bottom-0 left-0 right-0 p-5 z-30">
      <div className="h-px bg-amber-500/40 mb-3 w-6 group-hover:w-12 transition-all duration-700" />
      <p className="text-white font-serif uppercase tracking-[0.18em] text-sm leading-none">
        {label}
      </p>
      <div className="flex items-center gap-2 mt-2 opacity-0 translate-y-2
                      group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-500 ease-out">
        <span className="text-amber-400/70 text-[10px] uppercase tracking-[0.4em] font-sans">Explore</span>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M1 4H13M10 1L13 4L10 7" stroke="rgba(251,191,36,0.7)" strokeWidth="0.8" />
        </svg>
      </div>
    </div>
  </div>
));

/* ─── TEXT CARD ──────────────────────────────────────────────────────────── */
const TextCard = React.forwardRef(({ title, subtitle, desc, price, number, gridArea }, ref) => (
  <div
    ref={ref}
    data-cardtype="text"
    className="group relative overflow-hidden cursor-pointer flex flex-col justify-between p-6 xl:p-8"
    style={{
      gridArea,
      background: 'linear-gradient(140deg, #131210 0%, #0c0c0a 100%)',
      border: '1px solid rgba(212,175,55,0.10)',
      transformStyle: 'preserve-3d',
      willChange: 'transform',
    }}
  >
    {/* ── top edge sweep ── */}
    <div className="absolute top-0 left-0 right-0 h-px z-20
                    bg-gradient-to-r from-transparent via-amber-500/55 to-transparent
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

    {/* ── shimmer ── */}
    <div
      className="card-shine absolute inset-0 z-10 pointer-events-none opacity-0"
      style={{
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 65%)',
        backgroundSize: '200% 200%',
      }}
    />

    {/* ── TL bracket ── */}
    <div className="absolute top-5 left-5 z-20" style={{ width: 18, height: 18 }}>
      <div className="absolute top-0 left-0 h-px w-full bg-amber-500/35" />
      <div className="absolute top-0 left-0 w-px h-full bg-amber-500/35" />
    </div>
    {/* ── BR bracket — animates in on hover ── */}
    <div className="absolute bottom-5 right-5 z-20" style={{ width: 18, height: 18 }}>
      <div className="absolute bottom-0 right-0 h-px w-full bg-amber-500/35
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
      <div className="absolute bottom-0 right-0 w-px h-full bg-amber-500/35
                      scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
    </div>

    {/* ── ghost number ── */}
    <span className="absolute right-3 bottom-2 z-10 select-none pointer-events-none
                     font-serif text-[6rem] leading-none
                     text-white/[0.022] group-hover:text-amber-400/[0.045]
                     transition-colors duration-700">
      {number}
    </span>

    {/* ── content ── */}
    <div className="relative z-20 flex items-center gap-3">
      <div className="h-px w-5 bg-amber-500/45 flex-shrink-0" />
      <span className="font-serif italic text-amber-400/55 text-[11px] tracking-[0.35em] uppercase">
        {subtitle}
      </span>
    </div>

    <div className="relative z-20 flex-1 flex flex-col justify-center py-4">
      <h4 className="font-serif uppercase text-white tracking-tight leading-none
                     text-2xl md:text-3xl xl:text-[2.1rem] mb-3
                     group-hover:text-amber-50 transition-colors duration-500">
        {title}
      </h4>
      <p className="text-white/38 font-sans text-xs md:text-sm leading-relaxed
                    max-w-[22ch] tracking-wide
                    opacity-60 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-500 ease-out">
        {desc}
      </p>
    </div>

    <div className="relative z-20 flex items-end justify-between">
      <span className="font-serif text-amber-400 text-xl md:text-2xl tracking-wide">{price}</span>
      <div className="flex items-center gap-2
                      opacity-0 translate-x-3
                      group-hover:opacity-100 group-hover:translate-x-0
                      transition-all duration-500 ease-out">
        <span className="text-white/35 text-[10px] uppercase tracking-[0.3em] font-sans">Order</span>
        <div className="w-8 h-px bg-amber-500/45" />
      </div>
    </div>
  </div>
));

/* ─── GRID DEFINITION ────────────────────────────────────────────────────── */
/*
  4 columns × 2 rows — each item uses CSS grid-area: "rowStart / colStart / rowEnd / colEnd"
*/
const GRID_ITEMS = [
  // ── COL 1: tall dish photo (spans both rows) ──
  {
    type: 'img',
    gridArea: '1 / 1 / 3 / 2',
    src: '/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (1)-Photoroom.png',
    label: 'The Signature',
    tag: '01',
  },
  // ── COL 2 ROW 1: food dish ──
  {
    type: 'img',
    gridArea: '1 / 2 / 2 / 3',
    src: '/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (2)-Photoroom.png',
    label: 'Wagyu Tomahawk',
    tag: '02',
  },
  // ── COL 2 ROW 2: TEXT CARD ──
  {
    type: 'text',
    gridArea: '2 / 2 / 3 / 3',
    title: 'TRUFFLE PASTA',
    subtitle: "Chef's Signature",
    desc: 'Handmade linguine, aged parmesan, and fresh black truffle shavings — timeless craft.',
    price: '$85',
    number: '02',
  },
  // ── COL 3 ROW 1: TEXT CARD ──
  {
    type: 'text',
    gridArea: '1 / 3 / 2 / 4',
    title: 'WAGYU TOMAHAWK',
    subtitle: 'A5 Grade',
    desc: 'Dry-aged A5 Wagyu, smoked sea salt, rosemary infusion, and 24k gold leaf finishing.',
    price: '$210',
    number: '03',
  },
  // ── COL 3 ROW 2: food dish ──
  {
    type: 'img',
    gridArea: '2 / 3 / 3 / 4',
    src: '/asset/ChatGPT Image May 6, 2026, 01_24_31 PM (3)-Photoroom.png',
    label: 'Gold Lobster',
    tag: '03',
  },
  // ── COL 4 ROW 1: food dish ──
  {
    type: 'img',
    gridArea: '1 / 4 / 2 / 5',
    src: '/asset/ChatGPT Image May 6, 2026, 01_25_36 PM (1)-Photoroom.png',
    label: 'Caviar Selection',
    tag: '04',
  },
  // ── COL 4 ROW 2: food dish ──
  {
    type: 'img',
    gridArea: '2 / 4 / 3 / 5',
    src: '/asset/ChatGPT Image May 5, 2026, 09_50_18 PM-Photoroom.png',
    label: 'The Platter',
    tag: '05',
  },
];

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────────── */
const Ambiance = () => {
  const containerRef = useRef(null);
  const titleRef     = useRef(null);
  const cardRefs     = useRef([]);
  const cleanups     = useRef([]);

  /* attach tilt to all cards after mount */
  useEffect(() => {
    cleanups.current = cardRefs.current.map((el) => attachTilt(el));
    return () => cleanups.current.forEach((fn) => fn && fn());
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      // title
      gsap.from(titleRef.current, {
        scrollTrigger: { trigger: titleRef.current, start: 'top 88%', toggleActions: 'play none none reverse' },
        y: 50, opacity: 0, duration: 1.6, ease: 'expo.out',
      });

      // cards stagger
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const isText = el.dataset.cardtype === 'text';
        gsap.fromTo(el,
          { y: isText ? 0 : 55, x: isText ? 35 : 0, opacity: 0, scale: 0.96 },
          {
            y: 0, x: 0, opacity: 1, scale: 1,
            duration: 1.3,
            delay: i * 0.10,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 72%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      // parallax
      gsap.utils.toArray('.gallery-img').forEach((img) => {
        gsap.to(img, {
          y: '-7%',
          ease: 'none',
          scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 2 },
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ambiance"
      ref={containerRef}
      className="relative w-full py-28 bg-[#080808] overflow-hidden select-none"
    >
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[650px] h-[650px] rounded-full blur-[230px]"
          style={{ background: 'radial-gradient(circle, rgba(184,134,11,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full blur-[200px]"
          style={{ background: 'radial-gradient(circle, rgba(120,80,10,0.05) 0%, transparent 70%)' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* header */}
        <div ref={titleRef} className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-amber-500/50 font-serif italic text-xs tracking-[0.5em] uppercase mb-3">
              The Gallery
            </p>
            <h3 className="font-serif text-white uppercase leading-none tracking-tighter text-5xl md:text-7xl">
              Our{' '}
              <em className="not-italic font-extralight" style={{ color: 'rgba(212,175,55,0.85)' }}>
                Finest
              </em>
            </h3>
          </div>
          <p className="text-white/22 font-sans text-sm max-w-[28ch] leading-relaxed tracking-wide">
            Each dish. Each face. Each moment —<br />composed with intention, served with reverence.
          </p>
        </div>

        {/* ── GALLERY GRID ──────────────────────────────────────────────── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: '340px 340px',
            gap: '10px',
          }}
        >
          {GRID_ITEMS.map((item, i) => {
            const setRef = (el) => { cardRefs.current[i] = el; };
            if (item.type === 'img') {
              return (
                <ImageCard
                  key={i}
                  ref={setRef}
                  src={item.src}
                  label={item.label}
                  tag={item.tag}
                  gridArea={item.gridArea}
                />
              );
            }
            return (
              <TextCard
                key={i}
                ref={setRef}
                title={item.title}
                subtitle={item.subtitle}
                desc={item.desc}
                price={item.price}
                number={item.number}
                gridArea={item.gridArea}
              />
            );
          })}
        </div>

        {/* divider */}
        <div className="mt-14 flex items-center gap-6">
          <div className="h-px flex-1"
            style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.05))' }} />
          <span className="font-serif italic text-white/18 text-xs tracking-[0.45em] uppercase whitespace-nowrap">
            Obsidian • New York
          </span>
          <div className="h-px flex-1"
            style={{ background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.05))' }} />
        </div>

      </div>
    </section>
  );
};

export default Ambiance;
