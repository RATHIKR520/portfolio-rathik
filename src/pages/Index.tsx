
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollObserver from '@/components/ScrollObserver';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-animate');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = (
          rect.top <= (window.innerHeight * 0.75) && 
          rect.bottom >= (window.innerHeight * 0.25)
        );
        
        if (isVisible) {
          section.classList.add('animate-in');
          
          // If the section has a stagger-animate child, add the running class to it
          if (section.querySelector('.stagger-animate')) {
            section.querySelector('.stagger-animate')?.classList.add('running');
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    // Preload profile image
    const preloadImage = new Image();
    preloadImage.src = '/lovable-uploads/42f4b75c-f015-4874-9778-49d5dbe2203b.png';
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollObserver />
    </div>
  );
};

export default Index;
