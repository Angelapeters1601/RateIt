import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", text: "Home" },
    { to: "/productReviews", text: "Reviews" },
    { to: "/categories/skincare", text: "Skincare" },
    { to: "/categories/haircare", text: "Haircare" },
    { to: "/categories/makeup", text: "Makeup" },
    { to: "/categories/fragrances", text: "Fragrance" },
  ];

  return (
    <nav className="bg-stone-100 lg:bg-stone-200 py-4 font-serif shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex space-x-8">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} text={link.text} />
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black"
            />
            
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25 }}
              className="lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg p-6"
            >
              <div className="flex flex-col space-y-4 mt-8">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    text={link.text}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

const NavLink = ({ to, text, onClick }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      to={to}
      onClick={onClick}
      className="block text-sm font-bold text-gray-600 hover:text-black uppercase transition-colors duration-200 py-2"
    >
      {text}
    </Link>
  </motion.div>
);

export default Navbar;