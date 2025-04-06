
import React, { useEffect, useRef, useState } from 'react';
import { Layers, Calendar, ExternalLink, Award, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  period: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  certificate?: string;
  isPersonal?: boolean;
}

const projectsData: Project[] = [
  {
    title: "US Health Care Provider App Automation",
    period: "November 2022 - Present",
    description: "Automation of web and mobile applications for a US Health Care provider. Focusing on automating regression suite for critical and high priority functional areas to streamline regression testing and prevent defect slippage to production.",
    techStack: ["Selenium WebDriver", "Appium", "Maven", "TestNG", "Jenkins", "qTest", "JIRA", "GitHub"]
  },
  {
    title: "AI Chatbot Test Automation with Selenium & Dialogflow",
    period: "January 2022 - August 2022",
    description: "Developed an automated testing framework to validate responses of an AI-powered chatbot (DeepAI) by comparing its answers with a Dialogflow agent. Implemented Behavior-Driven Development (BDD) using Cucumber to define test scenarios in plain English.",
    techStack: ["Selenium WebDriver", "TestNG", "Cucumber (BDD)", "Dialogflow API", "Google Cloud SDK", "Maven"],
    github: "https://github.com/RATHIKR520/ai-chatbot",
    isPersonal: true
  },
  {
    title: "Smart Home Products and Automation Biometric Door lock system using IOT",
    period: "November 2019 - May 2020",
    description: "Storing biometric data of employees in the fingerprint module with respective names mapped in the code. Implementation triggered biometric alerts to administrator through SMS whenever the system was accessed.",
    techStack: ["Arduino", "GSM Module", "Relay", "Solenoid lock", "Fingerprint sensor(R305)", "Arduino IDE"],
    certificate: "/lovable-uploads/5a37f7bd-4271-4ea7-968c-16ebcc990261.png",
    github: "https://github.com/RATHIKR520/-Smart-Home-Products-and-Automation-Biometric-Door-lock-system-using-IOT",
    isPersonal: true
  },
  {
    title: "Development of Job Portal Website",
    period: "February 2021 - May 2021",
    description: "Contributed to the UI development of a job portal application where users can seek or create job listings.",
    techStack: ["Python", "HTML", "CSS"],
    certificate: "/lovable-uploads/b0da0aa6-4b69-4081-8f8d-320516fecbd0.png",
    github: "https://github.com/yourusername/job-portal",
    isPersonal: true
  }
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 section-animate">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2">
            <span className="chip">Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Project Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my professional and personal projects.
          </p>
        </div>

        <div className="stagger-animate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="stagger-item glass-card rounded-2xl overflow-hidden hover-card h-full flex flex-col">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3"></div>
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <div className="flex items-center space-x-2">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                    {project.certificate && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" className="p-0 h-auto" aria-label="View Certificate">
                            <Award size={18} className="text-amber-500" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <img 
                            src={project.certificate} 
                            alt={`Certificate for ${project.title}`} 
                            className="w-full h-auto" 
                          />
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span>{project.period}</span>
                  </div>
                  {project.isPersonal && (
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                      Personal Project
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="mt-auto">
                  <h4 className="font-medium mb-2 text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
