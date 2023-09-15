import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { SearchBar } from "./SearchBar";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPhotos } from "../features/search/searchThunks";
import { orderFavorites } from "../features/favorite/favoriteSlice";

export function HomeAppBar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [orderBy, setOrderBy] = useState("");

  //Hace un dispatch de fotos random cuando haces click en el botón.
  const handleRandomCall = () =>{
    dispatch(getPhotos())
  }
  
  const handleSelect = (event) => {
    const value = event.target.value;
    setOrderBy(value);
    dispatch(orderFavorites(value))
  }

  return (
    <>
      {location.pathname === "/" ? (
        <AppBar
          style={{ background: "rgba(22, 22, 22, 0.85)", boxShadow: "none" }}
          position="sticky"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 0, display: "flex", width: "5%" }}></Box>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                component="a"
                href="/"
                  sx={{ transition: "all 250ms ease-out" }}
                  src={require("../assets/Vector.png")}
                  alt="Frame&Camera"
                />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  ml: 1,
                  display: { md: "flex" },
                  fontFamily: "AvenirNext",
                  fontWeight: 450,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Frame&Camera
              </Typography>

              <Box sx={{ flexGrow: 1, width: "50%" }}>
                <SearchBar />
              </Box>
              <Box>
                  <Button onClick={handleRandomCall} variant="outlined">Search</Button>
              </Box>
              <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                <Link to={"../favs"}>
                  <Button variant="outlined">Favorites</Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <AppBar
          style={{ background: "rgba(22, 22, 22, 0.85)", boxShadow: "none" }}
          position="sticky"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 0, display: "flex", width: "5%" }}></Box>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                component="a"
                href="/"
                  sx={{ transition: "all 250ms ease-out" }}
                  src={require("../assets/Vector-fav.png")}
                  alt="Frame&Camera"
                />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  ml: 1,
                  display: { md: "flex" },
                  fontFamily: "AvenirNext",
                  fontWeight: 450,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Frame&Camera
              </Typography>

              <Box sx={{ flexGrow: 1, width: "50%" }}>
                <SearchBar />
              </Box>
              <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                <FormControl fullWidth>
                  <InputLabel
                    sx={{ color: "white" }}
                    id="demo-simple-select-label"
                  >
                    Order by...
                  </InputLabel>
                  <Select
                    onChange={handleSelect}
                    sx={{ background: "#F297BF", color: "white", p: "0" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Order by..."
                    value={orderBy}
                  >
                    <MenuItem
                      sx={{ color: "white", background: "#F297BF" }}
                      value={"width"}
                    >
                      width
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "white", background: "#F297BF" }}
                      value={"height"}
                    >
                      height
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "white", background: "#F297BF" }}
                      value={"likes"}
                    >
                      likes
                    </MenuItem>
                    <MenuItem
                      sx={{ color: "white", background: "#F297BF" }}
                      value={"date"}
                    >
                      date
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                <Link to={"../"}>
                  <Button variant="outlined">Home</Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
}
