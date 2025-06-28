import { Routes, provideRouter } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CheatsheetComponent } from './cheatsheet/cheatsheet.component';
import { BlogComponent } from './blog/blog.component';
import { ApplicationConfig } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'cheatsheet', component: CheatsheetComponent},
  {path: 'blog', component: BlogComponent},
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404

];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
}
