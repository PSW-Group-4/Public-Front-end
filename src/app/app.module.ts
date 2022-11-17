import { MaterialModule } from './material/material.module';
import { ProfileModule } from './modules/profile/profile.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeedbackTableComponent } from './feedback-table/feedback-table.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BloodBankModule } from './blood-bank/blood-bank.module';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedbackTableComponent,
    CreateFeedbackComponent,
    routingComponents,
    LandingPageComponent,
    PatientHomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    BloodBankModule,
    ProfileModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
