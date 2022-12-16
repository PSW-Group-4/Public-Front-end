import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { ChangePasswordComponent } from './blood-bank/change-password/change-password.component';
import { RoleGuardService as RoleGuard } from './auth/guards/role-guard.service';
import { IncognitoGuard } from './auth/guards/incognito-guard.service';
import { RegisterComponent } from './register/register/register.component';
import { NewsComponent } from './news/news.component';
import { TenderWinnerResponseComponent } from './tender-winner-response/tender-winner-response.component';
import { ViewAllTendersComponent } from './tenders/view-all-tenders/view-all-tenders.component';
import {BloodBankLoginComponent} from "./blood-bank/blood-bank-login/blood-bank-login.component";
import {BloodBankHomeComponent} from "./blood-bank/blood-bank-home/blood-bank-home-component";
//TODO: auth guard for bloodBanks
const routes: Routes = [
  {
    path: 'loginPage',
    component: LoginComponent,
    canActivate: [IncognitoGuard],
  },
  {
    path: 'login/bloodBank',
    component: BloodBankLoginComponent,
    canActivate: [IncognitoGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [IncognitoGuard],
  },
  {
    path: 'landingPage',
    component: LandingPageComponent,
    canActivate: [IncognitoGuard],
  },
  { path: 'bloodBanks/:ApiKey', component: ChangePasswordComponent },
  {
    path: 'patient', component: PatientHomeComponent, canActivate: [RoleGuard],
    data :{expectedRole: 'Patient'},
    loadChildren: () => import('./patient/patient-routing.module').then(m => m.PatientRoutingModule)
  },
  {
    path: 'bloodBank', component: BloodBankHomeComponent, canActivate: [RoleGuard],
    data: { expectedRole: 'BloodBank'},
    loadChildren: () => import('./blood-bank/blood-bank-routing.module').then(m => m.BloodBankRoutingModule)
  },
  { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
  { path: '**', redirectTo: 'landingPage', pathMatch: 'full' },

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
  NewsComponent,
  LoginComponent,
  TenderWinnerResponseComponent,
  ViewAllTendersComponent,
];
