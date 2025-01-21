import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Store } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AuthService } from './core/services/auth.service';
import { IStore, store } from './store/store';
import { routes } from './app.routes';
import { initApp } from './app.init';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStoreDevtools({
      maxAge: 25,
    }),
    provideAppInitializer(() => initApp(inject(AuthService), inject(Store<IStore>))),
    ...store,
  ]
};
