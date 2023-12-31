import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPhotos } from "../features/search/searchThunks";
import { clearPhotos } from "../features/search/searchSlice";
import { useLocation } from "react-router-dom";
import { resetFavorites, searchFavs } from "../features/favorite/favoriteSlice";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

export const SearchBar = ({ setSearch }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  const [prevSearchText, setPrevSearchText] = useState("");

  const onSearchHandler = (event) => {
    const searchInput = event.target.value;
    if (searchInput.length > 2) {
      dispatch(searchPhotos(searchInput));
      setSearch(searchInput);
    } else {
      dispatch(clearPhotos());
    }
  };

  useEffect(() => {
    if (searchText.length > prevSearchText.length) {
      dispatch(searchFavs(searchText));
    } else {
      dispatch(resetFavorites());
      dispatch(searchFavs(searchText));
    }
    setPrevSearchText(searchText);
  }, [searchText, dispatch, prevSearchText]);

  function handleInputChange(event) {
    setSearchText(event.target.value);
  }

  return (
    <>
      <CssTextField
        id="custom-css-outlined-input"
        fullWidth
        onChange={
          location.pathname === "/" ? onSearchHandler : handleInputChange
        }
        sx={{
          borderRadius: "3.125rem",
          background: "#747474",
        }}
        label={
          location.pathname === "/"
            ? "Type here for automatic search!"
            : "Search photo by description!"
        }
        InputLabelProps={{
          style: { fontWeight: "300", color: "rgba(255, 255, 255, 0.87)" },
        }}
      />
    </>
  );
};
