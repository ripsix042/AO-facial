import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Button } from './ui/button';

interface ServiceDetailProps {
  service: {
    title: string;
    description: string;
    image: string;
    icon: any;
    detailedContent?: {
      overview?: string;
      benefits?: string[];
      procedure?: string;
      recovery?: string;
      faq?: { question: string; answer: string }[];
    };
  };
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToServices = () => {
    window.location.hash = '';
    // Small delay to allow navigation back to home page
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Mobile Back Button - only visible on mobile */}
      <div className="md:hidden sticky top-0 left-0 right-0 z-40 bg-[#d4af37] border-b border-gray-800 py-3">
        <div className="container mx-auto px-4">
          <motion.button
            onClick={navigateToServices}
            className="flex items-center gap-2 text-[#0a1628] hover:text-[#0a1628] transition-colors"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Services</span>
          </motion.button>
        </div>
      </div>
      <main className="pt-5 pb-5 bg-[#1a2942] md:pt-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 md:pt-30">
            <motion.h1
              className="text-4xl md:text-5xl text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {service.title}
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-[#d4af37] mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          {/* Hero Image */}
          <motion.div
            className="mb-12 rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            className="prose prose-lg max-w-none space-y-8 text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              {service.description}
            </p>

            {service.detailedContent?.overview && (
              <section>
                <h2 className="text-2xl text-white mb-4">Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                  {service.detailedContent.overview}
                </p>
              </section>
            )}

            {service.detailedContent?.benefits && (
              <section>
                <h2 className="text-2xl text-white mb-4">Benefits</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  {service.detailedContent.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </section>
            )}

            {service.detailedContent?.procedure && (
              <section>
                <h2 className="text-2xl text-white mb-4">The Procedure</h2>
                <p className="text-gray-300 leading-relaxed">
                  {service.detailedContent.procedure}
                </p>
              </section>
            )}

            {service.detailedContent?.recovery && (
              <section>
                <h2 className="text-2xl text-white mb-4">Recovery</h2>
                <p className="text-gray-300 leading-relaxed">
                  {service.detailedContent.recovery}
                </p>
              </section>
            )}

            {service.detailedContent?.faq && service.detailedContent.faq.length > 0 && (
              <section>
                <h2 className="text-2xl text-white mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.detailedContent.faq.map((item, index) => (
                    <div key={index} className="bg-black/20 p-6 rounded-lg">
                      <h3 className="text-xl text-white mb-2">{item.question}</h3>
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              size="lg"
              onClick={() => {
                window.location.hash = '';
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              className="bg-[#d4af37] text-[#0a1628] hover:bg-[#D3AF37] px-8"
            >
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

