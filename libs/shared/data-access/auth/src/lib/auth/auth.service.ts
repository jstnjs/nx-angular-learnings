import { inject } from "@angular/core";
import { ApiService } from "@jv/shared/core/http-client";

export class AuthService {
    apiService = inject(ApiService);

    login() {
        // this.apiService.post('/users/login', user);
    }

    register() {
        // this.apiService.post('/users/login', user);
    }
}