import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Routes>
   
        <Route path="/" element={ <Home/> } />
        <Route path="/appointment" element={ <PrivateRoute><Appointment/></PrivateRoute> } />
     
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register></Register> } />
     
      </Routes>
   </AuthProvider>
    </div>
  );
}

export default App;
