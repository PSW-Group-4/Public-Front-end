import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationInfoService {
  constructor(private http: HttpClient) {}

  getLoggedInPatient() {
    return {
      name: 'Savo',
      surname: 'Oroz',
      email: 'oroz.savo@gmail.com',
      address: 'ulica/grad/broj',
      bloodType: 'A',
      allergies: ['peanuts', 'cats'],
      doctor: 'doctor',
    };
  }
}
