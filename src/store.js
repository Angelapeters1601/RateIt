import { configureStore } from '@reduxjs/toolkit';
import savedReviewsReducer from "./features/reviews/savedReviewsSlice";

 const store = configureStore({
  reducer: {
    savedReviews: savedReviewsReducer,
  },
});
export default store