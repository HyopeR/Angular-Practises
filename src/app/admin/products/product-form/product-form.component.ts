import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../../model/product.model';
import {ProductRepository} from '../../../model/product.repository';
import {NgForm} from '@angular/forms';
import {CategoryRepository} from '../../../model/category.repository';
import {Category} from '../../../model/category.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing: boolean = false;
  product: Product = new Product();

  constructor(
    private activeRoute: ActivatedRoute,
    private productsRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private router: Router
  ) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';

    if (this.editing) {
      this.product = productsRepository.getProduct(activeRoute.snapshot.params.id);
    }
  }

  ngOnInit() { }

  getCategories() {
    return this.categoryRepository.getCategories();
  }

  changeCategory(category: string) {
    this.product.category = category;
  }

  save(form: NgForm) {
    this.productsRepository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }

}
