import { motion } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function EmptyResults({ query }) {
  return (
    <motion.div
      className="max-w-md mx-auto text-center py-16 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="relative inline-block mb-6"
        animate={{
          rotate: [0, 5, -5, 5, 0],
          scale: [1, 1.1, 1.1, 1.1, 1]
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeatDelay: 2,
          repeat: Infinity
        }}
      >
        <MagnifyingGlassIcon className="h-16 w-16 text-gray-300 mx-auto" />
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 border-dashed animate-spin-slow" />
      </motion.div>

      <motion.h3 
        className="text-xl font-medium font-mono text-gray-700 mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        No results found for
      </motion.h3>
      
      <motion.p
        className="text-lg font-semibold font-mono text-gray-900 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        "{query}"
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <p className="text-gray-500 text-sm mb-6 font-mono">
          Try different keywords or check our suggestions:
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 text-sm font-mono max-w-xs mx-auto">
          {['skincare', 'makeup', 'fragrance', 'haircare'].map((term) => (
            <motion.span
              key={term}
              className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-full cursor-pointer transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {term}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default EmptyResults;