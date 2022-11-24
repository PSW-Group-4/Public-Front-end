import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFeedbackComponent } from '../create-feedback/create-feedback.component';
import { NewsComponent } from '../news/news.component';


const routes: Routes = [
     {path: 'createFeedback', component: CreateFeedbackComponent },
     {path: 'news', component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class PatientRoutingModule { }
export const routingComponents = [CreateFeedbackComponent, NewsComponent]
