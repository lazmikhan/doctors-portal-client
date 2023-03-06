import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../images/login.png';
const Login = () => {
    const [loginData, setLoginData]= useState({});

    const handleOnChange=(e)=>{
  const newLoginData= [...loginData];
  newLoginData[e.target.name]=e.target.value;
  setLoginData(newLoginData);
    }
    const handleSubmit=(e)=>{

e.preventDefault();
    }
    return (
        <div>
            <Grid  container  spacing={2} sx={{ flexGrow: 1 ,mt:5}}>
                <Grid sm={12} md={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
<Box>
<form onSubmit={handleSubmit} action="">
<h1 style={{color:'grey'}}>Login</h1>
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
        <Button type='submit' style={{backgroundColor:'#5CE7ED', color:'white', width:'500px'}}  contained>Login</Button>
        <br />
        <Link to='/register'>NEW USER? PLEASE REGISTER</Link>
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

export default Login;