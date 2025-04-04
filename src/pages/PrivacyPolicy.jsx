import { motion } from "framer-motion";

function PrivacyPolicy() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto px-6 font-serif py-10 container border border-gray-200 rounded-lg"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.h1 
          variants={item}
          className="text-xl font-bold uppercase text-gray-900 mb-4 underline underline-offset-3"
        >
          Privacy Policy
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-gray-700 mb-6 text-sm"
        >
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our website.
        </motion.p>
        
        <motion.h2 
          variants={item}
          className="text-lg font-semibold text-gray-800 mt-6 mb-2 text-left"
        >
          Information We Collect
        </motion.h2>
        <motion.p 
          variants={item}
          className="text-gray-700 mb-4 text-sm text-left"
        >
          We may collect personal information such as your name, email address,
          and browsing activity when you use our platform.
        </motion.p>
        
        <motion.h2 
          variants={item}
          className="text-lg font-semibold text-gray-800 mt-6 mb-2 text-left"
        >
          How We Use Your Information
        </motion.h2>
        <motion.p 
          variants={item}
          className="text-gray-700 mb-4 text-sm text-left"
        >
          We use your data to improve our services, provide personalized
          recommendations, and communicate with you about updates and promotions.
        </motion.p>
        
        <motion.h2 
          variants={item}
          className="text-lg font-semibold text-gray-800 mt-6 mb-2 text-left"
        >
          Data Protection
        </motion.h2>
        <motion.p 
          variants={item}
          className="text-gray-700 mb-4 text-sm text-left"
        >
          We implement security measures to protect your personal information
          against unauthorized access or disclosure.
        </motion.p>
        
        <motion.h2 
          variants={item}
          className="text-lg font-semibold text-gray-800 mt-6 mb-2 text-left"
        >
          Third-Party Services
        </motion.h2>
        <motion.p 
          variants={item}
          className="text-gray-700 mb-4 text-sm text-left"
        >
          We may use third-party services such as analytics tools, which may
          collect data in accordance with their own privacy policies.
        </motion.p>
        
        <motion.h2 
          variants={item}
          className="text-lg font-semibold text-gray-800 mt-6 mb-2 text-left"
        >
          Your Choices
        </motion.h2>
        <motion.p 
          variants={item}
          className="text-gray-700 mb-4 text-sm text-left"
        >
          You can opt out of certain data collection practices or request the
          deletion of your personal information by contacting us.
        </motion.p>
        
        <motion.h2 
          variants={item}
          className="text-lg font-semibold text-gray-800 mt-6 mb-2 text-left"
        >
          Changes to This Policy
        </motion.h2>
        <motion.p 
          variants={item}
          className="text-gray-700 mb-4 text-sm text-left"
        >
          We may update this Privacy Policy from time to time. Any changes will be
          posted on this page.
        </motion.p>
        
        <motion.p 
          variants={item}
          className="text-gray-700 mt-6 text-sm"
        >
          If you have any questions about this Privacy Policy, please contact us at
          <span className="font-bold"> support@rateit.com</span>.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default PrivacyPolicy;