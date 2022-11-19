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

  // getLoggedInPatient() {
  //   return {
  //     name: 'Savo',
  //     surname: 'Oroz',
  //     email: 'oroz.savo@gmail.com',
  //     address: 'ulica/grad/broj',
  //     bloodType: 'A',
  //     allergies: ['peanuts', 'cats'],
  //     doctor: 'doctor',
  //   };
  // }

  getLoggedInPatient(): Observable<PatientDto> {
    return this.http.get<PatientDto>(
      ConstSettings.apiHost + 'api/Patient/loggedInPatient',
      { headers: ConstSettings.standardHeader }
    );
  }
}
