import {Injectable, OnInit} from '@angular/core';
import {Category} from './category.model';
import {RestService} from './rest.service';
import {Product} from './product.model';

@Injectable()
export class CategoryRepository implements OnInit {
  private categories: Category[] = [];

  /*
    Component oluşmadan önce içeriklerin çekilmesi için
    asenkron veri çekme işlemleri constructorlar içinde yazılır.
   */
  constructor(private restService: RestService) {
    this.restService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  ngOnInit() {  }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategory(id: number): Category {
    return this.categories.find(category => category.id == id);
  }

  saveCategory(category: Category) {
    if (category.id == null || category.id == 0) {
      this.restService.addCategory(category)
        .subscribe(c => this.categories.push(c));
    } else {
      this.restService.updateCategory(category)
        .subscribe(p => {
          this.categories.splice(
            // tslint:disable-next-line:no-shadowed-variable
            this.categories.findIndex(c => c.id == category.id), 1, category);
        });
    }
  }

  deleteCategory(category: Category) {
    this.restService.deleteCategory(category)
      .subscribe(p => this.categories.splice(
        // tslint:disable-next-line:no-shadowed-variable
        this.categories.findIndex(c => c.id == category.id), 1));
  }
}
