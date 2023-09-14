import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { searchPhotos } from "../features/search/searchThunks";
import { clearPhotos } from "../features/search/searchSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const onSearchHandler = (event) => {
  const searchInput = event.target.value;

    searchInput.length > 2 ? dispatch(searchPhotos(searchInput)) : dispatch(clearPhotos());
  }

  return (
    <>
      <TextField
        onChange={onSearchHandler}
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
