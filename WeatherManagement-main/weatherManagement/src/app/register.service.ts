import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl="http://localhost:8080/user/user"
  url="http://localhost:8080/user/sendMail"
  constructor(private httpclient : HttpClient) { }

  registerUser(user : User):Observable<object>
  {
    console . log(user);
    return this.httpclient.post(`${this.baseUrl}`,user);
  }
  sendMail(mail: User):Observable<object>
  {
    console.log(mail);
    return this.httpclient.post(`${this.url}`,mail);
  }
}

 