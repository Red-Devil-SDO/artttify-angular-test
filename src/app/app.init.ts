import { Store } from "@ngrx/store";

import { AuthService, IUser } from "./core/services/auth.service";
import { loginSuccess } from "./store/auth/auth.actions";
import { IStore } from "./store/store";

export const initApp = (auth: AuthService, store: Store<IStore>) => {
    if (auth.isAuthenticated()) {
        store.dispatch(loginSuccess({ user: auth.getUser() as IUser, token: auth.getToken() as string }));
    }
};
