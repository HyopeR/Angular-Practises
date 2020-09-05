import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import {SearchAction} from '../../store/actions/search.actions';
import {Observable} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchMode: string = 'book';
  searchText: string = '';

  observablePlaceHolder$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.observablePlaceHolder$ = this.store.select(store => store.search.searchText);
  }

  changeSearchOption(option) {
    this.searchMode = option;
  }

  search() {
    this.searchText !== '' ? this.store.dispatch(new SearchAction(this.searchText, this.searchMode)) : null;
  }

}
