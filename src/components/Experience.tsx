
import React, { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Building2, Award } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          if (entry.target.querySelector('.stagger-animate')) {
            entry.target.querySelector('.stagger-animate')?.classList.add('running');
          }
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
    <section id="experience" ref={sectionRef} className="py-20 px-6 section-animate">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2">
            <span className="chip">Work Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 2.5 years of industry experience working with cutting-edge testing technologies and methodologies.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 mb-8 hover-card stagger-animate">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center stagger-item">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <div className="stagger-item">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">Automation & Functional Test Engineer</h3>
                <Badge variant="outline" className="md:ml-2 w-fit">Current Role</Badge>
              </div>
              <div className="flex items-center text-muted-foreground mb-4">
                <Building2 size={16} className="mr-2" />
                <span className="mr-4">Accenture Solutions Private Limited</span>
                <CalendarDays size={16} className="mr-2" />
                <span>November 2022 - Present</span>
              </div>
              <div className="space-y-4">
                <p>
                  Working on automating web-based/mobile applications for a US Health Care Provider using Selenium Web Driver and Appium.
                </p>
                <div>
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Automate regression suite for critical and high priority functional areas</li>
                    <li>Identify and develop test scripts for enhancements in monthly fixes and new feature updates</li>
                    <li>Maintain existing automated regression suites</li>
                    <li>Functional testing for monthly maintenance and enhancements</li>
                    <li>Test reporting to onsite stakeholders and participation in stand-up calls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Selenium Web/Mobile Driver</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Maven</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">TestNG</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Jenkins</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">qTest</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">JIRA</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">GitHub</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 mb-12 hover-card">
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-amber-500 mr-3" />
            <h3 className="text-xl font-bold">Achievements</h3>
          </div>
          <div className="glass-container rounded-xl p-6">
            <p className="text-lg">
              Was part of the team which was awarded the <span className="font-semibold">'Best Team'</span> for outstanding contribution to the client.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 hover-card">
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-blue-500 mr-3" />
            <h3 className="text-xl font-bold">Certifications</h3>
          </div>
          <div className="glass-container rounded-xl p-6">
            <p className="text-lg">
              Accenture certified Selenium and UFT Test Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
