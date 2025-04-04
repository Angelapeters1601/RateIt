function RatingStars({ rating, interactive, onRatingChange }) {
    const handleRating = (rating) => {
      if (interactive && onRatingChange) {
        onRatingChange(rating);
      }
    };
  
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRating(star)}
            className={`cursor-pointer text-2xl ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  }
  export default RatingStars
  