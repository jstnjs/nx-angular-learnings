import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { ArticlesActions } from './articles.actions';

import { catchError, of, exhaustMap, map } from 'rxjs';
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
}
