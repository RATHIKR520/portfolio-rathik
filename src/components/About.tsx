
import React, { useEffect, useRef } from 'react';

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
          <div className="w-full md:w-1/2">
            <div className="glass-card rounded-2xl overflow-hidden p-10 aspect-square flex items-center justify-center">
              <div className="text-8xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 animate-float">
                QA
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="mb-2">
              <span className="chip">About Me</span>
            </div>
            <h2 className="section-heading">Career Summary</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              I am an experienced Automation Test Engineer with nearing 2.5+ years of industry experience currently working with Accenture Solutions Private Limited.
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
