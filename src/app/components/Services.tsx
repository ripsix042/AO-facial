import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '../data/services';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    rest: { scale: 1, y: 0, rotateY: 0 },
    hover: {
      scale: 1.05,
      y: -10,
      rotateY: 5,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const handleServiceClick = (serviceId: string) => {
    window.location.hash = serviceId;
  };

  return (
    <section id="services" className="py-20 bg-[#0a1628]">
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
            Our Services
          </motion.span>
          <motion.h2
            className="text-4xl md:text-4xl lg:text-5xl text-white mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive Facial Care
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From minimally invasive procedures to complex reconstructive surgery, we offer the
            full continuum of facial plastic and aesthetic services.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-[#1a2942] rounded-lg overflow-hidden shadow-lg cursor-pointer"
              initial="rest"
              whileHover="hover"
              variants={cardVariants}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent opacity-60"></div>
                <motion.div
                  className="absolute top-4 left-4 w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <service.icon className="w-8 h-8 text-[#0a1628]" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}