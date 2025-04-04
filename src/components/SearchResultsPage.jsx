import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import EmptyResults from './EmptyResults';
import Loader from '../ui/Loader'; 
import { useState, useEffect } from 'react';

function SearchResultsPage() {
  const { searchQuery, searchResults } = useSelector(state => state.search);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery && searchResults.length === 0) {
      setIsLoading(true);
      const timeout = setTimeout(() => setIsLoading(false), 500); 
      return () => clearTimeout(timeout);
    }
  }, [searchQuery, searchResults]);

  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold font-mono text-center mb-6">
        {isLoading ? (
          <>Searching results for "{searchQuery}"...</>
        ) : searchResults.length > 0 ? (
          <>Found results for "{searchQuery}"</>
        ) : null}
      </h1>

      {isLoading ? (
        <div className="text-center py-12">
          <Loader />
        </div>
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
         lg:grid-cols-3 gap-10">
          {searchResults.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyResults query={searchQuery} />
      )}
    </div>
  );
}

export default SearchResultsPage;
