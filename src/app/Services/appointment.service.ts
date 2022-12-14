import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from '../constSettings';
import { Appointment } from '../model/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private axios: HttpClient) { }

  getsAppointments(type: string): Observable<Appointment[]> {
    return this.axios.get<Appointment[]>(ConstSettings.apiHost + 'api/MedicalAppointment/' + type, { headers: ConstSettings.standardHeader });
  }

  cancelAppointment(id: string): Observable<string> {
    return this.axios.delete<string>(ConstSettings.apiHost + 'api/MedicalAppointment/cancel/' + id, { headers: ConstSettings.standardHeader });
  }
}
