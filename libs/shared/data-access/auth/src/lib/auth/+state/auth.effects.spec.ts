
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { MockProvider } from 'ng-mocks';

import { AuthEffects } from './auth.effects';
import { AuthService } from '../services/auth.service';
import { Action } from '@ngrx/store';

describe('AuthEffects', () => {
  let actions$: Observable<Action>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            AuthEffects,
            provideMockActions(() => actions$),
            MockProvider(AuthService),
        ]
    });

    effects = TestBed.inject(AuthEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
