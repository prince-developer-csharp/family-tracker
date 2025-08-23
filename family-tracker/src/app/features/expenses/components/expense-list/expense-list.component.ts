import { Component } from '@angular/core';
import { Expense } from '../../../../shared/models/expense.model';
import { ExpenseService } from '../../services/expense.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
    this.expenseService.getAllExpenses().subscribe({
      next: (data) => (this.expenses = data),
      error: (err) => console.error('Failed to fetch expenses:', err),
    });
  }

deleteExpense(id: number): void {
  if (confirm('Are you sure you want to delete this expense?')) {
    this.expenseService.deleteExpense(id).subscribe({
      next: () => {
        this.loadExpenses();  // reload expenses after successful delete
      },
      error: (err) => {
        console.error('Delete failed', err);
        alert('Failed to delete the expense. Please try again.');
      }
    });
  }
}


  addExpense(): void {
    this.router.navigate(['/expenses/add']);
  }

  editExpense(id: string | number): void {
    this.router.navigate(['/expenses/edit', id]);
  }
}
