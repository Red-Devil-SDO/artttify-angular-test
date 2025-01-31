import { Injectable } from '@angular/core';
import { CanActivate, Router, ROUTES } from '@angular/router';
import { Store } from '@ngrx/store';

import * as AuthActions from '../../store/auth/auth.actions';
import { IStore } from '../../store/store';
import { PATHS } from '../../app.routes';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private store: Store<IStore>,
        private router: Router
    ) { }

    canActivate(): boolean {
        if (this.authService.isAuthenticated()) {
            this.store.dispatch(AuthActions.logout());

            return true;
        }

        this.router.navigate([PATHS.HOME]);

        return false;
    }
}

