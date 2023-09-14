import { TextField } from "@mui/material";
import React from "react";

export const SearchBar = () => {
  return (
    <>
      <TextField
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
