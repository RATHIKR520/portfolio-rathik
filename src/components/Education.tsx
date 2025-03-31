
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

  // Mobile view remains the same as before
  if (isMobile) {
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
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900"></div>
            
            <div className="stagger-animate space-y-12">
              {educationData.map((item, index) => (
                <div key={index} className="stagger-item relative">
                  <div className="flex flex-col">
                    {/* Timeline circle */}
                    <div className="absolute left-8 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10"></div>
                    
                    {/* Mobile card */}
                    <div className="w-full ml-12">
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
  }

  // Desktop/web view with enhanced hover animations similar to Personal Information cards
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
          {/* Timeline line - centered */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          <div className="stagger-animate space-y-24">
            {educationData.map((item, index) => (
              <div key={index} className="stagger-item relative">
                {/* Timeline circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 z-10"></div>
                
                <div className="flex items-start">
                  {/* Left side card for odd indices (0, 2) */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="w-1/2 pr-12">
                        <div className="glass-card rounded-2xl p-6 hover-card bg-white/80 shadow-lg border-t border-l border-white/50 hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center text-blue-600 mb-2 group">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                              <GraduationCap className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-800">{item.institution}</h3>
                          </div>
                          <div className="text-sm text-gray-600 mb-1 flex items-center">
                            <MapPin size={14} className="mr-1" />
                            <span>{item.location}</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-3 flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{item.period}</span>
                          </div>
                          <p className="font-medium text-gray-800">{item.degree}</p>
                          <p className="text-sm text-gray-600 mt-1">{item.gpa}</p>
                        </div>
                      </div>
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2"></div>
                      <div className="w-1/2 pl-12">
                        <div className="glass-card rounded-2xl p-6 hover-card bg-white/80 shadow-lg border-t border-l border-white/50 hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center text-blue-600 mb-2 group">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                              <GraduationCap className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-800">{item.institution}</h3>
                          </div>
                          <div className="text-sm text-gray-600 mb-1 flex items-center">
                            <MapPin size={14} className="mr-1" />
                            <span>{item.location}</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-3 flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{item.period}</span>
                          </div>
                          <p className="font-medium text-gray-800">{item.degree}</p>
                          <p className="text-sm text-gray-600 mt-1">{item.gpa}</p>
                        </div>
                      </div>
                    </>
                  )}
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
