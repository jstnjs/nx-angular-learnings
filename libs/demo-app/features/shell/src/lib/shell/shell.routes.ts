import { Route } from '@angular/router';
import { LayoutComponent } from '@jv/demo-app/ui/layout';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromUsers from './+state/users.reducer';
import { UsersEffects } from './+state/users.effects';
import { UsersFacade } from './+state/users.facade';

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
      UsersFacade,
      provideState(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
      provideEffects(UsersEffects),
    ],
  },
];
