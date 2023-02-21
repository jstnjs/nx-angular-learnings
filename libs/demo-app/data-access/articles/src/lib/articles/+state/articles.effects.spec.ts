import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ArticlesActions from './articles.actions';
import { ArticlesEffects } from './articles.effects';

describe('ArticlesEffects', () => {
  let actions: Observable<Action>;
  let effects: ArticlesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ArticlesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ArticlesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ArticlesActions.initArticles() });

      const expected = hot('-a-|', {
        a: ArticlesActions.loadArticlesSuccess({ articles: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
