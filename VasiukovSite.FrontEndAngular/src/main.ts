import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,  {
  providers: [provideProtractorTestingSupport(),]
})
  .catch((err) => console.error(err));



