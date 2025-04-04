import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch } from 'react-redux';
import { setSearchQuery, setSearchResults } from '../features/search/searchSlice';
import searchProducts from '../helpers/searchService';
import { useState, useCallback } from 'react';
import { motion } from "framer-motion";
import debounce from "lodash/debounce";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [localQuery, setLocalQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearch = useCallback(
    debounce(async (query) => {
      try {
        setIsLoading(true);
        const results = await searchProducts(query);
        dispatch(setSearchResults(results));
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsLoading(false);
      }
    }, 500),
    []
  );

  const onSearchChange = (e) => {
    const value = e.target.value;
    setLocalQuery(value);
    dispatch(setSearchQuery(value));

    if (value.length >= 3) {
        debouncedSearch(value);
      } else {
        dispatch(setSearchResults([]));
      }

    // If the query is cleared, navigate back to the homepage
    if (value.trim() === '') {
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localQuery.trim()) return;
    navigate('/search');
    setLocalQuery("")
  };

  return (
    <motion.div 
      className="px-4 py-6 border-b border-gray-100 top-0 z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <header className="container flex items-center justify-between mx-auto max-w-7xl">
        <motion.div whileHover={{ scale: 1.03 }}>
          <Link 
            to="/" 
            className="text-xl sm:text-sm font-serif p-1 font-bold mr-auto uppercase text-gray-900"
          >
            Rate-It
          </Link>
        </motion.div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <motion.div className="relative w-full max-w-[180px] md:max-w-[220px]">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search..."
                className="font-mono text-sm border rounded-full 
                  py-1.5 pl-10 pr-8 outline-none focus:ring-2 focus:ring-primary/50
                  transition-all duration-200 w-full"
                value={localQuery}
                onChange={onSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <MagnifyingGlassIcon 
                className={`h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 
                  ${isSearchFocused ? 'text-primary' : 'text-gray-500'} 
                  transition-colors duration-200`} 
              />
              {isLoading && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-primary rounded-full animate-spin" />
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </header>
    </motion.div>
  );
}

export default Header;
