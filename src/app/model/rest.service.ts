import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product.model';
import {Category} from './category.model';
import {Order} from './order.model';
import {map} from 'rxjs/operators';

@Injectable()
export class RestService {
  /*
    model.module.ts dosyası içerinde HttpClientModule oluşturuldu.
    Buradaysa constructor içinde kullanım için http'e aktarılıyor.
   */
  baseUrl: string = 'http://localhost:3500/';
  token: string;

  constructor(private http: HttpClient) { }

  /*
    getProducts bir asenkron fonksiyondur. İşlemleri ona göre yapılmalıdır.
  */
  getProducts(): Observable<Product[]> {
    console.log(this.baseUrl + 'products');
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  authentication(username: string, password: string): Observable<boolean> {
    // @ts-ignore
    return this.http.post<any>(this.baseUrl + 'login', {
        username,
        password
    }).pipe(map(response => {
      this.token = response.success ? response.token : null;
      console.log(this.token);
      return response.success;
    }));
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + 'products', product, {
      headers: new HttpHeaders({
        'Authorization': `Bearer<${this.token}>`
      })
    });
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + 'products/' + product.id, product, {
      headers: new HttpHeaders({
        'Authorization': `Bearer<${this.token}>`
      })
    });
  }

}
