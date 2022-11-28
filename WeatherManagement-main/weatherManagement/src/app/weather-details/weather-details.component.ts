import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../weather';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentWeather: Weather = {
    city: '',
    temperature: '',
    humidity:'',
    pressure:'',
    sunrise:'',
    sunset:'',
    geocoords:''
  };
  message = '';

  constructor( private weatherService: WeatherServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getWeather(this.route.snapshot.params["city"]);
    }
  }
  getWeather(city: string): void {
    this.weatherService.get(city)
      .subscribe({
        next: (data) => {
          this.currentWeather = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}


 