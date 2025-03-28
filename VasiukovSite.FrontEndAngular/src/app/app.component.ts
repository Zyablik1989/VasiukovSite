import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HomeComponent, AboutComponent],
  // templateUrl: './app.component.html',
  template: `
    <div>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">About</a></li>
      </ul>
    </div>
    <router-outlet />
  `,
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
//   title = 'my-first-project';
// }
