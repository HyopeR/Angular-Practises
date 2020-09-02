import { NgModule } from '@angular/core';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [NavbarComponent, SearchComponent],
  exports: [NavbarComponent, SearchComponent]
})
export class DesignModule {}
