import React, { useState } from 'react';
import Button from '../ui/Button';

export function ReviewForm({ productId }) {
    const [rating, setRating] = useState(0);
    
    return (
      <div className="bg-gray-100 p-6 rounded-lg lg:w-250 lg:mx-auto">
        <h3 className="font-serif text-lg mb-4">Add Your Review On X Product</h3>
        {/* <StarRating 
          interactive 
          rating={rating} 
          onRatingChange={setRating} 
        /> */}
        <textarea 
          className="w-full mt-4 p-3 border border-gray-300 rounded" 
          placeholder="Share your experience..."
          rows={4}
        />
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Your Name" className="p-2 border border-gray-500 rounded" />
            <input type="email" placeholder="Email" className="p-2 border border-gray-500 rounded" />
          </div>
          <Button type="primary" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded">
            Submit
          </Button>
        </div>
      </div>
    )
  }
export default ReviewForm;