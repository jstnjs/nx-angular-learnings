import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable, take } from 'rxjs';
import { ArticlesActions } from '../+state/articles.actions';
import { selectArticlesLoaded } from '../+state/articles.selectors';

export const articleGuard: CanActivateFn = (route: ActivatedRouteSnapshot): Observable<boolean> => {
  // return of(true);
  const store = inject(Store);
  const { articleId } = route.params;

  const articleLoaded = store.select(selectArticlesLoaded).pipe(
    filter((loaded) => loaded),
    take(1),
  );

  store.dispatch(ArticlesActions.loadSingleArticle({ id: articleId }));

  return articleLoaded;
};
