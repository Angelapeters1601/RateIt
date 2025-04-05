import { motion } from "framer-motion";
import useFetchProducts from "../../hooks/useFetchProducts";
import { Link } from "react-router-dom";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";
import RatingStars from "../../ui/RatingStars";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function ProductCategoryPage({ categoryKey, title, subtitle, paragraph }) {
  const { data, loading, error } = useFetchProducts();

  if (loading)
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader size="lg" />
      </div>
    );

  if (error)
    return (
      <ErrorMessage
        message="Failed to load products"
        error={error}
        retryFn={useFetchProducts}
      />
    );

  const products =
    data?.filter(
      (product) => product.category?.toLowerCase() === categoryKey?.toLowerCase()
    ) || [];

  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <h2 className="text-2xl font-bold text-gray-700">
          No {title} Products Found
        </h2>
        <p className="text-gray-500 font-mono">
          Our {title.toLowerCase()} collection is currently being updated. Check back soon!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="container mx-auto px-4 py-8"
    >
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h1 className="text-2xl font-bold text-gray-900 font-mono">{title}</h1>
        <p className="text-gray-600 text-sm mt-2 font-mono">{subtitle}</p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mt-3 text-sm font-mono border-b border-gray-500 py-5"
        >
          {paragraph}
        </motion.p>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-20 gap-6">
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -3 }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative pb-[100%]">
              <img
                src={product.image}
                alt={product.name}
                className="absolute h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold font-mono text-lg mb-1 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm font-mono mb-2 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold font-mono text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <RatingStars rating={product.rating} />
              </div>
              <motion.div whileTap={{ scale: 0.98 }} className="mt-5">
                <Link
                  to={`/productcategorydetails/${product.id}`}
                  state={{ product, category: categoryKey }}
                  className="flex items-center font-mono justify-center
                  w-full border border-gray-300 text-gray-500 hover:bg-indigo-50 py-2 rounded-md transition-colors"
                >
                  See Details
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default ProductCategoryPage;
