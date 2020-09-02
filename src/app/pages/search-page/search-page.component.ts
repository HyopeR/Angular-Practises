import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/models/app-state.model';

import {SearchBookAction} from '../../store/actions/book.actions';
import {SearchAuthorAction} from '../../store/actions/author.actions';
import {Observable} from 'rxjs';
import {Book} from '../../store/models/book.model';
import {Author} from '../../store/models/author.model';

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
  searchSearching$: Observable<boolean>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {  }

  ngOnInit() {
    this.mode = this.activatedRoute.snapshot.params.mode;
    this.searchText = this.activatedRoute.snapshot.params.searchText;

    this.searchList$ = this.store.select(store => store.books.search.list);
    this.searchError$ = this.store.select(store => store.books.search.error);
    this.searchSearching$ = this.store.select(store => store.books.search.searching);

    if (this.mode === 'book') {
      this.store.dispatch(new SearchBookAction(this.searchText));
    } else if (this.mode === 'author') {
      this.store.dispatch(new SearchAuthorAction(this.searchText));
    } else {
      this.router.navigateByUrl('/home');
    }
  }

}
