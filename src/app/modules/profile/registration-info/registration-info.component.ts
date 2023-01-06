import { PatientDto } from './../model/patientDto.model';
import { RegistrationInfoService } from './../services/registration-info.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';


@Component({
  selector: 'app-registration-info',
  templateUrl: './registration-info.component.html',
  styleUrls: ['./registration-info.component.css'],
})
export class RegistrationInfoComponent implements OnInit {
  patientRegistrationInfo: any;



  constructor(
    private registrationInfoService: RegistrationInfoService,
  ) { }

  ngOnInit(): void {
    this.registrationInfoService.getLoggedInPatient().subscribe((res) => {
      this.patientRegistrationInfo = res;
      console.table(this.patientRegistrationInfo)
      this.getBloodType();
      console.log(this.patientRegistrationInfo.bloodType);
    });


  }

  getBloodType() {
    switch (this.patientRegistrationInfo.bloodType.bloodGroup) {
      case 0:
        this.patientRegistrationInfo.bloodTypeShow = 'O';
        break;
      case 1:
        this.patientRegistrationInfo.bloodTypeShow = 'A';
        break;
      case 2:
        this.patientRegistrationInfo.bloodTypeShow = 'B';
        break;
      case 3:
        this.patientRegistrationInfo.bloodTypeShow = 'AB';
        break;

    }
    switch (this.patientRegistrationInfo.bloodType.rhFactor) {
      case 0:
        this.patientRegistrationInfo.bloodTypeShow += ' POSTITIVE';
        break;
      case 1:
        this.patientRegistrationInfo.bloodTypeShow += ' NEGATIVE';
        break;


    }
  }


}
