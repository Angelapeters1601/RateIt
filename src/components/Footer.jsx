import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaUser, FaShieldAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />, url: "https://github.com/Angelapeters1601" },
    { icon: <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />, url: "https://www.linkedin.com/in/nwattah-angela" },
    { icon: <FaFacebook className="h-5 w-5 sm:h-6 sm:w-6" />, url: "https://www.facebook.com/nwattah.angela" },
    { icon: <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />, url: "https://www.instagram.com/angelapeters__" }
  ];

  const navLinks = [
    { icon: <FaUser className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />, text: "About Us", to: "/about" },
    { icon: <FaShieldAlt className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />, text: "Privacy Policy", to: "/privacy-policy" },
    { icon: <FaPhone className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />, text: "Contact Us", to: "/contact" }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gray-900 text-white py-6 sm:py-8 mt-10 font-mono"
    >
      <div className="container mx-auto flex flex-col items-center px-4 sm:px-6">
        {/* Logo and Social Links */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between">
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className="uppercase text-base sm:text-lg font-bold font-serif tracking-wide py-2 sm:py-3 px-4 text-primary"
          >
            Rate-It
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4 sm:space-x-6 mt-3 sm:mt-0"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 my-4 sm:my-6 w-full"
        />

        {/* Navigation Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 sm:mt-6 text-xs sm:text-sm flex flex-wrap justify-center gap-3 sm:gap-6"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="px-1 sm:px-0" 
            >
              <Link 
                to={link.to} 
                className="flex items-center text-gray-400 hover:underline hover:underline-offset-3 hover:text-white"
              >
                {link.icon} {link.text}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm text-center pt-4 sm:pt-6 pb-2 text-gray-400"
        >
          &copy; {new Date().getFullYear()} Rate-It by Angela. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;