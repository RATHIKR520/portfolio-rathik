
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-display font-bold">QA Automation Engineer</p>
            <p className="text-sm text-muted-foreground mt-1">Crafting Quality Through Automation</p>
          </div>
          
          <a 
            href="#" 
            className="glass-container p-3 rounded-full inline-flex items-center justify-center hover:shadow-glass-lg transition-all duration-300 transform hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} | QA Automation Engineer Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
