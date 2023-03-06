
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png'
import doctor from '../../../images/doctor.png'

const appointmentBg= {
    background: `url(${bg})`,
    marginTop: "100px",
    backgroundColor:'rgba(45,58,74)',
    backgroundBlendMode: 'multiply'

}
const AppointmentBanner = () => {
 
    return (
        <div>
            <Box style={appointmentBg}>
            <Grid container  spacing={2} sx={{ flexGrow: 1 }}>
      <Grid xs={12} md={6} >
     <img style={{width:"400px", marginTop:"-100px"}} src={doctor} alt="" />
      </Grid>
 
  <Grid sx={{display:'flex', justifyContent:'flex-start',textAlign:'left',alignItems:'center'}} xs={12}  md={6}>
    <Box style={{marginLeft:"20px"}}> <Typography sx={{mt:5, mb:5}} style={{color:'#5CE7ED'}}  variant='h6' >Appointment </Typography>
       <Typography style={{color:'white'}}  sx={{mb:3}}variant='h4' >Make An Appointment Today </Typography>
       <Typography variant='small' style={{color:'white'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, tempore.</Typography>
       <br />
       <Button sx={{mt:5}} variant='contained'>Learn More</Button></Box>
      
      </Grid>
  
   
    </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;