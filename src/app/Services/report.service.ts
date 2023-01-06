import { ConstSettings } from './../constSettings';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient) {}

  getReportByMedicalAppointmentId(id: string): Observable<string> {
    return this.http.get<string>(
      ConstSettings.apiHost + 'api/Report/get-by-appointment-id/' + id,
      { headers: ConstSettings.standardHeader }
    );
  }
}
