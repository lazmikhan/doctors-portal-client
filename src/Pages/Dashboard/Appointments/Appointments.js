import React from 'react';
import useAuth from '../../../hooks/useAuth';
import AppointmentTable from './AppointmentTable/AppointmentTable';

const Appointments = (props) => {
    const {user}= useAuth();
    const [appointments, setAppointments]= React.useState([]);
    React.useEffect(()=>{
        fetch(`http://localhost:5000/appointments?email=${user.email}`).then(res=>res.json()).then(data=>setAppointments(data));
          },[appointments]);
    return (
        <div>
          
            <AppointmentTable chosenDate={props.chosenDate} appointments={appointments}></AppointmentTable>
        </div>
    );
};

export default Appointments;