import { createReducer, on, provideState } from "@ngrx/store";

import { IUser } from "../../core/services/auth.service";
import * as AuthActions from "./auth.actions";

export interface IAuthState {
  user: IUser | null;
  loading: boolean;
  error: string | null;
}

export const initialState: IAuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.init, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AuthActions.logout, () => initialState),
);

export const authStoreState = provideState("auth", authReducer);
