import { createFeature, createReducer, on } from "@ngrx/store"
import { authActions } from "./auth.actions"

type UserState = {
    name: string;
    username: string;
}

export const initialState: UserState = {
    name: '',
    username: '',
}

const authReducer = createReducer(
    initialState,
    on(authActions.login, (state) => ({
        ...state,
        name: 'Justin',
        username: 'aNickname',
    }))
);
export const authFeature = createFeature({
    name: 'auth',
    reducer: authReducer,
})
