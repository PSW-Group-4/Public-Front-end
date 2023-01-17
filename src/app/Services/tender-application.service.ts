import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplyForTenderDto } from '../tenders/tenderApplication.model';

@Injectable({
  providedIn: 'root'
})
export class TenderApplicationService {

    apiHost: string = 'http://localhost:5000/';
    headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    apply(tenderApplication : ApplyForTenderDto): any {
      return this.http.post<any>(this.apiHost + 'api/TenderApplication', tenderApplication, {headers: this.headers});
    }
  }
