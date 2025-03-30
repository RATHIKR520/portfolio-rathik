
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Sparkles, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
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
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-6 section-animate bg-[#F1F1F1] pt-20 relative overflow-hidden">
      {/* Animated SVG elements with improved visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <Star 
          className="absolute text-blue-500/80 animate-float" 
          style={{
            top: '10%',
            left: '10%',
            animationDelay: '0s',
            transform: 'rotate(-10deg)',
          }}
          size={isMobile ? 32 : 40}
        />
        <Star 
          className="absolute text-blue-600/80 animate-float" 
          style={{
            top: '15%',
            right: '15%',
            animationDelay: '1.5s',
            transform: 'rotate(15deg)',
          }}
          size={isMobile ? 24 : 32}
        />
        <Sparkles 
          className="absolute text-blue-700/70 animate-float" 
          style={{
            bottom: '20%',
            left: '20%',
            animationDelay: '2s',
          }}
          size={isMobile ? 28 : 36}
        />
        <Sparkles 
          className="absolute text-blue-500/70 animate-float" 
          style={{
            bottom: '12%',
            right: '12%',
            animationDelay: '3.5s',
          }}
          size={isMobile ? 36 : 48}
        />
      </div>
      
      <div className="container max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center mb-8 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-md -z-10"></div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-400/20 animate-pulse"></div>
            <Avatar className="h-28 w-28 rounded-full border-4 border-white shadow-lg mb-4 relative">
              <AvatarImage 
                src="/lovable-uploads/42f4b75c-f015-4874-9778-49d5dbe2203b.png" 
                alt="Profile Photo" 
                className="object-cover" 
                objectPosition="center top" 
              />
              <AvatarFallback className="text-3xl">RP</AvatarFallback>
            </Avatar>
            <div className="absolute -top-2 -right-2 text-yellow-400 animate-pulse">
              <Sparkles size={isMobile ? 22 : 24} />
            </div>
          </div>
          <span className="chip bg-blue-50 text-blue-700 border border-blue-200">
            Automation Test Engineer
          </span>
        </div>
        <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 leading-tight animate-fade-up bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
          Crafting Quality Through Automation
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Experienced QA engineer specializing in Selenium WebDriver, Appium and Rest Assured with 2.5+ years of industry expertise.
        </p>
        <div className={`flex flex-col ${isMobile ? 'space-y-4' : 'sm:flex-row items-center justify-center gap-4'} animate-fade-up`} style={{ animationDelay: '0.4s' }}>
          <a 
            href="#experience" 
            className="glass-container px-6 py-3 rounded-full font-medium inline-flex items-center justify-center hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-1 bg-blue-600 text-white relative overflow-hidden group"
          >
            <span className="relative z-10">View Experience</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 group-hover:opacity-90 transition-opacity duration-300"></span>
          </a>
          <a 
            href="#contact" 
            className="glass-card px-6 py-3 rounded-full font-medium inline-flex items-center justify-center border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </a>
          <a 
            href="https://github.com/RATHIKR520" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 rounded-full font-medium inline-flex items-center justify-center border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Github size={18} className="mr-2" />
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/rathik-ravi-poojary-526640190" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-3 rounded-full font-medium inline-flex items-center justify-center border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Linkedin size={18} className="mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
