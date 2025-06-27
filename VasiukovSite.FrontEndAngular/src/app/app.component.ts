import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainmenuComponent } from "./mainmenu/mainmenu.component";
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainmenuComponent, ThemeToggleComponent, ServerInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vasiukov-website';

  handleClick() {
    console.log('Button was clicked!');
      console.log(environment.production);

  }
}
