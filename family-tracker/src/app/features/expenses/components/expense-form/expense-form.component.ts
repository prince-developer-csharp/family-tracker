import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Expense } from '../../../../shared/models/expense.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  form!: FormGroup;
  editMode = false;

  constructor(
    private fb: FormBuilder,
    private service: ExpenseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      amount: ['', [Validators.required, Validators.min(0.01)]],
      category: ['', Validators.required],
      description: ['', Validators.required],
      date: [null],
    });

    const expenseId = this.route.snapshot.paramMap.get('id');

    if (expenseId) {
      this.editMode = true;

      this.service.getExpenseById(+expenseId).subscribe({
        next: (expense) => {
          this.form.patchValue(expense);
        },
        error: (err) => {
          console.error('Failed to load expense', err);
          // optionally navigate away or show an error
        },
      });
    } else {
      this.editMode = false;
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const expense: Expense = this.form.value;

    if (this.editMode) {
      this.service.updateExpense(expense).subscribe({
        next: () => this.router.navigate(['/expenses']),
        error: (err) => console.error('Update failed', err),
      });
    } else {
      this.service.addExpense(expense).subscribe({
        next: () => this.router.navigate(['/expenses']),
        error: (err) => console.error('Add failed', err),
      });
    }
  }
}
