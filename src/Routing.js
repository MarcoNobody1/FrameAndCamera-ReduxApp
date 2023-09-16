import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Favs from "./pages/Favs";
import { getPhotos } from "./features/search/searchThunks";
import { useDispatch } from "react-redux";
import { addFromLocal } from "./features/favorite/favoriteSlice";
import { Intro } from "./pages/Intro";

export const Routing = () => {
  const rawFavs = JSON.parse(localStorage.getItem("favsLocal"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());

    rawFavs && dispatch(addFromLocal(rawFavs));

  }, [dispatch, rawFavs]);
  return (
    <>
      <Routes>
        <Route path="/FrameAndCamera-ReduxApp/Home" element={<Home />}/>
        <Route path='/FrameAndCamera-ReduxApp' element={<Intro />}/>
        <Route path="/FrameAndCamera-ReduxApp/favs" element={<Favs />}/>
      </Routes>
    </>
  );
};
