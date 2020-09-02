import { NgModule } from '@angular/core';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AuthorComponent} from './author.component';

import {SearchPageComponent} from '../pages/search-page/search-page.component';


@NgModule({
  /*
    Export ile AuthorComponenti dışarı gönderiyoruz.
   */
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'author', component: AuthorComponent,
        children: [
          {path: 'search/:mode/:id', component: SearchPageComponent},
        ]},
    ])
  ],
  declarations: [AuthorComponent],
  exports: [AuthorComponent]
})
export class AuthorModule {}
