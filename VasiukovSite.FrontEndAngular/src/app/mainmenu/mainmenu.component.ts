import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, ],
  templateUrl: './mainmenu.component.html',
  styleUrl: '../../styles.scss'
})
export class MainmenuComponent {

  menuButtons = [
    {name: 'Profile', link: '/profile'},
    {name: 'Cheat sheet', link: '/cheatsheet'},
    {name: 'Blog', link: '/blog'},
  ]
}

