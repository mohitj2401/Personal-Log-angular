import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Story } from './story';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  baseUrl = 'http://127.0.0.1/1900/story';
  constructor(private http: HttpClient) { }


  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.baseUrl).pipe();

  }
}
