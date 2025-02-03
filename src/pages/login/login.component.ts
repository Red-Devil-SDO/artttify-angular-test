import { Component, computed, signal, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as AuthActions from '../../store/auth/auth.actions';
import { AuthService } from '../../core/services/auth.service';
import { selectAuthError, selectAuthLoading, selectIsAuthenticated } from "../../store/auth/auth.selectors";
import { IconComponent } from '../../shared/components/Icon/icon.component';
import { IconKeys } from '../../shared/components/Icon/const';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { PATHS } from '../../app.routes';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, IconComponent, ButtonComponent, InputComponent],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  icons = IconKeys;
  loginForm = new FormGroup({});
  loggedIn: boolean = false;
  loading: boolean = false;
  error: string | null = null;
  showPassword = signal(false);
  passwordFieldType = computed(() => this.showPassword() ? 'text' : 'password');
  eyeIcon = computed(() => this.showPassword() ? this.icons.eyeDisabled : this.icons.eye);

  constructor(
    private authService: AuthService,
    private readonly store: Store,
    private readonly location: Location,
    private readonly router: Router
  ) {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([PATHS.HOME]);
    }

    this.store.select(selectAuthLoading).subscribe(state => this.loading = state);
    this.store.select(selectAuthError).subscribe(state => this.error = state);
    this.store.select(selectIsAuthenticated).subscribe(state => this.loggedIn = state);
  }

  handleInput() {
    if (this.error) {
      this.store.dispatch(AuthActions.loginFailure({ error: '' }));
    }
  }

  handleClickBack() {
    this.location.back();

    return false;
  }

  handleClickShowPassword() {
    this.showPassword.set(!this.showPassword());
  }

  handleSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value as { email: string, password: string };

      this.store.dispatch(AuthActions.login({ email, password }));
    }
  }
}
