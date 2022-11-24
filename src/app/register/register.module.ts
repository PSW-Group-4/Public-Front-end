import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from 'src/app/material/material.module';
import { MatSliderModule } from '@angular/material/slider'
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule, FormsModule,
    BrowserModule,
    MatDatepickerModule



  ]
})
export class RegisterModule { }
