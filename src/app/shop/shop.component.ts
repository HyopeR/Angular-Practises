import {Component} from '@angular/core';
import {ProductRepository} from '../model/product.repository';
import {CategoryRepository} from '../model/category.repository';
import {Product} from '../model/product.model';
import {Category} from '../model/category.model';
import {Cart} from '../model/cart.model';
import {Router} from '@angular/router';

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
  public selectedProducts: Product[] = [];

  constructor(
      private productRepository: ProductRepository
    ) {}

    get products(): Product[] {
      let index = (this.selectedPage - 1) * this.productsPerPage;
      this.selectedProducts = this.productRepository
        .getProducts(this.selectedCategory);

      return this.selectedProducts.slice(index, index + this.productsPerPage);
    }

    getCategory(category: Category) {
      this.selectedCategory = category;
      this.selectedPage = 1;
    }

    changePageSize(size: string) {
      // tslint:disable-next-line:radix
      this.productsPerPage = parseInt(size);
      this.changePage(1);
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
