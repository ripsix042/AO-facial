import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import logo from '../../assets/Elegant.png';

export function Navigation() {
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is currently in view
      const sections = ['home', 'about', 'gallery', 'reviews', 'faq', 'foundation', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const scrollPosition = window.scrollY + 100; // Offset for navigation height
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're on a policy page, navigate to home first
    if (window.location.hash && window.location.hash !== '') {
      window.location.hash = '';
      // Small delay to allow navigation back to home page
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'foundation', label: 'Foundation' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-6 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="hidden md:flex items-center justify-center relative">
          {/* Desktop Logo - Positioned on the left */}
          <motion.button
            onClick={navigateToHome}
            className="absolute left-0 flex items-center gap-2"
            whileHover="hover"
            variants={logoVariants}
          >
            <motion.div
              className="p-1 rounded"
              whileHover={{ boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)' }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={logo} 
                alt="AO Facial Plastics" 
                className="h-50 w-auto "
              />
            </motion.div>
          </motion.button>

          {/* Desktop Navigation - Centered */}
          <motion.div
            className="flex items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <motion.div key={item.id} className="relative" variants={itemVariants}>
                <motion.button
                  onClick={() => {
                    if (item.id === 'home') {
                      if (window.location.hash) {
                        navigateToHome();
                      } else {
                        scrollToSection('home');
                      }
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={`relative transition-colors px-3 py-1 ${
                    currentSection === 'about' || currentSection === 'contact' || currentSection === 'faq' || currentSection === 'reviews'
                      ? isActive
                        ? 'text-[#d4af37] font-semibold'
                        : 'text-[#0a1628] hover:text-[#d4af37]'
                      : isActive
                      ? 'text-[#d4af37] font-semibold'
                      : 'text-white hover:text-[#d4af37]'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]"
                      layoutId="activeIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              </motion.div>
            );
          })}
          </motion.div>

          {/* Book Consultation Button - Positioned on the right */}
          <motion.div 
            variants={itemVariants}
            className="absolute right-0"
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#d4af37] text-[#0a1628] hover:bg-[#D3AF37]"
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.button>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
