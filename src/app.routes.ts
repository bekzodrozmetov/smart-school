import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { LandingComponent } from './app/pages/landing/landing.component';
import { Notfound } from './app/pages/notfound/notfound';
import { authGuard } from './app/auth/guards/auth.guard';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            {path: 'profile', loadComponent: () => import('./app/pages/profile/profile.component').then(m => m.ProfileComponent), canActivate: [authGuard]  }

        ]
    },
    { path: 'landing', component: LandingComponent },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' },
];
