import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe, JsonPipe, NgIf, NgFor],
  selector: 'jv-root',
  templateUrl: './app.component.html',
  styles: [''],
})
export class AppComponent {
  http = inject(HttpClient);
  users$: Observable<any> = this.http.get('/api/users');
}
