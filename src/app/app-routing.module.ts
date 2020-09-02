import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'book', component: BookComponent},
  {path: 'author', component: AuthorComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
