import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/reducers';
import {Observable} from 'rxjs';
import {Book} from '../../models/book.model';
import {selectAuthorsBook} from '../../store/selectors/author.selectors';
import {isEmpty} from 'lodash';
import {Author} from '../../models/author.model';
import {getBookList} from '../../store/selectors/book.selectors';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  bookItems$: Observable<Array<Book>>;

  selectedAuthor: Author;
  controllerSelectAuthor: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(store => store.authors.selectedAuthor).subscribe(data => {
      this.selectedAuthor = data;
      this.controllerSelectAuthor = isEmpty(data);
      this.controllerSelectAuthor ? this.getAllBooks() : this.getAuthorBooks();
    });
  }

  getAuthorBooks() {
    this.bookItems$ = this.store.select(selectAuthorsBook());
  }

  getAllBooks() {
    this.bookItems$ = this.store.select(getBookList());
  }

}
