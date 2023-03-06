import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../images/login.png'
const Register = () => {
    const [loginData, setLoginData]= useState({});

    const handleOnChange=(e)=>{
        const field= e.target.name;
        const value= e.target.value;
  const newLoginData= {...loginData};
  newLoginData[field]=value;

 
  setLoginData(newLoginData);
  console.log(loginData)
    }
    const handleSubmit=(e)=>{
if(loginData.password!=loginData.password2)
{
    alert("password didnt match");
    return;
}
e.preventDefault();
    }
    return (
        <div>
               <Grid  container  spacing={2} sx={{ flexGrow: 1 ,mt:5}}>
                <Grid sm={12} md={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
<Box>
<form onSubmit={handleSubmit} action="">
<h1 style={{color:'grey'}}>Please Register</h1>
<TextField style={{width:'500px'}}
          id="standard-number"
          label="Your Email"
          type="email"
          name='email'
          onChange={handleOnChange
          }
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <br />
        <br />
 <TextField style={{width:'500px'}}
          id="standard-number"
          label="Password"
          type="password"
          name='password'
          onChange={handleOnChange
        }
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <br />
        <br />
         <TextField style={{width:'500px'}}
          id="standard-number"
          label="Retype Password"
          type="password"
          name='password2'
          onChange={handleOnChange
        }
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <br />
        <br />
        <Button type='submit' style={{backgroundColor:'#5CE7ED', color:'white', width:'500px'}}  contained>Register</Button>
        <br />
        <Link to='/login'>Already Registered? </Link>
</form>
</Box>
                </Grid>
                <Grid md={6} sm={12}>
<img style={{width:'70%', height:'100%'}} src={login} alt="" />
</Grid>
                </Grid>
        </div>
    );
};

export default Register;