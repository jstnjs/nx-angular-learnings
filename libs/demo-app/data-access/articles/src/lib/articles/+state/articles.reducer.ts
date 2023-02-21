import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, createFeature } from '@ngrx/store';

import { ArticlesActions } from './articles.actions';
import { ArticlesEntity } from './articles.models';

export interface ArticlesState extends EntityState<ArticlesEntity> {
  selectedId: string | number | null;
  loaded: boolean;
  error: string | null;
}

export const articlesAdapter: EntityAdapter<ArticlesEntity> =
  createEntityAdapter<ArticlesEntity>({
    selectId: (model: ArticlesEntity) => model.id
  });


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
  on(ArticlesActions.loadArticlesSuccess, (state, {articles} ) =>
    {
      console.log('art',articles);
      return articlesAdapter.setAll(articles, state)
    }
  ),
  on(ArticlesActions.loadArticlesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
export const articlesFeature = createFeature({
  name: 'articles',
  reducer,
})
