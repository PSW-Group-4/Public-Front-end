import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonFullname} from '../Model/PersonFullname';
import { DateRangeCustom} from '../Model/DateRangeCustom';
import { DoctorService } from '../http-services/doctor.service';
import { Router } from '@angular/router';
import {IncomingDateValidator} from '../utilities/incoming-date.validator'

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


  constructor(private readonly doctorService : DoctorService, private readonly router : Router) { }

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
      this.availableTimes.forEach(time => {
        let timeStringStart = time.timeStart.getFullYear() + "." +
          time.timeStart.getMonth() + "." + 
          time.timeStart.getDate() + " " + 
          time.timeStart.getHours() + ":" + 
          time.timeStart.getMinutes();

        let timeStringEnd = time.timeEnd.getFullYear() + "." +
          time.timeEnd.getMonth() + "." + 
          time.timeEnd.getDate() + " " + 
          time.timeEnd.getHours() + ":" + 
          time.timeEnd.getMinutes();
          
        availableTimesString.push(timeStringEnd + " - " + timeStringEnd);

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
      this.doctorService.GetDoctorsWithSpecialty(specialty).subscribe(
        (response: PersonFullname[]) => {
          this.doctors = response;
        }
      )
  }

  selectDoctor = (index: number) =>
  {
    this.selectedDoctorIndex = index;
  }

  //TODO integrate with backend
  GetAvailableTimes = () =>
  {
    console.log("**Gets available times**");
    console.log({
        doctorId: this.doctors[this.selectedDoctorIndex].id,
        date: this.selectedDate
    })

    this.availableTimes = [];
    this.availableTimes.push({
        timeStart:new Date(2022,5,5,17,0),
        timeEnd:new Date(2022,5,5,17,30)
      });

    this.availableTimes.push({
        timeStart:new Date(2022,5,5,18,0),
        timeEnd:new Date(2022,5,5,18,30)
      });

    this.availableTimes.push({
          timeStart:new Date(2022,5,5,19,0),
          timeEnd:new Date(2022,5,5,19,30)
      });

    //Needs implemented backend
    // this.doctorService.GetAvailableTimes({
    //     doctorId: this.doctors[this.selectedDoctorIndex].id,
    //     date: this.selectedDate
    // }).subscribe( (response: DateRangeCustom[]) =>{
    //   this.availableTimes = response;
    // })
  }

  selectTime = (index: number) =>
  {
    this.selectedTimeIndex = index;
  }

  //TODO integrate with backend
  scheduleAppointment  = () =>
  {
    console.log("**schedules appointment**");
    console.log({
      doctorId: this.doctors[this.selectedDoctorIndex].id,
      time: this.availableTimes[this.selectedTimeIndex]
    })
      this.appointmentScheduled = true; 
  }
}
