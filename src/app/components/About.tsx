import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import drObayemiImage from '../../assets/817b094a773c43859edfea328c9666bff094136d.png';
import vidSrc from '../../assets/vid.mp4';
import { Award, GraduationCap, Heart, Globe } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Dual board-certified in facial plastics and head & neck surgery',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'MD MBA with advanced surgical training',
    },
    {
      icon: Heart,
      title: 'Mentorship',
      description: 'Dedicated to empowering the next generation of surgeons',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Serving patients worldwide through foundation initiatives',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black">
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
            About
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl text-white mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Meet Ade Obsyemi Jr MD MBA
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#d4af37] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={drObayemiImage}
                alt="Dr. Ade Obayemi Jr"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent"></div>
            </motion.div>
            {/* Credentials Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-[#d4af37] text-[#0a1628] p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider">Dual Board</p>
                <p className="text-sm uppercase tracking-wider">Certified</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h3
              className="text-3xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Precision. Artistry. Excellence.
            </motion.h3>
            <motion.p
              className="text-white mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Dr. Ade Obayemi Jr, MD MBA, is a dual board-certified facial plastic and
              reconstructive surgeon with a unique understanding of both the structure and
              function of the face. His journey combines surgical precision with artistic
              vision to deliver exceptional, natural-looking results.
            </motion.p>
            <motion.p
              className="text-white mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With advanced training in both cosmetic and reconstructive procedures, Dr.
              Obayemi brings a comprehensive approach to facial aesthetics. His expertise
              spans from minimally invasive treatments to complex surgical procedures,
              always prioritizing patient safety and satisfaction.
            </motion.p>

            {/* Highlights */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6 mt-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                  >
                    <highlight.icon className="w-6 h-6 text-[#d4af37]" />
                  </motion.div>
                  <div>
                    <h4 className="text-white mb-1">{highlight.title}</h4>
                    <p className="text-sm text-gray-300">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Video Section */}
            <motion.div
              className="mt-12 rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <video
                src={vidSrc}
                className="w-full h-[600px] object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}