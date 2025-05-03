import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class HttpRunner {
  private http = inject(HttpClient);
  // This service can now make HTTP requests via `this.http`.
  run(){
    this.http.get('https://localhost:61096').subscribe(config => {
      var a = config;
      // process the configuration.
    });

    var b = this.http.get('https://localhost:61096');

    this.http.get('https://localhost:61096').subscribe({
      next: (data) => {
        console.log('Received data:', data);
        // You can process your data here
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });

  }
}
