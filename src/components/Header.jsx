import { Link } from "react-router-dom";
import Button from "./../ui/Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/search/searchSlice';
import searchProducts  from '../helpers/searchService';
import { useState } from 'react';

function Header() {
    const dispatch = useDispatch();
    const [localQuery, setLocalQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!localQuery.trim()) return;
        
        try {
          const results = await searchProducts(localQuery);
          dispatch(setSearchQuery(localQuery));
          // Results will be available in Redux state
        } catch (error) {
          console.error('Search failed:', error);
        }
      };

  return (
    <div className="px-6 py-2 border-b-1 border-gray-100">
      <header className=" container flex items-center justify-between py-3 mx-auto max-w-9xl
       ">
        <Link to="/" className="text-xl font-serif p-1 font-bold mr-auto uppercase text-gray-900 drop-shadow-md">
             Rate-It
        </Link>
        <div className="flex items-center space-x-6">
        <Link to="/contact">
            <Button type="primary">Subscribe</Button>
        </Link>
          <Button type="plain"> Sign in</Button>
          <div className="relative">
            <form onSubmit={handleSearch}>
            <input
                type="search"
                placeholder="Search..."
                className="font-mono text-sm border rounded-full 
                    py-1 pl-9 pr-4 outline-none focus:ring-1 focus:ring-primary"
                value={localQuery} 
                onChange={(e) => setLocalQuery(e.target.value)} 
                />

                <MagnifyingGlassIcon className="h-4 w-4 text-gray-500 absolute 
                    left-2 top-1/2 transform -translate-y-1/2" />
                </form>
            </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
