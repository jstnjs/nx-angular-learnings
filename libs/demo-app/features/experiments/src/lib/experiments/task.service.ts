import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, shareReplay, startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private cache$: Observable<any[]> | undefined;
  http = inject(HttpClient);
  private cacheKey = 'tasksCache';

  get tasks(): Observable<any> {
    const cachedTasks = sessionStorage.getItem(this.cacheKey);
    if (cachedTasks) {
      this.cache$ = of(JSON.parse(cachedTasks));
    }

    if (!this.cache$) {
      this.cache$ = this.requestTasks().pipe(
        shareReplay(1),
        tap((response) => sessionStorage.setItem(this.cacheKey, JSON.stringify(response))),
      );
    }

    return this.cache$;
  }

  private requestTasks() {
    return this.http.get<any>('/api/articles');
  }
}
