import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Routes } from '@angular/router';
import { BloodBankLoginComponent } from './blood-bank-login/blood-bank-login.component';
import { BloodBankHomeComponent } from './blood-bank-home/blood-bank-home-component';

const routes: Routes = [
  { path: 'bloodBanks/:ApiKey', component: ChangePasswordComponent },
];

@NgModule({
  declarations: [
    ChangePasswordComponent,
    BloodBankLoginComponent,
    BloodBankHomeComponent
  ],
  exports:[ChangePasswordComponent]
  ,


  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class BloodBankModule { }
