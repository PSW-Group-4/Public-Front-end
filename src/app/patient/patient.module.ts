import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SimpleAppointmentSchedulingModule } from './simple-appointment-scheduling/simple-appointment-scheduling.module';
import { AppointmentWithSuggestionsSchedulingModule } from './appointment-with-suggestions-scheduling/appointment-with-suggestions-scheduling.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    SimpleAppointmentSchedulingModule,
    AppointmentWithSuggestionsSchedulingModule,
  ],
})
export class PatientModule {}
