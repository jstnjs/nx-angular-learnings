import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'Login': props<{ email: string, password: string }>(),
        'Logout': emptyProps(),
    }
});
