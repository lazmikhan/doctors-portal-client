import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
const Service = (props) => {

    const {name, description, img}= props.service;
    return (
        <div>

<Card sx={{ minWidth: 275, boxShadow:0 }}>
      <CardContent>
      <CardMedia
        component="img"
        height="194"
        style={{width:"auto", height:"80px", margin:"0 auto"}}
        image={img}
        alt="Paella dish"
      />
        <Typography variant="h5" component="div">
        {name}
        </Typography>
      
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {description}
        </Typography>
      
      </CardContent>
   
    </Card>
  
        </div>
    );
};

export default Service;