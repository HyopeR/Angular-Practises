import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../../models/book.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import {Author} from '../../../models/author.model';
import {AuthorActions} from '../../../store/actions';
import {Observable} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  selectedAuthor$: Observable<Author>;
  @Input() book: Book;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.selectedAuthor$ = this.store.select(store => store.authors.selectedAuthor);
    this.store.dispatch(AuthorActions.SelectAuthorAction({authorId: this.book.authorId}));
  }

}