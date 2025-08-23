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
    const expenseId = this.route.snapshot.paramMap.get('id');
    const expense = expenseId ? this.service.getExpenseById(expenseId) : null;

    this.editMode = !!expense;

    this.form = this.fb.group({
      id: [expense?.id || '', Validators.required],
      amount: [expense?.amount || '', [Validators.required, Validators.min(0)]],
      category: [expense?.category || '', Validators.required],
      description: [expense?.description || ''],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const expense: Expense = this.form.value;

    if (this.editMode) {
      this.service.updateExpense(expense);
    } else {
      this.service.addExpense(expense);
    }

    this.router.navigate(['/expenses']);
  }
}
