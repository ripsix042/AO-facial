import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Determine which section is currently in view
      const sections = ['home', 'about', 'services', 'reviews', 'faq', 'foundation', 'contact'];
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
    setIsMobileMenuOpen(false);
  };

  const navigateToHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={navigateToHome}
            className="flex items-center gap-2 -ml-20"
            whileHover="hover"
            variants={logoVariants}
          >
            <motion.div
              className="bg-white p-1 rounded"
              whileHover={{ boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)' }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={logo} 
                alt="AO Facial Plastics" 
                className="h-16 w-auto"
              />
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
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
            <motion.div variants={itemVariants}>
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
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden transition-colors ${
              currentSection === 'about' || currentSection === 'contact' || currentSection === 'faq' || currentSection === 'reviews'
                ? 'text-[#0a1628]'
                : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {[
                { id: 'home', label: 'Home', onClick: () => {
                  if (window.location.hash) {
                    navigateToHome();
                  } else {
                    scrollToSection('home');
                  }
                }},
                { id: 'about', label: 'About', onClick: () => scrollToSection('about') },
                { id: 'services', label: 'Services', onClick: () => scrollToSection('services') },
                { id: 'faq', label: 'FAQ', onClick: () => scrollToSection('faq') },
                { id: 'foundation', label: 'Foundation', onClick: () => scrollToSection('foundation') },
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={item.onClick}
                  className={`relative transition-colors text-left px-3 py-1 ${
                    currentSection === 'about' || currentSection === 'contact' || currentSection === 'faq' || currentSection === 'reviews'
                      ? currentSection === item.id
                        ? 'text-[#d4af37] font-semibold'
                        : 'text-[#0a1628] hover:text-[#d4af37]'
                      : currentSection === item.id
                      ? 'text-[#d4af37] font-semibold'
                      : 'text-white hover:text-[#d4af37]'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {currentSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]"
                      layoutId="mobileActiveIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
            <Button
              onClick={() => scrollToSection('contact')}
                  className="bg-[#d4af37] text-[#0a1628] hover:bg-[#D3AF37]"
                  asChild
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
            >
              Book Consultation
                  </motion.button>
            </Button>
              </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
