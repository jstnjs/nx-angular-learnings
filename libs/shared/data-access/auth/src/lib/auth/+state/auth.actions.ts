import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginUserRequest, User } from '../models/user.interface';

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'Login': props<(LoginUserRequest)>(),
        'Login Success': props<{ user: User }>(),
        'Login Failure': props<{ error: Error }>(),
        'Logout': emptyProps(),
    }
});
