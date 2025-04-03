import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reviewSubmitted } from '../features/reviews/newReviewSlice';
import RatingStars from '../ui/RatingStars';

function ReviewForm({ productId, productName, onClose }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: '',
    rating: 0,
    comment: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.userName.trim() || formData.rating === 0 || !formData.comment.trim()) {
      alert('Please fill all fields');
      return;
    }

    setStatus('submitting');

    try {
      dispatch(reviewSubmitted({
        productId,
        productName,
        userName: formData.userName.trim(),
        rating: formData.rating,
        comment: formData.comment.trim()
      }));
      console.log("Review submitted successfully");

      setFormData({
        userName: '',
        rating: 0,
        comment: '',
      });

      setStatus('succeeded');
      onClose()
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-gray-50 rounded-lg border">
      <h3 className="text-lg font-semibold">Share Your Experience</h3>
      
      <div>
        <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          id="userName"
          name="userName"
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.userName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Rating
        </label>
        <RatingStars 
          rating={formData.rating} 
          interactive={true} 
          onRatingChange={(rating) => {
            console.log("New rating:", rating); 
            setFormData(prev => ({ ...prev, rating }))} }
        />
      </div>
      
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
          Review
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.comment}
          onChange={handleChange}
          required
        />
      </div>      
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${
          status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Review'}
      </button>
      
      {status === 'succeeded' && (
        <p className="text-green-600 text-sm">Thank you for your review!</p>
      )}
      {status === 'failed' && (
        <p className="text-red-600 text-sm">Failed to submit. Please try again.</p>
      )}
    </form>
  );
}

export default ReviewForm;