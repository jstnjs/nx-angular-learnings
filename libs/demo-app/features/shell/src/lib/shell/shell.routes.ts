import { Route } from '@angular/router';
import { LayoutComponent } from '@jv/demo-app/ui/layout';
import { provideState } from '@ngrx/store';
import { AuthEffects, authFeature } from '@jv/shared/data-access/auth';
import { provideEffects } from '@ngrx/effects';
import { articleGuard, ArticlesEffects, articlesFeature } from '@jv/demo-app/data-access/articles';
import { featureFlagGuard } from '@jv/demo-app/features/experiments';

export const demoAppShellRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('@jv/demo-app/features/home').then((c) => c.HomeComponent),
      },
      {
        path: 'login',
        loadComponent: () => import('@jv/demo-app/features/login').then((c) => c.LoginComponent),
      },
      {
        path: 'articles/create',
        loadComponent: () => import('@jv/demo-app/features/article-create').then((c) => c.ArticleCreateComponent),
      },
      {
        path: 'articles/:articleId',
        loadComponent: () => import('@jv/demo-app/features/article-show').then((c) => c.ArticleShowComponent),
        canActivate: [articleGuard],
      },
      {
        path: 'experiments',
        loadComponent: () => import('@jv/demo-app/features/experiments').then((c) => c.ExperimentsComponent),
      },
      {
        path: 'test',
        canMatch: [featureFlagGuard('fastRegister')],
        loadComponent: () => import('@jv/demo-app/features/login').then((c) => c.LoginComponent),
      },
    ],
    providers: [
      provideState(authFeature),
      provideEffects(AuthEffects),
      provideState(articlesFeature),
      provideEffects(ArticlesEffects),
    ],
  },
];
