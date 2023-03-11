import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { serviceNameContext } from '../AvailableAppointment/AvailableAppointment';

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
  const{user}=useAuth();
  const serviceName = useContext(serviceNameContext);
  const initialInfo = {patientName: user.displayName, email:user.email, time: props.treatment.time} 

  const [bookingInfo, setBookingInfo]= useState(initialInfo);
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleOpenAlert = () => setOpenAlert(true);
  const handleCloseAlert = () => setOpenAlert(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showAlert, setShowAlert]= useState(false);
const handleOnBlur=(e)=>{

  const newBookingInfo ={...bookingInfo};
  const field = e.target.name;
  const value = e.target.value;
  newBookingInfo[field]= value;
  setBookingInfo(newBookingInfo);

}

    const handleButton=(e)=>{
        e.preventDefault();
        const appointmentData ={...bookingInfo, date:props.localDate, serviceName : serviceName};
        console.log(appointmentData)
        fetch('http://localhost:5000/appointments',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(appointmentData)
        }).then(res=>res.json()).then(
          data=>   {
            if(data.insertedId)
            {
              handleClose();
              setShowAlert(true);
            }
            
          }
        )
     
    }

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
          <form  onSubmit={handleButton 
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
          name="patientName"
          onBlur={handleOnBlur}
          defaultValue={user.displayName}
          multiline
          style={{width:'100%', marginBottom:'5px'}}
        />
        
          <TextField
          id="outlined-multiline-flexible"
          name='phone'
          onBlur={handleOnBlur}
          label="Phone Number"
          multiline
          style={{width:'100%',marginBottom:'5px'}}
        />
          <TextField
          id="outlined-multiline-flexible"
          label="Email"
          name="email"
          onBlur={handleOnBlur}
          defaultValue={user.email}
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
     
        <Button onClick={handleOpenAlert}   type='submit'  style={{backgroundColor:'#5CE7ED', color:'white' }} contained>Send</Button>
          </form>
        </Box>
      </Modal>
  {
showAlert &&     <Modal
open={openAlert}
onClose={handleCloseAlert}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box sx={style}>
 
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
   Appointment Booked Successfully!
  </Typography>
</Box>
</Modal>
  }
        </div>
    );
};

export default BookingModal;