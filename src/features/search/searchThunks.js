import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://api.unsplash.com/";
const random30 = "photos/random?count=30";
const random1 = "photos/random?count=1";
const search = "search/photos?query=";
const search1 = "photos/random?query=";

const keys = [
  process.env.REACT_APP_API_KEY,
  process.env.REACT_APP_API_KEY2,
  process.env.REACT_APP_API_KEY3,
  process.env.REACT_APP_API_KEY4,
  process.env.REACT_APP_API_KEY5,
  process.env.REACT_APP_API_KEY6,
  process.env.REACT_APP_API_KEY7,
  process.env.REACT_APP_API_KEY8,
  process.env.REACT_APP_API_KEY9,
  process.env.REACT_APP_API_KEY10,
];

const fetchDataWithRetry = async (url) => {
  let request;
  for (const key of keys) {
    try {
      request = await fetch(`${baseUrl}${url}&client_id=${key}`);
      if (request.status === 200) {
        break;
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }
  return request;
};

const processPhoto = (rawphoto) => ({
  id: rawphoto.id,
  date: rawphoto.created_at,
  width: rawphoto.width,
  height: rawphoto.height,
  altDesc: rawphoto.alt_description,
  url: rawphoto.urls.regular,
  download: rawphoto.urls.full,
  likes: rawphoto.likes,
  city: rawphoto.location?.city,
  country: rawphoto.location?.country,
  append: "en ",
});

export const getPhotos = createAsyncThunk("search/getPhotos", async () => {
  const request = await fetchDataWithRetry(random30);
  const rawphotos = await request.json();
  return rawphotos.map(processPhoto);
});

export const get1Photo = createAsyncThunk("search/get1Photo", async () => {
  const request = await fetchDataWithRetry(random1);
  const rawphotos = await request.json();
  return processPhoto(rawphotos[0]);
});

export const searchPhotos = createAsyncThunk(
  "search/searchPhotos",
  async (searching) => {
    const request = await fetchDataWithRetry(`${search}${searching}`);
    const searchedphotos = await request.json();
    return searchedphotos.results.map(processPhoto);
  }
);

export const search1Photo = createAsyncThunk(
  "search/search1Photo",
  async (searching) => {
    const request = await fetchDataWithRetry(`${search1}${searching}`);
    const searchedphoto = await request.json();
    return processPhoto(searchedphoto);
  }
);
