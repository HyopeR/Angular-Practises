import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {isEmpty} from 'lodash';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';

import {Book} from '../../../models/book.model';
import {BookActions} from '../../../store/actions';

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
    this.store.dispatch(BookActions.DeleteBookAction({bookId: id}));
  }

  clickBook(book: Book) {
    if (this.currentBookId !== book.id) {
      this.store.dispatch(BookActions.SelectBookAction({bookId: book.id}));
      this.currentBookId = book.id;
    } else {
      this.store.dispatch(BookActions.DeselectBookAction());
      this.currentBookId = '';
    }
  }

}
