import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://api.unsplash.com/";
const random30 = "photos/random?count=30";
const random1 = "photos/random?count=1"
const search = "search/photos?query=";
const search1 = "&per_page=1";

const clientId = "client_id=cpDUshpWYRdkrCVucZevE9z5iRVI_Bq01VV8Z7HRDlE";
//const clientId2 = "client_id=y7WCJuIpaCe_Ajeix9l-J0g9aTj1Lha5YuEJWbp3Ldo";
//const clientId3 = "client_id=nXYdqrC3SY0K5xz_xLvHlgzJQrHnoCpNXQr8uX-cx10";
export const getPhotos = createAsyncThunk("search/getPhotos", async () => {
  const request = await fetch(`${baseUrl}${random30}&${clientId}`);
  const rawphotos = await request.json();

  return rawphotos.map((rawphoto) => {
    return {
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
    };
  });
});

export const get1Photo = createAsyncThunk("search/get1Photo", async () => {
  const request = await fetch(`${baseUrl}${random1}&${clientId}`);
  const rawphotos = await request.json();
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
    append: 'in '
  }

  return onephoto;
});

export const searchPhotos = createAsyncThunk("search/searchPhotos", async (searching) => {
  const request = await fetch(`${baseUrl}${search}${searching}&${clientId}`);
  const searchedphotos = await request.json();
  return searchedphotos.results.map((searchphoto) => {
    return {
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
    };
  });
})

export const search1Photo = createAsyncThunk("search/search1Photo", async (searching) => {
  const request = await fetch(`${baseUrl}${search}${searching}${search1}&${clientId}`);
  const searchedphoto = await request.json();
  return searchedphoto.results.map((searchphoto) => {
    return {
      id: searchphoto[0].id,
      date: searchphoto[0].created_at,
      width: searchphoto[0].width,
      height: searchphoto[0].height,
      altDesc: searchphoto[0].alt_description,
      url: searchphoto[0].urls.regular,
      download: searchphoto[0].urls.full,
      likes: searchphoto[0].likes,
      city: searchphoto[0].user.first_name,
      country: searchphoto[0].user.username,
      append: 'by ',
    };
  });
})