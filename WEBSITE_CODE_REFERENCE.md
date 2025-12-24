# AO Facial Plastics Website - Complete File Structure

This document contains all the code files for the AO Facial Plastics website built with React + Vite, using dark blue (#0a1628), gold (#d4af37), and black colors.

## Project Structure

```
/src
  /app
    /components
      - Navigation.tsx
      - Hero.tsx
      - About.tsx
      - Services.tsx
      - Gallery.tsx
      - Foundation.tsx
      - Contact.tsx
      - Footer.tsx
    - App.tsx
  /styles
    - theme.css (updated with brand colors)
```

## Main Application File

### `/src/app/App.tsx`

```tsx
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Foundation } from './components/Foundation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Foundation />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
```

## Component Files

### `/src/app/components/Navigation.tsx`

```tsx
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a1628] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#d4af37] flex items-center justify-center">
              <span className="text-white font-bold text-xl">AO</span>
            </div>
            <div>
              <h3 className="text-white text-lg tracking-tight">AO Facial Plastics</h3>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-[#d4af37] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#d4af37] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#d4af37] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-[#d4af37] transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('foundation')}
              className="text-white hover:text-[#d4af37] transition-colors"
            >
              Foundation
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#d4af37] text-[#0a1628] hover:bg-[#c19b2e]"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-[#d4af37] transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#d4af37] transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#d4af37] transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-[#d4af37] transition-colors text-left"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('foundation')}
              className="text-white hover:text-[#d4af37] transition-colors text-left"
            >
              Foundation
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#d4af37] text-[#0a1628] hover:bg-[#c19b2e]"
            >
              Book Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
```

### `/src/app/components/Hero.tsx`

```tsx
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1642844613096-7b743b7d9915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBjbGluaWN8ZW58MXx8fHwxNzY2NDIyNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Clinic"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/85 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="text-[#d4af37] tracking-wider uppercase">
              Welcome to AO Facial Plastics
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            The Facial
            <span className="block text-[#d4af37]">Architect</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Dual board-certified head and neck and facial plastic surgeon dedicated to
            enhancing natural beauty through advanced surgical techniques and personalized
            care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-[#d4af37] text-[#0a1628] hover:bg-[#c19b2e] px-8"
            >
              Schedule Free Consultation
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#d4af37] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
```

### `/src/app/components/About.tsx`

```tsx
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, GraduationCap, Heart, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] tracking-wider uppercase">About</span>
          <h2 className="text-4xl md:text-5xl text-[#0a1628] mt-2 mb-4">
            Meet Dr. Ade Obayemi Jr
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjMzMjQwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dr. Ade Obayemi Jr"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/50 to-transparent"></div>
            </div>
            {/* Credentials Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#d4af37] text-[#0a1628] p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <p className="text-sm uppercase tracking-wider">Dual Board</p>
                <p className="text-sm uppercase tracking-wider">Certified</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl text-[#0a1628] mb-6">
              Precision. Artistry. Excellence.
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dr. Ade Obayemi Jr, MD MBA, is a dual board-certified facial plastic and
              reconstructive surgeon with a unique understanding of both the structure and
              function of the face. His journey combines surgical precision with artistic
              vision to deliver exceptional, natural-looking results.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With advanced training in both cosmetic and reconstructive procedures, Dr.
              Obayemi brings a comprehensive approach to facial aesthetics. His expertise
              spans from minimally invasive treatments to complex surgical procedures,
              always prioritizing patient safety and satisfaction.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#0a1628] mb-1">Excellence</h4>
                  <p className="text-sm text-gray-600">
                    Dual board-certified in facial plastics and head & neck surgery
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#0a1628] mb-1">Education</h4>
                  <p className="text-sm text-gray-600">
                    MD MBA with advanced surgical training
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#0a1628] mb-1">Mentorship</h4>
                  <p className="text-sm text-gray-600">
                    Dedicated to empowering the next generation of surgeons
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[#0a1628] mb-1">Global Impact</h4>
                  <p className="text-sm text-gray-600">
                    Serving patients worldwide through foundation initiatives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `/src/app/components/Services.tsx`

```tsx
import { Eye, ScanFace, Heart, Sparkles, User, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: ScanFace,
    title: 'Rhinoplasty',
    description:
      'Surgical reshaping of the nose to enhance facial harmony and improve breathing function.',
    image:
      'https://images.unsplash.com/photo-1759813641406-980519f58b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaGlub3BsYXN0eSUyMHN1cmdlcnl8ZW58MXx8fHwxNzY2NDIyNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Eye,
    title: 'Eyelid Surgery',
    description:
      'Blepharoplasty to rejuvenate the eyes by removing excess skin and restoring a youthful appearance.',
    image:
      'https://images.unsplash.com/photo-1728102197400-0648e058fddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBzdXJnZXJ5JTIwdG9vbHN8ZW58MXx8fHwxNzY2NDIyNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Sparkles,
    title: 'Facial Rejuvenation',
    description:
      'Comprehensive facelift and neck lift procedures for natural, long-lasting anti-aging results.',
    image:
      'https://images.unsplash.com/photo-1750036015902-c6f5ebca924e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc3BhJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2MzQ5NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Users,
    title: 'Gender Affirmation',
    description:
      'Specialized facial feminization and masculinization procedures to align appearance with identity.',
    image:
      'https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwcm9vbXxlbnwxfHx8fDE3NjY0MDcwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: Heart,
    title: 'Reconstructive Surgery',
    description:
      'Advanced techniques for skin cancer reconstruction, trauma repair, and congenital corrections.',
    image:
      'https://images.unsplash.com/photo-1642844613096-7b743b7d9915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBjbGluaWN8ZW58MXx8fHwxNzY2NDIyNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    icon: User,
    title: 'Non-Surgical Treatments',
    description:
      'Concierge aesthetic services including injectables, skin treatments, and preventative care.',
    image:
      'https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjMzMjQwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] tracking-wider uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl text-white mt-2 mb-4">
            Comprehensive Facial Care
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From minimally invasive procedures to complex reconstructive surgery, we offer the
            full continuum of facial plastic and aesthetic services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#1a2942] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-[#0a1628]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `/src/app/components/Gallery.tsx`

```tsx
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const beforeAfterImages = [
  {
    category: 'Rhinoplasty',
    before:
      'https://images.unsplash.com/photo-1759813641406-980519f58b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaGlub3BsYXN0eSUyMHN1cmdlcnl8ZW58MXx8fHwxNzY2NDIyNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    after:
      'https://images.unsplash.com/photo-1728102197400-0648e058fddd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBzdXJnZXJ5JTIwdG9vbHN8ZW58MXx8fHwxNzY2NDIyNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Natural refinement with balanced proportions',
  },
  {
    category: 'Facial Rejuvenation',
    before:
      'https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjMzMjQwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    after:
      'https://images.unsplash.com/photo-1750036015902-c6f5ebca924e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc3BhJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2MzQ5NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Restored youthful contours with natural results',
  },
  {
    category: 'Eyelid Surgery',
    before:
      'https://images.unsplash.com/photo-1642844613096-7b743b7d9915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBjbGluaWN8ZW58MXx8fHwxNzY2NDIyNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    after:
      'https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwcm9vbXxlbnwxfHx8fDE3NjY0MDcwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Refreshed, alert appearance',
  },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterImages.length);
    setSliderPosition(50);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
    setSliderPosition(50);
  };

  const currentImage = beforeAfterImages[currentIndex];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] tracking-wider uppercase">Gallery</span>
          <h2 className="text-4xl md:text-5xl text-[#0a1628] mt-2 mb-4">
            Beautiful Results
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore our portfolio of transformative results. Each procedure is tailored to
            enhance natural beauty while maintaining facial harmony.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0a1628] p-8 rounded-lg shadow-2xl">
            {/* Category */}
            <div className="text-center mb-6">
              <h3 className="text-2xl text-white mb-2">{currentImage.category}</h3>
              <p className="text-gray-300">{currentImage.description}</p>
            </div>

            {/* Image Comparison */}
            <div className="relative h-[500px] overflow-hidden rounded-lg mb-6">
              {/* After Image (Background) */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={currentImage.after}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#d4af37] text-[#0a1628] px-4 py-2 rounded">
                  After
                </div>
              </div>

              {/* Before Image (Overlay with clip) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <ImageWithFallback
                  src={currentImage.before}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white text-[#0a1628] px-4 py-2 rounded">
                  Before
                </div>
              </div>

              {/* Slider */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#d4af37] cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center shadow-lg">
                  <ChevronLeft className="w-4 h-4 text-[#0a1628] absolute left-1" />
                  <ChevronRight className="w-4 h-4 text-[#0a1628] absolute right-1" />
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevImage}
                className="bg-[#d4af37] text-[#0a1628] px-6 py-3 rounded hover:bg-[#c19b2e] transition-colors flex items-center gap-2"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
              <button
                onClick={nextImage}
                className="bg-[#d4af37] text-[#0a1628] px-6 py-3 rounded hover:bg-[#c19b2e] transition-colors flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#d4af37] w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-sm text-gray-600 mt-8">
            *Individual results may vary. Photos are for illustrative purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
```

### `/src/app/components/Foundation.tsx`

```tsx
import { GraduationCap, Heart, Globe, Users } from 'lucide-react';
import { Button } from './ui/button';

export function Foundation() {
  return (
    <section id="foundation" className="py-20 bg-[#1a2942]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] tracking-wider uppercase">
            Global Impact
          </span>
          <h2 className="text-4xl md:text-5xl text-white mt-2 mb-4">
            AO Facial Plastics Foundation
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Empowering the next generation of surgeons and bringing world-class care to
            underserved communities worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Mission Content */}
          <div>
            <h3 className="text-3xl text-white mb-6">Our Foundation Mission</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The AO Facial Plastics Foundation is dedicated to creating lasting change in the
              field of facial plastic surgery through education, mentorship, and global
              outreach. We believe in empowering historically disenfranchised surgical trainees
              and providing access to quality care for patients worldwide.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#0a1628]" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Scholarship Programs</h4>
                  <p className="text-gray-300 text-sm">
                    Supporting aspiring plastic surgeons through financial aid and educational
                    resources
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#0a1628]" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Mentorship Network</h4>
                  <p className="text-gray-300 text-sm">
                    Connecting students, trainees, and professionals with experienced mentors
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#0a1628]" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Global Surgical Missions</h4>
                  <p className="text-gray-300 text-sm">
                    Providing reconstructive surgery to patients with facial injuries worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-[#0a1628]" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Community Support</h4>
                  <p className="text-gray-300 text-sm">
                    Creating a supportive environment for healthcare professionals to thrive
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-[#d4af37] text-[#0a1628] hover:bg-[#c19b2e]">
              Learn More About Our Foundation
            </Button>
          </div>

          {/* Statistics/Impact */}
          <div className="bg-[#0a1628] p-8 rounded-lg">
            <h4 className="text-2xl text-white mb-8 text-center">Our Impact</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl text-[#d4af37] mb-2">500+</div>
                <p className="text-gray-300">Patients Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-[#d4af37] mb-2">50+</div>
                <p className="text-gray-300">Trainees Mentored</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-[#d4af37] mb-2">15+</div>
                <p className="text-gray-300">Countries Reached</p>
              </div>
              <div className="text-center">
                <div className="text-4xl text-[#d4af37] mb-2">100+</div>
                <p className="text-gray-300">Scholarships Awarded</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-300 text-center text-sm italic">
                "Together, we're building a more inclusive and accessible future for facial
                plastic surgery."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `/src/app/components/Contact.tsx`

```tsx
import { useState } from 'react';
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

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] tracking-wider uppercase">Contact Us</span>
          <h2 className="text-4xl md:text-5xl text-[#0a1628] mt-2 mb-4">
            Schedule Your Consultation
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Take the first step towards your transformation. Free consultations available both
            in-person and virtually.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-[#0a1628] p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl text-white mb-6">Request a Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
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
              </div>

              <div>
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
              </div>

              <div>
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
              </div>

              <div>
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
              </div>

              <div>
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
              </div>

              <Button
                type="submit"
                className="w-full bg-[#d4af37] text-[#0a1628] hover:bg-[#c19b2e]"
              >
                Submit Request
              </Button>

              <p className="text-gray-400 text-sm text-center">
                By submitting this form, you agree to be contacted by AO Facial Plastics.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl text-[#0a1628] mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-[#0a1628] mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Call us for immediate assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-[#0a1628] mb-1">Email</h4>
                    <p className="text-gray-600">info@aofacialplastics.com</p>
                    <p className="text-sm text-gray-500 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-[#0a1628] mb-1">Location</h4>
                    <p className="text-gray-600">123 Medical Plaza Drive</p>
                    <p className="text-gray-600">Suite 400</p>
                    <p className="text-gray-600">City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-[#0a1628] mb-1">Office Hours</h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: By Appointment Only</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Offer */}
            <div className="bg-[#d4af37]/10 p-6 rounded-lg border-2 border-[#d4af37]">
              <h4 className="text-xl text-[#0a1628] mb-3">Free Consultation Offer</h4>
              <p className="text-gray-700 mb-4">
                Schedule your complimentary consultation today and take the first step towards
                achieving your aesthetic goals. Virtual and in-person options available.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                  Personalized treatment plan
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                  No obligation consultation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                  Meet Dr. Obayemi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### `/src/app/components/Footer.tsx`

```tsx
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a1628] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#d4af37] flex items-center justify-center">
                <span className="text-[#0a1628] font-bold text-xl">AO</span>
              </div>
              <h3 className="text-lg">AO Facial Plastics</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Excellence, precision, and safety in facial plastic and reconstructive surgery.
              Committed to enhancing natural beauty and transforming lives.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-[#d4af37]/20 rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#d4af37]/20 rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#d4af37]/20 rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  About Dr. Obayemi
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  Before & After Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('foundation')}
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  Foundation
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4 text-[#d4af37]">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Rhinoplasty</li>
              <li>Eyelid Surgery</li>
              <li>Facial Rejuvenation</li>
              <li>Gender Affirmation</li>
              <li>Reconstructive Surgery</li>
              <li>Non-Surgical Treatments</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4 text-[#d4af37]">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">info@aofacialplastics.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">123 Medical Plaza Drive</p>
                  <p className="text-gray-400">Suite 400</p>
                  <p className="text-gray-400">City, State 12345</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} AO Facial Plastics and Reconstructive Surgery, PLLC.
              All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#d4af37] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

## Key Features

1. **Navigation**: Fixed header with smooth scrolling to sections
2. **Hero Section**: Full-screen banner with call-to-action buttons
3. **About Section**: Doctor's profile with credentials and highlights
4. **Services**: Grid layout showcasing all surgical procedures
5. **Gallery**: Interactive before/after comparison slider
6. **Foundation**: Mission statement and impact statistics
7. **Contact**: Full contact form with consultation scheduling
8. **Footer**: Complete site navigation and contact information

## Color Scheme

- **Dark Blue (Navy)**: `#0a1628` - Primary background
- **Secondary Blue**: `#1a2942` - Section backgrounds
- **Gold**: `#d4af37` - Accent color for CTAs and highlights
- **Black**: `#000000` - Text and strong contrasts
- **White**: `#ffffff` - Clean backgrounds and text

## Technology Stack

- React 18.3.1
- Vite 6.3.5
- Tailwind CSS 4.1.12
- Lucide React (icons)
- Sonner (toast notifications)
- Radix UI components

## To Run the Project

```bash
npm install
npm run dev
```

The website will be available at `http://localhost:5173`
