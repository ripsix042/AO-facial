import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, ScanFace, Heart, Sparkles, User, Users } from 'lucide-react';
import noseImage from '../../assets/nose2.jpeg';
import eyeImage from '../../assets/eye1.jpg';
import faceImage from '../../assets/face1.jpg';
import genderImage from '../../assets/gender1.webp';
import surgeryImage from '../../assets/surgery1.jpg';
import nonSurgicalImage from '../../assets/non1.jpg';

const services = [
  {
    icon: ScanFace,
    title: ' Rhinoplasty',
    description:
      'Surgical reshaping of the nose to enhance facial harmony and improve breathing function.',
    image: noseImage,
  },
  {
    icon: Eye,
    title: 'Eyelid Surgery',
    description:
      'Blepharoplasty to rejuvenate the eyes by removing excess skin and restoring a youthful appearance.',
    image: eyeImage,
  },
  {
    icon: Sparkles,
    title: 'Facial Rejuvenation',
    description:
      'Comprehensive facelift and neck lift procedures for natural, long-lasting anti-aging results.',
    image: faceImage,
  },
  {
    icon: Users,
    title: 'Gender Affirmation',
    description:
      'Specialized facial feminization and masculinization procedures to align appearance with identity.',
    image: genderImage,
  },
  {
    icon: Heart,
    title: 'Reconstructive Surgery',
    description:
      'Advanced techniques for skin cancer reconstruction, trauma repair, and congenital corrections.',
    image: surgeryImage,
  },
  {
    icon: User,
    title: 'Non-Surgical Treatments',
    description:
      'Concierge aesthetic services including injectables, skin treatments, and preventative care.',
    image: nonSurgicalImage,
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
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
            className="text-4xl md:text-5xl text-white mt-2 mb-4"
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
              className="group bg-[#1a2942] rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
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