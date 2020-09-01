import { NgModule } from '@angular/core';

// rest.service.ts içerisinde request kullanımı için http modulü eklendi.
import { HttpClientModule } from '@angular/common/http';
import {RestService} from './rest.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [RestService]
})
export class ModelModule {}
