import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from '../model/Appointment';
import { AppointmentService } from '../Services/appointment.service';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent implements OnInit {

  appointments: Appointment[] = [];
  dataSource: Appointment[] = [];
  displayedColumns = ['time', 'doctor', 'room', 'delete'];
  isFuture: boolean = true;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getsAppointments('get-all-future').subscribe((res) => {
      this.appointments = res;
      this.dataSource = this.appointments
    });
    
  }

  changeAppType(type: string): void {
    if(type === 'get-all-future') {
      this.isFuture = true;
    }
    else {
      this.isFuture = false;
    }
    this.appointmentService.getsAppointments(type).subscribe((res) => {
      this.appointments = res;
      this.dataSource = this.appointments
    });
  } 

  btnClick(id: string): void {
    this.appointmentService.cancelAppointment(id).subscribe((res) => {
      if(res === id) {
        this.appointmentService.getsAppointments('get-all-future').subscribe((res) => {
          this.appointments = res;
          this.dataSource = this.appointments
        });
      }
      else {
        alert("Nije moguce otazati ovaj pregled");
      }
    },(error) => {
      alert(error.error);
    });
  }

}
