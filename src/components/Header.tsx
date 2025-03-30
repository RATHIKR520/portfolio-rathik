
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Skills", href: "#skills" },
  { title: "Education", href: "#education" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    // Only add the listener if the menu is open
    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Add/remove body class to prevent scrolling and blur content
  useEffect(() => {
    if (mobileMenuOpen) {
      // Use direct DOM class manipulation instead of @apply
      document.body.classList.add('overflow-hidden');
      // Only blur the main content and footer, not the mobile menu itself
      document.getElementById('main-content')?.classList.add('blur-sm');
      document.getElementById('footer')?.classList.add('blur-sm');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.getElementById('main-content')?.classList.remove('blur-sm');
      document.getElementById('footer')?.classList.remove('blur-sm');
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.getElementById('main-content')?.classList.remove('blur-sm');
      document.getElementById('footer')?.classList.remove('blur-sm');
    };
  }, [mobileMenuOpen]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
      isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-display font-bold tracking-tighter"
        >
          My Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium text-sm hover:text-primary transition-colors relative group"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button - prevent event bubbling */}
        <button 
          className="md:hidden text-foreground focus:outline-none z-50"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu - No blur effect applied to this content */}
      {mobileMenuOpen && (
        <div className={cn(
          "fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md pt-20",
          "flex flex-col items-center justify-start"
        )}>
          <div className="container mx-auto flex flex-col items-center pt-10">
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-display text-2xl font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
