import { Component, OnInit } from '@angular/core';
import { HttpRunner } from '../http.runner';
import { Profile } from '../models/profile'


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})


export class ProfileComponent implements OnInit{
  profile: Profile = new Profile();

  constructor(private httpRunner: HttpRunner){
    //
  }

  ngOnInit(): void {
    this.httpRunner.getProfile().subscribe(data=>{
      this.profile = data
    })
  }
}
