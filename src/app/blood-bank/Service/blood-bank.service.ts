import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BloodBank } from '../blood-bank.model';

@Injectable({
  providedIn: 'root'
})
export class BloodBankService {

  apiHost: string = 'http://localhost:5000/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBloodBanks(): Observable<BloodBank[]> {
    return this.http.get<BloodBank[]>(this.apiHost + 'api/BloodBank', {headers: this.headers});
  }

  getBloodBankByApiKey(ApiKey: String): Observable<BloodBank> {
    return this.http.get<BloodBank>(this.apiHost + 'api/BloodBank/' + ApiKey, {headers: this.headers});
  }
  updateBloodBank(bloodBank: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/BloodBank/' + bloodBank.Id, bloodBank, {headers: this.headers});
  }
}
