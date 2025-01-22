import { Component } from "@angular/core";
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from "@ngrx/store";

import { selectAuthError, selectAuthLoading, selectIsAuthenticated } from "../../../store/auth/auth.selectors";
import * as AuthActions from '../../../store/auth/auth.actions';
import { IconComponent } from "../Icon/icon.component";
import { IconKeys, IconNames } from "../Icon/const";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    imports: [ReactiveFormsModule, IconComponent],
  })
export class LoginComponent {
  icons = IconKeys;
  loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  loggedIn: boolean = false;
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private readonly store: Store
  ) {
      this.store.select(selectAuthLoading).subscribe(state => this.loading = state);
      this.store.select(selectAuthError).subscribe(state => this.error = state);
      this.store.select(selectIsAuthenticated).subscribe(state => this.loggedIn = state);
  }

  handleInput() {
    if (this.error) {
      this.store.dispatch(AuthActions.loginFailure({ error: '' }));
    }
  }

  handleClickLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  handleSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value as { email: string, password: string };

      this.store.dispatch(AuthActions.login({ email, password }));
    }
  }
}
