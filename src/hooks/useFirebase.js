import firebaseConfig from "../Pages/Login/Firebase/firebase.config";
import {initializeApp} from 'firebase/app';
import { getAuth, updateProfile,signInWithEmailAndPassword,createUserWithEmailAndPassword , signOut, onAuthStateChanged} from "firebase/auth";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
initializeApp(firebaseConfig);
const useFirebase =()=>{
// Initialize Firebase
const [user,setUser]= useState({});
const [authError,setAuthError]= useState('');
const [isLoading, setIsLoading]=useState(true);
 const auth = getAuth();
 const location = useLocation();
const navigate =useNavigate();
const from = location?.state?.from?.pathname||'/';

 const logout=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
}).finally(()=>setIsLoading(false));
 }
const registerUser=(email, password,name)=>{
   setIsLoading(true);
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    const newUser ={email, displayName:name};
    setUser(newUser);
    console.log(userCredential);
    navigate('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setAuthError(error.message);
    // ..
  }).finally(()=>setIsLoading(false));
}
const loginUser =(email,password)=>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
  
    navigate(from,{replace:true});
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  }).finally(()=>setIsLoading(false));
}
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
       setUser(user);
        } else {
            setUser({});
        }
        setIsLoading(false);
      });
      return ()=>unsubscribe;
      
},[])
return {user,authError, registerUser, isLoading,logout,loginUser}

}

export default useFirebase;