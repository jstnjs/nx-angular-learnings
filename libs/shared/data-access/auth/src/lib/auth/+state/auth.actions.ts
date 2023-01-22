import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'Login': props<{ username: string, password: string }>(),
        'Logout': emptyProps(),
    }
});
