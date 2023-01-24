import { inject, Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { Actions, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService } from "../services/auth.service";
import { authActions } from "./auth.actions";

@Injectable()
export class AuthEffects {
    actions$ = inject(Actions);
    authService = inject(AuthService);

    login$ = createEffect(() => 
        this.actions$.pipe(
            ofType(authActions.login),
            exhaustMap(action => 
                this.authService.login(action).pipe(
                    map(user => authActions.loginSuccess({user})),
                    catchError(error => of(authActions.loginFailure({error})))
                )
            )
        )
    )
}
