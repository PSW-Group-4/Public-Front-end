import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationInfoComponent } from './registration-info/registration-info.component';
import { Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [{ path: 'info', component: RegistrationInfoComponent }];

@NgModule({
  declarations: [RegistrationInfoComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
})
export class ProfileModule {}
