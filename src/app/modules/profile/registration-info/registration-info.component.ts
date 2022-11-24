import { PatientDto } from './../model/patientDto.model';
import { RegistrationInfoService } from './../services/registration-info.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-info',
  templateUrl: './registration-info.component.html',
  styleUrls: ['./registration-info.component.css'],
})
export class RegistrationInfoComponent implements OnInit {
  patientRegistrationInfo: any;

  constructor(
    private registrationInfoService: RegistrationInfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationInfoService.getLoggedInPatient().subscribe((res) => {
      this.patientRegistrationInfo = res;
      this.getBloodType();
      console.log(this.patientRegistrationInfo.bloodType);
    });
  }

  getBloodType() {
    switch (this.patientRegistrationInfo.bloodType) {
      case 0:
        this.patientRegistrationInfo.bloodType = 'A_POS';
        break;
      case 1:
        this.patientRegistrationInfo.bloodType = 'A_NEG';
        break;
      case 2:
        this.patientRegistrationInfo.bloodType = 'B_POS';
        break;
      case 3:
        this.patientRegistrationInfo.bloodType = 'B_NEG';
        break;
      case 4:
        this.patientRegistrationInfo.bloodType = 'O_POS';
        break;
      case 5:
        this.patientRegistrationInfo.bloodType = 'O_NEG';
        break;
      case 6:
        this.patientRegistrationInfo.bloodType = 'AB_POS';
        break;
      case 7:
        this.patientRegistrationInfo.bloodType = 'AB_NEG';
        break;
    }
  }
}
