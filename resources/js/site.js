// This is all you.

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const revealText = document.querySelectorAll('.js-text-reveal');

    if (!revealText.length) return;

    revealText.forEach((text) => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
            },
              filter: "blur(20px)", 
              opacity: 0, 
              scale: 0.9,
              duration: 1, 
              ease: "power2.out",
        });
    });
});
