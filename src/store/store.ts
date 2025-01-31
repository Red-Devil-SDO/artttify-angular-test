import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { authStoreState, IAuthState } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';

export interface IStore {
  auth: IAuthState;
}

export const store = [
  provideStore(),
  provideEffects([AuthEffects]),
  authStoreState,
];
