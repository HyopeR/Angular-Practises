import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';

import {Observable, Subscriber, Subscription} from 'rxjs';
import {Book} from '../../store/models/book.model';
import {Author} from '../../store/models/author.model';
import {getSearchList, stateSearch} from '../../store/selectors/search.selectors';
import {SearchState} from '../../store/reducers/search.reducer';
import {SearchActions} from '../../store/actions';

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
  searchList$: Observable<Array<Book>> | Observable<Array<Author>> | Array<any>;

  waitData: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.waitData = this.store.select(store => store.authors.loaded).subscribe(loaded => {
      loaded ? this.search() : console.log('Datas are not ready.');
    });
  }

  search() {
    this.searchMode = this.activatedRoute.snapshot.params.searchMode;
    this.searchText = this.activatedRoute.snapshot.params.searchText;
    this.searchState$ = this.store.select(stateSearch);
    this.searchList$ = this.store.select(getSearchList);

    this.store.select(store => store.search.loaded).subscribe(loaded => {
      const controller = !loaded
        ? this.store.dispatch(SearchActions.SearchAction({searchText: this.searchText, searchKey: this.searchMode}))
        : null;
    }).unsubscribe();
  }
}
