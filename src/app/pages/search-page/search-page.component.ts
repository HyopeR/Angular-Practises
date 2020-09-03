import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';

import {Observable, of} from 'rxjs';
import {Book} from '../../store/models/book.model';
import {Author} from '../../store/models/author.model';
import {SearchAction} from '../../store/actions/search.actions';
import {getSearchError, getSearchList, getSearchLoading} from '../../store/selectors/search.selectors';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  mode: string;
  searchText: string;

  searchList$: Observable<Array<Book>> | Observable<Array<Author>>;
  searchError$: Observable<Error>;
  searchLoading$: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.mode = this.activatedRoute.snapshot.params.mode;
    this.searchText = this.activatedRoute.snapshot.params.searchText;

    this.store.dispatch(new SearchAction(this.searchText, this.mode));

    this.searchList$ = this.store.select(getSearchList);
    this.searchError$ = this.store.select(getSearchError);
    this.searchLoading$ = this.store.select(getSearchLoading);
  }

}
