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
    },
    searchFavs: (state,action) =>{
      state.favorites = state.favorites.filter((item) => {
        return item.altDesc.toLowerCase().trim().replace(/\s+/g, '').includes(action.payload.toLowerCase().trim().replace(/\s+/g, ''))
      })
    },
    resetFavorites: (state) => {
      state.favorites = JSON.parse(localStorage.getItem('favsLocal')) || [];
    },
    orderFavorites: (state, action) => {
      switch (action.payload) {
        case "width":
          state.favorites.sort((a,b) => a.width - b.width);
          break;
        case "height":
          state.favorites.sort((a,b) => a.height - b.height);
          break;
        case "likes":
          state.favorites.sort((a,b) => a.likes - b.likes);
          break;
        case "date":
          state.favorites.sort((a,b) => new Date(a.date) - new Date(b.date));
          break;
        default:
          break;
      }
    }
  },
});

export const { addFavorite, removeFavorite, addFromLocal, searchFavs, resetFavorites, orderFavorites } = favoriteSlice.actions;
export const favoritePhotos = (state) => state.favorite.favorites;