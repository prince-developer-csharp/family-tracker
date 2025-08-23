import { Injectable } from '@angular/core';
import { Expense } from '../../../shared/models/expense.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private apiUrl = 'https://localhost:7128/api/expenses'; // Adjust if needed

  constructor(private http: HttpClient) {}

  getAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }

  // ✅ Get expense by ID
  getExpenseById(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.apiUrl}/${id}`);
  }

  // ✅ Add new expense
  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense);
  }

  // ✅ Update existing expense
  updateExpense(expense: Expense): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${expense.id}`, expense);
  }

  // Delete expense by ID
  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
