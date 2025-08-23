import { Component } from '@angular/core';
import { Expense } from '../../../../shared/models/expense.model';
import { ExpenseService } from '../../services/expense.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  imports: [CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.css',
})
export class ExpenseListComponent {
   expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService, private router: Router) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenses = this.expenseService.getAllExpenses();
    console.log(this.expenses);
  }

  deleteExpense(id: string | number): void {
    if (confirm('Are you sure you want to delete this expense?')) {
      this.expenseService.deleteExpense(id);
      this.loadExpenses();
    }
  }

  addExpense(): void {
    this.router.navigate(['/expenses/add']);
  }

  editExpense(id: string | number): void {
    this.router.navigate(['/expenses/edit', id]);
  }
}
