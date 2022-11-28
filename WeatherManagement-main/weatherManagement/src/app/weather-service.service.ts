import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

const baseUrl = "http://localhost:8080/api/weatherr/"
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Weather[]>{
    return this.httpClient.get<Weather[]>(baseUrl);
  }
  get(city: String):Observable<Weather>{
    return this.httpClient.get<Weather>('${baseUrl}/${city}');
  }
  findByCity(city: String): Observable<Weather[]> {
    return this.httpClient.get<Weather[]>(`${baseUrl}?city=${city}`);
  }

}

 