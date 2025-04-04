// components/ui/SearchResultsPreview.js
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Sections from './Sections';

export default function SearchResultsPreview({ query, results, onClose }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="pt-6"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Search Results for "{query}"
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <XMarkIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
            {results.slice(0, 8).map(product => (
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
    </motion.div>
  );
}