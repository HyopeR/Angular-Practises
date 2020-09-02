import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/models/app-state.model';
import {SearchBookAction} from '../../store/actions/book.actions';
import {SearchAuthorAction} from '../../store/actions/author.actions';

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
    switch (this.searchOption) {
      case 'book':
        this.store.dispatch(new SearchBookAction(this.searchText));
        break;

      case 'author':
        this.store.dispatch(new SearchAuthorAction(this.searchText));
        break;

      default:
        console.log('Wrong request.');
        break;
    }
  }

}
