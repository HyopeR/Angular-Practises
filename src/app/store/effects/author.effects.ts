import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, first, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {RestService} from '../../services/rest.service';
import {AuthorActions, SearchActions} from '../actions/index';
import {select, Store} from '@ngrx/store';
import {selectAuthorsBook} from '../selectors/author.selectors';
import {AppState} from '../reducers';
import {searchFunction} from '../selectors/search.selectors';

@Injectable()
export class AuthorEffects {

  @Effect() getAuthors = this.actions
    .pipe(
      ofType(AuthorActions.GetAuthorsAction),
      mergeMap(
        () => this.restService.getAuthors().pipe(
            map(data => AuthorActions.GetAuthorsSuccessAction({authors: data})),
            catchError(error => of(AuthorActions.GetAuthorsFailureAction({errorMsg: error})))
          )
      )
    );

  @Effect() selectAuthorsBook = this.actions
    .pipe(
      ofType(AuthorActions.SelectAuthorBooksAction),
      mergeMap(() => this.store.pipe(
        select(selectAuthorsBook()),
        first(),
        map(data => data)
        )
      ),
      map((data) => AuthorActions.SelectAuthorBooksActionSuccess({_authorsBook: data})),
      catchError(error => of(AuthorActions.SelectAuthorBooksActionFailure({errorMsg: error})))
    );

  constructor(
    private actions: Actions,
    private restService: RestService,
    private store: Store<AppState>
  ) {  }

}
