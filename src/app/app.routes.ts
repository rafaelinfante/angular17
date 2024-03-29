import { Routes } from '@angular/router';

const authRoutes = () => import('./auth/auth.routes').then(m => m.routes);
const backofficeRoutes = () => import('./backoffice/backoffice.routes').then(m => m.routes);

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      {
        path: 'auth',
        loadChildren: authRoutes,
      },
      {
        path: 'backoffice',
        loadChildren: backofficeRoutes,
      },
    ],
  },
  { path: '**', redirectTo: '/' },
];
