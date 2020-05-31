import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './product.model';
import {Category} from './category.model';

@Injectable()
export class RestService {
  /*
    model.module.ts dosyası içerinde HttpClientModule oluşturuldu.
    Buradaysa constructor içinde kullanım için http'e aktarılıyor.
   */
  baseUrl: 'http://localhost:3500/';
  constructor(private http: HttpClient) { }

  /*
    getProducts bir asenkron fonksiyondur. İşlemleri ona göre yapılmalıdır.
  */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products');
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'categories');
  }
}
