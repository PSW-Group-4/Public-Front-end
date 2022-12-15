import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from 'src/app/constSettings';
import { PersonFullname } from '../Model/PersonFullname';
import { AvailableTimesRequest } from '../Model/AvailableTimesRequest';
import { DateRangeCustom } from '../Model/DateRangeCustom';
import { ScheduleAppointmentSuggestion } from '../Model/RequestForAppointmentTimeSlotSuggestions';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  basePath: string = ConstSettings.apiHost + 'api/Doctor';
  constructor(private readonly http: HttpClient) {}

  getSpecialties = (): Observable<string[]> => {
    let path = this.basePath + '/specialties';
    return this.http.get<string[]>(path);
  };

  getDoctorsWithSpecialty = (
    specialty: string
  ): Observable<PersonFullname[]> => {
    let path = this.basePath + '/specialties/' + specialty;
    return this.http.get<PersonFullname[]>(path);
  };


  getAll = (): Observable<PersonFullname[]> => {
    let path = this.basePath + '/basicInfo';
    return this.http.get<PersonFullname[]>(path);
  };

  FindAppropriateAppointments(
    appointmentScheduleInfo: ScheduleAppointmentSuggestion
  ) {
    let path =
      ConstSettings.apiHost +
      'api/MedicalAppointment/' +
      'patient-appointment-request-with-suggestions';
    return this.http.post<ScheduleAppointmentSuggestion>(
      path,
      appointmentScheduleInfo
    );
  }

  ScheduleWithSuggestions(appointment: AvailableTimesRequest): Observable<any> {
    let path =
      ConstSettings.apiHost + 'api/MedicalAppointment/schedule-patient';
    return this.http.post<AvailableTimesRequest>(path, appointment);
  }
}
