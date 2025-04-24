import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {
  private isDark = false;

  constructor(private themeService: ThemeService){}

  toggleTheme(){
    this.isDark = !this.isDark;
    this.themeService.setTheme(this.isDark ? 'dark-theme' : 'light-theme');

  }

}
