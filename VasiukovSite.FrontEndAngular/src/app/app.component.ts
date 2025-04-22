import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainMenuComponent } from "./main-menu/main-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: '../styles.css'
})
export class AppComponent {
  title = 'vasiukov-website';
}
