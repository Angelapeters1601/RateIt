import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeReview, clearReviews } from "../features/reviews/savedReviewsSlice";
import { StarIcon, BookmarkIcon, ArrowLeftIcon , TrashIcon} from "@heroicons/react/24/solid"; // Add StarIcon

export default function SavedReviews() {
  const { items } = useSelector(state => state.savedReviews);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeReview(id));
  };

  const handleClearAll = () => {
    if (items.length > 0 && window.confirm('Are you sure you want to clear all saved reviews?')) {
      dispatch(clearReviews());
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/productReviews" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeftIcon className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-mono font-light">Saved Reviews</h1>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <BookmarkIcon className="w-12 h-12 mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium mb-2">No saved reviews yet</h3>
          <p className="text-gray-500 mb-6">Save interesting reviews to find them later</p>
          <Link 
            to="/productReviews" 
            className="inline-block px-6 py-2 border border-black text-sm hover:bg-black hover:text-white transition-all"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {items.map(item => (
            <div key={item.id} className="border-b pb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <button className="text-amber-500 cursor-pointer" onClick={()=>handleRemove(item.id)}>
                  <BookmarkIcon className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-500 text-sm mb-3">{item.brand}</p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`w-4 h-4 ${i < item.editorRating ? 'text-amber-400' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">{item.editorRating}/5</span>
              </div>
              
              <Link 
                to={`/products/${item.id}`} 
                state={{ product: item }} 
                className="text-sm font-medium font-mono hover:underline inline-block mt-2"
              >
                View full review →
              </Link>
            </div>
          ))}
        </div>
      )}
      {items.length > 0 &&
      
    <button
        onClick={handleClearAll}
        className="flex items-center gap-2 mt-5 px-4 py-2 text-sm font-mono bg-gray-200 text-red-600 hover:bg-red-50 rounded-full transition-colors"
        >
        <TrashIcon className="w-4 h-4" />
        Clear All
    </button>
}
    </div>
  );
}