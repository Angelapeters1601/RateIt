import { motion } from "framer-motion";
import { FaCheckCircle, FaExternalLinkAlt, FaCode, FaPalette, FaServer, FaMobileAlt } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";

function About() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Tech stack data
  const techStack = [
    {
      category: "Frontend",
      icon: <FaPalette className="text-indigo-500" />,
      items: [
        "React.js (Vite)",
        "React Router",
        "Tailwind CSS",
        "Framer Motion",
        "React Reveal",
        "Hero Icons"
      ]
    },
    {
      category: "State Management",
      icon: <FaCode className="text-emerald-500" />,
      items: [
        "Redux Toolkit",
        "useState Hook"
      ]
    },
    {
      category: "Data Handling",
      icon: <FaServer className="text-amber-500" />,
      items: [
        "Fetch",
        "Mock API",
        "Custom API Integration"
      ]
    },
    {
      category: "UI/UX",
      icon: <FiFramer className="text-pink-500" />,
      items: [
        "Responsive Design",
        "Skeleton Loading",
        "Swiper.js",
        "Lazy Loading",
        "Email.js"
      ]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-stone-50 min-h-screen py-12 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            About <span className="text-indigo-600">Rate-It</span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-indigo-500 mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-12"
        >
          <motion.div 
            variants={item}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <motion.h2 
              whileHover={{ x: 5 }}
              className="text-2xl font-semibold text-gray-800 mb-6 font-serif"
            >
              Bringing Expert Reviews to Beauty Enthusiasts
            </motion.h2>
            <motion.p 
              className="text-gray-600 leading-relaxed font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Rate-It is a meticulously designed platform that empowers users to make confident beauty purchases. Inspired by <span className="font-semibold text-indigo-600">Good Housekeeping</span> and <span className="font-semibold text-indigo-600">Wirecutter</span>, it provides expert-driven, data-backed insights into skincare, haircare, and makeup products.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <motion.h2 
              whileHover={{ x: 5 }}
              className="text-2xl font-semibold text-gray-800 mb-6 font-serif"
            >
              A Solo Project, A Developer's Vision
            </motion.h2>
            <motion.p 
              className="text-gray-600 font-mono leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              This was a challenging yet rewarding solo project where I took on the full development cycle from concept and UI/UX design to API integration and deployment. My goal was to build a platform that mirrors professional editorial standards while offering a seamless user experience.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <motion.h2 
              whileHover={{ x: 5 }}
              className="text-2xl font-semibold text-gray-800 mb-8 font-serif text-center"
            >
              Technology Stack
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border font-mono border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">
                      {tech.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{tech.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {tech.items.map((item, i) => (
                      <motion.li 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <motion.h2 
              whileHover={{ x: 5 }}
              className="text-2xl font-semibold text-gray-800 mb-6 font-serif"
            >
              Key Features & Innovations
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="border-l-4 border-indigo-500 pl-4 py-2"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">Curated Product Experience</h3>
                <ul className="space-y-3 text-gray-600 font-mono">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-indigo-500 mt-1 flex-shrink-0" />
                    Research-backed product recommendations
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-indigo-500 mt-1 flex-shrink-0" />
                    Intuitive categorization and filtering
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-indigo-500 mt-1 flex-shrink-0" />
                    Detailed product comparisons
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="border-l-4 border-emerald-500 pl-4 py-2"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">Technical Excellence</h3>
                <ul className="space-y-3 text-gray-600 font-mono">
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                    Optimized performance with lazy loading
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                    Responsive across all devices
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCheckCircle className="text-emerald-500 mt-1 flex-shrink-0" />
                    Scalable architecture
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
          >
            <motion.h2 
              whileHover={{ x: 5 }}
              className="text-2xl font-semibold text-gray-800 mb-6 font-serif text-center"
            >
              Why Rate-It Matters
            </motion.h2>
            <motion.p 
              className="text-gray-600 font-mono leading-relaxed max-w-3xl mx-auto text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Rate-It was approached as a real-world project, applying industry best practices for performance, accessibility, and user engagement. Every design and development decision was user-focused, ensuring a smooth and professional experience.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
          >
            <motion.h2 
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-semibold text-gray-800 mb-6 font-serif"
            >
              Explore the Project
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6 max-w-2xl mx-auto font-mono"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              View the full source code and implementation details on GitHub
            </motion.p>
            <motion.a
              href="https://github.com/Angelapeters1601/RateIt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-mono px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Repository
              <FaExternalLinkAlt className="ml-2" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 italic font-mono">
              Every line of code in this project was written with so love,
               intention, and passion. I hope you do like it 😊.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;