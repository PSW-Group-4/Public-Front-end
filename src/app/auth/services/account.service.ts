import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstSettings } from 'src/app/constSettings';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  //TODO Jwt?
  activateAccount(token: any, id: any) {
    return this.http.post(
      ConstSettings.apiHost + 'api/User/ActivateAccount',
      { token: token, id: id },
      { headers: ConstSettings.standardHeader }
    );
  }
}
