import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../auth/services/login.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  constructor(private readonly router: Router, private readonly loginService: LoginService) { }

  ngOnInit(): void {
  }

  loadNews(){
    this.router.navigate(['patient/news'])
  }

  logout = () =>
  {
    this.loginService.logout();
  }

}
