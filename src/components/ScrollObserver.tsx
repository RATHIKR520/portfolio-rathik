
import React, { useEffect } from 'react';

const ScrollObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // If the target has a stagger-animate child, add a class to it as well
            if (entry.target.querySelector('.stagger-animate')) {
              entry.target.querySelector('.stagger-animate')?.classList.add('running');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null;
};

export default ScrollObserver;
