import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { CheatsheetComponent } from './cheatsheet/cheatsheet.component';
import { BlogComponent } from './blog/blog.component';
// export const routes: Routes = [
//   { path: '', component: HomeComponent},
//   { path: 'about', component: AboutComponent}
// ];
export const routes: Routes = [
  { path: '', component: ProfileComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'cheatsheet', component: CheatsheetComponent},
  { path: 'blog', component: BlogComponent},
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};



