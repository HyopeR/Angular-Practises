import { NgModule } from '@angular/core';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {BookComponent} from './book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {DesignModule} from '../design/design.module';


@NgModule({
  /*
    Export ile BookComponenti dışarı gönderiyoruz.
   */
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    DesignModule,
    RouterModule.forRoot([
      {path: 'book', component: BookComponent
        // ,
        // children: [{path: 'search/:mode/:searchText', component: SearchPageComponent}]
      },
    ])
  ],
  declarations: [BookComponent, BookFormComponent, BookListComponent, BookDetailComponent],
  exports: [BookComponent]
})
export class BookModule {}
