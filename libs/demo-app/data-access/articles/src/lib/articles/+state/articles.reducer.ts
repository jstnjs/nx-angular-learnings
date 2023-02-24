import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, createFeature } from '@ngrx/store';

import { ArticlesActions } from './articles.actions';
import { ArticlesEntity } from './articles.models';

export interface ArticlesState extends EntityState<ArticlesEntity> {
  selectedId: string | number | null;
  loaded: boolean;
  error: string | null;
}

export const articlesAdapter: EntityAdapter<ArticlesEntity> = createEntityAdapter<ArticlesEntity>({
  selectId: (model: ArticlesEntity) => model.id,
});

export const initialArticlesState: ArticlesState = articlesAdapter.getInitialState({
  selectedId: null,
  error: null,
  loaded: false,
});

const reducer = createReducer(
  initialArticlesState,
  on(
    ArticlesActions.initArticles,
    (state): ArticlesState => ({
      ...state,
      loaded: false,
      error: null,
    }),
  ),
  on(ArticlesActions.loadArticlesSuccess, (state, { articles }) =>
    articlesAdapter.setAll(articles, { ...state, loaded: true }),
  ),
  on(
    ArticlesActions.loadArticlesFailure,
    (state, { error }): ArticlesState => ({
      ...state,
      error: error.message,
    }),
  ),
  on(
    ArticlesActions.loadArticle,
    (state): ArticlesState => ({
      ...state,
      loaded: false,
    }),
  ),
  on(ArticlesActions.loadArticleSuccess, (state, { article }) =>
    articlesAdapter.upsertOne(article, { ...state, loaded: true, selectedId: article.id }),
  ),
  on(
    ArticlesActions.loadArticleFailure,
    (state, { error }): ArticlesState => ({
      ...state,
      error: error.message,
    }),
  ),
  on(
    ArticlesActions.selectArticle,
    (state, { id }): ArticlesState => ({
      ...state,
      selectedId: id,
    }),
  ),
);
export const articlesFeature = createFeature({
  name: 'articles',
  reducer,
});
