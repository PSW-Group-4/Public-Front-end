import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

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
    let dto = {
      username:this.username!,
      password:this.password!
    }

    this.loginService.login(dto).subscribe({
      next: response =>{
        localStorage.setItem('jwt', response.jwt);
        this.router.navigate(['patientHome']);         
      },
      //TODO: handle errors
      error: err => {
        alert(err.message);
      }  
    }
    );
  }

}
