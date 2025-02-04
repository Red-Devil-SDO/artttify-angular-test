import { Store } from "@ngrx/store";

import { AuthService, IUser } from "./core/services/auth.service";
import { init } from "./store/auth/auth.actions";
import { IStore } from "./store/store";

export const initApp = (auth: AuthService, store: Store<IStore>) => {
  if (auth.isAuthenticated()) {
    store.dispatch(
      init({ user: auth.getUser() as IUser, token: auth.getToken() as string }),
    );
  }
};
