import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import IosShareTwoToneIcon from "@mui/icons-material/IosShareTwoTone";

export const Intro = () => {
  return (
    <div
      style={{
        backgroundColor: "#161616",
        width: "100%",
        height: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "white",
          fontWeight: "200",
          textAlign: "center",
          fontSize: "3vw",
          margin: "8vw 0",
        }}
      >
        Welcome! Press start to enter to my HomePage
      </h1>

      <Link to={"/FrameAndCamera-ReduxApp/Home"}>
        <Button
          style={{
            color: "white",
            borderColor: "transparent",
            fontSize:'2vw'
          }}
          variant="outlined"
          startIcon={<IosShareTwoToneIcon style={{
            fontSize:'2vw'
          }}/>}
        >
          START
        </Button>
      </Link>
    </div>
  );
};
