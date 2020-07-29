import {Component} from '@angular/core';
import {ProductRepository} from '../model/product.repository';
import {CategoryRepository} from '../model/category.repository';
import {Product} from '../model/product.model';
import {Category} from '../model/category.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shop',
  templateUrl: 'shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent {
  public selectedCategory: Category = null;
  public productsPerPage = 3;
  public selectedPage = 1;

  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository
    ) {}

    get products(): Product[] {
      let index = (this.selectedPage - 1) * this.productsPerPage;
      return this.productRepository
        .getProducts(this.selectedCategory)
        .slice(index, index + this.productsPerPage);
    }

    get categories(): Category[] {
      return this.categoryRepository.getCategories();
    }

    changeCategory(newCategory?: Category) {
      this.selectedPage = 1;
      this.selectedCategory = newCategory;
    }

    changePage(pageNumber: number) {
      this.selectedPage = pageNumber;
    }

    get pageNumber(): number[] {
      return Array(Math.ceil(
        this.productRepository
          .getProducts(this.selectedCategory).length / this.productsPerPage
      ))
        .fill(0)
        .map((element, index) => index + 1);
    }
}
