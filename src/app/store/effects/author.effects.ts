import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {RestService} from '../../model/rest.service';

import {
  AuthorActionTypes,
  GetAuthorsAction,
  GetAuthorsFailureAction,
  GetAuthorsSuccessAction
} from '../actions/author.actions';

@Injectable()
export class AuthorEffects {

  @Effect() getAuthors = this.actions
    .pipe(
      ofType<GetAuthorsAction>(AuthorActionTypes.GET_AUTHORS),
      mergeMap(
        () => this.restService.getAuthors().pipe(
            map(data => new GetAuthorsSuccessAction(data)),
            catchError(error => of(new GetAuthorsFailureAction(error)))
          )
      )
    );

  constructor(
    private actions: Actions,
    private restService: RestService
  ) {  }

}