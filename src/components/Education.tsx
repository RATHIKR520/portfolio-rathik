import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa: string;
}

const educationData: EducationItem[] = [
  {
    institution: "N.M.A.M Institute of Technology",
    location: "Nitte, Karnataka, India",
    degree: "B.E in Electronics and Communication Engineering",
    period: "2018-2022",
    gpa: "GPA: 6.72"
  },
  {
    institution: "Viveka Pre University College",
    location: "Kota, Karnataka, India",
    degree: "Science PCME",
    period: "2016-2018",
    gpa: "Percentage: 77%"
  },
  {
    institution: "S.M.S English Medium School",
    location: "Brahmavar, Karnataka, India",
    degree: "CBSE",
    period: "2004-2016",
    gpa: "CGPA: 8.2"
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
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
    <section id="education" ref={sectionRef} className="py-20 px-6 section-animate">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2">
            <span className="chip">Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Academic Background</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational journey and academic achievements.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          <div className="stagger-animate space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className="stagger-item relative">
                <div className="flex flex-col md:flex-row md:items-center">
                  {/* Left side card (visible only on desktop when index is even) */}
                  {!isMobile && index % 2 === 0 && (
                    <div className="md:w-1/2 md:pr-8 flex md:justify-end">
                      <div className="glass-card p-6 rounded-xl hover-card w-full">
                        <div className="flex items-center mb-2">
                          <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                          <h3 className="font-bold">{item.institution}</h3>
                        </div>
                        <div className="text-sm text-muted-foreground mb-1 flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{item.location}</span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-3 flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{item.period}</span>
                        </div>
                        <p className="font-medium">{item.degree}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.gpa}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Timeline circle */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  {/* Mobile card OR right side card on desktop */}
                  <div className={cn(
                    "md:w-1/2 md:pl-8",
                    isMobile ? "w-full ml-12" : (index % 2 === 1 ? "w-full" : "hidden md:block")
                  )}>
                    <div className="glass-card p-6 rounded-xl hover-card w-full">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="font-bold">{item.institution}</h3>
                      </div>
                      <div className="text-sm text-muted-foreground mb-1 flex items-center">
                        <MapPin size={14} className="mr-1" />
                        <span>{item.location}</span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-3 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                      <p className="font-medium">{item.degree}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.gpa}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
