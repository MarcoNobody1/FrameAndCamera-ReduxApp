import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { SearchBar } from "./SearchBar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SvgIcon,
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
  const handleRandomCall = () => {
    dispatch(getPhotos());
  };

  const handleSelect = (event) => {
    const value = event.target.value;
    setOrderBy(value);
    dispatch(orderFavorites(value));
  };

  return (
    <>
      {location.pathname === "/" ? (
        <AppBar
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(22, 22, 22, 0.85)",
            height: "100px",
          }}
          position="sticky"
        >
          <Container disableGutters maxWidth="xl">
            <Toolbar
              sx={{
                display: "flex",
                height: "100px",
                justifyContent: "center",
                alignItems: "center",
                gap: "3.125rem",
              }}
              disableGutters
            >
              <Box
                component="a"
                href="/"
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  padding: "0.4375rem 0rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <SvgIcon
                  sx={{
                    width: "4.125rem",
                    height: "4.75rem",
                    fill: "linear-gradient(90deg, #04DBF5 -0.2%, #FA04E0 100.21%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="66"
                    height="76"
                    viewBox="0 0 66 76"
                    fill="none"
                  >
                    <path
                      d="M23.7188 5.30574C18.6509 8.21582 12.5223 11.7432 10.0915 13.1541C7.66071 14.5504 4.41964 16.4169 2.87277 17.2988L0.0736607 18.9008L0.0294643 37.9633L0 57.011L1.72366 58.0251C2.68125 58.5836 7.23348 61.2145 11.8594 63.86C16.4853 66.5202 21.8772 69.6213 23.8661 70.7677C25.8549 71.9141 28.7129 73.5602 30.2304 74.4274L32.9705 76L42.458 70.5326C47.6732 67.5343 55.0982 63.2574 58.9728 61.0381L66 56.9963V37.9927V19.0037L62.2138 16.8285C60.1219 15.6233 52.6969 11.3464 45.6991 7.31928C38.7161 3.29221 32.9705 0 32.9558 0C32.9411 0 28.7866 2.38097 23.7188 5.30574ZM31.8362 1.94005C31.7625 2.13112 30.4513 5.11468 28.9045 8.59795C27.3723 12.0665 25.5013 16.2994 24.75 18.0043C23.9987 19.6945 23.3504 21.1348 23.2915 21.1936C23.2473 21.2524 20.8165 21.0319 17.8996 20.7233C14.9826 20.3999 11.0344 19.9737 9.13393 19.7679C2.94643 19.0919 2.03304 18.989 1.98884 18.9302C1.92991 18.8861 6.52634 16.2259 28.1384 3.79192C30.2009 2.60143 31.9098 1.61671 31.9246 1.61671C31.9393 1.61671 31.9098 1.76368 31.8362 1.94005ZM51.7098 11.802C58.3098 15.5939 63.7754 18.7538 63.8491 18.8273C64.0259 18.989 63.7607 19.0331 59.5915 19.474C55.4665 19.9002 50.7228 20.4146 45.9054 20.9437C44.1228 21.1495 42.6496 21.2818 42.6201 21.2524C42.517 21.1495 34.0312 1.85187 34.0312 1.7049C34.0312 1.6608 35.3129 2.36627 36.8746 3.26281C38.4214 4.15935 45.1098 7.99536 51.7098 11.802ZM40.9112 19.5769L41.8688 21.7521L37.9205 28.5423C35.7549 32.2901 33.8545 35.5382 33.7071 35.788C33.4567 36.2143 33.442 35.7587 33.442 19.474V2.71901L36.6978 10.0677C38.4804 14.1095 40.3808 18.3864 40.9112 19.5769ZM32.558 19.2829C32.558 32.9515 32.5286 35.597 32.3665 35.4206C32.0129 35.0385 24.308 21.6492 24.308 21.4287C24.308 21.3112 26.0906 17.1665 28.2857 12.2135C30.4808 7.2458 32.2634 3.14523 32.2634 3.07175C32.2634 2.99826 32.3371 2.93947 32.4107 2.93947C32.5138 2.93947 32.558 8.48037 32.558 19.2829ZM13.4062 21.1054C18.9603 21.708 23.5567 22.2665 23.6304 22.34C23.8366 22.5457 32.0866 36.8169 32.0424 36.8757C32.0129 36.905 25.8696 33.3924 18.3857 29.0861C10.9018 24.7797 4.28705 20.9731 3.68304 20.6204C2.8433 20.1354 2.66652 19.9884 2.94643 19.9884C3.15268 19.9884 7.85223 20.4881 13.4062 21.1054ZM62.8326 20.2676C62.5969 20.4293 58.5161 22.7809 53.7723 25.5146C49.0286 28.2336 42.7085 31.8786 39.7326 33.5981C36.742 35.3177 34.3406 36.6405 34.3701 36.5229C34.4143 36.42 36.1232 33.4365 38.171 29.8797C40.2188 26.3377 42.0455 23.163 42.2371 22.8397C42.6496 22.1048 41.8393 22.2665 49.942 21.3846C53.3893 21.0025 57.4996 20.5469 59.0759 20.3558C60.6522 20.1795 62.2433 20.0178 62.6116 20.0031L63.2746 19.9884L62.8326 20.2676ZM3.68304 24.4711C4.22813 25.1913 6.67366 28.5276 9.13393 31.8786C13.2589 37.5076 13.583 37.978 13.4062 38.2719C13.2147 38.5658 4.125 50.9704 2.26875 53.469C1.76786 54.1303 1.25223 54.8211 1.13437 55.0122C0.913393 55.3061 0.898661 53.7335 0.898661 37.9927L0.883929 20.6645L1.79732 21.8991C2.29821 22.5898 3.13795 23.7362 3.68304 24.4711ZM65.1161 38.022C65.1161 54.8652 65.1161 55.3208 64.8509 55.0416C64.6004 54.777 52.6232 38.5071 52.4022 38.1249C52.358 38.0367 53.8754 35.8615 55.7759 33.2748C57.6616 30.7028 60.5196 26.8227 62.1107 24.6475C63.7018 22.4869 65.0277 20.7233 65.0571 20.7233C65.0866 20.7233 65.1161 28.5129 65.1161 38.022ZM11.6826 26.2642C16.3969 28.9685 22.6875 32.584 25.6634 34.2889C28.6393 36.0085 31.0848 37.4488 31.0848 37.5223C31.0848 37.5811 27.3281 37.6105 22.7464 37.5958L14.3933 37.5517L8.30893 29.2771C4.95 24.7209 2.20982 20.9584 2.20982 20.929C2.20982 20.8114 2.85804 21.1789 11.6826 26.2642ZM62.5674 22.5163C61.8897 23.4276 60.225 25.691 58.8549 27.5575C54.8036 33.0837 54.1996 33.8921 52.8147 35.7587L51.4888 37.5517L43.0915 37.5958C36.0496 37.6252 34.7384 37.5958 34.9152 37.4342C35.033 37.3166 37.1545 36.0673 39.6295 34.6564C42.1045 33.2307 48.4982 29.5564 53.846 26.4699C59.1937 23.3982 63.6134 20.8702 63.6871 20.8702C63.746 20.8702 63.2451 21.6198 62.5674 22.5163ZM30.7165 38.7716C30.4808 38.9186 24.308 42.4753 17.0156 46.6641C9.72321 50.8381 3.43259 54.4684 3.03482 54.7035C2.65179 54.9387 2.29821 55.1004 2.26875 55.071C2.20982 55.0122 3.47679 53.2779 11.6237 42.1961L14.3491 38.5071H22.7464C30.9522 38.5071 31.1437 38.5218 30.7165 38.7716ZM53.7281 41.4465C61.8603 52.4842 63.7754 55.1445 63.5692 55.0563C63.2598 54.9387 35.1804 38.801 34.9888 38.6393C34.9152 38.5658 38.4509 38.5218 43.2388 38.5365L51.6067 38.5805L53.7281 41.4465ZM38.1121 47.1785C40.0567 50.5295 41.7214 53.4249 41.8098 53.6012C41.9719 53.8805 41.471 55.0857 37.8469 63.3015C35.5781 68.4603 33.6482 72.8107 33.5893 72.9723C33.5156 73.134 33.4567 65.5943 33.4567 56.2174L33.442 39.1684L34.0165 40.1238C34.3259 40.6529 36.1674 43.8275 38.1121 47.1785ZM27.5344 46.473C25.2804 50.3678 23.3799 53.6012 23.3062 53.6747C23.2326 53.7482 21.1554 54.0275 18.6951 54.3067C6.11384 55.6883 3.07902 56.0116 2.91696 55.9675C2.76964 55.9087 6.62946 53.6747 23.7188 43.8275C26.5915 42.1667 29.479 40.4912 30.1272 40.1091C30.7754 39.7269 31.3795 39.4036 31.4679 39.4036C31.571 39.3889 29.7884 42.5782 27.5344 46.473ZM49.6179 48.0897C58.8844 53.4249 63.1125 55.9381 62.8768 55.9528C62.5085 55.9969 43.0326 53.8658 42.9589 53.7776C42.7969 53.5571 34.7679 39.6681 34.7679 39.5947C34.7679 39.5506 35.0478 39.6828 35.4013 39.8886C35.7402 40.0944 42.1339 43.7834 49.6179 48.0897ZM32.558 56.4378C32.558 65.5649 32.5138 73.0458 32.4549 73.0458C32.3812 73.0458 31.954 72.164 31.4973 71.0911C31.0406 70.0329 29.1844 65.8441 27.4018 61.8024C25.6045 57.7606 24.1313 54.3802 24.1165 54.292C24.1165 54.2038 25.7223 51.3672 27.6964 47.9722C29.6558 44.5918 31.5268 41.373 31.8509 40.8145C32.1603 40.2707 32.4549 39.8298 32.4844 39.8298C32.5286 39.8298 32.558 47.2961 32.558 56.4378ZM24.1607 56.6583C24.6174 57.7018 26.4737 61.9052 28.2857 65.9911C32.1455 74.7213 32.0129 74.4127 31.8656 74.3245C31.5857 74.1775 18.4004 66.5937 14.2902 64.2274C11.8152 62.8018 8.01429 60.6119 5.84866 59.3626C2.26875 57.3197 1.92991 57.0845 2.31295 56.9963C2.53393 56.9375 4.34598 56.7318 6.33482 56.5113C13.3473 55.7764 20.8607 54.9681 21.8036 54.8358C23.3504 54.6301 23.2326 54.5419 24.1607 56.6583ZM47.8795 55.262C62.0665 56.8053 63.8049 56.9963 63.8786 57.0698C63.9228 57.1139 61.4772 58.5689 58.4571 60.3032C37.4933 72.3845 34.1049 74.3245 34.046 74.2804C34.0165 74.251 35.9317 69.8271 38.3036 64.4479L42.6201 54.6594L43.2241 54.7476C43.5629 54.7917 45.6549 55.0269 47.8795 55.262Z"
                      fill="url(#paint0_linear_198_796)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_198_796"
                        x1="-0.129973"
                        y1="38.1396"
                        x2="66.1358"
                        y2="38.1396"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#04DBF5" />
                        <stop offset="1" stop-color="#FA04E0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </SvgIcon>
                <Typography
                  component="a"
                  href="/"
                  sx={{
                    textAlign: "center",
                    fontFamily: "AvenirNext",
                    fontSize: "2.0625rem",
                    fontStyle: "normal",
                    fontWeight: "500",
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Frame&Camera
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "32.4375rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <SearchBar />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Button
                  sx={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                  }}
                  onClick={handleRandomCall}
                  variant="outlined"
                  size="medium"
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Link to={"../favs"}>
                  <Button sx={{color: '#BB37CD'}} size="medium" variant="outlined" startIcon={<FavoriteIcon/>}>Favorites</Button>
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
