import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {RestService} from '../../model/rest.service';
import {BookActions} from '../actions';

@Injectable()
export class BookEffects {

  @Effect() getBooks = this.actions
    .pipe(
      ofType(BookActions.GetBooksAction),
      mergeMap(
        () => this.restService.getBooks().pipe(
            map(data => BookActions.GetBooksSuccessAction({books: data})),
            catchError(error => of(BookActions.GetBooksFailureAction({errorMsg: error})))
          )
      )
    );

  @Effect() addBook = this.actions
    .pipe(
      ofType(BookActions.AddBookAction),
      mergeMap(
        (data) => this.restService.addBook(data.payload)
          .pipe(
            map(() => BookActions.AddBookSuccessAction({payload: data.payload})),
            catchError(error => of(BookActions.AddBookFailureAction({errorMsg: error})))
          )
      )
    );

  @Effect() deleteBook = this.actions
    .pipe(
      ofType(BookActions.DeleteBookAction),
      mergeMap(
        (data) => this.restService.deleteBook(data.bookId)
          .pipe(
            map(() => BookActions.DeleteBookSuccessAction({bookId: data.bookId})),
            catchError(error => of(BookActions.DeleteBookFailureAction({errorMsg: error})))
          )
      )
    );

  constructor(
    private actions: Actions,
    private restService: RestService
  ) {  }

}
