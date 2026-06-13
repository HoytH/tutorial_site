import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
    title: 'Login — Gentle Gator Golf',
  },
  {
    path: 'drive-align',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/drive-align/drive-align.component').then((m) => m.DriveAlignComponent),
    title: 'Drive Align — Gentle Gator Golf',
  },
  {
    path: 'iron-align',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/iron-align/iron-align.component').then((m) => m.IronAlignComponent),
    title: 'Iron Align — Gentle Gator Golf',
  },
  {
    path: 'all-videos',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/all-videos/all-videos.component').then((m) => m.AllVideosComponent),
    title: 'All Tutorials — Gentle Gator Golf',
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
