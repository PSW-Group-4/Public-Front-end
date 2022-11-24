import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from 'src/app/constSettings';
import { UserInfo } from './register.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  registerUser(dto: UserInfo): Observable<any> {

    return this.http.post<any>(ConstSettings.apiHost + 'api/User/RegisterPatient', dto, { headers: ConstSettings.standardHeader });
  }


}
