import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://api.unsplash.com/";
const random = "photos/random?count=15";
const search = "search/photos?query=";

const clientId = "client_id=cpDUshpWYRdkrCVucZevE9z5iRVI_Bq01VV8Z7HRDlE";
const clientId2 = "client_id=y7WCJuIpaCe_Ajeix9l-J0g9aTj1Lha5YuEJWbp3Ldo";
const clientId3 = "client_id=nXYdqrC3SY0K5xz_xLvHlgzJQrHnoCpNXQr8uX-cx10";
export const getPhotos = createAsyncThunk("search/getPhotos", async () => {
  const request = await fetch(`${baseUrl}${random}&${clientId3}`);
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

export const searchPhotos = createAsyncThunk("search/searchPhotos", async (searching) => {
  const request = await fetch(`${baseUrl}${search}${searching}&${clientId3}`);
  const searchedphotos = await request.json();
  console.log(searchedphotos);
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