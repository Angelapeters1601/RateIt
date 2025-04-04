import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaUser, FaShieldAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub className="h-6 w-6" />, url: "https://github.com/Angelapeters1601" },
    { icon: <FaLinkedin className="h-6 w-6" />, url: "https://www.linkedin.com/in/nwattah-angela" },
    { icon: <FaFacebook className="h-6 w-6" />, url: "https://www.facebook.com/nwattah.angela" },
    { icon: <FaInstagram className="h-6 w-6" />, url: "https://www.instagram.com/angelapeters__" }
  ];

  const navLinks = [
    { icon: <FaUser className="h-4 w-4 mr-1" />, text: "About Us", to: "/about" },
    { icon: <FaShieldAlt className="h-4 w-4 mr-1" />, text: "Privacy Policy", to: "/privacy-policy" },
    { icon: <FaPhone className="h-4 w-4 mr-1" />, text: "Contact Us", to: "/contact" }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gray-900 text-white py-8 mt-10 font-mono"
    >
      <div className="container mx-auto flex flex-col 
      md:flex-row items-center justify-between px-6">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="uppercase text-lg font-bold font-serif tracking-wide py-3 px-4 text-primary"
        >
          Rate-It
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex space-x-6 mt-5 md:mt-0"
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

      <motion.hr 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="border-t border-gray-700 my-6"
      />

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-6 text-sm flex justify-center space-x-6 lg:space-x-8"
      >
        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -2 }}
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

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="text-sm text-center py-6 text-gray-400"
      >
        &copy; {new Date().getFullYear()} Rate-It by Angela. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;