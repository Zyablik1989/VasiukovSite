import { Component, OnInit } from '@angular/core';
import { HttpRunner } from '../http.runner';
import { NgFor } from "@angular/common";
import { Weather } from '../models/weather';

@Component({
  selector: 'app-server-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './server-info.component.html',
  styleUrl: './server-info.component.scss'
})
export class ServerInfoComponent implements OnInit{
  weathers: Weather[] = [];

 constructor(private httpRunner: HttpRunner){
  // this.httpService.run();
  // var weathers = this.httpRunner.getWeather();
  // var a = weathers[0].temperatureC;
 }

 ngOnInit(): void {
   this.httpRunner.getWeather().subscribe(data=>{
    this.weathers = data;

   })
 }
}
