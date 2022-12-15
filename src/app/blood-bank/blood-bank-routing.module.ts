import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TenderWinnerResponseComponent} from "../tender-winner-response/tender-winner-response.component";
import {ViewAllTendersComponent} from "../tenders/view-all-tenders/view-all-tenders.component";

const routes: Routes = [
  { path: 'tender/winner', component: TenderWinnerResponseComponent },
  { path: 'tender', component: ViewAllTendersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class BloodBankRoutingModule {}
export const routingComponents = [TenderWinnerResponseComponent, ViewAllTendersComponent];
