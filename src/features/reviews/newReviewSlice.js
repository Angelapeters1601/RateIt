import { createSlice } from '@reduxjs/toolkit';

const loadReviews = () => {
  try {
    const serialized = localStorage.getItem('userReviews');
    console.log("Loaded reviews:", serialized);
    return serialized ? JSON.parse(serialized) : [];
  } catch(error) {
    console.error("Couldn't parse localStorage data", error);
    return [];
  }
};

const initialState = {
    // userReviews: loadFromLocalStorage(),
  userReviews: loadReviews(),
  status: 'idle',
  error: null
};

const newReviewSlice = createSlice({
  name: 'newReview',
  initialState,
  reducers: {
    reviewSubmitted: {
      reducer(state, action) {
        state.userReviews.unshift(action.payload);
        localStorage.setItem('userReviews', JSON.stringify(state.userReviews));
      },
      prepare({ productId, productName, userName, rating, comment }) {
        return {
          payload: {
            id: Date.now(),
            productId,
            productName,
            userName,
            rating,
            comment,
            date: new Date().toISOString(),
            isEditing: false
          }
        };
      }
    },
    reviewUpdated: {
      reducer(state, action) {
        const index = state.userReviews.findIndex(r => r.id === action.payload.id);
        if (index !== -1) {
          state.userReviews[index] = action.payload;
          localStorage.setItem('userReviews', JSON.stringify(state.userReviews));
        }
      }
    },
    reviewDeleted(state, action) {
      state.userReviews = state.userReviews.filter(r => r.id !== action.payload);
      localStorage.setItem('userReviews', JSON.stringify(state.userReviews));
    },
    toggleEdit(state, action) {
      const review = state.userReviews.find(r => r.id === action.payload);
      if (review) {
        review.isEditing = !review.isEditing;
      }
    }
  }
});

export const { 
  reviewSubmitted, 
  reviewUpdated, 
  reviewDeleted, 
  toggleEdit 
} = newReviewSlice.actions;

export default newReviewSlice.reducer;