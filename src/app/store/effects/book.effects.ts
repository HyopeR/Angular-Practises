import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {RestService} from '../../model/rest.service';

import {
  BookActionTypes,
  AddBookAction,
  AddBookFailureAction,
  AddBookSuccessAction,
  DeleteBookAction,
  DeleteBookFailureAction,
  DeleteBookSuccessAction,
  GetBooksAction,
  GetBooksFailureAction,
  GetBooksSuccessAction, SelectBookAction
} from '../actions/book.actions';

@Injectable()
export class BookEffects {

  @Effect() getBooks = this.actions
    .pipe(
      ofType<GetBooksAction>(BookActionTypes.GET_BOOKS),
      mergeMap(
        () => this.restService.getBooks().pipe(
            map(data => new GetBooksSuccessAction(data)),
            catchError(error => of(new GetBooksFailureAction(error)))
          )
      )
    );

  @Effect() addBook = this.actions
    .pipe(
      ofType<AddBookAction>(BookActionTypes.ADD_BOOK),
      mergeMap(
        (data) => this.restService.addBook(data.payload)
          .pipe(
            map(() => new AddBookSuccessAction(data.payload)),
            catchError(error => of(new AddBookFailureAction(error)))
          )
      )
    );

  @Effect() deleteBook = this.actions
    .pipe(
      ofType<DeleteBookAction>(BookActionTypes.DELETE_BOOK),
      mergeMap(
        (data) => this.restService.deleteBook(data.payload)
          .pipe(
            map(() => new DeleteBookSuccessAction(data.payload)),
            catchError(error => of(new DeleteBookFailureAction(error)))
          )
      )
    );

  constructor(
    private actions: Actions,
    private restService: RestService
  ) {  }

}
