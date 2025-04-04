import { configureStore } from '@reduxjs/toolkit';
import savedReviewsReducer from "./features/reviews/savedReviewsSlice";
import newReviewReducer from "./features/reviews/newReviewSlice"
import searchReducer from "./features/search/searchSlice"

 const store = configureStore({
  reducer: {
    savedReviews: savedReviewsReducer,
    newReview: newReviewReducer,
    search: searchReducer,
  },
});
export default store