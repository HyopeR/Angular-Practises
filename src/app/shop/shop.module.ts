import { NgModule } from '@angular/core';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ShopComponent} from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  /*
    model.module içerisinde Product ve Category sınıflarına dair http
    işlemleri yaparak elde edilen verilerin başka dış componentler
    tarafından kullanılabilmesi için import kısmında belirtilmesi gerekir.
  */

  /*
    Export ile ShopComponentini dışarı gönderiyoruz.
   */
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [ShopComponent, NavbarComponent],
  exports: [ShopComponent]
})
export class ShopModule {}
