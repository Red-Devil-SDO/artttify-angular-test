import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IAuthState } from "./auth.reducer";

export const selectAuthState = createFeatureSelector<IAuthState>("auth");

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user,
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => !!state.user,
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading,
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error,
);
