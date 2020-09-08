import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import {Observable} from 'rxjs';
import {Book} from '../../models/book.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookItems$: Observable<Array<Book>>;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.bookItems$ = this.store.select(store => store.books.list);
  }

}
