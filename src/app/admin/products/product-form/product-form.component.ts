import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../model/product.model';
import {ProductRepository} from '../../../model/product.repository';

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
    private productsRepository: ProductRepository
  ) {
    this.editing = activeRoute.snapshot.params.mode === 'edit';

    if (this.editing) {
      this.product = productsRepository.getProduct(activeRoute.snapshot.params.id);
    }
  }

  ngOnInit() { }

}
