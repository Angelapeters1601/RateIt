import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {Fade} from 'react-awesome-reveal';
import useFetchProducts from "../hooks/useFetchProducts";
import RatingStars from '../ui/RatingStars';
import ReviewForm from '../pages/ReviewForm';
import { useSelector } from 'react-redux';
import ReviewItem from './ReviewItem';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

function ProductCategoryDetails() {
    const navigate = useNavigate();
  const { state } = useLocation();
  const { productId } = useParams();
  const { data } = useFetchProducts();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const product = state?.product || data?.find(item => item.id.toString() === productId) || null;
  const userReviews = useSelector(state => 
    state.newReview.userReviews.filter(review => review.productId === product?.id)
  );

  if (!product) {
    return <div className="text-center py-12">
      <h2 className="text-2xl font-bold">Product Not Found</h2>
    </div>;
  }

  return (
    <div className="container mx-auto px-6 py-8 max-w-screen-lg">
      <Fade top>
        <nav className="flex uppercase font-serif tracking-wider text-sm text-gray-500 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="hover:text-black uppercase focus:outline-none"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-6" />

          </button> 
          <span>{product.name}</span>
        </nav>
      </Fade>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full max-w-[300px] mx-auto"
          />
        </motion.div>

        <Fade right>
          <div className="md:w-1/2">
            <h1 className="text-lg font-mono font-bold">{product.name}</h1>
            <RatingStars rating={product.rating} />
            <p className="text-sm text-gray-600 my-2">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 text-sm font-mono">{product.description}</p>
            <hr className='border-t-2 border-gray-400 my-4 mx-4' />
          </div>
        </Fade>
      </div>

      {/* Demarcation between Product and Reviews */}
      <div className="border-t-2 border-gray-300 my-8" />

      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold font-mono text-gray-800">Reviews</h2>
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="px-6 py-3 bg-black 
            text-white font-mono rounded-lg
             shadow-md transition-all duration-300
              hover:bg-gray-700 focus:outline-none"
          >
            {isFormOpen ? "Close" : "Add Review"}
          </button>
        </div>

        {isFormOpen && (
          <Fade>
            <ReviewForm 
              productId={product.id} 
              onClose={() => setIsFormOpen(false)} 
            />
          </Fade>
        )}

        {userReviews.length > 0 ? (
          userReviews.map((review) => (
            <Fade key={review.id}>
              <ReviewItem review={review} />
            </Fade>
          ))
        ) : (
          <p className="text-gray-500 font-mono">No reviews yet</p>
        )}
      </motion.section>
    </div>
  );
}

export default ProductCategoryDetails;
