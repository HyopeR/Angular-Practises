import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/reducers';
import {Observable} from 'rxjs';
import {Author} from '../../../models/author.model';
import {AuthorActions} from '../../../store/actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors$: Observable<Array<Author>>;
  error$: Observable<Error>;
  loading$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.authors$ = this.store.select(store => store.authors.list);
    this.error$ = this.store.select(store => store.authors.error);
    this.loading$ = this.store.select(store => store.authors.loading);
  }

  selectAuthorsBook(authorId) {
    this.store.dispatch(AuthorActions.SelectAuthorBooksAction({authorId: authorId}));
  }

}
