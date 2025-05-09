import { Component } from '@angular/core';
import { HttpRunner } from '../http.runner';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-server-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './server-info.component.html',
  styleUrl: './server-info.component.scss'
})
export class ServerInfoComponent {
 constructor(private httpService: HttpRunner){
  this.httpService.run();
  var result = this.httpService.run();
 }
}
