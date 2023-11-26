import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { textChange } from "../features/favorite/favoriteSlice";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import { IconButton } from "@mui/material";

export default function ModalEditDesc(props) {
  const [open, setOpen] = React.useState(false);
  const [textValue, setTextValue] = React.useState(props.texto);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTextValue(props.texto);
  };

  const handleTextfieldValueChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleTextChange = () => {
    const deploy = {
      id: props.identity,
      text: textValue,
    };

    dispatch(textChange(deploy));
    setOpen(false);
  };

  return (
    <div >
      <IconButton onClick={handleClickOpen}
        style={{
          padding: 4,
          borderRadius: 4,
          backgroundColor: "#1976D2",
          "&:hover": {
            boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.75)',
          },
        }}
        
      >
        <EditTwoToneIcon style={{ fontSize: "1.2rem", color:'white'}} />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit your photo bio:</DialogTitle>
        <DialogContent>
          <DialogContentText>Text before: {props.texto}</DialogContentText>
          <TextField
          autoComplete="false"
            onChange={handleTextfieldValueChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleTextChange();
              }
            }}
            value={textValue}
            autoFocus
            margin="dense"
            id="name"
            label="Describe it as you want"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-start" }}>
          <Button onClick={handleTextChange}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
