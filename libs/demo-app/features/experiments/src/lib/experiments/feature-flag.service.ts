import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

type FeatureFlagResponse = {
  fastLogin: boolean;
  fastRegister: boolean;
  fastSettings: boolean;
};

type _FeatureFlagKeys = keyof FeatureFlagResponse;
export type FeatureFlagKeys = {
  [K in _FeatureFlagKeys]: K;
}[_FeatureFlagKeys];

@Injectable({ providedIn: 'root' })
export class FeatureFlagService {
  http = inject(HttpClient);
  features = signal<Record<string, boolean>>({});

  getFeatureFlags(): Observable<FeatureFlagResponse> {
    return this.http.get<FeatureFlagResponse>('/api/flags').pipe(tap((features) => this.features.set(features)));
  }

  getFeature(feature: FeatureFlagKeys): boolean {
    return this.features()[feature] ?? false;
  }
}
