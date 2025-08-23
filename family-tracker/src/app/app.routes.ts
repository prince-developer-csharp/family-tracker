import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'family-members',
        loadChildren: () => import('./features/family-members/famiy-members.routes').then(m => m.MEMBER_ROUTES)  
    },
    {
        path: 'categories',
        loadChildren: () => import('./features/categories/category.routes').then(m => m.CATEGORY_ROUTES)    
    }
];
