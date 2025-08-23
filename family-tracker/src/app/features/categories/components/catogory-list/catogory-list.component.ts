import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../../../shared/models/category.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catogory-list',
  imports: [CommonModule],
  templateUrl: './catogory-list.component.html',
  styleUrl: './catogory-list.component.css',
})
export class CatogoryListComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
  }

  deleteCategory(id: string): void {
    if (confirm('Are you sure you want to delete this category?')) {
      const success = this.categoryService.deleteCategory(id);
      if (success) {
        this.loadCategories();
      } else {
        alert('Failed to delete category. Please try again.');
      }
    }
  }

  addCategory() {
    // Navigate to the add member form
    this.router.navigate(['/categories/add']);
  }

  editCategory(id: string) {
    this.router.navigate(['/categories/edit', id]);
  }
}
