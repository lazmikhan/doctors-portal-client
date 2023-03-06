import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
const Banner = () => {
    const bannerBg= {
        background: `url(${bg})`,
        height:'400px',
        backgroundSize: '800px 400px',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div>
            
          <Container style={bannerBg}>
          <Grid  container  spacing={2} sx={{ flexGrow: 1 ,mt:5}}>
            <Grid sx={{display:"flex", alignItems:'center', textAlign:'left',justifyContent:'center'}} xs={12} md={6}>
              <Box >
              <Typography sx={{mb:4}} variant='h4'>Your New Smile Starts Here</Typography>
                <Typography sx={{mb:4}}  variant='p' style={{color:'grey'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, praesentiumLorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, praesentiumLorem ipsum dolor sit </Typography>
                <br />
                <Button sx={{mb:4, mt:5}}  variant='contained' style={{backgroundColor:'#5CE7ED'}} >GET APPOINTMENT</Button>
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
                <img style={{width:'90%'}} src={chair} alt="" />
            </Grid>
            </Grid> 
          </Container>
        </div>
    );
};

export default Banner;