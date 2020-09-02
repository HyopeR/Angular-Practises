import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './store/models/app-state.model';
import {GetBooksAction} from './store/actions/book.actions';
import {GetAuthorsAction} from './store/actions/author.actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetBooksAction());
    this.store.dispatch(new GetAuthorsAction());
  }

}
