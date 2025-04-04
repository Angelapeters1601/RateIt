import { StarIcon, ChatBubbleLeftEllipsisIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import heroImage from "../assets/img2.jpg";
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import HomeCarousel from "../ui/HomeCarousel";
import ReviewCounter from "../ui/ReviewCounter";

function Home() {
  return (
    <div className="bg-white">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10" />
        <Fade direction="left" duration={1000} triggerOnce>
          <img 
            src={heroImage} 
            alt="Woman applying skincare products" 
            className="w-full h-[500px] object-cover"
          />
        </Fade>

        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <div className="text-center max-w-3xl">
            <Fade direction="down" duration={1000} triggerOnce>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Discover <span className="text-primary-300 font-mono">Beauty</span> Worth Loving
              </h1>
            </Fade>
            
            <Fade direction="down" duration={1000} delay={200} triggerOnce>
              <p className="text-xl text-white/90 mb-8 font-mono">
                Expert-curated reviews you can trust
              </p>
            </Fade>
            
            <Fade direction="up" duration={1000} delay={400} triggerOnce>
              <div className="flex gap-4 justify-center items-center">
                <button className="bg-stone-900 hover:bg-gray-900 text-white py-2 md:py-3 px-6 md:px-8 rounded-md text-base md:text-lg font-medium font-mono flex items-center transition-transform hover:scale-105">
                  Browse Products <span className="ml-3 md:ml-5 mr-1">and</span>
                </button>
                <button className="bg-white hover:bg-gray-100 text-gray-900 py-2 md:py-3 px-6 md:px-8 rounded-md text-base md:text-lg font-medium border border-white font-mono transition-transform hover:scale-105">
                  Share Your Review
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-200">
        <Zoom duration={1000} triggerOnce>
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif font-medium text-gray-900 mb-4">
              Why Trust Our Reviews?
            </h2>
            <p className="text-gray-600 font-mono tracking-wide max-w-2xl mx-auto mb-4">
              Rigorous testing methodology meets real-world user experiences for the most comprehensive beauty insights.
            </p>
            <ReviewCounter 
              targetCount={1500} 
              suffixClassName="text-2xl font-normal text-gray-600"
            />
          </div>
        </Zoom>
        
        <Fade direction="up" duration={800} triggerOnce>
          <HomeCarousel />
        </Fade>
        
        <Slide direction="up" duration={800} triggerOnce>
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 font-mono leading-relaxed">
                To empower beauty consumers with transparent, science-backed product reviews 
                that cut through marketing hype. We combine clinical expertise with real-user 
                experiences to help you make informed decisions about what truly works for 
                your unique skin needs.
              </p>
            </div>
          </section>
        </Slide>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Fade direction="left" delay={100} duration={800} triggerOnce>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckBadgeIcon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Expert Verified</h3>
              <p className="text-gray-600 font-mono">
                Our board-certified dermatologists evaluate every product against clinical standards.
              </p>
            </div>
          </Fade>
          
          <Fade direction="up" delay={300} duration={800} triggerOnce>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="bg-secondary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <StarIcon className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Real Results</h3>
              <p className="text-gray-600 font-mono">
                Products undergo 28+ days of controlled testing with biometric analysis.
              </p>
            </div>
          </Fade>
          
          <Fade direction="right" delay={500} duration={800} triggerOnce>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Community Driven</h3>
              <p className="text-gray-600 font-mono">
                Verified reviewer network includes diverse skin types and ethnicities.
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}

export default Home;
