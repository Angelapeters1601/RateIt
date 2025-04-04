import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reviewUpdated, reviewDeleted, toggleEdit } from '../features/reviews/newReviewSlice';
import RatingStars from '../ui/RatingStars';
import { Fade } from 'react-awesome-reveal';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

function ReviewItem({ review }) {
  const dispatch = useDispatch();
  const [editedComment, setEditedComment] = useState(review.comment);
  const [editedRating, setEditedRating] = useState(review.rating);

  const handleUpdate = () => {
    dispatch(reviewUpdated({
      ...review,
      comment: editedComment,
      rating: editedRating,
      isEditing: false
    }));
  };

  return (
    <Fade bottom duration={300} distance="10px">
      <div className="border-b border-gray-100 pb-6 mb-6 last:border-0 hover:bg-gray-50/50 transition-colors p-3 rounded-lg">
        {review.isEditing ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-gray-800">{review.userName}</h4>
              <span className="text-sm text-gray-400">
                {new Date(review.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <div className="py-2">
              <RatingStars 
                rating={editedRating} 
                interactive={true}
                onRatingChange={setEditedRating}
                starSize={15}
              />
            </div>
            
            <textarea
              className="w-full p-3 font-mono border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              rows={3}
              placeholder="Share your thoughts..."
            />
            
            <div className="flex space-x-3">
              <button
                onClick={handleUpdate}
                className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
              >
                <PencilIcon className="w-4 h-4 mr-2 font-mono" />
                Save Changes
              </button>
              <button
                onClick={() => dispatch(toggleEdit(review.id))}
                className="px-4 py-2 bg-white font-mono hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg text-sm font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold
                 font-mono tracking-wider text-lg uppercase
                  text-gray-800">{review.userName}</h4>
              </div>
              <span className="text-sm text-gray-400">
                {new Date(review.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
            
            <div className="py-1">
              <RatingStars rating={review.rating} starSize={15} />
            </div>
            
            <p className="text-gray-700 leading-relaxed font-mono">{review.comment}</p>
            
            <div className="flex space-x-4 pt-2 border-b 
            border-gray-200 py-3">
              <button
                onClick={() => dispatch(toggleEdit(review.id))}
                className="flex items-center font-mono text-sm text-blue-800 hover:text-blue-800 font-medium transition-colors"
              >
                <PencilIcon className="w-4 h-4 mr-1.5 " />
                Edit
              </button>
              <button
                onClick={() => dispatch(reviewDeleted(review.id))}
                className="flex items-center  font-mono text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
              >
                <TrashIcon className="w-4 h-4 mr-1.5" />
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}

export default ReviewItem;