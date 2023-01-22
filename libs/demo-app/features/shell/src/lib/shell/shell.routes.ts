import { Route } from '@angular/router';
import { LayoutComponent } from '@jv/demo-app/ui/layout';

export const demoAppShellRoutes: Route[] = [
  { 
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@jv/demo-app/features/home').then(c => c.HomeComponent),
      },
      {
        path: 'login',
        loadComponent: () => import('@jv/demo-app/features/login').then(c => c.LoginComponent),
      }
    ] 
  },
];
