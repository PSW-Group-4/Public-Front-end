import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';

@NgModule({
  declarations: [ScheduleAppointmentComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
})
export class AppointmentWithSuggestionsSchedulingModule {}
