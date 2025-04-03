import { configureStore } from '@reduxjs/toolkit';
import savedReviewsReducer from "./features/reviews/savedReviewsSlice";
import newReviewReducer from "./features/reviews/newReviewSlice"

 const store = configureStore({
  reducer: {
    savedReviews: savedReviewsReducer,
    newReview: newReviewReducer,
  },
});
export default store