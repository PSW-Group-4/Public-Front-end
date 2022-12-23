import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../model/news.model';
import { NewsHeadlines } from '../modules/profile/registration-info/registration-info.component';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiHost: string = 'http://localhost:45488/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + 'api/News', { headers: this.headers });
  }

  getNewsArchived(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + 'api/News/GetArchived', { headers: this.headers });
  }
  getNewsPublished(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + 'api/News/GetPublished', { headers: this.headers });
  }
  getNewsPending(): Observable<News[]> {
    return this.http.get<News[]>(this.apiHost + 'api/News/GetPending', { headers: this.headers });
  }

  publishNews(id: any): Observable<News> {
    return this.http.post<News>(this.apiHost + 'api/News/Publish' + '?id=' + id, { headers: this.headers });
  }

  archiveNews(id: any): Observable<any> {
    return this.http.post<News>(this.apiHost + 'api/News/Archive' + '?id=' + id, { headers: this.headers });
  }

  getNewsHeadlines(): Observable<NewsHeadlines[]> {
    return this.http.get<NewsHeadlines[]>("http://localhost:16177/" + 'api/NewsHeadlines', { headers: this.headers });
  }

}
