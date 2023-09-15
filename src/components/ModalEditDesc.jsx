import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import { textChange } from '../features/favorite/favoriteSlice';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

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
      id:props.identity,
      text: textValue
    };

    dispatch(textChange(deploy))
    setOpen(false);
  }

  return (
    <div>
      <Button variant="contained"  size="small" onClick={handleClickOpen}>
        <EditTwoToneIcon fontSize='medium'/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit your photo bio:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Text before: {props.texto}
          </DialogContentText>
          <TextField
          onChange={handleTextfieldValueChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
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
        <DialogActions sx={{justifyContent: 'flex-start'}}>
          <Button
          
          onClick={handleTextChange}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}