import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstSettings } from '../../constSettings'
import { AvailableTimesRequest } from '../Model/AvailableTimesRequest';
import { DateRangeCustom } from '../Model/DateRangeCustom';
import { ScheduleAppointmentRequest } from '../Model/ScheduleAppointmentRequest';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  basePath: string = ConstSettings.apiHost + 'api/MedicalAppointment';
  constructor(private readonly http: HttpClient) {}

  getAvailableTimes = (dto: AvailableTimesRequest): Observable<DateRangeCustom[]> => 
  {
    let path = this.basePath + "/patient-appointment-request-simple";
    return this.http.post<DateRangeCustom[]>(path, dto, {headers: ConstSettings.standardHeader});
  };

  schedule = (appointment : AvailableTimesRequest) => {
      let path = this.basePath + '/schedule-patient';
      return this.http.post(path, appointment);
  }
  
}
