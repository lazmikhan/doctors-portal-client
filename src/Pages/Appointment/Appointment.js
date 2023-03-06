import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import chair from '../../images/chair.png'
import AvailableAppointment from './AvailableAppointment/AvailableAppointment';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import bg from   '../../images/bg.png';
const Appointment = () => {
    const [value, setValue] = React.useState(dayjs(new Date()));
console.log(value.$d.toDateString())
const appBg ={
    background: `url(${bg})`,
    height:'500px',
    backgroundSize: '800px 400px',
    backgroundRepeat: 'no-repeat'
}
    return (
        <div>
            <Navigation></Navigation>
        <Container style={appBg} sx={{mt:5}}>
        <Grid  container spacing={{ xs: 2, md: 3 }} >
   
   <Grid item xs={12} md={6}> 
   <h1>Appointment</h1>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
       
        <DemoItem >
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider> </Grid>

<Grid item  xs={12} md={6}><img src={chair} style={{width:'100%'}} alt="" /></Grid>


</Grid>
        </Container>
     
        <h2  style={{color: '#5CE7ED', marginBottom:'50px'}}> Appointment Available On:     {value.$d.toDateString()}</h2>
   
            <AvailableAppointment appDate={value.$d.toDateString()}></AvailableAppointment>
        </div>
    );
};

export default Appointment;