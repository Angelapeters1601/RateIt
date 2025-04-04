import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  searchResults: [],
  status: 'idle',
  error: null 
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
      state.status = 'succeeded'; 
    },
    setSearchStatus: (state, action) => {
      state.status = action.payload; 
    },
    setError: (state, action) => {
      state.error = action.payload; 
      state.status = 'failed'; 
    },
    clearSearch: (state) => {
      state.searchQuery = '';
      state.searchResults = [];
      state.status = 'idle'; 
      state.error = null;
    }
  }
});

export const { 
  setSearchQuery, 
  setSearchResults, 
  setSearchStatus, 
  setError, 
  clearSearch 
} = searchSlice.actions;

export default searchSlice.reducer;

