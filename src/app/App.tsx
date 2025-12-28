import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
// import { Gallery } from './components/Gallery';
import { Foundation } from './components/Foundation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { ServiceDetail } from './components/ServiceDetail';
import { LoadingScreen } from './components/LoadingScreen';
import { BackToTop } from './components/BackToTop';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { services } from './data/services';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check URL hash on mount and when hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
      
      // Check if it's a service page
      const service = services.find(s => s.id === hash);
      if (service) {
        setCurrentPage(`service-${service.id}`);
        return;
      }
      
      if (hash === 'privacy-policy' || hash === 'terms-of-service') {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Show loading screen on initial load
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  // Render service pages
  const serviceId = currentPage.replace('service-', '');
  const service = services.find(s => s.id === serviceId);
  if (service) {
    return <ServiceDetail service={service} />;
  }

  // Render different pages based on current route
  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy />;
  }

  if (currentPage === 'terms-of-service') {
    return <TermsOfService />;
  }

  // Default home page
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Navigation />
        <Hero />
      </div>
      <main>
        <About />
        <Services />
        {/* <Gallery /> */}
        <Testimonials />
        <FAQ />
        <Foundation />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="top-right" />
    </div>
  );
}
