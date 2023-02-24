import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType, act } from '@ngrx/effects';

import { ArticlesActions } from './articles.actions';

import { catchError, of, exhaustMap, map, retry, withLatestFrom, EMPTY } from 'rxjs';
import { ArticleService } from '../services/article.service';
import { Store } from '@ngrx/store';
import { selectAllArticles, selectSelectedId } from './articles.selectors';

@Injectable()
export class ArticlesEffects {
  private actions$ = inject(Actions);
  private articleService = inject(ArticleService);
  private store = inject(Store);

  loadArticles$ = createEffect(() =>
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

  loadSingleArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ArticlesActions.loadArticle,
      ),
      withLatestFrom(this.store.select(selectAllArticles)),
      exhaustMap(([{ id }, articles]) => 
        {

          console.log(articles.length);
          if (articles.length === 0 && !articles[id]) {
            console.log('hi??')
            return this.articleService.getArticle(id).pipe(
              map(article => ArticlesActions.loadArticleSuccess({article})),
              catchError(error => of(ArticlesActions.loadArticleFailure({error})))
          )
          }

          return EMPTY;
        }
    )
    )
  );
}
