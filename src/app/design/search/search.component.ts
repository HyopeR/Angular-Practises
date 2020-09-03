import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import {SearchAction} from '../../store/actions/search.actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string = '';
  searchOption: string = 'book';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {  }

  changeSearchOption(option) {
    this.searchOption = option;
  }

  search() {
    this.store.dispatch(new SearchAction(this.searchText, this.searchOption));
  }

}
