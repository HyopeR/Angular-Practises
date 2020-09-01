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
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  selectedBook: object;
  selected: Observable<boolean>;

  constructor(private store: Store<AppState>) {  }

  ngOnInit(): void {
    this.bookItems = this.store.select(store => store.books.list);
    this.loading$ = this.store.select(store => store.books.loading);
    this.error$ = this.store.select(store => store.books.error);

    this.selected = this.store.select(store => store.books.selected);
    this.store.dispatch(new GetBooksAction());
  }

  deleteBook(id) {
    this.store.dispatch(new DeleteBookAction(id));
  }

  clickBook(book: Book) {
    this.store.select(store => store.books.selectedBook).subscribe(data => {
      this.selectedBook = data;
    });

    if (book.id !== this.selectedBook['id']) {
      this.store.dispatch(new SelectBookAction(book));
    } else {
      this.store.dispatch(new DeselectBookAction({}));
    }
  }

}
