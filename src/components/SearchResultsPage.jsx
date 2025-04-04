import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults } from '../features/search/searchSlice';
import searchProducts from '../helpers/searchService';
import Loader from '../ui/Loader';
import Sections from './Sections';

function SearchResultsPage() {
  const dispatch = useDispatch();
  const { searchQuery, searchResults } = useSelector(state => state.search);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (searchQuery) {
        setIsLoading(true);
        try {
          const results = await searchProducts(searchQuery);
          dispatch(setSearchResults(results)); 
          console.log("Current search query:", searchQuery);

        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchResults();
  }, [searchQuery, dispatch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{searchQuery}"
      </h1>

      {isLoading ? (
        <Loader />
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map(product => (
            <Sections
              key={product.id} 
              product={product} 
              isEditorPick={product.source === 'editor'}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found matching your search.</p>
        </div>
      )}
    </div>
  );
}

export default SearchResultsPage;