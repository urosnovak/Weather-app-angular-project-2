import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from 'src/models/weather.model';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=22fba64f391acde0cf3dbe0487296500&units=metric` );
  }

  // https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=22fba64f391acde0cf3dbe0487296500&units=metric

  // getWeatherData(cityName:string):Observable<WeatherData>{
  //   return this.http.get<WeatherData>(environment.weatherApiBaseUrl+'/city/'+cityName, {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHeaderName, environment.XRapidAPIHeaderValue)
  //     .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
  //     params: new HttpParams()
  //     .set('q', cityName)
  //     .set('units', 'metric')
  //     .set('mode', 'json')
  //   });
  // }
}
