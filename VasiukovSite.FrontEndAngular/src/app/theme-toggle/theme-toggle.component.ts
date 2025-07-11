import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';


@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
//   template: `
//   <button  (mouseenter)="toggleTheme()">
//   Toggle Theme
// </button>
// `,
  // styleUrl: './theme-toggle.component.scss'
    styleUrl: '../../styles.scss'
})
export class ThemeToggleComponent {
  private isDark = false;

  constructor(private themeService: ThemeService){
    console.log('ThemeService constructed');

  }
  testClick(){
        console.log('Toggle theme called');

  }

  toggleTheme(){
    console.log('Toggle theme called');
    // this.isDark = this.themeService.getCurrentTheme() === 'dark-theme';
    //Getting the current theme and setting the opposite
    this.themeService.setTheme(this.themeService.getCurrentTheme() === 'light-theme' ? 'dark-theme' : 'light-theme');
  }
  public test(){
    console.log('Test');
  }
}
