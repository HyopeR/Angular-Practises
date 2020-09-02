import { NgModule } from '@angular/core';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [NavbarComponent, SearchComponent, LoadingSpinnerComponent, ErrorAlertComponent],
  exports: [NavbarComponent, SearchComponent, LoadingSpinnerComponent, ErrorAlertComponent]
})
export class DesignModule {}
