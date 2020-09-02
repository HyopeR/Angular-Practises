import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';

import {AppRoutingModule} from './app-routing.module';
import {ModelModule} from './model/model.module';
import {DesignModule} from './design/design.module';
import {BookModule} from './book/book.module';
import {AuthorModule} from './author/author.module';

import {BookReducer} from './store/reducers/book.reducer';
import {BookEffects} from './store/effects/book.effects';
import {AuthorReducer} from './store/reducers/author.reducer';
import {AuthorEffects} from './store/effects/author.effects';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModelModule,
    DesignModule,
    BookModule,
    AuthorModule,
    StoreModule.forRoot({
      books: BookReducer,
      authors: AuthorReducer
    }),
    EffectsModule.forRoot([BookEffects, AuthorEffects]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
