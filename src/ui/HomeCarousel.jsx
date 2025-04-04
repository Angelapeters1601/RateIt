import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export function HomeCarousel() {
  const [slides] = useState([
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
      cta: "Bask in Euphoria",
      image: "/public/laroche.webp",
      href: "/clean-beauty",
      theme: "bg-gradient-to-r from-teal-900/40 to-cyan-900/30"
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const progressRef = useRef(null);

  const navigate = (newDirection) => {
    cancelAnimationFrame(animationRef.current);
    setDirection(newDirection);
    
    setCurrentIndex(prev => {
      const newIndex = prev + newDirection;
      return (newIndex + slides.length) % slides.length;
    });
  };

  const nextSlide = () => navigate(1);
  const prevSlide = () => navigate(-1);
  const goToSlide = (index) => {
    const diff = index - currentIndex;
    navigate(diff > 0 ? 1 : -1);
  };

  useEffect(() => {
    if (isHovered) return;
    
    let startTime = null;
    const duration = 5000;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        nextSlide();
        startTime = null;
        if (progressRef.current) {
          progressRef.current.style.width = '0%';
        }
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '105%' : '-105%',
      opacity: 0.5,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 150, damping: 25 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-105%' : '105%',
      opacity: 0.5,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 110, damping: 25 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  return (
    <div 
      className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <div className="flex-shrink-0 w-full h-full relative">
            <motion.img 
              src={slides[currentIndex].image} 
              alt={`${slides[currentIndex].title} - ${slides[currentIndex].subtitle}`}
              className="w-full h-full object-cover"
              loading={currentIndex < 2 ? 'eager' : 'lazy'}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <div className={`absolute inset-0 ${slides[currentIndex].theme} flex items-center`}>
              <div className="max-w-2xl px-6 md:px-16 text-center mx-auto">
                <motion.h2 
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                  className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3"
                >
                  {slides[currentIndex].title}
                </motion.h2>
                <motion.p 
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                  className="text-lg md:text-xl font-mono text-white/90 mb-6"
                >
                  {slides[currentIndex].subtitle}
                </motion.p>
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                >
                  <Link
                    to={slides[currentIndex].href}
                    className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 md:px-8 md:py-3 rounded-md font-medium transition-colors duration-300"
                  >
                    {slides[currentIndex].cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2
         bg-white/30 hover:bg-white/50 p-3 rounded-full
          backdrop-blur-sm transition-all duration-300
           focus:outline-none focus:ring-2 focus:ring-white z-10"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </motion.button>
      <motion.button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 
        bg-white/30 hover:bg-white/50 p-3 rounded-full 
        backdrop-blur-sm transition-all duration-300 
        focus:outline-none focus:ring-2 focus:ring-white z-10"
        aria-label="Next slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </motion.button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
            animate={{
              width: currentIndex === index ? 32 : 10,
              opacity: currentIndex === index ? 1 : 0.7
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
        <motion.div
          ref={progressRef}
          className="h-full bg-white"
          initial={{ width: '0%' }}
          animate={{ width: isHovered ? '0%' : '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
        />
      </div>
    </div>
  );
}

export default HomeCarousel;