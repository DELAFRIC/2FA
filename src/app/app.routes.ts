import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    pathMatch: 'full',
  },
  {
    path: 'inscription',
    loadComponent: () =>
      import('./inscription/inscription.component').then((m) => m.InscriptionComponent),
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent),
  },
    {
    path: 'user_home',
    loadComponent: () =>
      import('./user-home/user-home.component').then(m => m.UserHomeComponent),
  },

];

