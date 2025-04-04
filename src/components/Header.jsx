import { Link } from "react-router-dom";
import Button from "./../ui/Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/search/searchSlice';
import searchProducts from '../helpers/searchService';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const dispatch = useDispatch();
  const [localQuery, setLocalQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!localQuery.trim()) return;
    
    try {
      const results = await searchProducts(localQuery);
      dispatch(setSearchQuery(localQuery));
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  return (
    <motion.div 
      className="px-4 py-6 border-b border-gray-100 sticky top-0 z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <header className="container flex items-center justify-between mx-auto max-w-7xl">
        <motion.div whileHover={{ scale: 1.03 }}>
          <Link 
            to="/" 
            className="text-xl font-serif p-1 font-bold mr-auto uppercase text-gray-900"
          >
            Rate-It
          </Link>
        </motion.div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <motion.div 
            className="relative"
            animate={{
              width: isSearchFocused ? ['100%', '110%', '100%'] : '100%'
            }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="Search..."
                className="font-mono text-sm border rounded-full 
                  py-1.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary/50
                  transition-all duration-200 w-full max-w-[180px] md:max-w-[220px]"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <MagnifyingGlassIcon 
                className={`h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 
                  ${isSearchFocused ? 'text-primary' : 'text-gray-500'} 
                  transition-colors duration-200`} 
              />
            </form>
          </motion.div>
        </div>
      </header>
    </motion.div>
  );
}

export default Header;
