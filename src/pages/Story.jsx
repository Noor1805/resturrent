import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const SectionLabel = ({ label, number }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="h-px w-8 bg-gold-500/50" />
    <span className="text-gold-500/70 font-serif italic text-xs tracking-[0.35em] uppercase">
      {number ? `${number} / ` : ''}{label}
    </span>
  </div>
);

const Story = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for background oversized text
      gsap.utils.toArray('.ghost-text').forEach((text) => {
        gsap.to(text, {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: text,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black min-h-screen text-white overflow-x-hidden font-sans relative">
      
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Ghost Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="ghost-text font-serif text-[25vw] leading-none text-white/[0.015] select-none uppercase tracking-tighter">
            Story
          </span>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-500/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <SectionLabel label="OBSIDIAN HERITAGE" />
              <h1 className="font-serif text-6xl md:text-8xl xl:text-9xl uppercase leading-[0.9] mb-8 tracking-tighter">
                Our <br /> <span className="italic text-gold-500">Story</span>
              </h1>
              <p className="text-gold-400/80 font-serif italic text-lg md:text-xl mb-6 max-w-lg">
                “Born in the shadows of New York, OBSIDIAN is a celebration of fire, craft, silence, and unforgettable taste.”
              </p>
              <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-md tracking-wide font-light">
                For decades, OBSIDIAN has been a place where rare ingredients, old-world hospitality, and cinematic dining rituals come together beneath the glow of gold and candlelight.
              </p>
              
              <div className="mt-12 flex items-center gap-4">
                <div className="h-px w-12 bg-white/20" />
                <span className="text-white/30 text-[10px] uppercase tracking-[0.4em]">Scroll to discover</span>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-gold-500/20 pointer-events-none translate-x-8 translate-y-8" />
              <div className="relative aspect-[4/5] overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
                  alt="Obsidian Interior" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold-500/40" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold-500/40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. ORIGIN SECTION ─────────────────────────────────────────────── */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 pointer-events-none opacity-[0.03]">
          <span className="ghost-text font-serif text-[20vw] leading-none text-white select-none">01</span>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionLabel label="ORIGIN" number="01" />
              <h2 className="font-serif text-4xl md:text-6xl uppercase leading-tight mb-8 tracking-tight">
                Born in New York. <br />
                <span className="text-gold-500 italic font-light">Built for the Rare Few.</span>
              </h2>
              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl tracking-wide font-light">
                OBSIDIAN began as an intimate dining room hidden behind the rhythm of the city — a place designed not for noise, but for presence. Every detail was shaped to feel deliberate: the darkness, the gold, the silence between courses, and the fire behind every plate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550966842-2824128a13c1?auto=format&fit=crop&q=80&w=1500" 
                  alt="New York Heritage" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/30 transition-all duration-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. PHILOSOPHY SECTION ─────────────────────────────────────────── */}
      <section className="relative py-32 md:py-48 bg-[#050505]">
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <span className="ghost-text font-serif text-[15vw] text-white/[0.015] uppercase tracking-[0.2em]">Ritual</span>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center mb-24">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <div className="flex justify-center">
              <SectionLabel label="PHILOSOPHY" number="02" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight mb-6">
              Luxury Is Not Loud. <br />
              <span className="italic text-gold-500 font-light">It Is Remembered.</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base leading-relaxed tracking-wide font-light">
              At OBSIDIAN, luxury is found in restraint — in the perfect sear, the measured pour, the quiet confidence of a room that does not need to announce itself. Every dish is composed with precision, every table is prepared with intention, and every evening is designed to linger.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fire',
                desc: 'The primal element behind our cooking — controlled, patient, and exact.',
                img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000'
              },
              {
                title: 'Gold',
                desc: 'A symbol of refinement, detail, and quiet extravagance.',
                img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1000'
              },
              {
                title: 'Silence',
                desc: 'The space between moments, where the experience becomes unforgettable.',
                img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000'
              }
            ].map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group relative overflow-hidden bg-white/[0.02] backdrop-blur-sm border border-white/5 p-8 pb-12 transition-all duration-500 hover:border-gold-500/30 hover:bg-gold-500/[0.02]"
              >
                <div className="relative h-48 mb-8 overflow-hidden">
                  <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-60 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <h3 className="font-serif text-2xl uppercase tracking-widest mb-4 group-hover:text-gold-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-white/40 text-xs md:text-sm leading-relaxed tracking-wide font-light">
                  {pillar.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CRAFT SECTION ──────────────────────────────────────────────── */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Cinematic Kitchen Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1500" 
                  alt="The Kitchen" 
                  className="w-full h-full object-cover grayscale transition-all duration-[2s] hover:grayscale-0 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-gold-500/20" />
            </motion.div>

            {/* Right: Craft Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-1 lg:order-2"
            >
              <SectionLabel label="CRAFT" number="03" />
              <h2 className="font-serif text-4xl md:text-6xl uppercase leading-tight mb-8 tracking-tight">
                Where Fire <br />
                <span className="text-gold-500 italic font-light">Becomes Ceremony.</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-12 max-w-xl font-light tracking-wide">
                Our kitchen is built around discipline, rare ingredients, and timeless technique. Wagyu is rested like a jewel. Lobster is finished with saffron and gold. Pasta is crowned with caviar and shaved truffle. Nothing is rushed. Nothing is accidental.
              </p>

              <ul className="space-y-6">
                {[
                  "Rare ingredients",
                  "Flame-led technique",
                  "Seasonal precision",
                  "Tableside drama",
                  "Quiet luxury plating"
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <span className="font-serif text-gold-500/40 text-xs italic group-hover:text-gold-500 transition-colors">0{i + 1}</span>
                    <span className="text-white/60 text-sm uppercase tracking-[0.2em] group-hover:text-white transition-colors">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <button className="mt-16 px-10 py-4 border border-gold-500/30 text-gold-500 uppercase tracking-[0.3em] text-[10px] hover:bg-gold-500 hover:text-black transition-all duration-500 shadow-gold-glow/20">
                Explore The Menu
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 5. SIGNATURE INGREDIENTS SECTION ───────────────────────────────── */}
      <section className="relative py-32 md:py-48 bg-[#030303]">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="flex justify-center">
              <SectionLabel label="INGREDIENTS" number="04" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight mb-6">
              Rare by <span className="text-gold-500 italic font-light">Design.</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-sm leading-relaxed tracking-wide font-light">
              Every plate begins with ingredients chosen for depth, rarity, texture, and story. Black caviar, shaved truffle, gold leaf, dry-aged beef, saffron, lobster, citrus, herbs, and smoke — each element exists for a reason.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Caviar', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=500' },
              { name: 'Truffle', img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=500' },
              { name: 'Lobster', img: 'https://images.unsplash.com/photo-1559740038-df607f230ec2?auto=format&fit=crop&q=80&w=500' },
              { name: 'Wagyu', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=500' },
              { name: 'Saffron', img: 'https://images.unsplash.com/photo-1596797038530-2c39fa80b6c9?auto=format&fit=crop&q=80&w=500' },
              { name: 'Gold Leaf', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=500' }
            ].map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square overflow-hidden bg-white/[0.03] border border-white/5 transition-all duration-500 hover:border-gold-500/40 hover:-translate-y-2"
              >
                <img src={ing.img} alt={ing.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <span className="text-white text-[10px] uppercase tracking-[0.3em] font-serif group-hover:text-gold-400 transition-colors">{ing.name}</span>
                </div>
                <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/20 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ATMOSPHERE SECTION ─────────────────────────────────────────── */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="ghost-text font-serif text-[18vw] text-white/[0.015] uppercase tracking-tighter">Elegance</span>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel label="ATMOSPHERE" number="05" />
            <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight mb-6">
              Dark Elegance, <br />
              <span className="text-gold-500 italic font-light">Candlelit Evenings.</span>
            </h2>
            <p className="text-white/40 max-w-xl text-sm leading-relaxed tracking-wide font-light">
              The room is intentionally dim, allowing the table to become the stage. Candlelight moves across black stone, gold-rimmed glassware, polished cutlery, and dishes that appear from shadow like objects of desire.
            </p>
          </motion.div>
        </div>

        {/* Staggered Collage */}
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-12 gap-6 items-end">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="col-span-12 md:col-span-7 aspect-[16/9] overflow-hidden group relative"
            >
              <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Interior" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-gold-500 text-[10px] uppercase tracking-widest italic">Candlelit tables</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 80 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-5 aspect-square overflow-hidden group relative"
            >
              <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Bar" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-gold-500 text-[10px] uppercase tracking-widest italic">New York nights</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-6 md:col-span-4 aspect-square overflow-hidden group relative"
            >
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Private Dining" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-gold-500 text-[10px] uppercase tracking-widest italic">Private dining</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 60 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="col-span-6 md:col-span-8 aspect-[21/9] overflow-hidden group relative"
            >
              <img src="https://images.unsplash.com/photo-1550966842-2824128a13c1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" alt="Gold Details" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-gold-500 text-[10px] uppercase tracking-widest italic">Gold-rimmed glassware</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 7. CHEF SECTION ───────────────────────────────────────────────── */}
      <section className="relative py-32 md:py-48 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Chef Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-full border border-gold-500/20 p-4">
                <div className="absolute inset-0 bg-gold-500/5 blur-3xl rounded-full" />
                <img 
                  src="https://images.unsplash.com/photo-1581339394628-9128509c693a?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000" 
                  alt="Chef Alexander Pierce" 
                />
              </div>
              {/* Rotating Seal */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -right-10 w-40 h-40 border border-gold-500/10 rounded-full flex items-center justify-center pointer-events-none hidden md:flex"
              >
                <div className="text-gold-500/30 text-[8px] uppercase tracking-[0.5em] text-center">
                  Executive Chef <br /> Alexander Pierce
                </div>
                <div className="absolute inset-2 border border-gold-500/5 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Right: Chef Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <SectionLabel label="CHEF" number="06" />
              <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight mb-4">
                The Hand <br />
                <span className="text-gold-500 italic font-light">Behind the Fire.</span>
              </h2>
              <h3 className="font-serif text-2xl text-white/80 mb-8">Chef Alexander Pierce</h3>
              <p className="text-white/40 text-base leading-relaxed mb-12 max-w-lg font-light tracking-wide">
                Chef Alexander Pierce brings together classical technique, modern restraint, and a devotion to ingredients that speak quietly but powerfully. His cooking is not built to impress for a moment — it is built to remain in memory.
              </p>
              
              <div className="relative pl-12 py-6 border-l border-gold-500/30">
                <span className="absolute top-0 left-4 text-4xl text-gold-500/20 font-serif">“</span>
                <p className="text-gold-400 font-serif italic text-xl md:text-2xl leading-relaxed">
                  True luxury is precision you can feel before you understand it.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px w-8 bg-gold-500/40" />
                  <span className="text-gold-500/60 uppercase tracking-[0.3em] text-[10px]">Signature</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 8. PRIVATE DINING SECTION ──────────────────────────────────────── */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-black">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden border border-white/5 bg-white/[0.01] p-12 md:p-24"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&q=80&w=1500" 
                className="w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-[3s]" 
                alt="Private Room" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel label="PRIVATE DINING" number="07" />
                <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight mb-8">
                  For the <br />
                  <span className="text-gold-500 italic font-light">Rare Evening.</span>
                </h2>
                <p className="text-white/40 text-base leading-relaxed mb-12 max-w-md font-light tracking-wide">
                  From private celebrations to discreet executive dinners, OBSIDIAN offers intimate dining experiences shaped around privacy, precision, and atmosphere. Every detail is curated — from the first pour to the final flame.
                </p>
                
                <button className="px-10 py-4 bg-gold-500 text-black uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-gold-600 transition-all duration-500">
                  Inquire Private Dining
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 border-l border-white/10 pl-8">
                {[
                  "Private dining rooms",
                  "Chef-led tasting menus",
                  "Wine and cocktail pairing",
                  "Corporate dinners",
                  "Celebrations",
                  "Late-night luxury lounge"
                ].map((feature, i) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-gold-500/50 rounded-full" />
                    <span className="text-white/30 text-xs uppercase tracking-[0.2em]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 9. TIMELINE SECTION ───────────────────────────────────────────── */}
      <section className="relative py-32 md:py-48 bg-[#030303]">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-24">
            <div className="flex justify-center">
              <SectionLabel label="LEGACY" number="08" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight">
              A Legacy <span className="text-gold-500 italic font-light">in Moments.</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2">
              <motion.div 
                style={{ scaleY: 0, originY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="w-full h-full bg-gold-500/30"
              />
            </div>

            <div className="space-y-24">
              {[
                { year: '1989', text: 'The first private dining room opens in New York.' },
                { year: '1998', text: 'OBSIDIAN becomes known for late-night chef’s tastings.' },
                { year: '2011', text: 'The signature black-gold dining identity is introduced.' },
                { year: '2024', text: 'A new chapter begins, blending heritage with cinematic luxury.' }
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Circle Dot */}
                  <div className="absolute left-[20px] md:left-1/2 w-3 h-3 bg-black border border-gold-500 rounded-full -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                    <span className="font-serif text-5xl md:text-7xl text-white/5 mb-2 block absolute -top-4 left-12 md:static md:text-white/10 group-hover:text-gold-500/10 transition-colors">
                      {item.year}
                    </span>
                    <h4 className="font-serif text-gold-500 text-2xl mb-2">{item.year}</h4>
                    <p className="text-white/40 text-sm md:text-base leading-relaxed tracking-wide font-light max-w-xs mx-auto md:mx-0">
                      {item.text}
                    </p>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. TESTIMONIAL / PRESS SECTION ─────────────────────────────── */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-24">
            <div className="flex justify-center">
              <SectionLabel label="REPUTATION" number="09" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tight">
              Whispered About. <br />
              <span className="text-gold-500 italic font-light">Remembered Clearly.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "An evening at OBSIDIAN feels less like dinner and more like entering a private world.",
                source: "New York Dining Journal"
              },
              {
                quote: "Dark, elegant, precise — a restaurant that understands the power of restraint.",
                source: "Manhattan Luxe Review"
              },
              {
                quote: "Every course feels staged, but never forced.",
                source: "Private Guest"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-10 border border-white/5 bg-white/[0.01] hover:border-gold-500/30 transition-all duration-500"
              >
                <span className="text-4xl text-gold-500/20 font-serif mb-6 block">“</span>
                <p className="text-white/60 text-base md:text-lg italic leading-relaxed mb-8 font-light">
                  {item.quote}
                </p>
                <div className="h-px w-8 bg-gold-500/30 mb-4" />
                <span className="text-gold-500/70 text-[10px] uppercase tracking-[0.3em] font-sans">
                  {item.source}
                </span>
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gold-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FINAL CTA SECTION ─────────────────────────────────────────── */}
      <section className="relative py-48 md:py-64 overflow-hidden bg-black border-t border-white/5">
        {/* Ambient Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-gold-500/5 blur-[180px] rounded-full pointer-events-none" />
        
        {/* Particle effect placeholder / Subtle animated glows */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-500/40 rounded-full blur-sm animate-pulse" />
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-gold-500/30 rounded-full blur-sm animate-pulse delay-700" />
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-gold-500/20 rounded-full blur-sm animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <SectionLabel label="JOIN US" />
            <h2 className="font-serif text-5xl md:text-8xl uppercase tracking-tighter leading-none mb-8">
              Reserve Your <br />
              <span className="text-gold-500 italic font-light">Evening</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm md:text-base leading-relaxed tracking-wide mb-16 font-light">
              Step inside OBSIDIAN and experience New York fine dining through fire, gold, silence, and shadow.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="group relative px-12 py-5 bg-gold-500 text-black uppercase tracking-[0.3em] text-xs font-bold overflow-hidden transition-all duration-500 hover:bg-gold-600 hover:scale-105 active:scale-95 shadow-gold-glow">
                <span className="relative z-10">Book Experience</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              </button>
              
              <button className="px-12 py-5 border border-white/20 text-white uppercase tracking-[0.3em] text-xs font-light hover:border-gold-500/50 hover:text-gold-400 transition-all duration-500">
                Explore Menu
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── GLOBAL LUXURY FOOTER ─────────────────────────────────────────── */}
      <Footer />



    </div>
  );
};

export default Story;
