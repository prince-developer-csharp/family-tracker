import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Category } from '../../../../shared/models/category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catogory-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './catogory-form.component.html',
  styleUrl: './catogory-form.component.css'
})
export class CatogoryFormComponent {
  form!: FormGroup;
  editMode = false;

  constructor(
    private fb: FormBuilder,
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');
    const category = categoryId ? this.service.getCategoryById(categoryId) : null;

    this.editMode = !!category;

    this.form = this.fb.group({
      id: [category?.id || '', Validators.required],
      name: [category?.name || '', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const category: Category = this.form.value;

    if (this.editMode) {
      this.service.updateCategory(category);
    } else {
      this.service.createCategory(category)  ;
    }

    this.router.navigate(['/categories']);
  }
}
