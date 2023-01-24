import { inject, Injectable } from "@angular/core";
import { ApiService } from "@jv/shared/core/http-client";
import { Observable } from "rxjs";

type UserResponse = {
    email: string;
    nickname: string;
    age: number;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    apiService = inject(ApiService);

    login(credentials: { email: string, password: string }): Observable<UserResponse> {
        return this.apiService.post('/users/login', credentials);
    }

    register() {
        // this.apiService.post('/users/login', user);
    }
}