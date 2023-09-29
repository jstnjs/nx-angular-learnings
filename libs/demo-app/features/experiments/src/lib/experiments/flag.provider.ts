import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { Observable, delay, tap } from 'rxjs';
import { FlagService } from './flag.service';

function initializeAppFactory(flagService: FlagService): () => Observable<any> {
  return () => flagService.getFeatures();
}

export const provideFeatureFlag = () => ({
  provide: APP_INITIALIZER,
  useFactory: initializeAppFactory,
  deps: [FlagService],
  multi: true,
});
