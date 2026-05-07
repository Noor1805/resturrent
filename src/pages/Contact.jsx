import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Reveal Contact Info
      gsap.fromTo('.anim-contact-info > *',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 1, 
          stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.anim-contact-section',
            start: 'top 75%'
          }
        }
      );

      // Reveal Form
      gsap.fromTo('.anim-form-box',
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.anim-contact-section',
            start: 'top 75%'
          }
        }
      );

      // Reveal Map Card
      gsap.fromTo('.anim-map-card',
        { opacity: 0, x: 50 },
        { 
          opacity: 1, x: 0, duration: 1.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.anim-map-section',
            start: 'top 75%'
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#030303] min-h-screen text-white pt-24 pb-0" ref={containerRef}>
      
      {/* ── CONTACT FORM SECTION ───────────────────────────────────── */}
      <section className="anim-contact-section w-full py-24 md:py-32 bg-[#030303] relative overflow-hidden">
        
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[150px] -translate-y-1/2 rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 relative z-10">
          
          {/* Left: Info */}
          <div className="anim-contact-info space-y-12">
            <div>
              <span className="text-[#a68a56] font-sans text-[11px] tracking-[0.3em] uppercase mb-4 block font-semibold">CONTACT</span>
              <div className="w-12 h-px bg-[#d4af37]/50 mb-8" />
              <h2 className="font-serif text-[40px] md:text-5xl lg:text-[56px] text-white uppercase leading-[1.1] mb-6">
                Let's Create <br/>
                <span className="text-[#d4af37] italic font-light lowercase">something exceptional</span>
              </h2>
              <p className="text-white/60 font-sans text-[15px] tracking-wide leading-relaxed max-w-md pr-4">
                We'd love to hear from you. Whether it's a reservation, a private event, or a culinary inquiry, our team is here to craft the perfect experience.
              </p>
            </div>

            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent flex items-center justify-center relative my-12">
              <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
            </div>

            <div className="space-y-0 max-w-md">
              {/* Location */}
              <div className="group flex items-center gap-6 py-6 border-b border-white/[0.03] cursor-default">
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/20 bg-[#050505] flex items-center justify-center flex-shrink-0 text-[#d4af37] group-hover:scale-110 group-hover:border-[#d4af37]/60 group-hover:bg-[#d4af37]/10 transition-all duration-500">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="text-[#a68a56] text-[10px] tracking-[0.25em] uppercase font-semibold mb-1">LOCATION</h4>
                  <p className="text-white/70 text-[13px] leading-snug group-hover:text-white transition-colors duration-300">123 Obsidian Way<br/>Manhattan, NY 10001</p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-center gap-6 py-6 border-b border-white/[0.03] cursor-default">
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/20 bg-[#050505] flex items-center justify-center flex-shrink-0 text-[#d4af37] group-hover:scale-110 group-hover:border-[#d4af37]/60 group-hover:bg-[#d4af37]/10 transition-all duration-500">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h4 className="text-[#a68a56] text-[10px] tracking-[0.25em] uppercase font-semibold mb-1">PHONE</h4>
                  <p className="text-white/70 text-[13px] leading-snug group-hover:text-white transition-colors duration-300">+1 (212) 555-0198</p>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-center gap-6 py-6 border-b border-white/[0.03] cursor-default">
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/20 bg-[#050505] flex items-center justify-center flex-shrink-0 text-[#d4af37] group-hover:scale-110 group-hover:border-[#d4af37]/60 group-hover:bg-[#d4af37]/10 transition-all duration-500">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-[#a68a56] text-[10px] tracking-[0.25em] uppercase font-semibold mb-1">EMAIL</h4>
                  <p className="text-white/70 text-[13px] leading-snug group-hover:text-white transition-colors duration-300">reservations@obsidian.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="group flex items-center gap-6 py-6 cursor-default">
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/20 bg-[#050505] flex items-center justify-center flex-shrink-0 text-[#d4af37] group-hover:scale-110 group-hover:border-[#d4af37]/60 group-hover:bg-[#d4af37]/10 transition-all duration-500">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-[#a68a56] text-[10px] tracking-[0.25em] uppercase font-semibold mb-1">HOURS</h4>
                  <p className="text-white/70 text-[13px] leading-snug group-hover:text-white transition-colors duration-300">Mon - Sun<br/>5:00 PM – 12:00 AM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Form */}
          <div className="anim-form-box w-full lg:max-w-2xl ml-auto bg-[#050505] border border-white/[0.05] p-8 md:p-14 h-max relative shadow-2xl">
            {/* Subtle corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#d4af37]/50" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#d4af37]/50" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#d4af37]/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#d4af37]/50" />

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group space-y-2">
                  <label className="text-[#a68a56] text-[9px] tracking-[0.25em] uppercase font-semibold group-focus-within:text-[#d4af37] transition-colors">FIRST NAME</label>
                  <input type="text" placeholder="Your first name" className="w-full bg-[#030303] border border-white/5 p-4 text-white text-[13px] focus:outline-none focus:border-[#d4af37]/40 focus:bg-[#080808] transition-all duration-300 placeholder:text-white/20" />
                </div>
                <div className="group space-y-2">
                  <label className="text-[#a68a56] text-[9px] tracking-[0.25em] uppercase font-semibold group-focus-within:text-[#d4af37] transition-colors">LAST NAME</label>
                  <input type="text" placeholder="Your last name" className="w-full bg-[#030303] border border-white/5 p-4 text-white text-[13px] focus:outline-none focus:border-[#d4af37]/40 focus:bg-[#080808] transition-all duration-300 placeholder:text-white/20" />
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-[#a68a56] text-[9px] tracking-[0.25em] uppercase font-semibold group-focus-within:text-[#d4af37] transition-colors">EMAIL ADDRESS</label>
                <input type="email" placeholder="you@example.com" className="w-full bg-[#030303] border border-white/5 p-4 text-white text-[13px] focus:outline-none focus:border-[#d4af37]/40 focus:bg-[#080808] transition-all duration-300 placeholder:text-white/20" />
              </div>

              <div className="group space-y-2">
                <label className="text-[#a68a56] text-[9px] tracking-[0.25em] uppercase font-semibold group-focus-within:text-[#d4af37] transition-colors">PHONE NUMBER</label>
                <input type="tel" placeholder="(123) 456-7890" className="w-full bg-[#030303] border border-white/5 p-4 text-white text-[13px] focus:outline-none focus:border-[#d4af37]/40 focus:bg-[#080808] transition-all duration-300 placeholder:text-white/20" />
              </div>

              <div className="group space-y-2 relative">
                <label className="text-[#a68a56] text-[9px] tracking-[0.25em] uppercase font-semibold group-focus-within:text-[#d4af37] transition-colors">SUBJECT</label>
                <select className="w-full bg-[#030303] border border-white/5 p-4 text-white/50 text-[13px] focus:outline-none focus:border-[#d4af37]/40 focus:text-white focus:bg-[#080808] transition-all duration-300 appearance-none outline-none cursor-pointer">
                  <option value="" disabled selected>How can we help?</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="event">Private Event</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute right-4 top-[38px] pointer-events-none text-white/30 group-focus-within:text-[#d4af37] transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"></path></svg>
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-[#a68a56] text-[9px] tracking-[0.25em] uppercase font-semibold group-focus-within:text-[#d4af37] transition-colors">MESSAGE</label>
                <textarea placeholder="Your message" rows="4" className="w-full bg-[#030303] border border-white/5 p-4 text-white text-[13px] focus:outline-none focus:border-[#d4af37]/40 focus:bg-[#080808] transition-all duration-300 resize-none placeholder:text-white/20"></textarea>
              </div>

              <button className="relative w-full py-5 bg-[#030303] border border-[#d4af37]/20 text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-bold overflow-hidden group/btn mt-6 active:scale-[0.98] transition-all duration-300 hover:border-[#d4af37]/60">
                <div className="absolute inset-0 bg-[#d4af37] scale-y-0 group-hover/btn:scale-y-100 origin-bottom transition-transform duration-500 ease-out" />
                <span className="relative z-10 group-hover/btn:text-black transition-colors duration-500">SEND MESSAGE</span>
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* ── MAP SECTION ────────────────────────────────────────────── */}
      <section className="anim-map-section relative w-full h-[600px] md:h-[700px] bg-black overflow-hidden border-t border-white/5">
        
        {/* Real Map iframe */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0620786524147!2d-73.98403328459346!3d40.76077307932646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97ce1c40f%3A0xc3f8c85c07b7b134!2s212%20W%2052nd%20St%2C%20New%20York%2C%20NY%2010019!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Obsidian Location"
            className="w-full h-full object-cover filter invert grayscale-[0.8] contrast-[1.2] sepia-[0.3] hue-rotate-[180deg] opacity-70"
          ></iframe>
        </div>
        
        {/* Dark overlay gradients for blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-[#030303]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-black/80" />

        <div className="container mx-auto px-6 relative z-10 h-full flex items-center justify-end">
          {/* Find Us Card */}
          <div className="anim-map-card w-full max-w-md bg-[#050505]/95 backdrop-blur-xl border border-[#d4af37]/20 p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#d4af37] font-sans text-[10px] tracking-[0.4em] uppercase">FIND US</span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
              In the Heart <br/> of Midtown
            </h2>

            <p className="text-white/60 font-sans text-sm tracking-wide leading-relaxed mb-10">
              212 West 52nd Street<br/>
              New York, NY 10019
            </p>

            <div className="space-y-8">
              <div className="group flex items-start gap-5 cursor-default">
                <div className="mt-1 w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center flex-shrink-0 text-[#d4af37] group-hover:bg-[#d4af37]/10 group-hover:scale-110 transition-all duration-300">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h4 className="text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold mb-1 transition-colors duration-300">NEAREST LANDMARK</h4>
                  <p className="text-white/50 text-xs leading-relaxed group-hover:text-white/80 transition-colors duration-300">Between 7th & 8th Avenue<br/>Steps from Central Park</p>
                </div>
              </div>

              <div className="group flex items-start gap-5 cursor-default">
                <div className="mt-1 w-8 h-8 rounded-full border border-[#d4af37]/40 flex items-center justify-center flex-shrink-0 text-[#d4af37] group-hover:bg-[#d4af37]/10 group-hover:scale-110 transition-all duration-300">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <div>
                  <h4 className="text-[#d4af37] text-[10px] tracking-[0.2em] uppercase font-semibold mb-1 transition-colors duration-300">HOURS</h4>
                  <p className="text-white/50 text-xs leading-relaxed group-hover:text-white/80 transition-colors duration-300">Tue – Sat: 5:30 PM – 11:30 PM<br/>Sun – Mon: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="group flex items-center justify-between w-full border border-[#d4af37]/30 px-6 py-4 hover:bg-[#d4af37] hover:border-[#d4af37] transition-all duration-500 overflow-hidden relative">
                <span className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase font-bold group-hover:text-black transition-colors duration-500 relative z-10">GET DIRECTIONS</span>
                <span className="text-[#d4af37] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black transition-all duration-500 relative z-10">↗</span>
                <div className="absolute inset-0 bg-[#d4af37] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
