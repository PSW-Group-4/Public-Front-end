import { ScheduleAppointmentSuggestion } from './../../Model/ScheduleAppointmentSuggestion';
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

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.css'],
})
export class ScheduleAppointmentComponent implements OnInit {
  scheduleMinDate = new Date();
  priorities = ['date', 'doctor'];
  doctors: PersonFullname[] = [];
  scheduleForm: FormGroup;

  //temp
  appointments: any = [];
  //temp
  selectedAppointment: any = {};
  appointmentScheduleInfo: ScheduleAppointmentSuggestion = {
    time: { timeStart: new Date(), timeEnd: new Date() },
    doctorId: '-1',
    priority: 'doctor',
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
          [Validators.required, this.isDateRangeValid.bind(this)]
        ),
        to: new FormControl(
          {
            value: new Date(),
            disabled: false,
          },
          [Validators.required, this.isDateRangeValid.bind(this)]
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
      scheduleAppointment: [
        { value: 'temp', disabled: false },
        [Validators.required],
      ],
    });
    this.scheduleForm.valueChanges.subscribe((currValue) => {
      this.appointmentScheduleInfo.doctorId = currValue.scheduleDoctor;
      this.appointmentScheduleInfo.priority = currValue.schedulePriority;
      this.appointmentScheduleInfo.time.timeStart = currValue.scheduleDate.from;
      this.appointmentScheduleInfo.time.timeEnd = currValue.scheduleDate.to;
      this.selectedAppointment = currValue.scheduleAppointment;
    });
  }

  //TODO implementirati back-end deo
  findAppointments(event: Event) {
    event.preventDefault();
    this.appointmentListVisible = !this.appointmentListVisible;
    this.showFindButton = false;

    this.appointments = this.doctorService.findAppropriateAppointments(
      this.appointmentScheduleInfo
    );
  }

  canSchedule() {
    if (this.selectedAppointment === 'temp') return true;
    return false;
  }

  //TODO implementirati back-end deo
  confirmSchedule() {
    console.log('Zakazi');

    this.appointmentListVisible = !this.appointmentListVisible;
    this.showFindButton = true;
    this.appointments = [];

    this.doctorService
      .scheduleWithSuggestions(this.selectedAppointment)
      .subscribe((res) => console.log(res));

    this.router.navigate(['info']);
  }

  cancel() {
    console.log('Cancel');

    this.appointmentListVisible = !this.appointmentListVisible;
    this.showFindButton = true;
    this.appointments = [];
  }

  private isDateRangeValid(control: FormControl) {
    if (control === this.scheduleForm.get('scheduleDate.from')) {
      if (control.value > this.appointmentScheduleInfo.time.timeEnd) {
        return { dateRangeNotValid: true };
      } else return null;
    } else if (control.value < this.appointmentScheduleInfo.time.timeStart) {
      console.log('test');
      return { dateRangeNotValid: true };
    } else return null;
  }
}
