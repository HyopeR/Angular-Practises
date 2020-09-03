import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {isEmpty} from 'lodash';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import {DeleteBookAction, DeselectBookAction, SelectBookAction} from '../../store/actions/book.actions';

import {Book} from '../../store/models/book.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookItems$: Observable<Array<Book>>;
  error$: Observable<Error>;
  loading$: Observable<boolean>;
  selectedBook$: Observable<Book>;
  currentBookId: string = '';

  constructor(private store: Store<AppState>) {  }

  ngOnInit(): void {
    this.bookItems$ = this.store.select(store => store.books.list);
    this.error$ = this.store.select(store => store.books.error);
    this.loading$ = this.store.select(store => store.books.loading);
    this.selectedBook$ = this.store.select(store => store.books.selectedBook);
  }

  deleteBook(id) {
    this.store.dispatch(new DeleteBookAction(id));
  }

  clickBook(book: Book) {
    if (this.currentBookId !== book.id) {
      this.store.dispatch(new SelectBookAction(book.id));
      this.currentBookId = book.id;
    } else {
      this.store.dispatch(new DeselectBookAction({}));
      this.currentBookId = '';
    }
  }

}
