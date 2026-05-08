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
                markers: false,
                toggleActions: 'play reverse play reverse',
            },
              filter: "blur(20px)", 
              opacity: 0, 
              scale: 0.9,
              duration: 1, 
              ease: "power2.out",
        });
    });
});


// Burger Menu Start
                document.addEventListener('DOMContentLoaded', function () {
                    const toggleButton = document.getElementById('mobile-menu-toggle');
                    const mobileMenu = document.getElementById('mobile-menu');
                    const menuIcon = document.getElementById('menu-icon');
                    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

                    if (!toggleButton || !mobileMenu) return;

                    toggleButton.addEventListener('click', function () {
                        mobileMenu.classList.toggle('hidden');

                        if (mobileMenu.classList.contains('hidden')) {
                            menuIcon.textContent = '☰'; // burger
                        } else {
                            menuIcon.textContent = '✕'; // cross
                        }
                    });

                    mobileLinks.forEach(link => {
                        link.addEventListener('click', function () {
                            mobileMenu.classList.add('hidden');
                            menuIcon.textContent = '☰';
                        });
                    });
                });
// Burger Menu End