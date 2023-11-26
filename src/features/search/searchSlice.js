import { createSlice } from "@reduxjs/toolkit";
import {
  get1Photo,
  getPhotos,
  search1Photo,
  searchPhotos,
} from "./searchThunks";

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
      state.initialFetch = state.initialFetch.filter(
        (photo) => photo.id !== action.payload.id
      );
    },
    removeSearchedCard: (state, action) => {
      state.searchedPhotos = state.searchedPhotos.filter(
        (photo) => photo.id !== action.payload.id
      );
    },
    clearPhotos: (state, action) => {
      state.searchedPhotos = [];
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
      .addCase(get1Photo.fulfilled, (state, action) => {
        state.searchStatus = "fulfilled";
        state.initialFetch = [...state.initialFetch, action.payload];
      })
      .addCase(get1Photo.pending, (state, action) => {
        state.searchStatus = "pending";
      })
      .addCase(get1Photo.rejected, (state, action) => {
        state.searchStatus = "rejected";
        state.error = action.error.message;
      })
      .addCase(search1Photo.fulfilled, (state, action) => {
        state.searchStatus = "fulfilled";
        state.searchedPhotos = [...state.searchedPhotos, action.payload];
      })
      .addCase(search1Photo.pending, (state, action) => {
        state.searchStatus = "pending";
      })
      .addCase(search1Photo.rejected, (state, action) => {
        state.searchStatus = "rejected";
        state.error = action.error.message;
      });
  },
});

export const info = (state) => state.search.initialFetch;
export const statusinfo = (state) => state.search.status;
export const searchedPhotos = (state) => state.search.searchedPhotos;
export const get1 = get1Photo.fulfilled;

export const { removeCard, clearPhotos, removeSearchedCard } =
  searchSlice.actions;
