import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../store/models/book.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import {Author} from '../../store/models/author.model';
import {SelectAuthorAction} from '../../store/actions/author.actions';
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
    this.store.dispatch(new SelectAuthorAction(this.book.authorId));
  }

}
