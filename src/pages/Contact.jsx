import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const quickActions = [
  { label: 'Call', href: 'tel:+12125550198' },
  { label: 'Email', href: 'mailto:reservations@obsidian.com' },
  { label: 'Directions', href: 'https://maps.google.com' },
];

const Contact = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.anim-contact-info > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.anim-contact-section',
            start: 'top 75%',
          },
        },
      );

      gsap.fromTo(
        '.anim-form-box',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.anim-contact-section',
            start: 'top 75%',
          },
        },
      );

      gsap.fromTo(
        '.anim-map-card',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.anim-map-section',
            start: 'top 75%',
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#030303] pt-20 text-white pb-[calc(7.5rem+env(safe-area-inset-bottom))] md:pt-24 md:pb-0"
      ref={containerRef}
    >
      <section className="anim-contact-section relative w-full overflow-hidden bg-[#030303] py-16 md:py-32">
        <div className="pointer-events-none absolute top-1/2 left-0 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[#d4af37]/5 blur-[120px] md:h-[500px] md:w-[500px] md:blur-[150px]" />

        <div className="container relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-6 md:gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div className="anim-contact-info space-y-10 md:space-y-12">
            <div>
              <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#a68a56]">
                Contact
              </span>
              <div className="mb-8 h-px w-12 bg-[#d4af37]/50" />
              <h2 className="mb-6 font-serif text-[2.25rem] uppercase leading-[1.05] text-white md:text-5xl lg:text-[56px]">
                Let's Create <br />
                <span className="font-light italic lowercase text-[#d4af37]">something exceptional</span>
              </h2>
              <p className="max-w-md pr-2 text-[15px] leading-8 tracking-wide text-white/60">
                We'd love to hear from you. Whether it's a reservation, a private event, or a culinary inquiry, our team is here to craft the perfect experience.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 md:hidden">
              {quickActions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.label === 'Directions' ? '_blank' : undefined}
                  rel={action.label === 'Directions' ? 'noreferrer' : undefined}
                  className="flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-3 text-[10px] uppercase tracking-[0.28em] text-white/70"
                >
                  {action.label}
                </a>
              ))}
            </div>

            <div className="relative my-2 flex h-px w-full max-w-md items-center justify-center bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent md:my-12">
              <div className="h-1.5 w-1.5 rotate-45 bg-[#d4af37]" />
            </div>

            <div className="max-w-md space-y-0">
              <div className="group flex items-start gap-4 py-5 md:gap-6 md:py-6 border-b border-white/[0.03]">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#050505] text-[#d4af37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/60 group-hover:bg-[#d4af37]/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a68a56]">Location</h4>
                  <p className="text-[13px] leading-6 text-white/70 transition-colors duration-300 group-hover:text-white">
                    123 Obsidian Way
                    <br />
                    Manhattan, NY 10001
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 py-5 md:gap-6 md:py-6 border-b border-white/[0.03]">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#050505] text-[#d4af37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/60 group-hover:bg-[#d4af37]/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a68a56]">Phone</h4>
                  <p className="text-[13px] leading-6 text-white/70 transition-colors duration-300 group-hover:text-white">
                    +1 (212) 555-0198
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 py-5 md:gap-6 md:py-6 border-b border-white/[0.03]">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#050505] text-[#d4af37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/60 group-hover:bg-[#d4af37]/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a68a56]">Email</h4>
                  <p className="text-[13px] leading-6 text-white/70 transition-colors duration-300 group-hover:text-white">
                    reservations@obsidian.com
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 py-5 md:gap-6 md:py-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#050505] text-[#d4af37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#d4af37]/60 group-hover:bg-[#d4af37]/10">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a68a56]">Hours</h4>
                  <p className="text-[13px] leading-6 text-white/70 transition-colors duration-300 group-hover:text-white">
                    Mon - Sun
                    <br />
                    5:00 PM - 12:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="anim-form-box ml-auto h-max w-full rounded-[28px] border border-white/[0.05] bg-[#050505] p-6 shadow-2xl md:rounded-none md:p-14 lg:max-w-2xl">
            <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-[#d4af37]/50" />
            <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#d4af37]/50" />
            <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-[#d4af37]/50" />
            <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[#d4af37]/50" />

            <form className="space-y-6 md:space-y-8" onSubmit={(event) => event.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <div className="group space-y-2">
                  <label className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a68a56] transition-colors group-focus-within:text-[#d4af37]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full border border-white/5 bg-[#030303] p-4 text-[13px] text-white transition-all duration-300 placeholder:text-white/20 focus:border-[#d4af37]/40 focus:bg-[#080808] focus:outline-none"
                  />
                </div>
                <div className="group space-y-2">
                  <label className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a68a56] transition-colors group-focus-within:text-[#d4af37]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full border border-white/5 bg-[#030303] p-4 text-[13px] text-white transition-all duration-300 placeholder:text-white/20 focus:border-[#d4af37]/40 focus:bg-[#080808] focus:outline-none"
                  />
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a68a56] transition-colors group-focus-within:text-[#d4af37]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-white/5 bg-[#030303] p-4 text-[13px] text-white transition-all duration-300 placeholder:text-white/20 focus:border-[#d4af37]/40 focus:bg-[#080808] focus:outline-none"
                />
              </div>

              <div className="group space-y-2">
                <label className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a68a56] transition-colors group-focus-within:text-[#d4af37]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="w-full border border-white/5 bg-[#030303] p-4 text-[13px] text-white transition-all duration-300 placeholder:text-white/20 focus:border-[#d4af37]/40 focus:bg-[#080808] focus:outline-none"
                />
              </div>

              <div className="group relative space-y-2">
                <label className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a68a56] transition-colors group-focus-within:text-[#d4af37]">
                  Subject
                </label>
                <select
                  defaultValue=""
                  className="w-full cursor-pointer appearance-none border border-white/5 bg-[#030303] p-4 text-[13px] text-white/50 outline-none transition-all duration-300 focus:border-[#d4af37]/40 focus:bg-[#080808] focus:text-white"
                >
                  <option value="" disabled>
                    How can we help?
                  </option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="event">Private Event</option>
                  <option value="press">Press &amp; Media</option>
                  <option value="other">Other</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-[38px] text-white/30 transition-colors group-focus-within:text-[#d4af37]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a68a56] transition-colors group-focus-within:text-[#d4af37]">
                  Message
                </label>
                <textarea
                  placeholder="Your message"
                  rows="4"
                  className="w-full resize-none border border-white/5 bg-[#030303] p-4 text-[13px] text-white transition-all duration-300 placeholder:text-white/20 focus:border-[#d4af37]/40 focus:bg-[#080808] focus:outline-none"
                />
              </div>

              <button className="group/btn relative mt-2 w-full overflow-hidden border border-[#d4af37]/20 bg-[#030303] py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37] transition-all duration-300 hover:border-[#d4af37]/60 active:scale-[0.98]">
                <div className="absolute inset-0 origin-bottom scale-y-0 bg-[#d4af37] transition-transform duration-500 ease-out group-hover/btn:scale-y-100" />
                <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="anim-map-section relative h-[660px] w-full overflow-hidden border-t border-white/5 bg-black md:h-[700px]">
        <div className="pointer-events-none absolute inset-0 h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0620786524147!2d-73.98403328459346!3d40.76077307932646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f97ce1c40f%3A0xc3f8c85c07b7b134!2s212%20W%2052nd%20St%2C%20New%20York%2C%20NY%2010019!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Obsidian Location"
            className="h-full w-full object-cover invert grayscale-[0.8] contrast-[1.2] sepia-[0.3] hue-rotate-[180deg] opacity-70"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-[#030303]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-black/80" />

        <div className="container relative z-10 mx-auto flex h-full items-end justify-center px-5 pb-8 sm:px-6 md:items-center md:justify-end md:px-6 lg:px-16">
          <div className="anim-map-card w-full max-w-xl border border-[#d4af37]/20 bg-[#050505]/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl md:max-w-md md:p-14">
            <div className="mb-6 flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]">Find Us</span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
            </div>

            <h2 className="mb-6 font-serif text-3xl leading-tight text-white md:text-4xl">
              In the Heart <br /> of Midtown
            </h2>

            <p className="mb-8 text-sm leading-7 tracking-wide text-white/60 md:mb-10">
              212 West 52nd Street
              <br />
              New York, NY 10019
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="group flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d4af37]/10">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Nearest Landmark</h4>
                  <p className="text-xs leading-6 text-white/50 transition-colors duration-300 group-hover:text-white/80">
                    Between 7th &amp; 8th Avenue
                    <br />
                    Steps from Central Park
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 text-[#d4af37] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#d4af37]/10">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Hours</h4>
                  <p className="text-xs leading-6 text-white/50 transition-colors duration-300 group-hover:text-white/80">
                    Tue - Sat: 5:30 PM - 11:30 PM
                    <br />
                    Sun - Mon: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/5 pt-6 md:mt-12 md:pt-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="group relative flex w-full items-center justify-between overflow-hidden border border-[#d4af37]/30 px-5 py-4 transition-all duration-500 hover:border-[#d4af37] hover:bg-[#d4af37] md:px-6"
              >
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37] transition-colors duration-500 group-hover:text-black">
                  Get Directions
                </span>
                <span className="relative z-10 text-[#d4af37] transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black">
                  ↗
                </span>
                <div className="absolute inset-0 origin-left scale-x-0 bg-[#d4af37] transition-transform duration-500 ease-out group-hover:scale-x-100" />
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
