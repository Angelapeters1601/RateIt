import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

const featuredReviews = [
  {
    id: 1,
    name: "La Mer Moisturizing Cream",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b",
    url: "/reviews/1",
    rating: 4.5,
    summary: "A luxurious moisturizing cream for deep hydration.",
    expertVerified: true,
    price: "$350",
  },
  {
    id: 2,
    name: "Dove Body Care",
    image: "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137",
    url: "/reviews/2",
    rating: 4.7,
    summary: "A hydrating moisturiser with cocoa butter extract.",
    price: "$45",
  },
  {
    id: 3,
    name: "Fenty Beauty Foundation",
    image: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg",
    url: "/reviews/3",
    rating: 4.8,
    summary: "A soft matte foundation with a flawless finish.",
    expertVerified: true,
    price: "$39",
  },
  {
    id: 4,
    name: "Olaplex No. 3",
    image: "https://images.pexels.com/photos/6621337/pexels-photo-6621337.jpeg",
    url: "/reviews/4",
    rating: 4.9,
    summary: "A bond-building treatment for stronger hair.",
    price: "$28",
  },
];

const NotFound = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isDirectAccess = !location.state?.fromRedirect;
    if (isDirectAccess && window.location.pathname !== '/404') {
      navigate('/404', { 
        state: { fromRedirect: true },
        replace: true 
      });
    }
  }, [navigate, location]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % featuredReviews.length);
      }
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const item = carousel.children[activeIndex];
      if (item) {
        const itemLeft = item.offsetLeft;
        const itemWidth = item.offsetWidth;
        const carouselWidth = carousel.offsetWidth;
        
        carousel.scrollTo({
          left: itemLeft - (carouselWidth - itemWidth) / 2,
          behavior: "smooth"
        });
      }
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => 
      prev === 0 ? featuredReviews.length - 1 : prev - 1
    );
    resetInterval();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % featuredReviews.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % featuredReviews.length);
      }
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-indigo-600 text-white p-8 text-center">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-indigo-100 mb-6 py-2 text-lg">
            The page you requested seems to have vanished into the void. Don't worry,
            we'll help you find your way back.
          </p>
        </div>

        <div className="p-8">
          <div className="md:flex gap-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Oops! Looks like you're lost.
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                <p className="text-blue-700 font-medium">Possible reasons:</p>
                <ul className="list-disc list-inside text-blue-700 mt-2 space-y-1">
                  <li>The page may have been moved or removed</li>
                  <li>You might have mistyped the URL</li>
                  <li>We could have made a mistake (we're human too!)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  ← Return to Homepage
                </Link>
                <Link
                  to="/search"
                  className="inline-flex items-center justify-center w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  🔍 Try our Search
                </Link>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🌟</span> Editor's Top Picks
              </h3>
              
              <div 
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <button
                  onClick={handlePrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md -ml-4 transition-all"
                  aria-label="Previous product"
                >
                  <ChevronLeftIcon className="h-5 w-5 text-indigo-600" />
                </button>
                
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md -mr-4 transition-all"
                  aria-label="Next product"
                >
                  <ChevronRightIcon className="h-5 w-5 text-indigo-600" />
                </button>

                <div 
                  ref={carouselRef}
                  className="flex overflow-x-hidden snap-x snap-mandatory gap-6 pb-4 scroll-smooth"
                >
                  {featuredReviews.map((review, index) => (
                    <div
                      key={review.id}
                      className={`flex-shrink-0 w-[calc(100%-1.5rem)] snap-start transition-transform duration-300 ${
                        index === activeIndex ? "scale-100" : "scale-95 opacity-90"
                      }`}
                    >
                      <Link
                        to={review.url}
                        className="block border rounded-xl p-4 hover:shadow-md transition-all duration-300 h-full bg-white"
                      >
                        <div className="relative h-48 overflow-hidden rounded-lg mb-3">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                          {review.expertVerified && (
                            <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                              Expert Verified
                            </span>
                          )}
                          <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded text-sm font-medium shadow-sm">
                            {review.price}
                          </div>
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(review.rating) 
                                    ? 'text-yellow-400' 
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-1 text-sm text-gray-600">
                            {review.rating.toFixed(1)}
                          </span>
                        </div>
                        <h4 className="font-medium text-gray-900">{review.name}</h4>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {review.summary}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-4 space-x-2">
                  {featuredReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === activeIndex 
                          ? "bg-indigo-600 w-6" 
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-500">
              Still need help?{" "}
              <Link to="/contact" className="text-indigo-600 hover:underline font-medium">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;