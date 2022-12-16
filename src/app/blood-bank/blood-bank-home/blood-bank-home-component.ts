import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../auth/services/login.service";

@Component({
  selector: 'app-blood-bank-home',
  templateUrl: './blood-bank-home-component.html',
  styleUrls: ['./blood-bank-home-component.css']
})
export class BloodBankHomeComponent implements OnInit {

  constructor(private readonly router: Router, private readonly loginService: LoginService) { }

  ngOnInit(): void {
  }

  logout = () =>
  {
    this.loginService.logout();
  }

}
