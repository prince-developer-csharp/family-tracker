import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'family-members',
        loadChildren: () => import('./features/family-members/famiy-members.routes').then(m => m.MEMBER_ROUTES)  
    }
];
