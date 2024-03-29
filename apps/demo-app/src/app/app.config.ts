import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { demoAppShellRoutes } from '@jv/demo-app/features/shell';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { API_URL } from '@jv/shared/core/http-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(demoAppShellRoutes, withEnabledBlockingInitialNavigation()),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    { provide: API_URL, useValue: '/api' },
    provideHttpClient(),
  ],
};
