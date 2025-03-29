
import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Calendar, User, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
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
    <section id="contact" ref={sectionRef} className="py-20 px-6 section-animate bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2">
            <span className="chip">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Personal Information</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries or opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Left Column - Contact Details */}
          <div className="glass-card rounded-2xl p-8 hover-card bg-white/80 shadow-lg border-t border-l border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-500 dark:text-gray-400">Full Name</h3>
                  <p className="text-lg font-semibold break-words">Rathik Ravi Poojary</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-500 dark:text-gray-400">Age & Date of Birth</h3>
                  <p className="text-lg font-semibold break-words">24 years (July 3, 2000)</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-500 dark:text-gray-400">Location</h3>
                  <p className="text-lg font-semibold break-words">Bengaluru, India</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors">
                  <User className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-500 dark:text-gray-400">Languages Known</h3>
                  <p className="text-lg font-semibold break-words">English, Kannada, Hindi</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Links */}
          <div className="glass-card rounded-2xl p-8 hover-card bg-white/80 shadow-lg border-t border-l border-white/50 hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4 group-hover:bg-red-200 transition-colors">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-500 dark:text-gray-400">Email</h3>
                  <p className="text-lg font-semibold break-all">rathikpoojary9686@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4 group-hover:bg-yellow-200 transition-colors">
                  <Phone className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-500 dark:text-gray-400">Phone</h3>
                  <p className="text-lg font-semibold break-words">+91 9731720990</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center mr-4 group-hover:bg-sky-200 transition-colors">
                  <Linkedin className="w-5 h-5 text-sky-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-500 dark:text-gray-400">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/rathik-ravi-poojary-526640190" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center flex-wrap group-hover:underline transition-all duration-200"
                  >
                    <span className="text-lg font-semibold">Rathik Ravi Poojary</span>
                    <ExternalLink size={14} className="ml-1 flex-shrink-0" />
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center mr-4 group-hover:bg-slate-200 transition-colors">
                  <Github className="w-5 h-5 text-slate-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-500 dark:text-gray-400">GitHub</h3>
                  <a 
                    href="https://github.com/RATHIKR520" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 flex items-center flex-wrap group-hover:underline transition-all duration-200"
                  >
                    <span className="text-lg font-semibold">RATHIKR520</span>
                    <ExternalLink size={14} className="ml-1 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
