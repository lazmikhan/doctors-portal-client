import { Alert, Button, Grid, LinearProgress, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png';
const Login = () => {
    const [loginData, setLoginData]= useState({});
const {loginUser,isLoading, authError,user}=useAuth();
const location = useLocation();
const navigate =useNavigate();
const from = location?.state?.from?.pathname||'/';

    const handleOnChange=(e)=>{
      const field= e.target.name;
      const value= e.target.value;
const newLoginData= {...loginData};
newLoginData[field]=value;


setLoginData(newLoginData);
console.log(loginData)
    }
    const handleSubmit=(e)=>{
      console.log(loginData.email, loginData.password)
loginUser(loginData.email, loginData.password);
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
{
  isLoading?  <Box sx={{ width: '100%' }}>
  <LinearProgress />
</Box>:<></>
}
{user?.email?<Alert severity="success">Login Successfull!!</Alert>:<></>}
{authError?<Alert severity="error">{authError}</Alert>:<></>}
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