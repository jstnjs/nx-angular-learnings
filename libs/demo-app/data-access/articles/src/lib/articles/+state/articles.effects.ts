import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { ArticlesActions } from './articles.actions';

import { catchError, of, exhaustMap, map, withLatestFrom } from 'rxjs';
import { ArticleService } from '../services/article.service';
import { Store } from '@ngrx/store';
import { selectArticlesEntities } from './articles.selectors';

@Injectable()
export class ArticlesEffects {
  private actions$ = inject(Actions);
  private articleService = inject(ArticleService);
  private store = inject(Store);

  loadArticles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.initArticles),
      exhaustMap(() =>
        this.articleService.getArticles().pipe(
          map((articles) => ArticlesActions.loadArticlesSuccess({ articles })),
          catchError((error) => of(ArticlesActions.loadArticlesFailure({ error }))),
        ),
      ),
    );
  });

  loadSingleArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ArticlesActions.loadSingleArticle),
      withLatestFrom(this.store.select(selectArticlesEntities)),
      exhaustMap(([{ id }, articles]) => {
        const cachedArticle = articles[id];

        if (cachedArticle === undefined) {
          return this.articleService.getArticle(id).pipe(
            map((article) => ArticlesActions.loadSingleArticleSuccess({ article })),
            catchError((error) => of(ArticlesActions.loadSingleArticleFailure({ error }))),
          );
        } else {
          return of(ArticlesActions.loadSingleArticleSuccess({ article: cachedArticle }));
        }
      }),
    );
  });
}
