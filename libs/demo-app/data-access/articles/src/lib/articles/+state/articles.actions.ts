import { createAction, props } from '@ngrx/store';
import { ArticlesEntity } from './articles.models';

export const initArticles = createAction('[Articles Page] Init');

export const loadArticlesSuccess = createAction(
  '[Articles/API] Load Articles Success',
  props<{ articles: ArticlesEntity[] }>()
);

export const loadArticlesFailure = createAction(
  '[Articles/API] Load Articles Failure',
  props<{ error: any }>()
);
