import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityName?: string;
  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) { }

  onSubmit() {
    if (this.cityName) {
      this.getWeatherData(this.cityName);
      this.cityName = '';
    }
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe((response: WeatherData | undefined) => {
        this.weatherData = response;
      });
  }
}