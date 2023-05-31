import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, shareReplay, startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private cache$: Observable<any[]> | undefined;
  http = inject(HttpClient);

  get tasks(): Observable<any> {
    if (!this.cache$) {
      this.cache$ = this.requestTasks().pipe(shareReplay(1));
    }

    return this.cache$;
  }

  private requestTasks() {
    return this.http.get<any>('/api/articles');
  }
}
