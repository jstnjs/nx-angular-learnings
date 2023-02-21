import { ArticlesEntity } from './articles.models';
import {
  articlesAdapter,
  ArticlesPartialState,
  initialArticlesState,
} from './articles.reducer';
import * as ArticlesSelectors from './articles.selectors';

describe('Articles Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getArticlesId = (it: ArticlesEntity) => it.id;
  const createArticlesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ArticlesEntity);

  let state: ArticlesPartialState;

  beforeEach(() => {
    state = {
      articles: articlesAdapter.setAll(
        [
          createArticlesEntity('PRODUCT-AAA'),
          createArticlesEntity('PRODUCT-BBB'),
          createArticlesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialArticlesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Articles Selectors', () => {
    it('selectAllArticles() should return the list of Articles', () => {
      const results = ArticlesSelectors.selectAllArticles(state);
      const selId = getArticlesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ArticlesSelectors.selectEntity(state) as ArticlesEntity;
      const selId = getArticlesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectArticlesLoaded() should return the current "loaded" status', () => {
      const result = ArticlesSelectors.selectArticlesLoaded(state);

      expect(result).toBe(true);
    });

    it('selectArticlesError() should return the current "error" state', () => {
      const result = ArticlesSelectors.selectArticlesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
