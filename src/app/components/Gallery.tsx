import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { galleryItems } from '../data/gallery';

interface StackedCardProps {
  item: typeof galleryItems[0];
  stackPosition: 'left' | 'center' | 'right';
  onClick: () => void;
  isInView: boolean;
}

function StackedCardStack({ item, stackPosition, onClick, isInView }: StackedCardProps) {
  // Get images for this stack (show up to 5 for center, 3-4 for sides)
  const maxImages = stackPosition === 'center' ? 5 : stackPosition === 'left' ? 3 : 4;
  const imagesToShow = item.images?.slice(0, maxImages) || [item.image];
  
  const scale = stackPosition === 'center' ? 1 : 0.7;
  const translateX = stackPosition === 'left' ? -180 : stackPosition === 'right' ? 180 : 0;
  const opacity = stackPosition === 'center' ? 1 : 0.6;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50, x: translateX, scale: 0.8 },
    visible: {
      opacity: isInView ? opacity : 0,
      y: isInView ? 0 : 50,
      x: translateX,
      scale,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: stackPosition === 'center' ? 0.4 : 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, rotate: -5 },
    visible: (index: number) => ({
      opacity: 1 - (index * 0.05),
      y: 0,
      rotate: (index - (imagesToShow.length - 1) / 3) * 4,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 20,
        delay: index * 0.08,
      },
    }),
  };

  return (
    <motion.div
      className={`relative cursor-pointer ${
        stackPosition === 'center' 
          ? 'w-[280px] h-[430px] md:w-[340px] md:h-[453px] lg:w-[420px] lg:h-[560px]' 
          : 'w-[300px] h-[400px]'
      }`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: scale * 1.05,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      onClick={onClick}
    >
      {/* Stack of cards */}
      <AnimatePresence>
        {imagesToShow.map((img, index) => {
          const offsetX = (index - (imagesToShow.length - 1) / 9) * 20;
          const offsetY = index * 5;
          const zIndex = imagesToShow.length - index;
          
          return (
            <motion.div
              key={`${item.id}-${index}`}
              className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border-2 border-[#d4af37]/30"
              custom={index}
              variants={cardVariants}
              style={{
                x: offsetX,
                y: offsetY,
                zIndex,
                transformOrigin: 'center center',
              }}
              whileHover={index === 0 ? {
                scale: 1.09,
                rotate: 0,
                y: -5,
                transition: { 
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                }
              } : {
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              whileTap={index === 0 ? { scale: 1.05 } : {}}
            >
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ImageWithFallback
                  src={img}
                  alt={`${item.category} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Gradient overlay for text readability */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              />
              
              {/* Text overlay - only show on top card */}
              {index === 0 && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  <motion.h3
                    className="text-xl md:text-2xl font-semibold mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    {item.category}
                  </motion.h3>
                  <motion.p
                    className="text-sm md:text-base text-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                </motion.div>
              )}
              
              {/* Stack indicator - small number badge */}
              {index === 0 && imagesToShow.length > 1 && (
                <motion.div
                  className="absolute top-4 right-4 bg-[#d4af37] text-[#0a1628] px-3 py-1 rounded-full text-sm font-semibold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: 0.8 
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {imagesToShow.length} images
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  // Auto-play functionality
  useEffect(() => {
    if (!isInView || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(interval);
  }, [isInView, isPaused]);

  // Calculate which items to show (center, left, right)
  const getCurrentItems = () => {
    const total = galleryItems.length;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    
    return {
      left: galleryItems[prevIndex],
      center: galleryItems[currentIndex],
      right: galleryItems[nextIndex],
    };
  };

  const items = getCurrentItems();

  const handleStackClick = (index: number) => {
    setIsPaused(true);
    setCurrentIndex(index);
    setTimeout(() => setIsPaused(false), 4000);
  };

  const handleCenterClick = () => {
    const item = galleryItems[currentIndex];
    window.location.hash = `gallery-${item.id}`;
  };

  return (
    <section id="gallery" className="py-20 bg-[#0a1628]">
      <div ref={containerRef} className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-[#d4af37] tracking-wider uppercase inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Gallery
          </motion.span>
          <motion.h2
            className="text-4xl md:text-4xl lg:text-5xl text-white mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Beautiful Results
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore our portfolio of transformative results. Each procedure is tailored to
            enhance natural beauty while maintaining facial harmony.
          </motion.p>
        </motion.div>

        {/* Stacked Card Gallery Container */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className="relative h-[600px] md:h-[580px] lg:h-[650px] flex items-center justify-center overflow-visible"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Click to view more - Above center card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute top-0 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ 
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                }}
              >
                <motion.p
                  className="text-[#d4af37] text-sm md:text-lg font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  Click to view more
                </motion.p>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                >
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#d4af37]" />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Left Stack */}
            <StackedCardStack
              item={items.left}
              stackPosition="left"
              onClick={() => handleStackClick((currentIndex - 1 + galleryItems.length) % galleryItems.length)}
              isInView={isInView}
            />

            {/* Center Stack - Main */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                transition={{ 
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  duration: 0.6 
                }}
              >
                <StackedCardStack
                  item={items.center}
                  stackPosition="center"
                  onClick={handleCenterClick}
                  isInView={isInView}
                />
              </motion.div>
            </AnimatePresence>

            {/* Right Stack */}
            <StackedCardStack
              item={items.right}
              stackPosition="right"
              onClick={() => handleStackClick((currentIndex + 1) % galleryItems.length)}
              isInView={isInView}
              />

            {/* Navigation Indicators - Positioned at bottom center */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {galleryItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setIsPaused(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsPaused(false), 4000);
                  }}
                  className={`h-2 rounded-full ${
                    index === currentIndex
                      ? 'bg-[#d4af37] w-8'
                      : 'bg-gray-600 w-2 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to ${galleryItems[index].category}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    width: index === currentIndex ? 32 : 8,
                  }}
                  transition={{ 
                    delay: 0.8 + index * 0.05,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
