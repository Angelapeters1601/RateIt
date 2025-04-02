import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      title: "Editor's Choice: Summer 2024",
      subtitle: "Dermatologist-approved skincare essentials",
      cta: "Explore Products",
      image: "/public/Br.jpg",
      href: "/skincare",
      theme: "bg-gradient-to-r from-blue-900/40 to-emerald-900/30"
    },
    {
      title: "Foundation Favorites",
      subtitle: "Top-rated base products for every skin tone",
      cta: "Find Your Shade",
      image: "/public/mac.avif",
      href: "/makeup",
      theme: "bg-gradient-to-r from-rose-900/40 to-fuchsia-900/30"
    },
    {
      title: "Fragrance Awards",
      subtitle: "2024 Reader's Choice winners",
      cta: "Discover Scents",
      image: "/public/xerjoff.jpg",
      href: "/fragrance",
      theme: "bg-gradient-to-r from-amber-900/40 to-purple-900/30"
    },
    {
      title: "Haircare Heroes",
      subtitle: "Salon-quality results at home",
      cta: "Nuture Your scalp",
      image: "/public/tph.webp",
      theme: "bg-gradient-to-r from-violet-900/40 to-indigo-900/30",
      href: "/haircare"
    },
    {
      title: "Clean Beauty Guide",
      subtitle: "EWG-verified products for sensitive skin",
      cta: "Learn More",
      image: "/public/laroche.webp",
      href: "/clean-beauty",
      theme: "bg-gradient-to-r from-teal-900/40 to-cyan-900/30"
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div 
      className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
    >
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-full h-full relative"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
          >
            <img 
              src={slide.image} 
              alt={`${slide.title} - ${slide.subtitle}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className={`absolute inset-0 ${slide.theme} flex items-center`}>
              <div className="max-w-2xl px-6 md:px-16 text-center mx-auto">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3"
                >
                  {slide.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg
                   md:text-xl font-mono text-white/90 mb-6"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                  to="/ProductReviews"
                    className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 md:px-8 md:py-3 rounded-md font-medium transition-colors duration-300"
                  >
                    {slide.cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2
         bg-white/30 hover:bg-white/50 p-3 rounded-full
          backdrop-blur-sm transition-all duration-300
           focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          key={`progress-${currentSlide}`}
          animate={{ width: isHovered ? '0%' : '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
          className="h-full bg-white"
        />
      </div>
    </div>
  );
}
export default HomeCarousel;