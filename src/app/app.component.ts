import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthorActions, BookActions} from './store/actions/index';
import {AppState} from './store/reducers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    this.loadBaseData();
  }

  ngOnInit(): void {
  }

  loadBaseData() {
    this.store.dispatch(BookActions.GetBooksAction());
    this.store.dispatch(AuthorActions.GetAuthorsAction());
  }

}
