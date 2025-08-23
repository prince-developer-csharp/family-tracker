import { Routes } from '@angular/router';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

export const EXPENSE_ROUTES: Routes = [
  // Define child routes here if needed in the future
  { path: '', component: ExpenseListComponent },
  { path: 'add', component: ExpenseFormComponent },
  { path: 'edit/:id', component: ExpenseFormComponent },
];
