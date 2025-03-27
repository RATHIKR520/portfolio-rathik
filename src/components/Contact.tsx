
import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Calendar, User } from 'lucide-react';

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
    <section id="contact" ref={sectionRef} className="py-20 px-6 section-animate">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-2">
            <span className="chip">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Personal Information</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries or opportunities.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 hover-card max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start">
              <User className="w-5 h-5 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-muted-foreground">Full Name</h3>
                <p className="text-lg">QA Automation Engineer</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Calendar className="w-5 h-5 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-muted-foreground">Age & Date of Birth</h3>
                <p className="text-lg">24 years (July 3, 2000)</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-muted-foreground">Location</h3>
                <p className="text-lg">Karnataka, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="w-5 h-5 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-muted-foreground">Email</h3>
                <p className="text-lg">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="w-5 h-5 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-muted-foreground">Phone</h3>
                <p className="text-lg">+91 XXXXX XXXXX</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <User className="w-5 h-5 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-muted-foreground">Languages Known</h3>
                <p className="text-lg">English, Kannada, Hindi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
