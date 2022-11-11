import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private readonly auth:AuthService, private readonly router: Router, private readonly jwtHelper: JwtHelperService) { }
  canActivate(route: ActivatedRouteSnapshot): boolean{
      const expectedRole = route.data['expectedRole'];    

      const token = localStorage.getItem('jwt');
      const tokenPayload = this.jwtHelper.decodeToken(token!);
      
      if(
        !this.auth.isAuthenticated() ||
        tokenPayload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] !== expectedRole
      )
      {
        this.router.navigate(['landingPage']);
        return false;
      }
      return true;

  }
}
