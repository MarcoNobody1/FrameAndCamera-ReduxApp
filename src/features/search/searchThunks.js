import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://api.unsplash.com/";
const random = "photos/random?count=15";
const clientId = "client_id=cpDUshpWYRdkrCVucZevE9z5iRVI_Bq01VV8Z7HRDlE";
const clientId2 = "client_id=y7WCJuIpaCe_Ajeix9l-J0g9aTj1Lha5YuEJWbp3Ldo";

export const getPhotos = createAsyncThunk("search/getPhotos", async () => {
  const request = await fetch(`${baseUrl}${random}&${clientId}`);
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
    };
  });
});
