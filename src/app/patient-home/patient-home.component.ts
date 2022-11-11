import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  logout = () =>
  {
    localStorage.removeItem('jwt');
    this.router.navigate(['landingPage']);
  }

}
