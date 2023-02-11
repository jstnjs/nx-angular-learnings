import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action, createFeature } from '@ngrx/store';

import * as ArticlesActions from './articles.actions';
import { ArticlesEntity } from './articles.models';

export const ARTICLES_FEATURE_KEY = 'articles';

export interface ArticlesState extends EntityState<ArticlesEntity> {
  selectedId: string | number | null; // which Articles record has been selected
  loaded: boolean; // has the Articles list been loaded
  error: string | null; // last known error (if any)
}

export interface ArticlesPartialState {
  readonly [ARTICLES_FEATURE_KEY]: ArticlesState;
}

export const articlesAdapter: EntityAdapter<ArticlesEntity> =
  createEntityAdapter<ArticlesEntity>();

export const initialArticlesState: ArticlesState =
  articlesAdapter.getInitialState({
    selectedId: null,
    error: null,
    loaded: false,
  });

const reducer = createReducer(
  initialArticlesState,
  on(ArticlesActions.initArticles, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ArticlesActions.loadArticlesSuccess, (state, { articles }) =>
    articlesAdapter.setAll(articles, { ...state, loaded: true })
  ),
  on(ArticlesActions.loadArticlesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function articlesReducer(
  state: ArticlesState | undefined,
  action: Action
) {
  return reducer(state, action);
}

export const articlesFeature = createFeature({
  name: 'articles',
  reducer: articlesReducer,
})
