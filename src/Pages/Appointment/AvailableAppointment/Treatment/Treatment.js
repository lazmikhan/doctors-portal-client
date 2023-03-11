import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import BookingModal from '../../BookingModal/BookingModal';

const Treatment = (props) => {
    return (
        <div>
            <Paper elevation={3} style={{margin:'5px'}}>
            <Card  sx={{ minWidth: 275 , margin:'1px'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {props.treatment.id}
        </Typography>
      
        <Typography sx={{ mb: 1.5 }} variant='h4' style={{color:'#5CE7ED' }}>
          {props.treatment.name}
        </Typography>
        <Typography sx={{mb:2}} variant="body2" color="text.secondary">
        Spaces Available: {props.treatment.space}
          <br />
     
        </Typography>
        <Typography variant="h6">
      
         Time: {props.treatment.time}
        </Typography>
      </CardContent>
      <CardActions>
      
      </CardActions>
      <Button variant='contained' style={{backgroundColor:'#5CE7ED' }} sx={{mb:2}}>  <BookingModal localDate={props.localDate} appDate={props.appDate} treatment={props.treatment}></BookingModal> </Button>
     
    </Card>
            </Paper>
        </div>
    );
};

export default Treatment;