import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

type FlagResponse = {
  fastLogin: boolean;
};

@Injectable({ providedIn: 'root' })
export class FlagService {
  http = inject(HttpClient);
  features = signal<Record<string, boolean>>({});

  getFeatures(): Observable<FlagResponse> {
    return this.http.get<FlagResponse>('/api/flags').pipe(tap((features) => this.features.set(features)));
  }

  getFeature(feature: string): boolean {
    return this.features()[feature] ?? false;
  }
}
