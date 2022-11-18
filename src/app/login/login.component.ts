import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../auth/services/login.service';
import { Jwt } from '../auth/Model/Jwt.model';
import { LoginDto } from '../auth/Model/loginDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
      username: new FormControl<string>(''),
      password: new FormControl<string>('')
  });

  get username(){
    return this.loginForm.controls.username.value;
  }
  get password(){
    return this.loginForm.controls.password.value;
  }

  constructor(private readonly loginService:LoginService,
              private readonly router:Router) { }

  ngOnInit(): void {
  }

  login = () =>
  {
    let loginCredentials : LoginDto = {
      username:this.username!,
      password:this.password!
    }

    this.loginService.login(loginCredentials);
  }

}
