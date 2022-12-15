import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../../auth/services/login.service";
import {Router} from "@angular/router";
import {AccountService} from "../../auth/services/account.service";
import {LoginDto} from "../../auth/Model/loginDto";

@Component({
  selector: 'app-blood-bank-login',
  templateUrl: './blood-bank-login.component.html',
  styleUrls: ['./blood-bank-login.component.css']
})
export class BloodBankLoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  get username() {
    return this.loginForm.controls.username.value;
  }
  get password() {
    return this.loginForm.controls.password.value;
  }

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
    private readonly accountService: AccountService
  ) { }

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    var token = params.get('token');
    var id = params.get('id');
  }

  login = () => {
    let loginCredentials: LoginDto = {
      username: this.username!,
      password: this.password!,
    };

    this.loginService.bloodBankLogin(loginCredentials);
  };

}
