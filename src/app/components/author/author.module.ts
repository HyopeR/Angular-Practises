import { NgModule } from '@angular/core';
import {ServiceModule} from '../../services/service.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AuthorComponent} from './author.component';
import {AuthorListComponent} from './author-list/author-list.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import {BookModule} from '../book/book.module';

@NgModule({
  /*
    Export ile AuthorComponenti dışarı gönderiyoruz.
   */
  imports: [
    ServiceModule,
    BrowserModule,
    FormsModule,
    BookModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'author', component: AuthorComponent
        // ,
        // children: [{path: 'search/:mode/:searchText', component: SearchPageComponent}]
      },
    ])
  ],
  declarations: [AuthorComponent, AuthorListComponent, AuthorFormComponent],
  exports: [AuthorComponent]
})
export class AuthorModule {}
