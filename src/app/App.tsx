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
import { LoadingScreen } from './components/LoadingScreen';
import { BackToTop } from './components/BackToTop';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check URL hash on mount and when hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the # symbol
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
