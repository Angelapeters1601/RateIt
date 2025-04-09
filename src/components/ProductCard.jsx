import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { XMarkIcon, StarIcon } from '@heroicons/react/24/solid';

function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative pt-[100%] bg-gray-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-800 shadow-xs">
            {product.category}
          </span>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-600 font-mono mt-2 mb-4 text-sm line-clamp-2">
            {product.description}
          </p>
          
          <motion.button
            className="w-full px-3 font-mono py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            Quick View
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} //ensures clicks on the modal content do not close the modal
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => setIsModalOpen(false)}
              >
                <XMarkIcon className="h-6 w-6 text-red-500 text-2xl font-bold bg-blue-400" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="py-2">
                  <div className="mb-6">
                    <span className="inline-block font-mono px-3 py-1 mb-3 text-xs font-medium bg-gray-100 rounded-full">
                      {product.category}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 font-mono whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-8">
                    {product.price && (
                      <div className="flex items-center">
                        <span className="text-xl font-mono font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    )}
                    {product.rating && (
                      <div className="flex items-center">
                        <div className="flex mr-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">
                          ({product.reviewRating.toFixed(1)})
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductCard;