import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, first, map, mergeMap} from 'rxjs/operators';
import {iif, of} from 'rxjs';

import {SearchAction, SearchActionTypes, SearchFailureAction, SearchSuccessAction} from '../actions/search.actions';
import {select, Store} from '@ngrx/store';
import {AppState} from '../reducers';
import {searchFunction} from '../selectors/search.selectors';

@Injectable()
export class SearchEffects {

  @Effect() searchBook = this.actions
    .pipe(
      ofType<SearchAction>(SearchActionTypes.SEARCH),
      mergeMap(() => this.store.pipe(
          select(searchFunction()),
          first(),
          map(data => data)
        )
      ),
      map((data) => new SearchSuccessAction(data)),
      catchError(error => of(new SearchFailureAction(error)))
    );

  constructor(
    private actions: Actions,
    private store: Store<AppState>
  ) {  }

}

