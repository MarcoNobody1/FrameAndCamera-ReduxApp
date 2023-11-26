import React, { useState } from "react";
import { HomeAppBar } from "../components/HomeAppBar";

import { MediaCard } from "../components/MediaCard";

export const Home = () => {
  const [searchInput, setSearchInput] = useState();
  const setSearch = (value) => {
    setSearchInput(value);
  };

  return (
    <>
      <HomeAppBar setSearch={setSearch}/>
      <MediaCard search={searchInput}/>
    </>
  );
};
