import { createAction, props } from '@ngrx/store';

import { IUser } from '../../core/services/auth.service';

export const init = createAction(
  '[Auth] Init',
  props<{ user: IUser, token: string }>()
);

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: IUser; token: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');

export const loading = createAction('[Auth] Loading', props<{ loading: boolean }>());
