import { motion } from 'framer-motion';
import { Button } from './ui/button';
import heroImage from '@/assets/Facial-Treatments-in-Dubai.webp';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
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
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-6, mt-20" variants={itemVariants}>
            <motion.span
              className="text-[#d4af37] text-[20px] tracking-wider uppercase inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to AO Facial Plastics
            </motion.span>
          </motion.div>
          <motion.h1
            className="text-[120px] md:text-[100px] text-white mb-10 leading-tight"
            variants={itemVariants}
          >
            The Facial
            <motion.span
              className="block text-[#d4af37]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Architect
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-[20px] text-gray-300 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Dual board-certified head and neck and facial plastic surgeon dedicated to
            enhancing natural beauty through advanced surgical techniques and personalized
            care.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-[#d4af37] text-[#0a1628] hover:bg-[#D3AF37] px-8"
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(212, 175, 55, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
              </motion.button>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
    </section>
  );
}