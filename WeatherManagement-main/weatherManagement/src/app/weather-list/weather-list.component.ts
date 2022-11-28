import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  weatherr?: Weather[];
  currentWeather: Weather = {};
  currentIndex = -1;
  city = '';

  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
  }
  setActiveWeather(weather: Weather, index: number): void {
    this.currentWeather = weather;
    this.currentIndex = index;
  }

  searchCity(): void {
    this.currentWeather = {};
    this.currentIndex = -1;

    this.weatherService.findByCity(this.city)
      .subscribe({
        next: (data) => {
          this.weatherr = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}


  
