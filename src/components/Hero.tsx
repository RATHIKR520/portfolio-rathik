
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-6 section-animate">
      <div className="container max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center mb-8 animate-fade-in">
          <Avatar className="h-28 w-28 rounded-full border-4 border-white shadow-lg mb-4">
            <AvatarImage 
              src="/lovable-uploads/42f4b75c-f015-4874-9778-49d5dbe2203b.png" 
              alt="Profile Photo" 
              className="object-cover" 
              objectPosition="center top" 
            />
            <AvatarFallback className="text-3xl">QA</AvatarFallback>
          </Avatar>
          <span className="chip bg-blue-50 text-blue-700 border border-blue-200">
            Automation Test Engineer
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight animate-fade-up">
          Crafting Quality Through Automation
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Experienced QA engineer specializing in Selenium WebDriver, Appium and Rest Assured with 2.5+ years of industry expertise.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#experience" 
            className="glass-container px-6 py-3 rounded-full font-medium inline-flex items-center justify-center hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View Experience
          </a>
          <a 
            href="#contact" 
            className="glass-card px-6 py-3 rounded-full font-medium inline-flex items-center justify-center border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 rounded-full font-medium inline-flex items-center justify-center border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Github size={18} className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
