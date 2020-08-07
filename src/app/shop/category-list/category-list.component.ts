import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../model/category.model';
import {CategoryRepository} from '../../model/category.repository';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public selectedCategory: Category = null;

  // outSendObject = { selectedCategory, selectedPage }
  @Output() category = new EventEmitter<Category>();

  constructor(
    private categoryRepository: CategoryRepository
  ) { }

  ngOnInit() { }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  changeCategory(newCategory?: Category) {
    this.selectedCategory = newCategory;
    this.category.emit(newCategory);
  }
}
