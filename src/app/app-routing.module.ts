import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/pages/home-page/home-page.component';
import {SearchPageComponent} from './components/pages/search-page/search-page.component';
import { BookComponent } from './components/book/book.component';
import { AuthorComponent } from './components/author/author.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'book', component: BookComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'search/:searchMode/:searchText', component: SearchPageComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
