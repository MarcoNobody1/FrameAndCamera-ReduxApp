import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Favs from "./pages/Favs";
import { getPhotos } from "./features/search/searchThunks";
import { useDispatch } from "react-redux";
import { addFromLocal } from "./features/favorite/favoriteSlice";

export const Routing = () => {
  const rawFavs = JSON.parse(localStorage.getItem("favsLocal"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());

    rawFavs && dispatch(addFromLocal(rawFavs));

  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favs" element={<Favs />}></Route>
      </Routes>
    </>
  );
};
