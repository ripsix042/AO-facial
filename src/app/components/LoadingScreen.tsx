import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '../../assets/Elegant.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Minimum loading time for smooth animation
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#0a1628] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            {/* Logo Animation */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 200,
                damping: 15,
              }}
            >
              <motion.div
                className="p-4 rounded-lg inline-block"
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(212, 175, 55, 0.4)',
                    '0 0 30px rgba(212, 175, 55, 0.6)',
                    '0 0 0px rgba(212, 175, 55, 0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src={logo}
                  alt="AO Facial Plastics"
                  className="h-50 w-auto"
                />
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.h2
              className="text-2xl text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              AO Facial Plastics
            </motion.h2>

            {/* Loading Bar */}
            <motion.div
              className="w-64 h-1 bg-[#1a2942] rounded-full overflow-hidden mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-[#d4af37]"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="flex justify-center gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-[#d4af37] rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

