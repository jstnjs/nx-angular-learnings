import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ARTICLES_FEATURE_KEY,
  ArticlesState,
  articlesAdapter,
} from './articles.reducer';

// Lookup the 'Articles' feature state managed by NgRx
export const selectArticlesState =
  createFeatureSelector<ArticlesState>(ARTICLES_FEATURE_KEY);

const { selectAll, selectEntities } = articlesAdapter.getSelectors();

export const selectArticlesLoaded = createSelector(
  selectArticlesState,
  (state: ArticlesState) => state.loaded
);

export const selectArticlesError = createSelector(
  selectArticlesState,
  (state: ArticlesState) => state.error
);

export const selectAllArticles = createSelector(
  selectArticlesState,
  (state: ArticlesState) => selectAll(state)
);

export const selectArticlesEntities = createSelector(
  selectArticlesState,
  (state: ArticlesState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectArticlesState,
  (state: ArticlesState) => state.selectedId
);

export const selectEntity = createSelector(
  selectArticlesEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
