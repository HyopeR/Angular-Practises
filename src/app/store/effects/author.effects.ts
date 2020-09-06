import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {RestService} from '../../model/rest.service';
import {AuthorActions} from '../actions/index';

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

  constructor(
    private actions: Actions,
    private restService: RestService
  ) {  }

}
