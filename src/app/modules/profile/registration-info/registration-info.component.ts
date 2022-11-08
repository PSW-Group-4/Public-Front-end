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
    this.patientRegistrationInfo =
      this.registrationInfoService.getLoggedInPatient();
  }
}
