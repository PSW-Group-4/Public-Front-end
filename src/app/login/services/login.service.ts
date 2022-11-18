import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from '../../constSettings';
import { Jwt } from '../model/Jwt.model';
import { LoginDto } from '../model/loginDto.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginDto: LoginDto): Observable<Jwt> {
    return this.http.post<Jwt>(
      ConstSettings.apiHost + 'api/User/LoginPatient',
      loginDto,
      {
        headers: ConstSettings.standardHeader,
      }
    );
  }

  //TODO Jwt?
  activateAccount(token: any, id: any) {
    return this.http.post(
      ConstSettings.apiHost + 'api/User/ActivateAccount',
      { token: token, id: id },
      { headers: ConstSettings.standardHeader }
    );
  }
}
