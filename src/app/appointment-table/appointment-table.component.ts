import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from '../model/Appointment';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent implements OnInit {

  appointments: Appointment[] = [
    {id: '1', doctor: {name: 'Stojan', surname: 'Ludi'}, date: '1.1.2000.', time: '12:00', room: '69'},
    {id: '2', doctor: {name: 'Stojan', surname: 'Ludi'}, date: '2.1.2000.', time: '8:00', room: '69'},
    {id: '3', doctor: {name: 'Stojan', surname: 'Ludi'}, date: '3.1.2000.', time: '7:00', room: '69'},
    {id: '4', doctor: {name: 'Stojan', surname: 'Ludi'}, date: '4.1.2000.', time: '10:00', room: '69'}
  ];
  displayedColumns = ['date', 'time', 'doctor', 'room', 'delete'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.appointments)
  }

  btnClick(id: string): void {
    alert(id);
  }

  
  dataSource = new MatTableDataSource(this.appointments);

}
