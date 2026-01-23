import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../../assets/Elegant.png';
import { galleryItems } from '../data/gallery';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const scrollToSection = (sectionId: string) => {
    // Check if we're on a different page (has hash in URL)
    const hasHash = window.location.hash && window.location.hash !== '';
    
    if (hasHash) {
      // Navigate to home first by clearing the hash
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      // Wait for page to render, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      // We're already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePolicyLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    // Set the hash to trigger page change in App.tsx
    window.location.hash = hash;
    // Scroll to top will be handled by the component's useEffect
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGalleryLinkClick = (e: React.MouseEvent<HTMLButtonElement>, galleryId: string) => {
    e.preventDefault();
    // First scroll to gallery section
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
    // Then navigate to the specific gallery detail page
    setTimeout(() => {
      window.location.hash = `gallery-${galleryId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  return (
    <footer ref={ref} className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
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
                className="w-39 h-39 flex items-center justify-center rounded overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <img src={logo} alt="AO Facial Plastics Logo" className="w-full h-full object-contain" />
              </motion.div>
              <h3 className="text-lg">AO Facial Plastics</h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Excellence, precision, and safety in facial plastic and reconstructive surgery.
              Committed to enhancing natural beauty and transforming lives.
            </p>
            <div className="flex gap-4 mt-6">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/ao_facialplastics?igsh=b2E3anlwamI1eGpr' },
                { icon: Twitter, label: 'Twitter', href: 'https://x.com/ObayemiMd?s=20' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                { id: 'gallery', label: 'Gallery' },
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
              {galleryItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <button
                    onClick={(e) => handleGalleryLinkClick(e, item.id)}
                    className="text-white hover:text-[#d4af37] transition-colors text-left"
                  >
                    {item.category}
                  </button>
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
                // { href: '#', label: 'HIPAA Notice' },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      handlePolicyLinkClick(e, link.href);
                    }
                  }}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer"
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
