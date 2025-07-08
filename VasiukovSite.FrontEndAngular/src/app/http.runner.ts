import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ServerData } from "./models/serverData";
import { map } from 'rxjs/operators'
import { Observable } from "rxjs";
import { environment } from '../environments/environment';
import { Profile } from "./models/profile";


@Injectable({providedIn: 'root'})
export class HttpRunner {

    constructor(private http: HttpClient) {}

      getServerData(): Observable<ServerData>
      {
        let apiUrl = environment.apiUrl;
                let a = this.http.get<any>(apiUrl);

        let serverInfo = this.http.get<any>(apiUrl)
          .pipe(map(data=>
            new ServerData(
            data.name,
            data.startTime,
            data.upTime
          ))
        );

        return serverInfo;
      }

      getProfile(): Observable<Profile>{
        let apiProfileUrl = environment.apiProfileUrl;

        let profile = this.http.get<any>(apiProfileUrl)
          .pipe(map(data=> new Profile(
          data.name,
          data.occupation,
          data.occupationDetails
        )));
        return profile;
      }
    }


