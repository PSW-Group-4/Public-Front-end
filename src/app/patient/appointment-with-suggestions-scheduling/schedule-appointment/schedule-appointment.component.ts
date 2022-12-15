import { AvailableTimesRequest } from './../../Model/AvailableTimesRequest';
import { ScheduleAppointmentSuggestion } from '../../Model/RequestForAppointmentTimeSlotSuggestions';
import { PersonFullname } from './../../Model/PersonFullname';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { DoctorService } from '../../http-services/doctor.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css'],
})
export class ScheduleAppointmentComponent implements OnInit {
  scheduleMinDate = new Date();
  priorities = ['Date', 'Doctor'];
  doctors: PersonFullname[] = [];
  scheduleForm: FormGroup;

  //temp
  appointments: any = [];
  //temp
  selectedAppointment: AvailableTimesRequest = {
    doctorId: '-1',
    date: new Date(),
  };
  appointmentScheduleInfo: ScheduleAppointmentSuggestion = {
    StartDate: new Date(),
    EndDate: new Date(),
    DoctorId: '-1',
    Priority: 'Doctor',
  };

  //bool promenljive
  appointmentListVisible = false;
  showFindButton = true;

  constructor(
    private fb: FormBuilder,
    private readonly doctorService: DoctorService,
    private readonly router: Router
  ) {
    const dateRange = this.fb.group({
      from: [],
      to: [],
    });

    this.scheduleForm = this.fb.group({
      scheduleDate: dateRange,
      scheduleDoctor: {},
      schedulePriority: this.priorities[0],
      scheduleAppointment: [],
    });
  }

  ngOnInit(): void {
    this.getAllDoctors();
    this.createScheduleForm();
  }

  getAllDoctors() {
    this.doctorService.getAll().subscribe((response: PersonFullname[]) => {
      this.doctors = response;
    });
  }

  createScheduleForm() {
    this.scheduleForm = this.fb.group({
      scheduleDate: new FormGroup({
        from: new FormControl(
          {
            value: new Date(),
            disabled: false,
          },
          [Validators.required] //this.isDateRangeValid.bind*(this)
        ),
        to: new FormControl(
          {
            value: new Date(),
            disabled: false,
          },
          [Validators.required] //this.isDateRangeValid.bind*(this)
        ),
      }),
      scheduleDoctor: [
        { value: this.doctors[0], disabled: false },
        [Validators.required],
      ],
      schedulePriority: [
        { value: this.priorities[0], disabled: false },
        [Validators.required],
      ],
      scheduleAppointment: [{ value: this.test(), disabled: false }],
    });
    this.scheduleForm.valueChanges.subscribe((currValue) => {
      this.appointmentScheduleInfo.DoctorId = currValue.scheduleDoctor;
      this.appointmentScheduleInfo.Priority = currValue.schedulePriority;
      this.appointmentScheduleInfo.StartDate = currValue.scheduleDate.from;
      this.appointmentScheduleInfo.EndDate = currValue.scheduleDate.to;
      //this.selectedAppointment.doctorId = currValue.scheduleAppointment;
      this.selectedAppointment.date = currValue.scheduleAppointment;
    });
  }

  test() {
    if (this.appointments[0] === undefined) {
      return new Date();
    }
    return this.appointments[0].startTime;
  }

  findAppointments(event: Event) {
    event.preventDefault();
    this.appointmentListVisible = !this.appointmentListVisible;
    this.showFindButton = false;

    this.doctorService
      .FindAppropriateAppointments(this.appointmentScheduleInfo)
      .subscribe((res) => {
        console.log(res);
        this.appointments = res;
      });
  }

  canSchedule() {
    //if (this.selectedAppointment.date === new Date()) return true;
    return false;
  }

  //TODO implementirati back-end deo
  confirmSchedule() {
    console.log('Zakazi');

    this.appointmentListVisible = !this.appointmentListVisible;
    this.showFindButton = true;
    this.appointments = [];

    this.selectedAppointment.doctorId =
      this.scheduleForm.get('scheduleDoctor')?.value;
    this.selectedAppointment.date = this.scheduleForm.get(
      'scheduleAppointment'
    )?.value;

    this.doctorService
      .ScheduleWithSuggestions(this.selectedAppointment)
      .subscribe((res) => console.log(res));

    this.router.navigate(['info']);
  }

  cancel() {
    console.log('Cancel');

    this.appointmentListVisible = !this.appointmentListVisible;
    this.showFindButton = true;
    this.appointments = [];
  }

  /*private isDateRangeValid(control: FormControl) {
    if (control === this.scheduleForm.get('scheduleDate.from')) {
<<<<<<< HEAD
      if (control.value > this.appointmentScheduleInfo.StartDate) {
        return { dateRangeNotValid: true };
      } else return null;
    } else if (control.value < this.appointmentScheduleInfo.EndDate) {
=======
      if (control.value > this.appointmentScheduleInfo.time.endTime) {
        return { dateRangeNotValid: true };
      } else return null;
    } else if (control.value < this.appointmentScheduleInfo.time.startTime) {
>>>>>>> 341d00bd (Commit so I can pull develop)
      console.log('test');
      return { dateRangeNotValid: true };
    } else return null;
  }*/
}
