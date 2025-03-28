
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Code, Database, Terminal, Code2, Laptop, CpuIcon } from 'lucide-react';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    icon: React.ReactNode;
  }[];
}

const getIconForSkill = (skillName: string) => {
  const skillNameLower = skillName.toLowerCase();
  
  if (skillNameLower.includes('java')) {
    return <Terminal className="text-amber-600" size={24} />;
  } else if (skillNameLower.includes('python')) {
    return <Code2 className="text-blue-500" size={24} />;
  } else if (skillNameLower.includes('c')) {
    return <Terminal className="text-purple-600" size={24} />;
  } else if (skillNameLower.includes('script')) {
    return <Code className="text-green-500" size={24} />;
  } else if (skillNameLower.includes('sql') || skillNameLower.includes('oracle') || skillNameLower.includes('database')) {
    return <Database className="text-blue-600" size={24} />;
  } else if (skillNameLower.includes('selenium') || skillNameLower.includes('rest') || skillNameLower.includes('uft') || skillNameLower.includes('uipath')) {
    return <Laptop className="text-gray-600" size={24} />;
  } else if (skillNameLower.includes('jira') || skillNameLower.includes('test') || skillNameLower.includes('alm') || skillNameLower.includes('qtest')) {
    return <CpuIcon className="text-indigo-500" size={24} />;
  } else if (skillNameLower.includes('maven')) {
    return <Code className="text-red-500" size={24} />;
  }
  
  return <Code className="text-gray-500" size={24} />;
};

const skills: Skill[] = [
  {
    category: "Automation Tools",
    items: [
      { name: "Selenium WebDriver", level: 90, icon: getIconForSkill("Selenium WebDriver") },
      { name: "HP UFT", level: 75, icon: getIconForSkill("HP UFT") },
      { name: "UiPath", level: 70, icon: getIconForSkill("UiPath") },
      { name: "Rest Assured", level: 85, icon: getIconForSkill("Rest Assured") },
    ]
  },
  {
    category: "Build Tools",
    items: [
      { name: "Maven", level: 85, icon: getIconForSkill("Maven") },
    ]
  },
  {
    category: "Scripting Languages",
    items: [
      { name: "Java", level: 85, icon: getIconForSkill("Java") },
      { name: "Python", level: 75, icon: getIconForSkill("Python") },
      { name: "C", level: 70, icon: getIconForSkill("C") },
      { name: "VB Script", level: 65, icon: getIconForSkill("VB Script") },
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "SQL Server", level: 80, icon: getIconForSkill("SQL Server") },
      { name: "Oracle", level: 75, icon: getIconForSkill("Oracle") },
    ]
  },
  {
    category: "Test Management Tools",
    items: [
      { name: "ALM", level: 85, icon: getIconForSkill("ALM") },
      { name: "Jira", level: 90, icon: getIconForSkill("Jira") },
      { name: "qTest", level: 80, icon: getIconForSkill("qTest") },
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
          const skillElements = entry.target.querySelectorAll('.skill-item');
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
                    <div 
                      key={skill.name} 
                      id={`skill-${skillIndex}`}
                      className={cn(
                        "skill-item flex items-center space-x-3 p-2 rounded-lg",
                        animatedSkills[`skill-${skillIndex}`] ? "opacity-100" : "opacity-0"
                      )}
                      style={{
                        transition: 'opacity 0.5s ease-out', 
                        transitionDelay: `${skillIndex * 0.1}s`
                      }}
                    >
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
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
