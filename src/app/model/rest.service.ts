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

  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(this.baseUrl + 'products/' + product.id, {
      headers: new HttpHeaders({
        'Authorization': `Bearer<${this.token}>`
      })
    });
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl + 'categories', category, {
      headers: new HttpHeaders({
        'Authorization': `Bearer<${this.token}>`
      })
    });
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.baseUrl + 'categories/' + category.id, category, {
      headers: new HttpHeaders({
        'Authorization': `Bearer<${this.token}>`
      })
    });
  }

  deleteCategory(category: Category): Observable<Category> {
    return this.http.delete<Category>(this.baseUrl + 'categories/' + category.id, {
      headers: new HttpHeaders({
        'Authorization': `Bearer<${this.token}>`
      })
    });
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

}
