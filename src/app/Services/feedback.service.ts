import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { FeedbackPatientResponseDto } from '../model/feedbackPatientResponseDto.model';
import { ConstSettings } from '../constSettings';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient) {}

  getFeedbacksPublics(): Observable<FeedbackPatientResponseDto[]> {
    return this.http.get<FeedbackPatientResponseDto[]>(ConstSettings.apiHost + 'api/Feedback/published', { headers: ConstSettings.standardHeader });
  }

  createFeedback(feedback: any): Observable<any> {
  return this.http.post<any>(ConstSettings.apiHost + 'api/feedback', feedback, {headers: ConstSettings.standardHeader});
}

}
