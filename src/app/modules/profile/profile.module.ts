import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationInfoComponent } from './registration-info/registration-info.component';
import { Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { CarouselComponent } from './registration-info/carousel/carousel.component';

const routes: Routes = [{ path: 'info', component: RegistrationInfoComponent }];

@NgModule({
  declarations: [RegistrationInfoComponent, CarouselComponent],
  imports: [CommonModule, AppRoutingModule, MaterialModule],
})
export class ProfileModule {}
