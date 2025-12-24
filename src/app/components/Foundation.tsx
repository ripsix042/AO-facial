import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { GraduationCap, Heart, Globe, Users } from 'lucide-react';
import { Button } from './ui/button';

// Count-up hook
function useCountUp(end: number, duration: number, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

export function Foundation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  const programs = [
    {
      icon: GraduationCap,
      title: 'Scholarship Programs',
      description: 'Supporting aspiring plastic surgeons through financial aid and educational resources',
    },
    {
      icon: Users,
      title: 'Mentorship Network',
      description: 'Connecting students, trainees, and professionals with experienced mentors',
    },
    {
      icon: Globe,
      title: 'Global Surgical Missions',
      description: 'Providing reconstructive surgery to patients with facial injuries worldwide',
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Creating a supportive environment for healthcare professionals to thrive',
    },
  ];

  const stats = [
    { value: 500, label: 'Patients Served', suffix: '+' },
    { value: 50, label: 'Trainees Mentored', suffix: '+' },
    { value: 15, label: 'Countries Reached', suffix: '+' },
    { value: 100, label: 'Scholarships Awarded', suffix: '+' },
  ];

  // Count-up values
  const patientsCount = useCountUp(500, 2000, statsInView);
  const traineesCount = useCountUp(50, 2000, statsInView);
  const countriesCount = useCountUp(15, 2000, statsInView);
  const scholarshipsCount = useCountUp(100, 2000, statsInView);

  const countValues = [patientsCount, traineesCount, countriesCount, scholarshipsCount];

  return (
    <section id="foundation" className="py-20 bg-[#1a2942]">
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
            Global Impact
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl text-white mt-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            AO Facial Plastics Foundation
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
            Empowering the next generation of surgeons and bringing world-class care to
            underserved communities worldwide.
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Mission Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              className="text-3xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Foundation Mission
            </motion.h3>
            <motion.p
              className="text-gray-300 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The AO Facial Plastics Foundation is dedicated to creating lasting change in the
              field of facial plastic surgery through education, mentorship, and global
              outreach. We believe in empowering historically disenfranchised surgical trainees
              and providing access to quality care for patients worldwide.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
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
              {programs.map((program, index) => (
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
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <program.icon className="w-6 h-6 text-[#0a1628]" />
                  </motion.div>
                  <div>
                    <h4 className="text-white mb-1">{program.title}</h4>
                    <p className="text-gray-300 text-sm">{program.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button className="bg-[#d4af37] text-[#0a1628] hover:bg-[#D3AF37]" asChild>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(212, 175, 55, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Our Foundation
                </motion.button>
              </Button>
            </motion.div>
          </motion.div>

          {/* Statistics/Impact */}
          <motion.div
            ref={statsRef}
            className="bg-[#0a1628] p-8 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h4
              className="text-2xl text-white mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our Impact
            </motion.h4>
            <motion.div
              className="grid grid-cols-2 gap-6"
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
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        type: 'spring',
                      },
                    },
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className="text-4xl text-[#d4af37] mb-2 font-bold"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {countValues[index]}{stat.suffix}
                  </motion.div>
                  <p className="text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 pt-8 border-t border-gray-700"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-gray-300 text-center text-sm italic">
                "Together, we're building a more inclusive and accessible future for facial
                plastic surgery."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
