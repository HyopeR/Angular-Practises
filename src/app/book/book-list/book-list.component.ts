import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../store/models/book.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/models/app-state.model';
import {DeleteBookAction, DeselectBookAction, GetBooksAction, SelectBookAction} from '../../store/actions/book.actions';
import {GetAuthorsAction} from '../../store/actions/author.actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookItems: Observable<Array<Book>>;
  $bookLoading: Observable<boolean>;
  $bookError: Observable<Error>;

  selectedBook: Book;
  selected: Observable<boolean>;

  constructor(private store: Store<AppState>) {  }

  ngOnInit(): void {
    this.bookItems = this.store.select(store => store.books.list);
    this.$bookLoading = this.store.select(store => store.books.loading);
    this.$bookError = this.store.select(store => store.books.error);

    this.store.select(store => store.books.selectedBook).subscribe(book => {
      this.selectedBook = book;
    });
    this.selected = this.store.select(store => store.books.selected);
  }

  deleteBook(id) {
    this.store.dispatch(new DeleteBookAction(id));
  }

  clickBook(book: Book) {
    console.log(this.selectedBook);
    if (book.id !== this.selectedBook.id) {
      this.store.dispatch(new SelectBookAction(book));
    } else {
      this.store.dispatch(new DeselectBookAction({}));
    }
  }

}
