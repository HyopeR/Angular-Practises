import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';

import {Observable, of} from 'rxjs';
import {Book} from '../../store/models/book.model';
import {Author} from '../../store/models/author.model';
import {SearchAction} from '../../store/actions/search.actions';
import {getSearchList, stateSearch, getSearchState} from '../../store/selectors/search.selectors';
import {SearchState} from '../../store/reducers/search.reducer';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchMode: string;
  searchText: string;

  searchState$: Observable<SearchState>;
  searchList$: Observable<Array<Book>> | Observable<Array<Author>> | object;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.search();
  }

  search() {
    setTimeout(() => {
      this.searchMode = this.activatedRoute.snapshot.params.searchMode;
      this.searchText = this.activatedRoute.snapshot.params.searchText;
      this.searchState$ = this.store.select(getSearchState());
      this.searchList$ = this.store.select(getSearchList());

      this.store.dispatch(new SearchAction(this.searchText, this.searchMode));
    }, 500);


  }
}
