import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPhotos } from "../features/search/searchThunks";
import { clearPhotos } from "../features/search/searchSlice";
import { useLocation } from "react-router-dom";
import { resetFavorites, searchFavs } from "../features/favorite/favoriteSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchText, setSearchText] = useState('');
  const [prevSearchText, setPrevSearchText] = useState('');

  const onSearchHandler = (event) => {
  const searchInput = event.target.value;

    searchInput.length > 2 ? dispatch(searchPhotos(searchInput)) : dispatch(clearPhotos());
  }

  useEffect(() => {
    if (searchText.length > prevSearchText.length) {
      dispatch(searchFavs(searchText));
    } else {
      dispatch(resetFavorites());
    }
    setPrevSearchText(searchText);
  }, [searchText]);

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  

  return (
    <>
      <TextField
        onChange={location.pathname === "/" ? onSearchHandler : handleInputChange}
        fullWidth
        sx={
          {
            borderRadius: "50px",
            background: "#747474"
          }
        }
        label="Search whatever you want..."
        id="filled-size-small"
        variant="filled"
        size="small"
        style={{
          '&:focus': {
            color:'white',
          }
        }}
      />
    </>
  );
};
