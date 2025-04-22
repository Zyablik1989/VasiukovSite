import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApplicationConfig } from '@angular/core';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { AppComponent } from './app.component';
// export const routes: Routes = [
//   { path: '', component: HomeComponent},
//   { path: 'about', component: AboutComponent}
// ];
export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};



