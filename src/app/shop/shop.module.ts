import { NgModule } from '@angular/core';
import {ModelModule} from '../model/model.module';

@NgModule({
  /*
    model.module içerisinde Product ve Category sınıflarına dair http
    işlemleri yaparak elde edilen verilerin başka dış componentler
    tarafından kullanılabilmesi için import kısmında belirtilmesi gerekir.
  */
  imports: [ModelModule],
  providers: []
})
export class ShopModule {}
