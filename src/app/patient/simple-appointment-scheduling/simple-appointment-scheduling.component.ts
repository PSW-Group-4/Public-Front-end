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
import { MedAppEventSourcingService } from '../http-services/med-app-event-sourcing.service';
import { ChooseDate } from '../Model/event-sourcing/ChooseDate';
import { StartScheduling } from '../Model/event-sourcing/StartScheduling';
import { ChooseSpeciality } from '../Model/event-sourcing/ChooseSpeciality';
import { ChooseDoctor } from '../Model/event-sourcing/ChooseDoctor';
import { FinishScheduling } from '../Model/event-sourcing/FinishScheduling';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { GoBackToSelection } from '../Model/event-sourcing/GoBackToSelection';
import { Selection } from '../Model/event-sourcing/GoBackToSelection';

@Component({
  selector: 'app-simple-appointment-scheduling',
  templateUrl: './simple-appointment-scheduling.component.html',
  styleUrls: ['./simple-appointment-scheduling.component.css']
})
export class SimpleAppointmentSchedulingComponent implements OnInit {

  //Javascript things... (Component can only access types defined in its own .ts file)
  public Selection = Selection

  dateForm: FormGroup = new FormGroup({
    date: new FormControl<Date | null>(null, [Validators.required, IncomingDateValidator])
  })

  specialties: string[] = [];
  doctors: PersonFullname[] =  [];
  availableTimes: DateRangeCustom[] = [];

  //Used for event sourcing
  sessionId: string = "";

  //Needed because materials list is used
  selectedSpecialtyIndex: number = -1;
  selectedDoctorIndex: number = -1;
  selectedTimeIndex: number = -1;

  appointmentScheduled: boolean = false;


  constructor(private readonly doctorService : DoctorService,
              private readonly appointmentService : AppointmentService,
              private readonly eventSourcingService : MedAppEventSourcingService,
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
        let timeStringStart = 
          // time.startTime.getFullYear() + "." +
          // time.startTime.getMonth() + "." + 
          // time.startTime.getDate() + " " + 
          time.startTime.getHours() + ":";
          if(time.startTime.getMinutes() < 10)
          {
             timeStringStart += '0' + time.startTime.getMinutes();
          }
          else
          {
             timeStringStart += time.startTime.getMinutes();
          }
           

        let timeStringEnd = 
          // time.endTime.getFullYear() + "." +
          // time.endTime.getMonth() + "." + 
          // time.endTime.getDate() + " " + 
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
    this.StartSchedulingSession();
    this.getSpecialties();
  }


  StartSchedulingSession = (): void => {
      let dto : StartScheduling = {
        OccurenceTime : new Date()
      } 

      this.eventSourcingService.startSchedulingSession(dto).subscribe((response : string) =>{
        this.sessionId = response;
      });
  }


  ChooseDate = ():void =>
  {
    let dto : ChooseDate = {
      AggregateId : this.sessionId,
      Date : this.selectedDate,
      OccurenceTime : new Date()

    }
    this.eventSourcingService.chooseDate(dto).subscribe();
  }

  getSpecialties = ():void =>
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

      let speciality = this.specialties[this.selectedSpecialtyIndex];
      if(!speciality) return;

      this.recordChoosingSpeciality(speciality);

      this.doctorService.getDoctorsWithSpecialty(speciality).subscribe(
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
    let doctorsId :string =  this.doctors[this.selectedDoctorIndex].id;

    this.recordChoosingDoctor(doctorsId);

    this.appointmentService.getAvailableTimes({
        doctorId: doctorsId  ,
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
    let doctorsId : string = this.doctors[this.selectedDoctorIndex].id;
    let chosenTime : Date = this.availableTimes[this.selectedTimeIndex].startTime;

    this.recordScheduleFinishing(chosenTime);

    let dto : AvailableTimesRequest = {
      doctorId: doctorsId ,
      date: chosenTime
    }

    this.appointmentService.schedule(dto).subscribe(_ => {
        this.appointmentScheduled = true; 
    });
  }

  private recordScheduleFinishing(chosenTime: Date) {
    let Dto: FinishScheduling = {
      AggregateId: this.sessionId,
      OccurenceTime: new Date(),
      Time: chosenTime
    };

    this.eventSourcingService.finishScheduling(Dto).subscribe();
  }

  private recordChoosingDoctor(doctorsId: string) {
    let dto: ChooseDoctor = {
      AggregateId: this.sessionId,
      DoctorId: doctorsId,
      OccurenceTime: new Date()
    };

    this.eventSourcingService.chooseDoctor(dto).subscribe();
  }

  private recordChoosingSpeciality(speciality: string) {
    let dto: ChooseSpeciality = {
      AggregateId: this.sessionId,
      OccurenceTime: new Date(),
      Speciality: speciality
    };

    this.eventSourcingService.chooseSpeciality(dto).subscribe();
  }

  recordGoingBackToSelection(selection : Selection)
  {
    let dto : GoBackToSelection = {
      AggregateId : this.sessionId,
      OccurenceTime : new Date(),
      Selection : selection
    }

    this.eventSourcingService.goBackToSelection(dto).subscribe();
  }

}
