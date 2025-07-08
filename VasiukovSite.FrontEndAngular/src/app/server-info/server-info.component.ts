import { Component, OnInit } from '@angular/core';
import { HttpRunner } from '../http.runner';
import { NgFor } from "@angular/common";
import { ServerData } from '../models/serverData';

@Component({
  selector: 'app-server-info',
  standalone: true,
  imports: [],
  templateUrl: './server-info.component.html',
  styleUrl: './server-info.component.scss'
})

export class ServerInfoComponent implements OnInit{
  serverData: ServerData = new ServerData();

 constructor(private httpRunner: HttpRunner){
  //
 }

 ngOnInit(): void {
   this.httpRunner.getServerData().subscribe(data=>{
    this.serverData = data;

   })
 }
}
