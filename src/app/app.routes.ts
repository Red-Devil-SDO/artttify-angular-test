import { Routes } from '@angular/router';

import { PromoEfesGeComponent } from './shared/components/promoEfesGe/promoEfesGe.component';
import { LoginComponent } from './shared/components/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LogoutGuard } from './core/guards/logout.guard';
import { LogoutComponent } from './shared/components/logout/logout.component';
import { RecordVideoComponent } from './shared/components/recordVideo/recordVideo.component';
import { GuidelinesComponent } from './shared/components/guidelines/guidelines.component';

export const PATHS = {
    ANY: '**',
    GUIDELINES: 'guidelines',
    HOME: '',
    LOGIN: 'login',
    LOGOUT: 'logout',
    PROVIDE_VIDEO: 'record-video',
};

export const routes: Routes = [
    {
        path: PATHS.LOGOUT,
        component: LogoutComponent,
        canActivate: [LogoutGuard]
    },
    {
        path: PATHS.LOGIN,
        component: LoginComponent,
        title: 'ARttify - Login'
    },
    {
        path: PATHS.HOME,
        component: PromoEfesGeComponent,
        title: 'ARttify - EFES Georgia Contest'
    },
    {
        path: PATHS.GUIDELINES,
        component: GuidelinesComponent,
        title: 'ARttify - Guidelines'
    },
    {
        path: PATHS.PROVIDE_VIDEO,
        component: RecordVideoComponent,
        title: 'ARttify - Record Video',
        canActivate: [AuthGuard]
    },
    {
        path: PATHS.ANY,
        redirectTo: PATHS.HOME
    }
];
