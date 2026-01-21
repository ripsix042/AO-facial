import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import heroImage from '@/assets/Facial-Treatments-in-Dubai1.webp';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo.png';

// Letter-by-letter animation component
const LetterAnimation = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  return (
    <span className="inline-block">
      {children.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.03,
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

// Word-by-word animation component (alternative for longer text)
const WordAnimation = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  return (
    <>
      {children.split(' ').map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: delay + i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
};

export function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      x: '-100%',
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      x: '-100%',
      transition: { duration: 0.3 }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-4 md:pt-0 w-full max-w-full"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <img
          src={heroImage}
          alt="Dr. Obayemi with Patient"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 w-full max-w-full pt-2 md:pt-0">
        <div className="flex items-center justify-between md:hidden mb-2">
          <motion.button
            onClick={navigateToHome}
            className="flex items-center gap-2 ml-0"
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

          {/* Mobile Menu Button - only visible on mobile */}
          <motion.button
            className="md:hidden transition-colors z-50 relative text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
        <motion.div
          className="max-w-5xl mx-auto md:text-center mt-4 md:mt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <motion.div className="mb-6, mt-20" variants={itemVariants}>
            <motion.span
              className="text-[#d4af37] text-[20px] md:text-[60px] font-bold tracking-wider uppercase inline-block text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to
            </motion.span>
          </motion.div> */}
          <motion.h1
            className="text-[38px] md:text-[110px] font-bold text-white mb-10 leading-tight text-center md:text-center mt-29 md:mt-0"
            variants={itemVariants}
          >
            <LetterAnimation delay={0.3}>AO Facial Plastics</LetterAnimation>
            <motion.span
              className="block text-[#d4af37] text-[28px] leading-[100px] md:text-[50px] md:leading-[150px] mt-10 md:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <LetterAnimation delay={1.2}>The Facial Architect</LetterAnimation>
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-[18px] text-gray-300 mb-8 font-bold leading-relaxed text-center md:text-center mt-30 md:mt-0"
            variants={itemVariants}
          >
            <WordAnimation delay={0.8}>
              Dual board-certified head, neck and facial plastic surgeon dedicated to
              enhancing natural beauty through advanced surgical techniques and personalized
              care.
            </WordAnimation>
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:justify-center md:pt-4"
            variants={itemVariants}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-[#d4af37] text-[#0a1628] hover:bg-[#D3AF37] px-8 mt-5 md:mt-0"
              asChild
            >
              <motion.button
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                Schedule Free Consultation
              </motion.button>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#d4af37] rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2"></div>
        </motion.div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Drawer */}
            <motion.div
              className="md:hidden fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-[#0a1628] shadow-2xl z-50 overflow-y-auto"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6 pt-20">
                {/* Mobile Logo */}
                <motion.button
                  onClick={navigateToHome}
                  className="mb-8 flex items-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="bg-white p-1 rounded">
                    <img 
                      src={logo} 
                      alt="AO Facial Plastics" 
                      className="h-12 w-auto"
                    />
                  </div>
                </motion.button>

                {/* Mobile Menu Items */}
                <div className="flex flex-col gap-2">
                  {[
                    { id: 'home', label: 'Home', onClick: () => {
                      if (window.location.hash) {
                        navigateToHome();
                      } else {
                        scrollToSection('home');
                      }
                    }},
                    { id: 'about', label: 'About', onClick: () => scrollToSection('about') },
                    { id: 'gallery', label: 'Gallery', onClick: () => scrollToSection('gallery') },
                    { id: 'reviews', label: 'Reviews', onClick: () => scrollToSection('reviews') },
                    { id: 'faq', label: 'FAQ', onClick: () => scrollToSection('faq') },
                    { id: 'foundation', label: 'Foundation', onClick: () => scrollToSection('foundation') },
                  ].map((item, index) => (
                    <motion.button
                      key={item.id}
                      custom={index}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => {
                        item.onClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="relative w-full text-left px-4 py-3 rounded-lg transition-colors text-white hover:bg-[#1a2942]"
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.div
                    custom={6}
                    variants={mobileItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-4"
                  >
                    <Button
                      onClick={() => {
                        scrollToSection('contact');
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full bg-[#d4af37] text-[#0a1628] hover:bg-[#D3AF37] py-6 text-lg font-semibold"
                      asChild
                    >
                      <motion.button
                        whileTap={{ scale: 0.98 }}
                      >
                        Book Consultation
                      </motion.button>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}