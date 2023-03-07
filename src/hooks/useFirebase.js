import firebaseConfig from "../Pages/Login/Firebase/firebase.config";
import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
initializeApp(firebaseConfig);
const useFirebase =()=>{
// Initialize Firebase
const [user,setUser]= useState({});
 const auth = getAuth();
const registerUser=(email, password)=>{
   
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
return {user, registerUser}

}

export default useFirebase;