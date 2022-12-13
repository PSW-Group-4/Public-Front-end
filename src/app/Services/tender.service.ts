import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  apiHost: string = 'http://localhost:45488/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  
  approve(): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/Tender/approve', {headers: this.headers});
  }
  getActive(): Observable<any[]> {
    return this.http.get<any[]>(this.apiHost + 'api/Tender/active', {headers: this.headers});
  }
  deny(): Observable<any> {
    return this.http.get<any>(this.apiHost + 'api/Tender/deny', {headers: this.headers});
  }
}
