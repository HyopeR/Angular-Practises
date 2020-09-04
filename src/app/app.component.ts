import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {GetBooksAction} from './store/actions/book.actions';
import {GetAuthorsAction} from './store/actions/author.actions';
import {AppState} from './store/reducers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new GetBooksAction());
    this.store.dispatch(new GetAuthorsAction());
  }

  ngOnInit(): void {}

}
