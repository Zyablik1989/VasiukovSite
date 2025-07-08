import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Weather } from "./models/weather";
import { map } from 'rxjs/operators'
import { Observable } from "rxjs";
import { environment } from '../environments/environment';
import { Profile } from "./models/profile";


@Injectable({providedIn: 'root'})
export class HttpRunner {

    constructor(private http: HttpClient) {}

      getWeather(): Observable<Weather[]>
      {
        let apiUrl = environment.apiUrl;
                let a = this.http.get<any>(apiUrl);

        return this.http.get<any[]>(apiUrl)
          .pipe(map(data=>data.map(item => new Weather(
            new Date(item.date),
            item.temperatureC,
            item.temperatureF,
            item.summary
          )))
        );
      }

      getProfile(): Observable<Profile>{
        let apiProfileUrl = environment.apiProfileUrl;
        let a = this.http.get<any>(apiProfileUrl);

        let b = this.http.get<any>(apiProfileUrl)
        .pipe(map(item => new Profile(
          item.name,
          item.occupation,
          item.occupationDetails
        )));

        let profile = this.http.get<any>(apiProfileUrl)
          .pipe(map(data=> new Profile(
          data.profile.name,
          data.profile.occupation,
          data.profile.occupationDetails
        )));
        return profile;
      }
    }


