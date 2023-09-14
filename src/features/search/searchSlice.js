import { createSlice } from "@reduxjs/toolkit";
import { getPhotos } from "./searchThunks";

const initialState = {
  error: "null",
  initialFetch: [],
  status: "idle",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    removeCard: (state, action) => {
      
      state.initialFetch = state.initialFetch.filter((photo) => photo.id !== action.payload.id);
    },
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
      });
  },
});

export const info = (state) => state.search.initialFetch;
export const statusinfo = (state) => state.search.status;
export const {removeCard} = searchSlice.actions;