import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IncognitoGuard implements CanActivate {

  constructor(private readonly router: Router, private readonly auth:AuthService) { }
  canActivate(): boolean{
    if(this.auth.isAuthenticated())
    {
      this.router.navigate(['patientHome']);
      return false;
    }
    return true;
  }


}
