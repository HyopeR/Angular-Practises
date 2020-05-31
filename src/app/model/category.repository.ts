import {Injectable, OnInit} from '@angular/core';
import {Category} from './category.model';
import {RestService} from './rest.service';

@Injectable()
export class CategoryRepository implements OnInit {
  private categories: Category[] = [];

  constructor(private restService: RestService) {
    this.restService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  ngOnInit() {  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategory(id: number): Category {
    return this.categories.find(category => category.id === id);
  }
}
