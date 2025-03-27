
import React, { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const skills: Skill[] = [
  {
    category: "Automation Tools",
    items: [
      { name: "Selenium WebDriver", level: 90 },
      { name: "HP UFT", level: 75 },
      { name: "UiPath", level: 70 },
      { name: "Rest Assured", level: 85 },
    ]
  },
  {
    category: "Build Tools",
    items: [
      { name: "Maven", level: 85 },
    ]
  },
  {
    category: "Scripting Languages",
    items: [
      { name: "Java", level: 85 },
      { name: "Python", level: 75 },
      { name: "C", level: 70 },
      { name: "VB Script", level: 65 },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "SQL Server", level: 80 },
      { name: "Oracle", level: 75 },
    ]
  },
  {
    category: "Test Management Tools",
    items: [
      { name: "ALM", level: 85 },
      { name: "Jira", level: 90 },
      { name: "qTest", level: 80 },
    ]
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animatedSkills, setAnimatedSkills] = React.useState<Record<string, boolean>>({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Start animating skills
          const skillElements = entry.target.querySelectorAll('.skill-progress');
          skillElements.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                [skill.id]: true
              }));
            }, index * 100);
          });
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

  let skillIndex = 0;

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 section-animate">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2">
            <span className="chip">Technical Skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="glass-card rounded-2xl p-8 hover-card">
              <h3 className="text-xl font-bold mb-6">{skillCategory.category}</h3>
              <div className="space-y-6">
                {skillCategory.items.map((skill) => {
                  skillIndex++;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{animatedSkills[`skill-${skillIndex}`] ? skill.level : 0}%</span>
                      </div>
                      <Progress 
                        id={`skill-${skillIndex}`}
                        className={cn("skill-progress h-2 bg-gray-200 dark:bg-gray-700")}
                        value={animatedSkills[`skill-${skillIndex}`] ? skill.level : 0} 
                        style={{transition: 'value 1s ease-out'}}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
