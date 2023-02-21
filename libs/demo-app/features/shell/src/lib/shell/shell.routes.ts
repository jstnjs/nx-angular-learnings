import { Route } from '@angular/router';
import { LayoutComponent } from '@jv/demo-app/ui/layout';
import { provideState } from '@ngrx/store';
import { AuthEffects, authFeature } from '@jv/shared/data-access/auth';
import { provideEffects } from '@ngrx/effects';
import { ArticlesEffects, articlesFeature } from '@jv/demo-app/data-access/articles';

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
      {
        path: 'articles/:id',
        loadComponent: () =>
          import('@jv/demo-app/features/article-show').then((c) => c.ArticleShowComponent),

      }
    ],
    providers: [
      provideState(authFeature),
      provideEffects(AuthEffects),
      provideState(articlesFeature),
      provideEffects(ArticlesEffects),
    ],
  },
];
