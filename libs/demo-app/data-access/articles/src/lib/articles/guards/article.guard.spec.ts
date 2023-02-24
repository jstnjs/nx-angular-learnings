import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { articleGuard } from './article.guard';

describe('articleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => articleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
