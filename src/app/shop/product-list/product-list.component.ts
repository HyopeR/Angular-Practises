import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Cart} from '../../model/cart.model';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[] = [];
  /*
    @Input ile belirlenmiş değişkene, shop componentini parçalara
    ayırırken products listesinide beraberinde veriyoruz.

    shop.component.html içindeki product-list etikenin yanında
    [products]="products" olarak değişken bu componente atanıyor.
   */

  selectedProduct: Product = null;

  constructor(
    private cart: Cart,
    private router: Router
  ) { }

  ngOnInit() { }

  addProductToCard(product: Product) {
    this.cart.addItem(product);
    // Sepete ürün eklendiğinde sepet detaylarına gitmesi için.
    // this.router.navigateByUrl('/cart');
  }

  displayDetails(product: Product) {
    this.selectedProduct = product;
  }

  hideDetails() {
    this.selectedProduct = null;
  }

}
