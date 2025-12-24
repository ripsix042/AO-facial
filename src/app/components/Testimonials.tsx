import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

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
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
        <div ref={ref} className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: ['0%', '-50%'], // Move exactly half the width for seamless loop
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 40,
                  ease: 'linear',
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  className="flex-shrink-0 w-[400px] md:w-[450px] bg-gray-900 p-6 rounded-lg shadow-xl relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-[#d4af37] mb-4 opacity-50" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-white mb-6 leading-relaxed italic text-sm md:text-base">
                    "{testimonial.text}"
                  </p>

                  {/* Patient Info */}
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-[#d4af37] text-sm">{testimonial.procedure}</p>
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

