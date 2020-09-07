import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../models/book.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  $authorsBooks: Observable<Array<Book>>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {}

}
