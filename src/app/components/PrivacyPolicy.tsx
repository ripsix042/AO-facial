import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function PrivacyPolicy() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToHome = () => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Mobile Back Button - only visible on mobile */}
      <div className="md:hidden sticky top-0 left-0 right-0 z-40 bg-[#d4af37] border-b border-gray-800 py-3">
        <div className="container mx-auto px-4">
          <motion.button
            onClick={navigateToHome}
            className="flex items-center gap-2 text-[#0a1628] hover:text-[#0a1628] transition-colors"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Home</span>
          </motion.button>
        </div>
      </div>
      <main className="pt-5 pb-5 bg-[#1a2942] md:pt-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 md:pt-30">
            <h1 className="text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
            <div className="w-24 h-1 bg-[#d4af37] mb-6"></div>
            <p className="text-white text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-white">
            <section>
              <h2 className="text-2xl text-white mb-4">Introduction</h2>
              <p className="mb-4 leading-relaxed">
                AO Facial Plastics and Reconstructive Surgery, PLLC ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Information We Collect</h2>
              <p className="mb-4 leading-relaxed">
                We may collect information about you in various ways. The information we may collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, mailing address, and other
                  contact information you provide when scheduling a consultation or contacting us.
                </li>
                <li>
                  <strong>Health Information:</strong> Medical history, treatment preferences, and other health-related
                  information you provide during consultations or through our contact forms.
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser type, device information, and usage data
                  collected automatically when you visit our website.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">How We Use Your Information</h2>
              <p className="mb-4 leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Schedule and manage consultations and appointments</li>
                <li>Provide medical services and treatment</li>
                <li>Respond to your inquiries and communicate with you</li>
                <li>Send you appointment reminders and important updates</li>
                <li>Improve our website and services</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Information Sharing and Disclosure</h2>
              <p className="mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">HIPAA Compliance</h2>
              <p className="mb-4 leading-relaxed">
                As a healthcare provider, we are subject to the Health Insurance Portability and Accountability Act
                (HIPAA). Your protected health information (PHI) is handled in accordance with HIPAA regulations. Please
                see our separate HIPAA Notice for detailed information about how we protect your health information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Data Security</h2>
              <p className="mb-4 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Your Rights</h2>
              <p className="mb-4 leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information (subject to legal and medical record retention requirements)</li>
                <li>Object to or restrict processing of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-4 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your experience. You can set
                your browser to refuse cookies or alert you when cookies are being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Third-Party Links</h2>
              <p className="mb-4 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                of these external sites. We encourage you to review the privacy policies of any third-party sites you
                visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Children's Privacy</h2>
              <p className="mb-4 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you believe we have collected information from a child, please contact us
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new policy on this page and updating the "Last updated" date. We encourage you to review
                this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-black/20 p-6 rounded-lg">
                <p className="mb-2">
                  <strong>AO Facial Plastics and Reconstructive Surgery, PLLC</strong>
                </p>
                <p className="mb-2">123 Medical Plaza Drive, Suite 400</p>
                <p className="mb-2">City, State 12345</p>
                <p className="mb-2">Phone: (555) 123-4567</p>
                <p>Email: info@aofacialplastics.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

