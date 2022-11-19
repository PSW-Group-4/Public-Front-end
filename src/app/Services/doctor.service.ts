import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from '../constSettings';
import { Doctor } from '../register/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getDoctorsWithLeastPatients(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(ConstSettings.apiHost + 'api/Doctor/doctorsWithLeastPatients', { headers: ConstSettings.standardHeader });
  }
}
