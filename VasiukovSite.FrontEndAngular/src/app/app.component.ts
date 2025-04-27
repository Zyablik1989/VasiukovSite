import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainmenuComponent } from "./mainmenu/mainmenu.component";
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainmenuComponent, ThemeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vasiukov-website';
  handleClick() {
    console.log('Button was clicked!');
  }
}
