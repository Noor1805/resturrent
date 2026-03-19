import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import clsx from 'clsx';

const TextReveal = ({ children, className, delay = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { 
        y: 100, 
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.05,
        duration: 1.2,
        ease: 'power4.out',
        delay: delay,
      }
    );
  }, [delay, children]);

  // Split text into words and then characters to handle spacing correctly
  const words = typeof children === 'string' ? children.split(' ') : [];

  return (
    <div ref={containerRef} className={clsx("overflow-hidden leading-tight perspective-text", className)}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true" className="block">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split('').map((char, charIndex) => (
              <span key={`${wordIndex}-${charIndex}`} className="char inline-block origin-bottom">
                {char}
              </span>
            ))}
          </span>
        ))}
      </span>
    </div>
  );
};

export default TextReveal;
