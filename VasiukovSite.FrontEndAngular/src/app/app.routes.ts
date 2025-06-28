import { Routes, provideRouter } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CheatsheetComponent } from './cheatsheet/cheatsheet.component';
import { BlogComponent } from './blog/blog.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
  // {path: '', component: ProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'cheatsheet', component: CheatsheetComponent},
  {path: 'blog', component: BlogComponent}

];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
}
