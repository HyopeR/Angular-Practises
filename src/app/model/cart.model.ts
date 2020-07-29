import {Product} from './product.model';
import {Injectable} from '@angular/core';

/*
  Servis olarak kullanılacak model dosyalarını inject edilmelidir.
  İlgili `model.module.ts` içerisindeki providers kısmına eklenmelidir.
 */

@Injectable()
export class Cart {
  public items: CartItem[] = [];
  public itemCount = 0;
  public total = 0;

  // Sepete item ekleme fonksiyonu.
  addItem(product: Product, quantity = 1) {
    let item = this.items.find(i => i.product.id === product.id);
    if (item !== undefined) {
      item.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }
    this.calculate();
  }

  // Sepetten item silme fonksiyonu.
  removeItem(id) {
    let index = this.items.findIndex(i => i.product.id === id);
    this.items.splice(index, 1);
    this.calculate();
  }

  // Bir ürünün quantitysini güncelleme fonksiyonu.
  updateQuantity(product: Product, quantity) {
    let item = this.items.find(i => i.product.id === product.id);
    if (item !== undefined) {
      item.quantity = quantity;
    }

    this.calculate();
  }

  // Sepeti sıfırlama fonksiyonu.
  clear() {
    this.items = [];
    this.itemCount = 0;
    this.total = 0;
  }

  // Sepet miktarı ve tutarını hesaplama fonksiyonu.
  calculate() {
    this.itemCount = 0;
    this.total = 0;

    this.items.forEach(item => {
      this.itemCount += item.quantity;
      this.total += (item.quantity * item.product.price);
    });
  }
}

export class CartItem {
  constructor(
    public product: Product,
    public quantity: number
  ) { }
}
