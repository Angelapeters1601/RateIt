import { Link } from "react-router-dom";

function Navbar () {
  return (
    <div>
      <nav className=" lg:bg-stone-200 py-4 font-serif">
        <div className="container mx-auto flex items-center justify-center
         space-x-6 px-6 py-3 ">
        

          <div className="flex space-x-12">
            <Link
              to="/"
              className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase hover:text-black hover:underline underline-offset-3"
            >
              Home
            </Link>
            
            <Link to="/productReviews" className="text-xs font-bold text-gray-800 uppercase hover:text-black hover:underline underline-offset-3">
            Reviews
          </Link>

            <Link
              to="/categories/skincare"
              className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase hover:text-black hover:underline underline-offset-3"
            >
              Skincare
            </Link>
            <Link
              to="/categories/haircare"
              className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase hover:text-black hover:underline underline-offset-3"
            >
              Haircare
            </Link>
            <Link
              to="/categories/makeup"
              className=" hover:text-black hover:underline underline-offset-3 text-xs font-bold text-gray-600 hover:text-gray-900 uppercase"
            >
              Makeup
            </Link>   
            <Link
              to="/categories/fragrances"
              className="text-xs font-bold text-gray-600 hover:text-gray-900 uppercase hover:text-black hover:underline underline-offset-3"
            >
              Fragrance
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     { path: '/', label: 'Home' },
//     { path: '/productReviews', label: 'Reviews' },
//     { path: '/categories/skincare', label: 'Skincare' },
//     { path: '/categories/haircare', label: 'Haircare' },
//     { path: '/categories/makeup', label: 'Makeup' },
//     { path: '/categories/fragrances', label: 'Fragrance' },
//   ];

//   return (
//     <nav className="bg-white shadow-sm">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
          


//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-8">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200 relative group"
//                 >
//                   {item.label}
//                   <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               {mobileMenuOpen ? (
//                 <XMarkIcon className="block h-6 w-6" />
//               ) : (
//                 <Bars3Icon className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.2 }}
//             className="md:hidden overflow-hidden"
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               {navItems.map((item) => (
//                 <motion.div
//                   key={item.path}
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <Link
//                     to={item.path}
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;