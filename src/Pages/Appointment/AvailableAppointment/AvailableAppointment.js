import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React, { createContext } from 'react';
import Treatment from './Treatment/Treatment';
export const serviceNameContext = createContext('servicename');
const AvailableAppointment = (props) => {
    const treatments =[
        {id:1,
        name:'Cavity Protection',time:'11.00AM - 12.00PM', space:5},
        {id:2,
            name:'Fluoride Filling',time:'11.00AM - 12.00PM', space:5},
            {id:3,
                name:'Teeth Whitening',time:'11.00AM - 12.00PM', space:5},
                {id:4,
                    name:'Teeth B Surgery',time:'11.00AM - 12.00PM', space:5},
                    {id:5,
                        name:'Enamel Protection',time:'11.00AM - 12.00PM', space:5},
                        {id:6,
                            name:'Gum Protection',time:'11.00AM - 12.00PM', space:5}
    ]
 
    return (
        <div sx={{mt:1}}>
        <Container>

  
     <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 8, md: 12 }}>
            {treatments.map(treatment=> <Grid spacing={4} xs={12} md={4} ><serviceNameContext.Provider value={treatment.name}>
                <Treatment localDate={props.localDate} appDate={props.appDate} treatment={treatment}></Treatment>  
                </serviceNameContext.Provider>  </Grid>)}
           
                </Grid>
   
        </Container>
        </div>
    );
};

export default AvailableAppointment;