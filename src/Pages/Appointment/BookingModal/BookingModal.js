import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const BookingModal = (props) => {
    const handleButton=(e)=>{
        e.preventDefault();
        alert("submitting")
    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
              <Button style={{color:'white'}} onClick={handleOpen}>Book Appointment</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.treatment.name}
          </Typography>
          <br />
          <form onSubmit={handleButton
        }>
          <TextField 
          disabled
          id="outlined-multiline-flexible"
          label={props.treatment.time}
          multiline
          style={{width:'100%', marginBottom:'5px'}}
        />
    <TextField 
          id="outlined-multiline-flexible"
          label="Your Name"
          multiline
          style={{width:'100%', marginBottom:'5px'}}
        />
        
          <TextField
          id="outlined-multiline-flexible"
          label="Phone Number"
          multiline
          style={{width:'100%',marginBottom:'5px'}}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          style={{width:'100%',marginBottom:'5px'}}
        />
          <TextField
          disabled
          id="outlined-multiline-flexible"
          label={props.appDate}
          multiline
          style={{width:'100%',marginBottom:'5px'}}
        />
     
        <Button type='submit'  style={{backgroundColor:'#5CE7ED', color:'white' }} contained>Send</Button>
          </form>
        </Box>
      </Modal>
        </div>
    );
};

export default BookingModal;