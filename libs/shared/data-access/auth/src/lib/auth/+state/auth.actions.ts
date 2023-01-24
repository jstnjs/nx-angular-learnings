import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'Login': props<{ email: string, password: string }>(),
        'Login Success': props<{user: { email: string, nickname: string, age: number}}>(),
        'Login Failure': props<{error: Error}>(),
        'Logout': emptyProps(),
    }
});
