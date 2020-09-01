import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';

import {ModelModule} from './model/model.module';
import {BookModule} from './book/book.module';

import { AppComponent } from './app.component';

import {BookReducer} from './store/reducers/book.reducer';
import {BookEffects} from './store/effects/book.effects';
import {AuthorReducer} from './store/reducers/author.reducer';
import {AuthorEffects} from './store/effects/author.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModelModule,
    BookModule,
    StoreModule.forRoot({
      books: BookReducer,
      authors: AuthorReducer
    }),
    EffectsModule.forRoot([BookEffects, AuthorEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
