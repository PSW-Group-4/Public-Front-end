import { RegistrationInfoComponent } from './modules/profile/registration-info/registration-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { ChangePasswordComponent } from './blood-bank/change-password/change-password.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { IncognitoGuard } from './auth/incognito-guard.service';
import { RoleGuardService as RoleGuard } from './auth/role-guard.service';

//TODO: auth guard for bloodBanks
const routes: Routes = [
  {
    path: 'loginPage',
    component: LoginComponent,
    canActivate: [IncognitoGuard],
  },
  {
    path: 'landingPage',
    component: LandingPageComponent,
    canActivate: [IncognitoGuard],
  },
  { path: 'bloodBanks/:ApiKey', component: ChangePasswordComponent },
  {
    path: 'patientHome',
    component: PatientHomeComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'Patient' },
    children: [
      { path: 'createFeedback', component: CreateFeedbackComponent },
      { path: 'info', component: RegistrationInfoComponent },
    ],
  },
  { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CreateFeedbackComponent,
  LandingPageComponent,
  PatientHomeComponent,
  LoginComponent,
];
