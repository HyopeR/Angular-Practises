import { NgModule } from '@angular/core';
import {ServiceModule} from '../services/service.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [ServiceModule, BrowserModule, FormsModule, RouterModule],
  declarations: [NavbarComponent, SearchComponent, LoadingSpinnerComponent, ErrorAlertComponent, FooterComponent],
  exports: [NavbarComponent, SearchComponent, LoadingSpinnerComponent, ErrorAlertComponent, FooterComponent]
})
export class DesignModule {}
