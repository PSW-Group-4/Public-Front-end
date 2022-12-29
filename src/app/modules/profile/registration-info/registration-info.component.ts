import { PatientDto } from './../model/patientDto.model';
import { RegistrationInfoService } from './../services/registration-info.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';

export interface NewsHeadlines {

  title: string;

}

@Component({
  selector: 'app-registration-info',
  templateUrl: './registration-info.component.html',
  styleUrls: ['./registration-info.component.css'],
})
export class RegistrationInfoComponent implements OnInit {
  patientRegistrationInfo: any;

  public allNews: NewsHeadlines[] = []


  constructor(
    private registrationInfoService: RegistrationInfoService,
    private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.registrationInfoService.getLoggedInPatient().subscribe((res) => {
      this.patientRegistrationInfo = res;
      console.table(this.patientRegistrationInfo)
      this.getBloodType();
      console.log(this.patientRegistrationInfo.bloodType);
    });

    this.newsService.getNewsHeadlines().subscribe((res) => {
      this.allNews = res;
    })
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

  goToNews() {
    this.router.navigate(["patient/news"])
  }
}
