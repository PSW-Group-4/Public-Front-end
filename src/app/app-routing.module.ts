import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { ChangePasswordComponent } from './blood-bank/change-password/change-password.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {path: 'loginPage', component: LoginComponent },
  {path: 'landingPage', component: LandingPageComponent },
  {path:'bloodBanks/:ApiKey', component: ChangePasswordComponent},
  {
    path: 'patientHome', component: PatientHomeComponent,
    children: [{ path: 'createFeedback', component: CreateFeedbackComponent }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateFeedbackComponent,LandingPageComponent,PatientHomeComponent,LoginComponent]
