import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  approve(tenderId: string | null): Observable<any> {
    return this.http.get<any>(this.apiHost + `api/Tender/${tenderId}/winner/confirm`, {headers: this.headers});
  }
  getActive(): Observable<any[]> {
    return this.http.get<any[]>(this.apiHost + 'api/Tender/active', {headers: this.headers});
  }
  deny(tenderId: string | null): Observable<any> {
    return this.http.get<any>(this.apiHost + `api/Tender/${tenderId}/winner/confirm`, {headers: this.headers});
  }
}
