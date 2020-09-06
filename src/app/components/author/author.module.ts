import { NgModule } from '@angular/core';
import {ServiceModule} from '../../services/service.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AuthorComponent} from './author.component';

@NgModule({
  /*
    Export ile AuthorComponenti dışarı gönderiyoruz.
   */
  imports: [
    ServiceModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'author', component: AuthorComponent
        // ,
        // children: [{path: 'search/:mode/:searchText', component: SearchPageComponent}]
      },
    ])
  ],
  declarations: [AuthorComponent],
  exports: [AuthorComponent]
})
export class AuthorModule {}
