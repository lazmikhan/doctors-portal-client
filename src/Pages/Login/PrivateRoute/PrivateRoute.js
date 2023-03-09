import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { Route, Navigate, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading}= useAuth();
    const [loading , setLoading]= useState(true);
    let location = useLocation();
    if(isLoading)
    {
       return  <CircularProgress></CircularProgress>
    }
 if(user?.email)
 {
    return children;
 }
 return <Navigate  to ="/login"  state={{from:location}} replace></Navigate>
   
};

export default PrivateRoute;