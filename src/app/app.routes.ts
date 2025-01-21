import { Routes } from '@angular/router';

import { PromoEfesGeComponent } from './shared/components/promoEfesGe/promoEfesGe.component';
import { LoginComponent } from './shared/components/login/login.component';

export const routes: Routes = [
    { path: '', component: PromoEfesGeComponent, title: 'EFES Georgia Contest' },
    { path: 'login', component: LoginComponent, title: 'Arttify - Login' },
    { path: '**', redirectTo: '' }
];
