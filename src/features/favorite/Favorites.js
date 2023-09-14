import React from 'react'
import { favoritePhotos, removeFavorite } from './favoriteSlice';
import { useDispatch, useSelector } from 'react-redux';
import { saveAs } from "file-saver";
import Swal from 'sweetalert2';
import gif from "../../assets/download-ok.gif";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';


export const Favorites = () => {

    const favorites = useSelector(favoritePhotos)
    const dispatch = useDispatch();

    const onRemoveFavoriteHandler = (favorite) =>{
        dispatch(removeFavorite(favorite));
    }

  return (
    <div>
        {favorites.map((favorite) => {
          const handleDownload = () => {
            const url = `${favorite.url}`;
            const fileName = `${favorite.id}`;

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
              key={favorite.id}
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
                image={favorite.url}
                title={favorite.altDesc}
              />
              <CardContent sx={{ padding: 1 }}>
                <Typography
                  gutterBottom
                  variant="body2"
                  component="i"
                  color="text.secondary"
                >
                  {favorite.city === null
                    ? "Photo taken in an unknown place..."
                    : `Photo taken in ${favorite.city}, ${favorite.country}`}
                </Typography>
                <Typography variant="body1">
                  {favorite.altDesc.charAt(0).toUpperCase() +
                    favorite.altDesc.slice(1) +
                    "."}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => onRemoveFavoriteHandler(favorite)} size="small">REMOVE FROM LIKES</Button>
                <Button size="small" onClick={handleDownload}>
                  DOWNLOAD
                </Button>
              </CardActions>
            </Card>
          );
        })}
    </div>
  )
}