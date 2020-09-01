import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../store/models/book.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/models/app-state.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;

  constructor(private store: Store<AppState>) {  }

  ngOnInit(): void {  }

}
