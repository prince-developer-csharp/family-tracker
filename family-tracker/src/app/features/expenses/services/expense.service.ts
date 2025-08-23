import { Injectable } from '@angular/core';
import { Expense } from '../../../shared/models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
   private expenses: Expense[] = [
    { id: '1', amount: 100, category: 'Food', description: 'Lunch at Cafe' },
    { id: '2', amount: 250, category: 'Transport', description: 'Monthly Metro Pass' },
    { id: '3', amount: 500, category: 'Rent', description: 'Room Rent' },
  ];

  constructor() {}

  // Get all expenses
  getAllExpenses(): Expense[] {
    return this.expenses;
  }

  // Get expense by ID
  getExpenseById(id: string | number): Expense | undefined {
    return this.expenses.find((exp) => exp.id === id);
  }

  // Add new expense
  addExpense(expense: Expense): void {
    this.expenses.push(expense);
  }

  // Update an existing expense
  updateExpense(updatedExpense: Expense): void {
    const index = this.expenses.findIndex((exp) => exp.id === updatedExpense.id);
    if (index !== -1) {
      this.expenses[index] = updatedExpense;
    }
  }

  // Delete expense by ID
  deleteExpense(id: string | number): void {
    this.expenses = this.expenses.filter((exp) => exp.id !== id);
  }
}
