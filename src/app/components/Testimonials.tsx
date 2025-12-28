import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    procedure: 'Rhinoplasty',
    rating: 5,
    text: 'Dr. Obayemi exceeded all my expectations. The results are natural and beautiful. I couldn\'t be happier with my rhinoplasty.',
    date: '2024',
  },
  {
    id: 2,
    name: 'Michael Chen',
    procedure: 'Facial Rejuvenation',
    rating: 5,
    text: 'Professional, caring, and incredibly skilled. The entire experience was wonderful from consultation to recovery.',
    date: '2024',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    procedure: 'Eyelid Surgery',
    rating: 5,
    text: 'I feel like a new person! Dr. Obayemi\'s expertise and attention to detail made all the difference.',
    date: '2024',
  },
  {
    id: 4,
    name: 'James Thompson',
    procedure: 'Reconstructive Surgery',
    rating: 5,
    text: 'After my accident, I thought I\'d never look normal again. Dr. Obayemi restored not just my appearance but my confidence.',
    date: '2024',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    procedure: 'Gender Affirmation',
    rating: 5,
    text: 'Dr. Obayemi understood exactly what I needed. The results are everything I hoped for and more.',
    date: '2024',
  },
  {
    id: 6,
    name: 'David Park',
    procedure: 'Non-Surgical Treatments',
    rating: 5,
    text: 'The non-surgical options were perfect for me. Quick, effective, and no downtime. Highly recommend!',
    date: '2024',
  },
  {
    id: 7,
    name: 'Rachel Martinez',
    procedure: 'Facial Rejuvenation',
    rating: 5,
    text: 'Outstanding results! Dr. Obayemi is truly an artist. I look years younger and feel incredible.',
    date: '2024',
  },
  {
    id: 8,
    name: 'Robert Kim',
    procedure: 'Rhinoplasty',
    rating: 5,
    text: 'The best decision I\'ve ever made. Dr. Obayemi listened to my concerns and delivered exactly what I wanted.',
    date: '2024',
  },
];

// Duplicate testimonials for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  const ref = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  
  // Faster speed on mobile (10s) vs desktop (40s)
  const animationDuration = isMobile ? 10 : 40;
  
  // Calculate total width for drag constraints
  const cardWidth = isMobile ? 280 : 450;
  const gap = isMobile ? 16 : 24;
  const singleSetWidth = testimonials.length * (cardWidth + gap);

  // Prevent overscroll/white line on mobile
  useEffect(() => {
    if (isMobile && carouselRef.current) {
      const handleTouchMove = (e: TouchEvent) => {
        // Only prevent if we're dragging horizontally
        if (isDragging) {
          e.preventDefault();
        }
      };

      const element = carouselRef.current;
      element.addEventListener('touchmove', handleTouchMove, { passive: false });
      
      return () => {
        element.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [isMobile, isDragging]);

  return (
    <section id="reviews" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-[#d4af37] tracking-wider uppercase inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Reviews
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl text-white mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Patient Reviews
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Real experiences from patients who have trusted us with their care.
          </motion.p>
        </motion.div>

        {/* Marquee Carousel */}
        <div ref={ref} className="relative" style={{ overscrollBehavior: 'none' }}>
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Carousel Container */}
          <div className="overflow-hidden overscroll-x-none" ref={carouselRef} style={{ touchAction: 'pan-y pinch-zoom' }}>
            <motion.div
              ref={carouselRef}
              className="flex gap-4 md:gap-6"
              style={{ touchAction: isMobile ? 'pan-x' : 'auto' }}
              animate={isMobile && isDragging ? { x: dragX } : {
                x: ['0%', '-50%'], // Move exactly half the width for seamless loop
              }}
              transition={isMobile && isDragging ? { type: 'spring', damping: 25, stiffness: 200 } : {
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: animationDuration,
                  ease: 'linear',
                },
              }}
              drag={isMobile ? 'x' : false}
              dragConstraints={{ left: -singleSetWidth, right: 0 }}
              dragElastic={0}
              dragMomentum={false}
              onDrag={(_, info) => {
                if (isMobile) {
                  setDragX(info.offset.x);
                }
              }}
              onDragStart={(event) => {
                if (isMobile) {
                  setIsDragging(true);
                  controls.stop();
                  // Prevent default browser behaviors
                  if (event && 'preventDefault' in event) {
                    event.preventDefault();
                  }
                }
              }}
              onDragEnd={(_, info) => {
                if (isMobile) {
                  // Add momentum-based scrolling
                  const velocity = info.velocity.x;
                  let newX = info.offset.x + velocity * 0.15;
                  
                  // Constrain to bounds
                  newX = Math.max(-singleSetWidth, Math.min(0, newX));
                  
                  setDragX(newX);
                  
                  // Resume auto-scroll after a delay
                  setTimeout(() => {
                    setIsDragging(false);
                    setDragX(0);
                  }, 3000);
                }
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[450px] bg-gray-900 p-4 md:p-6 rounded-lg shadow-xl relative"
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Quote Icon */}
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-[#d4af37] mb-3 md:mb-4 opacity-50" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-white mb-4 md:mb-6 leading-relaxed italic text-xs sm:text-sm md:text-base">
                    "{testimonial.text}"
                  </p>

                  {/* Patient Info */}
                  <div className="border-t border-gray-700 pt-3 md:pt-4">
                    <p className="text-white font-semibold text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-[#d4af37] text-xs md:text-sm">{testimonial.procedure}</p>
                    <p className="text-gray-400 text-xs mt-1">{testimonial.date}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

