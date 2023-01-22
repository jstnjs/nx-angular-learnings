import { Route } from '@angular/router';
import { LayoutComponent } from '@jv/demo-app/ui/layout';
import { provideState } from '@ngrx/store';
import { authReducer } from '@jv/shared/data-access/auth';

export const demoAppShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@jv/demo-app/features/home').then((c) => c.HomeComponent),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('@jv/demo-app/features/login').then((c) => c.LoginComponent),
      },
    ],
    providers: [
      provideState('auth', authReducer)
    ],
  },
];
