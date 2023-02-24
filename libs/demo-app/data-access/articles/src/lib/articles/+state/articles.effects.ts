import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType, act } from '@ngrx/effects';

import { ArticlesActions } from './articles.actions';

import { catchError, of, exhaustMap, map, retry } from 'rxjs';
import { ArticleService } from '../services/article.service';

@Injectable()
export class ArticlesEffects {
  private actions$ = inject(Actions);
  private articleService = inject(ArticleService)

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ArticlesActions.initArticles,
      ),
      exhaustMap(() => 
        this.articleService.getArticles().pipe(
            map(articles => ArticlesActions.loadArticlesSuccess({articles})),
            catchError(error => of(ArticlesActions.loadArticlesFailure({error})))
        )
    )
    )
  );

  loadArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ArticlesActions.loadArticle,
      ),
      exhaustMap(({ id }) => 
        {
          return this.articleService.getArticle(id).pipe(
            map(article => ArticlesActions.loadArticleSuccess({article})),
            catchError(error => of(ArticlesActions.loadArticleFailure({error})))
        )
        }
    )
    )
  );
}
