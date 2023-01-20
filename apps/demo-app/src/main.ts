import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { demoAppShellRoutes } from '@jv/demo-app/features/shell';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(demoAppShellRoutes, withEnabledBlockingInitialNavigation())],
}).catch((err) => console.error(err));
