import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthState } from '../models/auth.interface';
import { authActions } from './auth.actions';

export const initialState: AuthState = {
  loading: false,
  loggedIn: false,
  user: {
    userId: 0,
    email: '',
    username: '',
  },
};

const authReducer = createReducer(
  initialState,
  on(
    authActions.login,
    (state): AuthState => ({
      ...state,
      loading: true,
    }),
  ),
  on(
    authActions.loginSuccess,
    (state, { user }): AuthState => ({
      ...state,
      user,
      loggedIn: false,
      loading: false,
    }),
  ),
  on(
    authActions.loginFailure,
    (state): AuthState => ({
      ...state,
      loading: false,
    }),
  ),
);
export const authFeature = createFeature({
  name: 'auth',
  reducer: authReducer,
});
