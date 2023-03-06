import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/appointment" element={ <Appointment/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register></Register> } />
     
      </Routes>
    </div>
  );
}

export default App;
