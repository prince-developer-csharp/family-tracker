import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../../shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Books' },
    { id: '3', name: 'Clothing' }
  ];

  constructor() {}

  // Get all categories
  getCategories(): Category[] {
    return this.categories;
  }

  // Get category by ID
  getCategoryById(id: string): Category | undefined {
    return this.categories.find(c => c.id === id);
  }

  // Create new category
  createCategory(category: Category): Category {
    this.categories.push(category);
    return category;
  }

  // Update existing category
  updateCategory(updatedCategory: Category): Category | undefined {
    const index = this.categories.findIndex(c => c.id === updatedCategory.id);
    if (index > -1) {
      this.categories[index] = updatedCategory;
      return updatedCategory;
    }
    return undefined;
  }

  // Delete category by ID
  deleteCategory(id: string): boolean {
    const index = this.categories.findIndex(c => c.id === id);
    if (index > -1) {
      this.categories.splice(index, 1);
      return true;
    }
    return false;
  }
}
