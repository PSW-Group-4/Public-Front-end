import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleAppointmentSchedulingComponent } from './simple-appointment-scheduling.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SimpleAppointmentSchedulingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatStepperModule,
    RouterModule

  ]
})
export class SimpleAppointmentSchedulingModule { }
