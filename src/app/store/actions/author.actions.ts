import { Author } from '../models/author.model';
import { Action } from '@ngrx/store';

export enum AuthorActionTypes {
  GET_AUTHORS = '[AUTHOR] GET Authors',
  GET_AUTHORS_SUCCESS = '[AUTHOR] GET Authors Success',
  GET_AUTHORS_FAILURE = '[AUTHOR] GET Authors Failure',
}

export class GetAuthorsAction implements Action {
  readonly type = AuthorActionTypes.GET_AUTHORS;
}

export class GetAuthorsSuccessAction implements Action {
  readonly type = AuthorActionTypes.GET_AUTHORS_SUCCESS;

  constructor(public payload: Array<Author>) {}
}

export class GetAuthorsFailureAction implements Action {
  readonly type = AuthorActionTypes.GET_AUTHORS_FAILURE;

  constructor(public payload: Error) {}
}

export type AuthorActions =
  GetAuthorsAction |
  GetAuthorsSuccessAction |
  GetAuthorsFailureAction;
