import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  status: "idle",
};


export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem(`favsLocal`, JSON.stringify(state.favorites));
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter((photo) => photo.id !== action.payload.id);
      localStorage.setItem(`favsLocal`, JSON.stringify(state.favorites));
    },
    addFromLocal: (state, action) => {
      state.favorites = action.payload;
    }
  },
});

export const { addFavorite, removeFavorite, addFromLocal } = favoriteSlice.actions;
export const favoritePhotos = (state) => state.favorite.favorites;