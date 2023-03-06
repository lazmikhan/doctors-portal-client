import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Service from '../Service/Service';
import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';
import Typography from '@mui/material/Typography';
const services = [
    {name:"Fluoride Treatment", description:"       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperni doloribus obcaecati illo hic.",img:fluoride
},
{name:"Cavity Filling", description:"       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur, molestias quo consequuntur .",img:cavity
},   {name:"Teeth Whitening", description:"       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aspernatur, molestias quo .",img:whitening
}
]

const Services = () => {
    return (
        <div>
     
           <Container>
            <Typography variant='h6' style={{color:'#5CE7ED'}} sx={{color: "info.main", m:2}}component="div">OUR SERVICES</Typography>
            <Typography sx={{fontWeight:500}} variant='h4' component="div">Services We Provide</Typography>
           <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
   
        
          {services.map(service=> 
              <Grid item xs={4} sm={4} md={4} >
   
              <Service service={service}></Service>
                    </Grid>
           )}
         
      </Grid>
    </Box>
           </Container>
        </div>
    );
};

export default Services;