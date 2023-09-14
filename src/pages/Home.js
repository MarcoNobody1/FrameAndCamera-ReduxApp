import React, { useEffect } from "react";
import { HomeAppBar } from "../components/HomeAppBar";
import { useDispatch } from "react-redux";
import { getPhotos } from "../features/search/searchThunks";
import { MediaCard } from "../components/MediaCard";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotos());
  });

  return (
    <>
      <HomeAppBar />
      <MediaCard />
    </>
  );
};

export default Home;
