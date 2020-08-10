import { Component, OnInit } from '@angular/core';
import {Cart} from '../../model/cart.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit() {
  }

}
