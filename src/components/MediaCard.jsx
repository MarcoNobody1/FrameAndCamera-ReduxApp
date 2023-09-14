import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { info, removeCard, statusinfo, searchedPhotos } from "../features/search/searchSlice";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import Swal from "sweetalert2";
import gif from "../assets/download-ok.gif";
import { CircularProgress } from "@mui/material";
import { addFavorite } from "../features/favorite/favoriteSlice";

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
      setCurrentPhotos(searchedPhotosInfo.length !== 0 ? searchedPhotosInfo : infoPhotos);
    }
  }, [statusInfo, infoPhotos, searchedPhotosInfo]);

  const onAddFavoriteHandler = (infoPhoto) => {
    dispatch(removeCard(infoPhoto));
    dispatch(addFavorite(infoPhoto));
    
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {currentStatus === "fulfilled" ? (
        currenPhotos.map((infoPhoto) => {
          const handleDownload = () => {
            
            const url = `${infoPhoto.url}`;
            const fileName = `${infoPhoto.altDesc}`;

            fetch(url)
              .then((response) => response.blob())
              .then((blob) => {
                saveAs(blob, fileName);
                Swal.fire({
                  position: "center",
                  icon: "success",
                  html: '<img src="' + gif + '" alt="gif" loading="lazy">',
                  imageAlt: "Custom gif",
                  width: "540px",
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
            <Card
              key={infoPhoto.id}
              sx={{
                maxWidth: "25%",
                height: "380px",
                p: "auto",
                m: "auto",
                mb: 1,
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image={infoPhoto.url}
                title={infoPhoto.altDesc}
              />
              <CardContent sx={{ padding: 1 }}>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="i"
                  color="text.secondary"
                >
                  {infoPhoto.city === null || infoPhoto.city === ''
                    ? "Photo taken in an unknown place..."
                    : `Photo taken ${infoPhoto.append} ${infoPhoto.city}, ${infoPhoto.country}`}
                </Typography>
                <Typography variant="body1">
                  {infoPhoto && infoPhoto.altDesc.charAt(0).toUpperCase() +
                    infoPhoto.altDesc.slice(1) +
                    "."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => onAddFavoriteHandler(infoPhoto)} size="small">LIKE</Button>
                <Button size="small" onClick={handleDownload}>
                  DOWNLOAD
                </Button>
              </CardActions>
            </Card>
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
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center", alignItems:"center", position: 'absolute', left: "50%", top: "50%" }}>
        <CircularProgress color="secondary" />
        <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};
