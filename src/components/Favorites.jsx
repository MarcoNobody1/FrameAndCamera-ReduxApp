import React from "react";
import { favoritePhotos, removeFavorite } from "../features/favorite/favoriteSlice";
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ModalEditDesc from "./ModalEditDesc";
import logo from "../assets/logos/logo-favs.png"

export const Favorites = () => {
  const favorites = useSelector(favoritePhotos);
  const dispatch = useDispatch();

  const onRemoveFavoriteHandler = (favorite) => {
    dispatch(removeFavorite(favorite));
  };

  const body = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridAutoRows: "28.125rem",
    gridGap: "0",
    width: "100vw",
    gridAutoFlow: "dense",
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "#161616",
    minHeight: "750px",
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
          height: "850px",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          fontSize: "3rem",
          fontStyle: "large",
          fontWeight: 500,
          lineHeight: "normal",
          display: "flex",
          flexDirection: "column",
          alignContent:"center",
          justifyContent: 'center',
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.50)",
        }}
      >
        Oops...it looks like you still don't have any photos saved in favorites.
        Click on the <FavoriteTwoToneIcon style={{width:'60px', height:'60px'}} /> icon to add a photo to your collection!
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

          return (
            <>
              <div style={{ position: "relative" }}>
                <Card
                  key={favorite.id}
                  style={{
                    backgroundColor: "transparent",
                    zIndex: "1",
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
                  <CardMedia
                    component="img"
                    sx={{ height: 250 }}
                    image={favorite.url}
                    title={favorite.altDesc}
                  />
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
                    <div
                      style={{
                        position: "absolute",
                        top: "55.7%",
                        left: 0,
                        backgroundColor: "black",
                        width: "100%",
                        height: "100%",
                        opacity: 0.45,
                        zIndex: 0,
                      }}
                    ></div>
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
                        startIcon={< FavoriteSharpIcon/>}
                        onClick={() => onRemoveFavoriteHandler(favorite)}
                        size="small"
                        style={{
                          backgroundColor: "#BB37CD",
                          color: "#ECEBF3",
                          fontWeight: 400,
                        }}
                      >
                        REMOVE LIKE
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
                        }}
                      >
                        DOWNLOAD
                      </Button>
                      <ModalEditDesc
                        identity={favorite.id}
                        texto={favorite.altDesc}
                      />
                    </CardActions>
                  </div>
                </Card>

                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    backgroundImage: `url(${favorite.url})`,
                    width: "100%",
                    height: "100%",
                    filter: "blur(12.5px)",
                    opacity: "0.8",
                    zIndex: 0,
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
