import { inject, Injectable } from '@angular/core';
import { ApiService } from '@jv/shared/core/http-client';
import { Observable } from 'rxjs';

type UserResponse = {
  userId: number;
  email: string;
  username: string;
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  apiService = inject(ApiService);

  login(credentials: { email: string; password: string }): Observable<UserResponse> {
    const _credentials = {
      email: 'john@example.com',
      password: 'changeme',
    };
    return this.apiService.post('/auth/login', _credentials);
  }

  register() {
    // this.apiService.post('/users/login', user);
  }
}
