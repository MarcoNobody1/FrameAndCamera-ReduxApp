import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from '../features/search/searchSlice';
import { favoriteSlice } from '../features/favorite/favoriteSlice';

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
