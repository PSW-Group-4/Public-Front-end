import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFeedbackComponent } from '../create-feedback/create-feedback.component';
import { NewsComponent } from '../news/news.component';
import { RegistrationInfoComponent } from '../modules/profile/registration-info/registration-info.component';
import { AppointmentTableComponent } from '../appointment-table/appointment-table.component';


const routes: Routes = [
  { path: 'createFeedback', component: CreateFeedbackComponent },
  { path: 'view-appointments', component: AppointmentTableComponent },
  { path: 'info', component: RegistrationInfoComponent },
  { path: 'news', component: NewsComponent },
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: '**', redirectTo: 'info', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class PatientRoutingModule { }
export const routingComponents = [CreateFeedbackComponent, NewsComponent]
