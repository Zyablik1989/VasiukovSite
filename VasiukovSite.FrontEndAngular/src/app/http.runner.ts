import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Weather } from "./weather";
import { map } from 'rxjs/operators'
import { Observable } from "rxjs";
import { environment } from '../environments/environment';


@Injectable({providedIn: 'root'})
export class HttpRunner {

    constructor(private http: HttpClient) {}

      getWeather(): Observable<Weather[]>
      {
        let apiUrl = environment.apiUrl;
        return this.http.get<any[]>(apiUrl)
          .pipe(map(data=>data.map(item => new Weather(
            new Date(item.date),
            item.temperatureC,
            item.temperatureF,
            item.summary
          )))
        );
      }
    }