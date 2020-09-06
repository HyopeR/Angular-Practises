import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import { v4 as uuid } from 'uuid';

import {AppState} from '../../../store/reducers';
import {Book} from '../../../models/book.model';

import {Observable} from 'rxjs';
import {Author} from '../../../models/author.model';
import {BookActions} from '../../../store/actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  authors$: Observable<Array<Author>>;
  error$: Observable<Error>;
  loading$: Observable<boolean>;
  newBook: Book = {id: '', name: '', price: 0, description: '', authorId: ''};

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.authors$ = this.store.select(store => store.authors.list);
    this.error$ = this.store.select(store => store.authors.error);
    this.loading$ = this.store.select(store => store.authors.loading);
  }

  addBook() {
    this.newBook.id = uuid();
    this.newBook.price = parseFloat(String(this.newBook.price));

    this.store.dispatch(BookActions.AddBookAction({payload: this.newBook}));
    this.newBook = {id: '', name: '', price: 0, description: '', authorId: ''};
  }

}
