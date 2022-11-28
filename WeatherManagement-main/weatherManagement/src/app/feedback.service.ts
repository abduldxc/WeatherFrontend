import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  baseUrl="http://localhost:8080/feedback/all"
  constructor(private httpclient : HttpClient) { }

  feedbackUser(user : Feedback):Observable<object>
  {
    console . log(user);
    return this.httpclient.post(`${this.baseUrl}`,user);
  }

  
}


  