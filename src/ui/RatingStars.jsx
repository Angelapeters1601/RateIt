// import { StarIcon } from "@heroicons/react/24/solid";

// export default function RatingStars({ rating }) {
//   return (
//     <div className="flex items-center" aria-label={`Rating: ${rating} out of 5`}>
//       {[...Array(5)].map((_, i) => (
//         <StarIcon
//           key={i}
//           className={`h-4 w-4 ${i < Math.round(rating) ? 
//             'text-yellow-400' : 'text-gray-300'}`}
//         />
//       ))}
//       <span className="ml-1 text-xs text-gray-500">({rating.toFixed(1)})</span>
//     </div>
//   );
// }
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
  