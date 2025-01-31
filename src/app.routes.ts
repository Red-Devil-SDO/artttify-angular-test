import { Routes } from '@angular/router';

import { PromoEfesGeComponent } from './pages/promoEfesGe/promoEfesGe.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RecordVideoComponent } from './pages/recordVideo/recordVideo.component';
import { GuidelinesComponent } from './pages/guidelines/guidelines.component';
import { LogoutGuard } from './core/guards/logout.guard';
import { AuthGuard } from './core/guards/auth.guard';

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
