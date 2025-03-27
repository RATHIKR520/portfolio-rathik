
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
            <AvatarImage src="/lovable-uploads/20d0d214-c8bf-43d1-a739-8efa0ed66e1c.png" alt="Profile Photo" className="object-cover" />
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
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center justify-center text-sm text-muted-foreground hover:text-foreground transition-colors">
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
