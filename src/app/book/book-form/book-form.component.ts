import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import { v4 as uuid } from 'uuid';

import {AppState} from '../../store/reducers';
import {Book} from '../../store/models/book.model';
import {AddBookAction} from '../../store/actions/book.actions';
import {GetAuthorsAction} from '../../store/actions/author.actions';
import {Observable} from 'rxjs';
import {Author} from '../../store/models/author.model';

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
  newBook: Book = { id: '', name: '', price: 0, description: '', authorId: ''};

  constructor(private store: Store<AppState>) {  }

  ngOnInit(): void {
    this.authors$ = this.store.select(store => store.authors.list);
    this.error$ = this.store.select(store => store.authors.error);
    this.loading$ = this.store.select(store => store.authors.loading);
  }

  addBook() {
    this.newBook.id = uuid();
    this.newBook.price = parseFloat(String(this.newBook.price));

    this.store.dispatch(new AddBookAction(this.newBook));
    this.newBook = { id: '', name: '', price: 0, description: '', authorId: ''};
  }

}
