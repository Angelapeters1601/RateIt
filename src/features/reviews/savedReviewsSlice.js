// features/savedReviews/savedReviewsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('savedReviews')) || [],
};

export const savedReviewsSlice = createSlice({
  name: 'savedReviews',
  initialState,
  reducers: {
    addReview: (state, action) => {
      if (!state.items.some(item => item.id === action.payload.id)) {
        state.items.push(action.payload);
        localStorage.setItem('savedReviews', JSON.stringify(state.items));
      }
    },
    removeReview: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('savedReviews', JSON.stringify(state.items));
    },
    clearReviews: state => {
      state.items = [];
      localStorage.removeItem('savedReviews');
    }
  }
});

export const { addReview, removeReview, clearReviews } = savedReviewsSlice.actions;
export default savedReviewsSlice.reducer;