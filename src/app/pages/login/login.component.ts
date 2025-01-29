import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../../core/services/auth.service';
import { selectAuthError, selectAuthLoading, selectIsAuthenticated } from "../../store/auth/auth.selectors";
import * as AuthActions from '../../store/auth/auth.actions';
import { IconComponent } from "../../shared/components/Icon/icon.component";
import { IconNames } from "../../shared/components/Icon/const";
import { ButtonComponent } from '../../shared/components/button/button.component';
import { PATHS } from '../../app.routes';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, IconComponent, ButtonComponent],
})
export class LoginComponent {
  icons = IconNames;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  loggedIn: boolean = false;
  loading: boolean = false;
  error: string | null = null;

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

  handleTest() {
    console.log('Test button clicked');
  }

  handleSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value as { email: string, password: string };

      this.store.dispatch(AuthActions.login({ email, password }));
    }
  }
}
