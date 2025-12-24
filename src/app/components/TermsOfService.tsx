import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl text-[#0a1628] mb-4">Terms of Service</h1>
            <div className="w-24 h-1 bg-[#d4af37] mb-6"></div>
            <p className="text-gray-600 text-sm">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Agreement to Terms</h2>
              <p className="mb-4 leading-relaxed">
                By accessing and using the website of AO Facial Plastics and Reconstructive Surgery, PLLC ("we," "our,"
                or "us"), you accept and agree to be bound by the terms and provision of this agreement. If you do not
                agree to these Terms of Service, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Use License</h2>
              <p className="mb-4 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on our website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on our website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Medical Disclaimer</h2>
              <p className="mb-4 leading-relaxed">
                The content on this website, including text, graphics, images, and other material, is for informational
                purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or
                treatment. Always seek the advice of your physician or other qualified health provider with any questions
                you may have regarding a medical condition. Never disregard professional medical advice or delay in
                seeking it because of something you have read on this website.
              </p>
              <p className="mb-4 leading-relaxed">
                The information provided on this website does not create a physician-patient relationship. A physician-patient
                relationship is only established through an in-person consultation and examination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Consultation and Services</h2>
              <p className="mb-4 leading-relaxed">
                Our website provides information about our services and allows you to request consultations. However:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Requesting a consultation through our website does not guarantee an appointment</li>
                <li>All consultations are subject to availability and our scheduling policies</li>
                <li>We reserve the right to decline services to any individual at our discretion</li>
                <li>All medical services are subject to separate agreements and consent forms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">User Accounts and Information</h2>
              <p className="mb-4 leading-relaxed">
                When you provide information through our website, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your information as necessary</li>
                <li>Maintain the security of any passwords or access codes</li>
                <li>Accept all responsibility for activities that occur under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Intellectual Property</h2>
              <p className="mb-4 leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, audio clips,
                digital downloads, and software, is the property of AO Facial Plastics and Reconstructive Surgery, PLLC
                or its content suppliers and is protected by United States and international copyright laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Prohibited Uses</h2>
              <p className="mb-4 leading-relaxed">You may not use our website:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate us, our employees, or another user</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Limitation of Liability</h2>
              <p className="mb-4 leading-relaxed">
                In no event shall AO Facial Plastics and Reconstructive Surgery, PLLC, its directors, officers, employees,
                or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including
                without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your
                use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Indemnification</h2>
              <p className="mb-4 leading-relaxed">
                You agree to defend, indemnify, and hold harmless AO Facial Plastics and Reconstructive Surgery, PLLC
                and its officers, directors, employees, and agents from and against any claims, liabilities, damages,
                judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out
                of or relating to your violation of these Terms of Service or your use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Governing Law</h2>
              <p className="mb-4 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State in
                which our practice is located, without regard to its conflict of law provisions. Any disputes arising
                under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts
                located in that State.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Changes to Terms</h2>
              <p className="mb-4 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time.
                If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Severability</h2>
              <p className="mb-4 leading-relaxed">
                If any provision of these Terms of Service is held to be invalid or unenforceable by a court, the
                remaining provisions of these Terms of Service will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0a1628] mb-4">Contact Information</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-[#0a1628]/5 p-6 rounded-lg">
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

