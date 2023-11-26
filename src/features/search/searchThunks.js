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
];

let currentKeyIndex = 0;
let remainingCalls = 50;

const rotateKey = () => {
  remainingCalls = 50;
  currentKeyIndex = (currentKeyIndex + 1) % keys.length;
};

export const getPhotos = createAsyncThunk("search/getPhotos", async () => {
  if (remainingCalls === 0) {
    rotateKey();
  }

  const request = await fetch(`${baseUrl}${random30}&client_id=${keys[currentKeyIndex]}`);
  const rawphotos = await request.json();
  remainingCalls--;

  return rawphotos.map((rawphoto) => ({
    id: rawphoto.id,
    date: rawphoto.created_at,
    width: rawphoto.width,
    height: rawphoto.height,
    altDesc: rawphoto.alt_description,
    url: rawphoto.urls.regular,
    download: rawphoto.urls.full,
    likes: rawphoto.likes,
    city: rawphoto.location.city,
    country: rawphoto.location.country,
    append: 'in ',
  }));
});

export const get1Photo = createAsyncThunk("search/get1Photo", async () => {
  if (remainingCalls === 0) {
    rotateKey();
  }

  const request = await fetch(`${baseUrl}${random1}&${keys[currentKeyIndex]}`);
  const rawphotos = await request.json();
  remainingCalls--;

  const onephoto = {
    id: rawphotos[0].id,
    date: rawphotos[0].created_at,
    width: rawphotos[0].width,
    height: rawphotos[0].height,
    altDesc: rawphotos[0].alt_description,
    url: rawphotos[0].urls.regular,
    download: rawphotos[0].urls.full,
    likes: rawphotos[0].likes,
    city: rawphotos[0].location.city,
    country: rawphotos[0].location.country,
    append: 'in ',
  };

  return onephoto;
});

export const searchPhotos = createAsyncThunk("search/searchPhotos", async (searching) => {
  if (remainingCalls === 0) {
    rotateKey();
  }

  const request = await fetch(`${baseUrl}${search}${searching}&${keys[currentKeyIndex]}`);
  const searchedphotos = await request.json();
  remainingCalls--;

  return searchedphotos.results.map((searchphoto) => ({
    id: searchphoto.id,
    date: searchphoto.created_at,
    width: searchphoto.width,
    height: searchphoto.height,
    altDesc: searchphoto.alt_description,
    url: searchphoto.urls.regular,
    download: searchphoto.urls.full,
    likes: searchphoto.likes,
    city: searchphoto.user.first_name,
    country: searchphoto.user.username,
    append: 'by ',
  }));
});

export const search1Photo = createAsyncThunk("search/search1Photo", async (searching) => {
  if (remainingCalls === 0) {
    rotateKey();
  }

  const request = await fetch(`${baseUrl}${search1}${searching}&${keys[currentKeyIndex]}`);
  const searchedphoto = await request.json();
  remainingCalls--;

  const onephoto = {
    id: searchedphoto.id,
    date: searchedphoto.created_at,
    width: searchedphoto.width,
    height: searchedphoto.height,
    altDesc: searchedphoto.alt_description,
    url: searchedphoto.urls.regular,
    download: searchedphoto.urls.full,
    likes: searchedphoto.likes,
    city: searchedphoto.location?.city,
    country: searchedphoto.location?.country,
    append: 'by ',
  };

  return onephoto;
});
