import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaUser, FaShieldAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10 font-mono">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <h1 className="uppercase text-lg font-bold font-serif tracking-wide py-3 px-4 text-primary">Rate-It</h1>
        
        <div className="flex space-x-6 mt-5 md:mt-0">
          <a href="https://github.com/Angelapeters1601" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/nwattah-angela" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/nwattah.angela" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/angelapeters__" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </div>
      <hr className="border-t border-gray-700 my-6" />
      <div className="mt-6 text-sm flex justify-center space-x-6 lg:space-x-8">
        <Link to="/about" className="flex items-center text-gray-400 hover:underline hover:underline-offset-3 hover:text-white">
          <FaUser className="h-4 w-4 mr-1" /> About Us
        </Link>
        <Link to="/privacy-policy" className="flex items-center text-gray-400 hover:text-white hover:underline hover:underline-offset-3">
          <FaShieldAlt className="h-4 w-4 mr-1" /> Privacy Policy
        </Link>
        <Link to="/contact" className="flex items-center text-gray-400 hover:text-white hover:underline hover:underline-offset-3">
          <FaPhone className="h-4 w-4 mr-1" /> Contact Us
        </Link>
      </div>
      <p className="text-sm text-center py-6 text-gray-400">
          &copy; {new Date().getFullYear()} Rate-It by Angela. All rights reserved.
        </p>
  
    </footer>
  );
};

export default Footer;
