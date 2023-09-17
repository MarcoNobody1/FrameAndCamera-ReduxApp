import React from "react";
import {
  favoritePhotos,
  removeFavorite,
} from "../features/favorite/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import PanoramaHorizontalSharpIcon from "@mui/icons-material/PanoramaHorizontalSharp";
import PanoramaVerticalSharpIcon from "@mui/icons-material/PanoramaVerticalSharp";
import DateRangeSharpIcon from "@mui/icons-material/DateRangeSharp";
import HeartBrokenSharpIcon from "@mui/icons-material/HeartBrokenSharp";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ModalEditDesc from "./ModalEditDesc";
import logo from "../assets/logos/logo-favs.png";

export const Favorites = () => {
  const favorites = useSelector(favoritePhotos);
  const dispatch = useDispatch();

  const onRemoveFavoriteHandler = (favorite) => {
    dispatch(removeFavorite(favorite));
  };

  const body = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(22.5rem, 1fr))",
    gridAutoRows: "450px",
    gridGap: 0,
    gridAutoFlow: "dense",
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "#161616",
    minHeight: "85.50vw",
    height: "auto",
  };
  if (favorites.length === 0) {
    return (
      <div
        style={{
          backgroundColor: "#161616",
          backgroundImage: `url(${logo})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "85.5vw",
          height: "auto",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          fontSize: "3rem",
          fontStyle: "large",
          fontWeight: 500,
          lineHeight: "normal",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "flex-start",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.50)",
        }}
      >
        <p style={{ marginTop: "17vw", fontSize: "2vw" }}>
          {" "}
          Oops...it looks like you still don't have any photos saved in
          favorites. Click on the{" "}
          <FavoriteTwoToneIcon style={{ fontSize: "2vw" }} /> icon to add a
          photo to your collection!
        </p>
      </div>
    );
  } else {
    return (
      <div style={body}>
        {favorites.map((favorite) => {
          const handleDownload = () => {
            let timerInterval;
            const url = `${favorite.url}`;
            const fileName = `${favorite.altDesc}`;

            Swal.fire({
              title: "Auto close alert!",
              html: "I will close when your download starts",
              timer: 20000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });

            fetch(url)
              .then((response) => response.blob())
              .then((blob) => {
                saveAs(blob, fileName);
                Swal.fire({
                  position: "center",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1100,
                });
              })
              .catch((error) => {
                const Toast = Swal.mixin({
                  toast: true,
                  position: "top-end",
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: false,
                  didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                  },
                });

                Toast.fire({
                  icon: "error",
                  title: "Could not download image.",
                });
              });
          };

          const fecha = new Date(favorite.date);
          const fechaFormat = fecha.toISOString().slice(0, 10);

          const stylefechas = {
            color: "white",
            fontWeight: 800,
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.50)",
            textAlign: "center",
            fontSize: "0.7rem",
          };

          return (
            <>
              <div style={{ position: "relative", border: '4px solid rgba(0, 0, 0, 0.3)' }}>
                <Card
                  key={favorite.id}
                  style={{
                    backgroundColor: "transparent",
                    zIndex: "2",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                  sx={{
                    p: "0",
                    m: "0",
                    mb: 1,
                  }}
                >
                  <Box
                    style={{
                      display: "flex",
                      paddingLeft: "0.8rem",
                      paddingTop: "0.8rem",
                      minHeight:'280px'
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ height: 'auto', width: "73%", maxHeight:270, objectFit:'contain'}}
                      image={favorite.url}
                      title={favorite.altDesc}
                    />
                    <Box
                      style={{
                        width: "20%",
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <FavoriteSharpIcon
                        sx={{
                          fontSize: "1.5rem",
                          color:'white',
                        }}
                      />
                      <Typography style={stylefechas}>
                        {favorite.likes}
                      </Typography>
                      <Typography style={stylefechas}>LIKES</Typography>
                      <PanoramaHorizontalSharpIcon
                        sx={{ fontSize: "1.5rem", color:'white'}}
                      />
                      <Typography style={stylefechas}>
                        {favorite.width}
                      </Typography>
                      <Typography style={stylefechas}>WIDTH</Typography>
                      <PanoramaVerticalSharpIcon sx={{ fontSize: "1.5rem", color:'white' }} />
                      <Typography style={stylefechas}>
                        {favorite.height}
                      </Typography>
                      <Typography style={stylefechas}>HEIGHT</Typography>
                      <DateRangeSharpIcon sx={{ fontSize: "1.5rem", color:'white' }} />
                      <Typography style={stylefechas}>{fechaFormat}</Typography>
                      <Typography style={stylefechas}>DATE</Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ pt: 1 }}>
                    <div
                      style={{
                        position: "absolute",
                        zIndex: 1,
                      }}
                    >
                      <Typography
                        style={{
                          width: "100%",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          color: "white",
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.50)",
                        }}
                        gutterBottom
                        variant="body2"
                      >
                        {favorite.city === null
                          ? "Photo taken in an unknown place..."
                          : `Photo taken in ${favorite.city}, ${favorite.country}`}
                      </Typography>
                      <Typography
                        style={{
                          color: "white",
                          fontWeight: 500,
                          paddingTop: "0.5rem",
                          fontSize: "1rem",
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.50)",
                        }}
                        variant="body1"
                      >
                        {favorite
                          ? favorite.altDesc.charAt(0).toUpperCase() +
                            favorite.altDesc.slice(1) +
                            "."
                          : "Cargando..."}
                      </Typography>
                    </div>
                  </CardContent>
                  <div
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      zIndex: 3,
                      left: "0",
                      bottom: "5%",
                    }}
                  >
                    <CardActions
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<HeartBrokenSharpIcon />}
                        onClick={() => onRemoveFavoriteHandler(favorite)}
                        size="small"
                        style={{
                          backgroundColor: "#BB37CD",
                          color: "#ECEBF3",
                          fontWeight: 400,
                          fontSize: "0.7rem",
                        }}
                      >
                        REMOVE
                      </Button>
                      <Button
                        variant="contained"
                        endIcon={<DownloadSharpIcon />}
                        size="small"
                        onClick={handleDownload}
                        style={{
                          backgroundColor: "#5197E4",
                          color: "#ECEBF3",
                          fontWeight: 400,
                          fontSize: "0.7rem",
                        }}
                      >
                        DOWNLOAD
                      </Button>
                      <Button
                      variant="contained"
                       sx={{p:0, minWidth:'0'}}>
                        <ModalEditDesc
                          identity={favorite.id}
                          texto={favorite.altDesc}
                        />
                      </Button>
                    </CardActions>
                  </div>
                </Card>

                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    backgroundImage: `url(${favorite.url})`,
                    backgroundPosition: "0% 0%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100%",
                    filter: "blur(3px)",
                    opacity: "0.8",
                    zIndex: 0,
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    marginTop:'0.8rem',
                    marginRight: '0.8rem',
                    backgroundColor:'black',
                    backgroundPosition: "0% 0%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "25%",
                    height: "60%",
                    filter: "blur(3px)",
                    opacity: "0.2",
                    zIndex: 1,
                  }}
                ></div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
};
