import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleScholarService {

  private baseUrl = 'https://scholar.google.com/scholar';
  private apiKey = '564520059886-egim0f6iu8vpgdkvlt9ude58np5h209l.apps.googleusercontent.com';

  constructor(private http: HttpClient) {}

  getGoogleScholarPosts(query: string): Observable<any> {
    const url = `${this.baseUrl}?q=${query}&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
