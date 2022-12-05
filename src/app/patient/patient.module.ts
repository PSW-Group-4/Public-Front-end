import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SimpleAppointmentSchedulingModule } from './simple-appointment-scheduling/simple-appointment-scheduling.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SimpleAppointmentSchedulingModule
  ]
})
export class PatientModule { }
