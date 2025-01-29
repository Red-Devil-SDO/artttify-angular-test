import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { PATHS } from '../../app.routes';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly location: Location
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    
    this.router.navigate([PATHS.LOGIN]);
    this.location.replaceState(`/${PATHS.LOGIN}`);

    return false;
  }
}
