
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 section-animate">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative mb-6 transform hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 blur-xl opacity-50 animate-pulse"></div>
              <Avatar className="h-60 w-60 rounded-full border-4 border-white shadow-xl relative z-10">
                <AvatarImage 
                  src="/lovable-uploads/42f4b75c-f015-4874-9778-49d5dbe2203b.png" 
                  alt="Profile Photo" 
                  className="object-cover" 
                  objectPosition="center 20%" 
                />
                <AvatarFallback className="text-5xl">RP</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="mb-2">
              <span className="chip">About Me</span>
            </div>
            <h2 className="section-heading">Career Summary</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              I am an experienced Automation Test Analyst with over 3 years of industry experience currently working with Accenture Solutions Private Limited.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              My primary expertise is on automation using Selenium Web driver, Appium and Rest Assured. I have worked in manual testing including functional, adhoc and client acceptance testing.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              I also have experience in both waterfall and agile methodologies. I am a quick learner, a good team-player, hard worker and I possess good debugging and coding skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#skills" 
                className="glass-container px-6 py-3 rounded-full font-medium inline-flex items-center justify-center hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                My Skills
              </a>
              <a 
                href="#projects" 
                className="glass-card px-6 py-3 rounded-full font-medium inline-flex items-center justify-center border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1"
              >
                My Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
