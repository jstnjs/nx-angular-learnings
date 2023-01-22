import { createReducer, on } from "@ngrx/store"
import { login } from "./auth.actions"

type UserState = {
    name: string;
    username: string;
}

export const initialState: UserState = {
    name: '',
    username: '',
}

export const authReducer = createReducer(
    initialState,
    on(login, (state) => ({
        ...state,
        name: 'Justin',
        username: 'aNickname',
    }))
);
