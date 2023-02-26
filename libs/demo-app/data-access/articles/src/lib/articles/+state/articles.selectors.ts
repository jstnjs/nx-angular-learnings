import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticlesState, articlesAdapter, articlesFeature } from './articles.reducer';

// Lookup the 'Articles' feature state managed by NgRx
export const selectArticlesState = createFeatureSelector<ArticlesState>(articlesFeature.name);

const { selectAll, selectEntities } = articlesAdapter.getSelectors();

export const selectArticlesLoaded = createSelector(selectArticlesState, (state: ArticlesState) => state.loaded);

export const selectAllArticles = createSelector(selectArticlesState, selectAll);

export const selectArticlesEntities = createSelector(selectArticlesState, selectEntities);

export const selectSelectedId = createSelector(selectArticlesState, (state: ArticlesState) => state.selectedId);

export const selectCurrentArticle = createSelector(selectArticlesEntities, selectSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined,
);

export const selectArticlesEntitiesById = (props: { id: number }) =>
  createSelector(selectArticlesEntities, (entities) => (props.id ? entities[props.id] : undefined));
