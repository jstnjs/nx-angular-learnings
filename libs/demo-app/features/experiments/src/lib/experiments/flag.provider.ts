import { APP_INITIALIZER, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FlagService } from './flag.service';

function initializeFeatureFlag(): () => Observable<any> {
  const flagService = inject(FlagService);
  return () => flagService.getFeatures();
}

export const provideFeatureFlag = () => ({
  provide: APP_INITIALIZER,
  useFactory: initializeFeatureFlag,
  deps: [],
  multi: true,
});
