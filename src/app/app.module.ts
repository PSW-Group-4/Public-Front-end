import { MaterialModule } from './material/material.module';
import { ProfileModule } from './modules/profile/profile.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthInterceptor } from './auth/auth.interceptor';
import { RegisterModule } from './register/register.module';
import { MatSelectModule } from '@angular/material/select';
import { NewsComponent } from './news/news.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SimpleAppointmentSchedulingModule } from './patient/simple-appointment-scheduling/simple-appointment-scheduling.module';
import { AppointmentWithSuggestionsSchedulingModule } from './patient/appointment-with-suggestions-scheduling/appointment-with-suggestions-scheduling.module';
import { TenderWinnerResponseComponent } from './tender-winner-response/tender-winner-response.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedbackTableComponent,
    CreateFeedbackComponent,
    routingComponents,
    LandingPageComponent,
    PatientHomeComponent,
    NewsComponent,
    TenderWinnerResponseComponent,
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
    RegisterModule,
    ReactiveFormsModule,
    MatSelectModule,
    FlexLayoutModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
