import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import {Observable} from 'rxjs';
import {Author} from '../../../models/author.model';
import {AuthorActions, BookActions} from '../../../store/actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  @Output() authorSelector = new EventEmitter<string>();
  authorId: string;

  authors$: Observable<Array<Author>>;
  error$: Observable<Error>;
  loading$: Observable<boolean>;
  selectedAuthor$: Observable<Author>;
  selected$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.authors$ = this.store.select(store => store.authors.list);
    this.error$ = this.store.select(store => store.authors.error);
    this.loading$ = this.store.select(store => store.authors.loading);
    this.selectedAuthor$ = this.store.select(store => store.authors.selectedAuthor);
    this.selected$ = this.store.select(store => store.authors.selected);
  }

  selectAuthor(authorId) {
    if (authorId !== this.authorId) {
      this.authorId = authorId;
      this.store.dispatch(AuthorActions.SelectAuthorAction({authorId}));
      this.authorSelector.emit();
    }

  }

  deselectAuthor() {
    if (this.authorId !== '') {
      this.authorId = '';
      this.store.dispatch(BookActions.DeselectBookAction());
      this.store.dispatch(AuthorActions.DeselectAuthorAction());
    }

  }

}
