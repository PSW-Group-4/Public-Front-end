import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'landingPage', component: LandingPageComponent },
  {
    path: 'patientHome', component: PatientHomeComponent,
    children: [{ path: 'createFeedback', component: CreateFeedbackComponent }]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CreateFeedbackComponent,LandingPageComponent,PatientHomeComponent]
