import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, mergeMap, switchMap} from 'rxjs/operators';
import {iif, of} from 'rxjs';

import {SearchAction, SearchActionTypes, SearchFailureAction, SearchSuccessAction} from '../actions/search.actions';
import {ReturnBooksAction} from '../actions/book.actions';
import {ReturnAuthorsAction} from '../actions/author.actions';

@Injectable()
export class SearchEffects {

  @Effect() searchBook = this.actions
    .pipe(
      ofType<SearchAction>(SearchActionTypes.SEARCH),
      mergeMap(data => of(data.searchKey, data.payload)
        .pipe(
          map(() => data.searchKey === 'book' ? new ReturnBooksAction() : new ReturnAuthorsAction()),
          catchError(error => of(new SearchFailureAction(error)))
        )
      )
    );

  constructor(
    private actions: Actions
  ) {}

}
