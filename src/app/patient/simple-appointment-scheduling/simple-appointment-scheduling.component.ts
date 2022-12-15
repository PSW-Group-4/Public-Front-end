import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonFullname} from '../Model/PersonFullname';
import { DateRangeCustom, dateRangeStringToDate} from '../Model/DateRangeCustom';
import { DoctorService } from '../http-services/doctor.service';
import { Router } from '@angular/router';
import {IncomingDateValidator} from '../utilities/incoming-date.validator'
import { AppointmentService } from '../http-services/appointment.service';
import { ScheduleAppointmentRequest } from '../Model/ScheduleAppointmentRequest';
import { AvailableTimesRequest } from '../Model/AvailableTimesRequest';

@Component({
  selector: 'app-simple-appointment-scheduling',
  templateUrl: './simple-appointment-scheduling.component.html',
  styleUrls: ['./simple-appointment-scheduling.component.css']
})
export class SimpleAppointmentSchedulingComponent implements OnInit {

  dateForm: FormGroup = new FormGroup({
    date: new FormControl<Date | null>(null, [Validators.required, IncomingDateValidator])
  })

  specialties: string[] = [];
  doctors: PersonFullname[] =  [];
  availableTimes: DateRangeCustom[] = [];

  //Needed because materials list is used
  selectedSpecialtyIndex: number = -1;
  selectedDoctorIndex: number = -1;
  selectedTimeIndex: number = -1;

  appointmentScheduled: boolean = false;


  constructor(private readonly doctorService : DoctorService,
              private readonly appointmentService : AppointmentService,
               private readonly router : Router) { }

  get doctorNames()
  {
    let doctorNames :string[] =[];
    this.doctors.forEach(doctor => doctorNames.push(doctor.fullname));
    return doctorNames;
  }

  get selectedDate() : Date
  {
    return this.dateForm.controls['date'].value;
  }

  get availableTimesString() : string[]
  {
      let availableTimesString: string[] = [];
      this.availableTimes.forEach((time : DateRangeCustom) => {
        let timeStringStart = time.startTime.getFullYear() + "." +
          time.startTime.getMonth() + "." + 
          time.startTime.getDate() + " " + 
          time.startTime.getHours() + ":";
          if(time.startTime.getMinutes() < 10)
          {
             timeStringStart += '0' + time.startTime.getMinutes();
          }
          else
          {
             timeStringStart += time.startTime.getMinutes();
          }
           

        let timeStringEnd = time.endTime.getFullYear() + "." +
          time.endTime.getMonth() + "." + 
          time.endTime.getDate() + " " + 
          time.endTime.getHours() + ":";
          if(time.endTime.getMinutes() < 10)
          {
             timeStringEnd += '0' + time.endTime.getMinutes();
          }
          else
          {
             timeStringEnd += time.endTime.getMinutes();
          }
          
        availableTimesString.push(timeStringStart + " - " + timeStringEnd);

      })
      return availableTimesString;
  }

  ngOnInit(): void {
    this.getSpecialties();
  }
  getSpecialties = () =>
  {
      this.doctorService.getSpecialties().subscribe(
        (response: string[]) => {
          this.specialties = response;
        }
      )
  }

  selectSpecialty = (index: number) =>
  {
    this.selectedSpecialtyIndex = index;
  }

  GetDoctorsWithSpecialty = () =>
  {
      if(this.selectedSpecialtyIndex == -1) return;

      let specialty = this.specialties[this.selectedSpecialtyIndex];
      if(!specialty) return;
      this.doctorService.getDoctorsWithSpecialty(specialty).subscribe(
        (response: PersonFullname[]) => {
          this.doctors = response;
        }
      )
  }

  selectDoctor = (index: number) =>
  {
    this.selectedDoctorIndex = index;
  }

  GetAvailableTimes = () =>
  {
    this.appointmentService.getAvailableTimes({
        doctorId: this.doctors[this.selectedDoctorIndex].id,
        date: this.selectedDate
    }).subscribe( (response: DateRangeCustom[]) =>{
      this.availableTimes = response;
      this.availableTimes.forEach(time =>{
        //For some reason it doesnt do this conversion automatically
        time = dateRangeStringToDate(time);
      })
    })
  }

  selectTime = (index: number) =>
  {
    this.selectedTimeIndex = index;
  }

  scheduleAppointment  = () =>
  {
    let dto : AvailableTimesRequest = {
      doctorId: this.doctors[this.selectedDoctorIndex].id,
      date: this.availableTimes[this.selectedTimeIndex].startTime
    }

    this.appointmentService.schedule(dto).subscribe(_ => {
        this.appointmentScheduled = true; 
    });
  }
}
