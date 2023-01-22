import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Auth] login',
    props<{ username: string, password: string }>()
);
