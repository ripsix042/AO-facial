import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    'Rhinoplasty',
    'Eyelid Surgery',
    'Facial Rejuvenation',
    'Gender Affirmation',
    'Reconstructive Surgery',
    'Non-Surgical Treatments',
  ];

  return (
    <footer ref={ref} className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
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
          {/* About Column */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              },
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                className="w-10 h-10 bg-[#d4af37] flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-[#0a1628] font-bold text-xl">AO</span>
              </motion.div>
              <h3 className="text-lg">AO Facial Plastics</h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Excellence, precision, and safety in facial plastic and reconstructive surgery.
              Committed to enhancing natural beauty and transforming lives.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-[#d4af37]/20 rounded-full flex items-center justify-center"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, backgroundColor: '#d4af37' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.1 },
              },
            }}
          >
            <h4 className="text-lg mb-4 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Our Services' },
                { id: 'about', label: 'About Dr. Obayemi' },
                { id: 'foundation', label: 'Foundation' },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
          >
            <h4 className="text-lg mb-4 text-[#d4af37]">Our Services</h4>
            <ul className="space-y-2 text-sm text-white">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5, color: '#d4af37' }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              },
            }}
          >
            <h4 className="text-lg mb-4 text-[#d4af37]">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              {[
                { icon: Phone, text: '(555) 123-4567' },
                { icon: Mail, text: 'info@aofacialplastics.com' },
                {
                  icon: MapPin,
                  text: ['123 Medical Plaza Drive', 'Suite 400', 'City, State 12345'],
                },
              ].map((contact, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    {Array.isArray(contact.text) ? (
                      contact.text.map((line, i) => (
                        <p key={i} className="text-white">
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-white">{contact.text}</p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} AO Facial Plastics and Reconstructive Surgery, PLLC.
              All rights reserved.
            </p>
            <motion.div
              className="flex gap-6 text-sm text-white"
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
              {[
                { href: '#privacy-policy', label: 'Privacy Policy' },
                { href: '#terms-of-service', label: 'Terms of Service' },
                { href: '#', label: 'HIPAA Notice' },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="hover:text-[#d4af37] transition-colors"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3 },
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
