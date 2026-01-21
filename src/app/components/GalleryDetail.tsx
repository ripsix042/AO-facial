import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { galleryItems } from '../data/gallery';

interface GalleryDetailProps {
  item: {
    id: string;
    category: string;
    image: string;
    images?: string[]; // Array of all images for this category
    description: string;
    detailedContent?: {
      overview?: string;
      benefits?: string[];
      procedure?: string;
      recovery?: string;
    };
  };
}

export function GalleryDetail({ item }: GalleryDetailProps) {
  const [selectedImage, setSelectedImage] = useState(item.image);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Reset selected image when item changes
    setSelectedImage(item.image);
  }, [item.id, item.image]);

  // Use images array if available, otherwise use single image
  const allImages = item.images && item.images.length > 0 ? item.images : [item.image];

  // Find current item index and get previous/next items
  const currentIndex = galleryItems.findIndex(galleryItem => galleryItem.id === item.id);
  const previousItem = currentIndex > 0 ? galleryItems[currentIndex - 1] : null;
  const nextItem = currentIndex < galleryItems.length - 1 ? galleryItems[currentIndex + 1] : null;

  const navigateToGallery = () => {
    window.location.hash = '';
    // Small delay to allow navigation back to home page
    setTimeout(() => {
      const element = document.getElementById('gallery');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navigateToItem = (itemId: string) => {
    window.location.hash = `gallery-${itemId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-5 pb-5 bg-[#1a2942] md:pt-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 md:pt-30">
            <div className="flex items-center gap-4 mb-4">
              <motion.button
                onClick={navigateToGallery}
                className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center hover:bg-[#c09a2a] transition-colors shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                aria-label="Back to Gallery"
              >
                <ArrowLeft className="w-6 h-6 text-[#0a1628]" />
              </motion.button>
              <motion.h1
                className="text-4xl md:text-5xl text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {item.category}
              </motion.h1>
            </div>
            <motion.div
              className="w-24 h-1 bg-[#d4af37] mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>

          {/* Hero Image - Selected/Active Image */}
          <motion.div
            id="hero-image"
            className="mb-8 rounded-lg overflow-hidden shadow-2xl bg-[#1a2942] flex items-center justify-center"
            style={{ minHeight: '400px' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ImageWithFallback
              key={selectedImage}
              src={selectedImage}
              alt={item.category}
              className="w-full h-[400px] md:h-[500px] object-contain"
            />
          </motion.div>

          {/* Image Gallery Grid - Show if multiple images */}
          {allImages.length > 1 && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl text-white mb-6">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allImages.map((img, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setSelectedImage(img);
                      // Scroll to hero image
                      setTimeout(() => {
                        const heroImage = document.getElementById('hero-image');
                        if (heroImage) {
                          heroImage.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === img
                        ? 'border-[#d4af37] scale-105 ring-2 ring-[#d4af37]/50'
                        : 'border-transparent hover:border-[#d4af37]/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`${item.category} - Image ${index + 1}`}
                      className="w-full h-full object-contain bg-[#1a2942]"
                    />
                    {selectedImage === img && (
                      <div className="absolute inset-0 bg-[#d4af37]/20 flex items-center justify-center">
                        <div className="w-8 h-8 bg-[#d4af37] rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-[#0a1628] rounded-full" />
                        </div>
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Description */}
          <motion.div
            className="prose prose-lg max-w-none space-y-8 text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              {item.description}
            </p>

            {item.detailedContent?.overview && (
              <section>
                <h2 className="text-2xl text-white mb-4">Overview</h2>
                <p className="text-gray-300 leading-relaxed">
                  {item.detailedContent.overview}
                </p>
              </section>
            )}

            {item.detailedContent?.benefits && (
              <section>
                <h2 className="text-2xl text-white mb-4">Benefits</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  {item.detailedContent.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </section>
            )}

            {item.detailedContent?.procedure && (
              <section>
                <h2 className="text-2xl text-white mb-4">The Procedure</h2>
                <p className="text-gray-300 leading-relaxed">
                  {item.detailedContent.procedure}
                </p>
              </section>
            )}

            {item.detailedContent?.recovery && (
              <section>
                <h2 className="text-2xl text-white mb-4">Recovery</h2>
                <p className="text-gray-300 leading-relaxed">
                  {item.detailedContent.recovery}
                </p>
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

          {/* Navigation Arrows - Previous/Next */}
          <motion.div
            className="flex items-center justify-between py-8 border-t border-gray-700 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Previous Item */}
            {previousItem ? (
              <motion.button
                onClick={() => navigateToItem(previousItem.id)}
                className="flex items-center gap-2 text-white hover:text-[#d4af37] transition-colors group"
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:text-[#d4af37] transition-colors" />
                <span className="text-white italic font-serif text-lg group-hover:text-[#d4af37] transition-colors">
                  {previousItem.category}
                </span>
              </motion.button>
            ) : (
              <div></div>
            )}

            {/* Next Item */}
            {nextItem ? (
              <motion.button
                onClick={() => navigateToItem(nextItem.id)}
                className="flex items-center gap-2 text-white hover:text-[#d4af37] transition-colors group"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-white italic font-serif text-lg group-hover:text-[#d4af37] transition-colors">
                  {nextItem.category}
                </span>
                <ChevronRight className="w-5 h-5 text-white group-hover:text-[#d4af37] transition-colors" />
              </motion.button>
            ) : (
              <div></div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
