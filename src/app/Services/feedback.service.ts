import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { FeedbackPatientResponseDto } from '../model/feedbackPublic.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getFeedbacksPublics(): Observable<FeedbackPatientResponseDto[]> {
    return this.http.get<FeedbackPatientResponseDto[]>(this.apiHost + 'api/Feedback/published', { headers: this.headers });
  }

  createFeedback(feedback: any): Observable<any> {
  return this.http.post<any>(this.apiHost + 'api/feedback', feedback, {headers: this.headers});
}

}
