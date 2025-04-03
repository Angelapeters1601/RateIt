import useFetchProducts from "../../hooks/useFetchProducts";
import { Link } from "react-router-dom";
import Loader from "../../ui/Loader";
import ErrorMessage from "../../ui/ErrorMessage";
import RatingStars from "../../ui/RatingStars";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Makeup() {
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

  const makeupProducts =
    data?.filter((product) => product.category.toLowerCase() === "makeup") ||
    [];

  if (makeupProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700">
          No Makeup Products Found
        </h2>
        <p className="text-gray-500">
          Our makeup collection is currently being updated. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Makeup Collection</h1>
        <p className="text-gray-600 mt-2">
          Explore our premium range of makeup products
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {makeupProducts.map((product) => (
          <article
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
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
              <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-3">
                <span className="font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <RatingStars rating={product.rating} />
              </div>
              <Link
                to={`/productcategorydetails/${product.id}`}
                state={{ product, category: "makeup" }}
                className="flex items-center justify-center w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-2 rounded-md transition-colors"
              >
                See Details
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Makeup;
