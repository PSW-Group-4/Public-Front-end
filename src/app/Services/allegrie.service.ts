import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from '../constSettings';
import { Allergies } from './../register/register/register.component';

@Injectable({
  providedIn: 'root'
})


export class AllegrieService {

  constructor(private http: HttpClient) { }


  getsAllegries(): Observable<Allergies[]> {
    return this.http.get<Allergies[]>(ConstSettings.apiHost + 'api/Allergie/get-all', { headers: ConstSettings.standardHeader });
  }


}
