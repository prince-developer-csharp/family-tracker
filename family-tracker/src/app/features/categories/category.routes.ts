import { Routes } from '@angular/router';
import { CatogoryListComponent } from './components/catogory-list/catogory-list.component';
import { CatogoryFormComponent } from './components/catogory-form/catogory-form.component';

export const CATEGORY_ROUTES: Routes = [
  // Define child routes here if needed in the future
  { path: '', component: CatogoryListComponent },
  { path: 'add', component: CatogoryFormComponent },
  { path: 'edit/:id', component: CatogoryFormComponent },
];
