import { createSlice } from "@reduxjs/toolkit";
import { getPhotos, searchPhotos } from "./searchThunks";

const initialState = {
  error: "null",
  initialFetch: [],
  searchedPhotos: [],
  status: "idle",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    removeCard: (state, action) => {
      
      state.initialFetch = state.initialFetch.filter((photo) => photo.id !== action.payload.id);
    },
    clearPhotos: (state, action) => {
      state.searchedPhotos = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.initialFetch = action.payload;
      })
      .addCase(getPhotos.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getPhotos.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })
      .addCase(searchPhotos.fulfilled, (state, action) => {
        state.searchStatus = "fulfilled";
        state.searchedPhotos = action.payload;
      })
      .addCase(searchPhotos.pending, (state, action) => {
        state.searchStatus = "pending";
      })
      .addCase(searchPhotos.rejected, (state, action) => {
        state.searchStatus = "rejected";
        state.error = action.error.message;
      })
  },
});

export const info = (state) => state.search.initialFetch;
export const statusinfo = (state) => state.search.status;
export const searchedPhotos = (state) => state.search.searchedPhotos;

export const {removeCard, clearPhotos} = searchSlice.actions;