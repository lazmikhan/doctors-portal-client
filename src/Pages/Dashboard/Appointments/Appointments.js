import React from 'react';
import useAuth from '../../../hooks/useAuth';
import AppointmentTable from './AppointmentTable/AppointmentTable';

const Appointments = () => {
    const {user}= useAuth();
    const [appointments, setAppointments]= React.useState([]);
    React.useEffect(()=>{
        fetch(`http://localhost:5000/appointments?email=${user.email}`).then(res=>res.json()).then(data=>setAppointments(data));
          },[appointments]);
    return (
        <div>
            <h2>All Appointments: {appointments.length}</h2>
            <AppointmentTable appointments={appointments}></AppointmentTable>
        </div>
    );
};

export default Appointments;