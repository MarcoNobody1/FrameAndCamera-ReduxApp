import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import {
  info,
  removeCard,
  statusinfo,
  searchedPhotos,
} from "../features/search/searchSlice";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";
import { addFavorite } from "../features/favorite/favoriteSlice";
import { get1Photo } from "../features/search/searchThunks";
import logo from "../assets/logos/logo-main.png";

export const MediaCard = () => {
  const [currentStatus, setCurrentStatus] = useState("");
  const infoPhotos = useSelector(info);
  const statusInfo = useSelector(statusinfo);
  const searchedPhotosInfo = useSelector(searchedPhotos);
  const dispatch = useDispatch();
  const [currenPhotos, setCurrentPhotos] = useState([]);

  useEffect(() => {
    if (statusInfo === "rejected") {
      setCurrentStatus(statusInfo);
    } else if (statusInfo === "pending") {
      setCurrentStatus(statusInfo);
    } else if (statusInfo === "fulfilled") {
      setCurrentStatus(statusInfo);
      setCurrentPhotos(
        searchedPhotosInfo.length !== 0 ? searchedPhotosInfo : infoPhotos
      );
    }
  }, [statusInfo, infoPhotos, searchedPhotosInfo]);

  const onAddFavoriteHandler = (infoPhoto) => {
    dispatch(removeCard(infoPhoto));
    dispatch(addFavorite(infoPhoto));
    dispatch(get1Photo());
  };

  const body = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
    gridAutoRows: "450px",
    gridGap: "0",
    gridAutoFlow: "dense",
    backgroundImage: `url(${logo})`,
    backgroundPosition: "center bottom",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "#161616",
  };

  return (
    <div style={body}>
      {currentStatus === "fulfilled" ? (
        currenPhotos.map((infoPhoto, index) => {
          const handleDownload = () => {
            let timerInterval;
            const url = `${infoPhoto.download}`;
            const fileName = `${infoPhoto.altDesc}`;

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

          const formatedDesc = infoPhoto.altDesc ?
            infoPhoto.altDesc.charAt(0).toUpperCase() +
            infoPhoto.altDesc.slice(1) +
            "." : "I don't know what is this picture...";

          return (
              <div key={index} style={{ position: "relative" }}>
                <Card
                  key={infoPhoto.id}
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
                    image={infoPhoto.url}
                    title={infoPhoto.altDesc}
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
                        {infoPhoto.city === null || infoPhoto.city === ""
                          ? "Photo taken in an unknown place..."
                          : `Photo taken ${infoPhoto.append} ${infoPhoto.city}, ${infoPhoto.country}`}
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
                        {formatedDesc}
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
                        startIcon={<FavoriteTwoToneIcon />}
                        onClick={() => onAddFavoriteHandler(infoPhoto)}
                        size="large"
                        style={{
                          backgroundColor: "#BB37CD",
                          color: "#ECEBF3",
                          fontWeight: 400,
                        }}
                      >
                        LIKE
                      </Button>
                      <Button
                        variant="contained"
                        endIcon={<DownloadSharpIcon />}
                        size="large"
                        onClick={handleDownload}
                        style={{
                          backgroundColor: "#5197E4",
                          color: "#ECEBF3",
                          fontWeight: 400,
                        }}
                      >
                        DOWNLOAD
                      </Button>
                    </CardActions>
                  </div>
                </Card>

                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    backgroundImage: `url(${infoPhoto.url})`,
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
              </div>
          );
        })
      ) : currentStatus === "rejected" ? (
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "Check your internet connection before trying",
        })
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
          }}
        >
          <CircularProgress color="secondary" />
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};
