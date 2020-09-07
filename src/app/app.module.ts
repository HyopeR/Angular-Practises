import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {ServiceModule} from './services/service.module';
import {DesignModule} from './design/design.module';
import {BookModule} from './components/book/book.module';
import {AuthorModule} from './components/author/author.module';

import {BookEffects} from './store/effects/book.effects';
import {AuthorEffects} from './store/effects/author.effects';
import {SearchEffects} from './store/effects/search.effects';
import {reducers} from './store/reducers';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceModule,
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
