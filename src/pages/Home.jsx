import { StarIcon, ChatBubbleLeftEllipsisIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import heroImage from "../assets/img2.jpg";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function ReviewCounter({ targetCount }) {
  return (
    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
      {({ isVisible }) => (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5 }} 
        >
          {isVisible ? (
            <CountUp 
              end={targetCount} 
              duration={2.5} 
              separator=","
              suffix="+ Verified Reviews"
              className="text-3xl font-mono font-bold"
            />
          ) : (
            <span>0+ Verified Reviews</span>
          )}
        </motion.div>
      )}
    </VisibilitySensor>
  );
}

function Home() {
  return (
    <div className="bg-white">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="Woman applying skincare products" 
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <div className="text-center max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
            >
              Discover <span className="text-primary-300 font-mono">Beauty</span> Worth Loving
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 font-mono"
            >
              Expert-curated reviews you can trust
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-4 justify-center items-center"
                >
                <motion.p
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" bg-stone-900 hover:bg-gray-900
                     text-white py-3 px-8 rounded-md text-lg 
                     font-medium transition-colors font-mono flex items-center
                    "
                >
                    Browse Products <span className="ml-1 text-lg ml-5 mr-1">and</span>
                </motion.p>
                <motion.p
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white hover:bg-gray-100 
                    text-gray-900 py-3 px-8 rounded-md text-lg 
                    font-medium transition-colors border border-white 
                    font-mono"
                >
                    Share Your Review
                </motion.p>
                </motion.div>

          </div>
        </div>
      </section>
    <section className="py-16">
    <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
        Our Mission
        </h2>
        <p className=" text-gray-600 font-mono leading-relaxed">
        To empower beauty consumers with transparent, science-backed product reviews 
        that cut through marketing hype. We combine clinical expertise with real-user 
        experiences to help you make informed decisions about what truly works for 
        your unique skin needs.
        </p>
    </div>
    </section>

      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-200">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <CheckBadgeIcon className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">Expert Verified</h3>
            <p className="text-gray-600 font-mono">
              Our board-certified dermatologists and cosmetic chemists evaluate every product against clinical standards. 
              We analyze ingredient lists, perform patch testing, and assess long-term efficacy to separate hype from results.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="bg-secondary-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <StarIcon className="h-8 w-8 text-secondary-600" />
            </div>
            <h3 className="text-xl font-semibold font-serif text-gray-900 mb-3">Real Results</h3>
            <p className="text-gray-600 font-mono">
              Products undergo 28+ days of controlled testing with before/after biometric analysis. 
              We measure hydration levels, elasticity improvements, and irritation responses using professional-grade diagnostic tools.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <ChatBubbleLeftEllipsisIcon className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold  font-serif text-gray-900 mb-3">Community Driven</h3>
            <p className="text-gray-600 font-mono">
              Our verified reviewer network includes diverse skin types, ages, and ethnicities. 
              Each submission undergoes authenticity screening, with detailed feedback on texture, scent, and performance across different skin conditions.
            </p>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}

export default Home;