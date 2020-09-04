import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {ModelModule} from './model/model.module';
import {DesignModule} from './design/design.module';
import {BookModule} from './book/book.module';
import {AuthorModule} from './author/author.module';

import {BookEffects} from './store/effects/book.effects';
import {AuthorEffects} from './store/effects/author.effects';
import {SearchEffects} from './store/effects/search.effects';
import {reducers} from './store/reducers';

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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([BookEffects, AuthorEffects, SearchEffects]),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
