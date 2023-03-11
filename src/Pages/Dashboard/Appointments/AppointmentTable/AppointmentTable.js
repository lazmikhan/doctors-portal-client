import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function AppointmentTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
          <TableCell align="right">Service Name</TableCell>
            <TableCell>Appointment Date</TableCell>
            <TableCell>Appointment Time</TableCell>
            <TableCell>Patient Name</TableCell>
            
          
          </TableRow>
        </TableHead>
        <TableBody>
          {props.appointments.map((appointment) => (
            <TableRow
              key={appointment.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell align="right">{appointment.serviceName}</TableCell>
              <TableCell component="th" scope="row">
                {appointment.date}
              </TableCell>
              <TableCell component="th" scope="row">
                {appointment.time}
              </TableCell>
              <TableCell component="th" scope="row">
                {appointment.patientName}
              </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}