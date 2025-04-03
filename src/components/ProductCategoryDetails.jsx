import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useFetchProducts from "../hooks/useFetchProducts";
import RatingStars from '../ui/RatingStars';
import ReviewForm from '../pages/ReviewForm';
import { useSelector } from 'react-redux';
import ReviewItem from './ReviewItem';

function ProductCategoryDetails() {
  const { state } = useLocation();
  const { productId } = useParams();
  const { data } = useFetchProducts();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const product = state?.product || data?.find(item => item.id.toString() 
  === productId || null);
const userReviews = useSelector(state => 
    state.newReview.userReviews.filter(review => review.productId === product?.id)
  );
  
  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700">Product Not Found</h2>
        <p className="text-gray-500">The product details are unavailable.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex text-xs text-gray-500 mb-8 tracking-wider">
                <a href="/" className="hover:text-gray-700">HOME</a>
                <span className="mx-2">/</span>
                <a href={`/categories/${product.category}`} className="hover:text-gray-700">{product.category.toUpperCase()}</a>
                <span className="mx-2">/</span>
                <span className="text-gray-700">{product.name.toUpperCase()}</span>
            </nav>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.brand}</p>
          <RatingStars rating={product.rating} />
          <p className="text-2xl font-bold my-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        {userReviews.length > 0 ? (
          <div className="space-y-6 mb-8">
            {userReviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mb-8">
            No customer reviews yet. Be the first to share your thoughts!
          </p>
        )}
        
        <button
          onClick={() => setIsFormOpen(prev => !prev)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {isFormOpen ? "Cancel" : "Write a Review"}
        </button>

        {isFormOpen  && (
          <ReviewForm productId={product.id} productName={product.name} 
          onClose={() => setIsFormOpen(false)}  />
        )}
        
      </section>
    </div>
  );
}
export default ProductCategoryDetails
