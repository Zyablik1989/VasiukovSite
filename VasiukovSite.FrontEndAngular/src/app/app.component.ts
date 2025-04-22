import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
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


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterOutlet],
//   template: '<router-outlet />'
// })
// export class AppComponent {
//   title = 'vasiukov-website';
// }
