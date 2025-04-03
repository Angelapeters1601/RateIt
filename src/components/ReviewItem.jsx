import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reviewUpdated, reviewDeleted, toggleEdit } from '../features/reviews/newReviewSlice';
import RatingStars from '../ui/RatingStars';

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
    <div className="border-b pb-6 mb-6 last:border-0">
      {review.isEditing ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">{review.userName}</h4>
            <span className="text-sm text-gray-500">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          
          <div>
            <RatingStars 
              rating={editedRating} 
              interactive={true}
              onRatingChange={setEditedRating}
            />
          </div>
          
          <textarea
            className="w-full p-2 border rounded"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
            rows={3}
          />
          
          <div className="flex space-x-2">
            <button
              onClick={handleUpdate}
              className="px-3 py-1 bg-green-600 text-white rounded text-sm"
            >
              Save
            </button>
            <button
              onClick={() => dispatch(toggleEdit(review.id))}
              className="px-3 py-1 bg-gray-200 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-2">
            <div>
              <h4 className="font-medium underline underline-offset-2">{review.userName}</h4>
              <p className="text-sm text-gray-500">
                {/* Review for: {review.productName} */}
              </p>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          
          <RatingStars rating={review.rating} />
          <p className="mt-2 text-gray-800">{review.comment}</p>
          
          <div className="flex space-x-2 mt-4">
            <button
              onClick={() => dispatch(toggleEdit(review.id))}
              className="text-sm text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(reviewDeleted(review.id))}
              className="text-sm text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ReviewItem;