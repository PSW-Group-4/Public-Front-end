import { ConstSettings } from './../../../constSettings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientDto } from '../model/patientDto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationInfoService {
  constructor(private http: HttpClient) {}

  getLoggedInPatient(): Observable<PatientDto> {
    return this.http.get<PatientDto>(
      ConstSettings.apiHost + 'api/Patient/info',
      { headers: ConstSettings.standardHeader }
    );
  }
}
