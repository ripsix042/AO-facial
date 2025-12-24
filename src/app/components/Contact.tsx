import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'in-person',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to a backend
    toast.success('Consultation request submitted! We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      consultationType: 'in-person',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      main: '(555) 123-4567',
      sub: 'Call us for immediate assistance',
    },
    {
      icon: Mail,
      title: 'Email',
      main: 'info@aofacialplastics.com',
      sub: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: 'Location',
      main: '123 Medical Plaza Drive',
      sub: 'Suite 400\nCity, State 12345',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      main: 'Monday - Friday: 9:00 AM - 5:00 PM',
      sub: 'Saturday: By Appointment Only\nSunday: Closed',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
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
            Contact Us
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl text-[#0a1628] mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Schedule Your Consultation
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Take the first step towards your transformation. Free consultations available both
            in-person and virtually.
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-[#0a1628] p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-2xl text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Request a Consultation
            </motion.h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <Label htmlFor="name" className="text-white">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Label htmlFor="email" className="text-white">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Label htmlFor="phone" className="text-white">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="(555) 123-4567"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <Label htmlFor="consultationType" className="text-white">
                  Consultation Type *
                </Label>
                <select
                  id="consultationType"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleChange}
                  className="mt-2 w-full px-3 py-2 bg-white/10 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                >
                  <option value="in-person" className="text-[#0a1628]">
                    In-Person Consultation
                  </option>
                  <option value="virtual" className="text-[#0a1628]">
                    Virtual Consultation
                  </option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Label htmlFor="message" className="text-white">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  placeholder="Tell us about your goals and any questions you have..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-[#d4af37] text-[#0a1628] hover:bg-[#D3AF37]"
                  asChild
                >
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(212, 175, 55, 0.4)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit Request
                  </motion.button>
                </Button>
              </motion.div>

              <motion.p
                className="text-gray-400 text-sm text-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                By submitting this form, you agree to be contacted by AO Facial Plastics.
              </motion.p>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.h3
                className="text-2xl text-[#0a1628] mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Get In Touch
              </motion.h3>
              <motion.div
                className="space-y-6"
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
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 },
                      },
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                    >
                      <info.icon className="w-6 h-6 text-[#d4af37]" />
                    </motion.div>
                    <div>
                      <h4 className="text-[#0a1628] mb-1">{info.title}</h4>
                      {info.title === 'Location' || info.title === 'Office Hours' ? (
                        <div className="text-gray-600 text-sm space-y-1">
                          {info.title === 'Location' ? (
                            <>
                              <p>{info.main}</p>
                              <p>Suite 400</p>
                              <p>City, State 12345</p>
                            </>
                          ) : (
                            <>
                              <p>{info.main}</p>
                              <p>Saturday: By Appointment Only</p>
                              <p>Sunday: Closed</p>
                            </>
                          )}
                        </div>
                      ) : (
                        <>
                          <p className="text-gray-600">{info.main}</p>
                          {info.sub && (
                            <p className="text-sm text-gray-500 mt-1">{info.sub}</p>
                          )}
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Special Offer */}
            <motion.div
              className="bg-[#d4af37]/10 p-6 rounded-lg border-2 border-[#d4af37]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(212, 175, 55, 0.2)' }}
            >
              <h4 className="text-xl text-[#0a1628] mb-3">Free Consultation Offer</h4>
              <p className="text-gray-700 mb-4">
                Schedule your complimentary consultation today and take the first step towards
                achieving your aesthetic goals. Virtual and in-person options available.
              </p>
              <motion.ul
                className="space-y-2 text-sm text-gray-600"
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
                {['Personalized treatment plan', 'No obligation consultation', 'Meet Dr. Obayemi'].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3 },
                      },
                    }}
                  >
                    <motion.span
                      className="w-2 h-2 bg-[#d4af37] rounded-full"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
