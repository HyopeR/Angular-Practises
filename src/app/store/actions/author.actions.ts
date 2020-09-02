import { Author } from '../models/author.model';
import { Action } from '@ngrx/store';

export enum AuthorActionTypes {
  GET_AUTHORS = '[AUTHOR] GET Authors',
  GET_AUTHORS_SUCCESS = '[AUTHOR] GET Authors Success',
  GET_AUTHORS_FAILURE = '[AUTHOR] GET Authors Failure',
  SELECT_AUTHOR = '[AUTHOR] SELECT Author',
  SELECTED_AUTHOR = '[AUTHOR] SELECTED Author',
  SEARCH_AUTHOR = '[AUTHOR] SEARCH Author',
  SEARCH_AUTHOR_SUCCESS = '[AUTHOR] SEARCH Author Success',
  SEARCH_AUTHOR_FAILURE = '[AUTHOR] SEARCH Author Failure'
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

export class SelectAuthorAction implements Action {
  readonly type = AuthorActionTypes.SELECT_AUTHOR;

  constructor(public payload: string) {}
}

export class SelectedAuthorAction implements Action {
  readonly type = AuthorActionTypes.SELECTED_AUTHOR;

  constructor(public payload: boolean) {}
}

export class SearchAuthorAction implements Action {
  readonly type = AuthorActionTypes.SEARCH_AUTHOR;

  constructor(public payload: string) { }
}

export class SearchAuthorSuccessAction implements Action {
  readonly type = AuthorActionTypes.SEARCH_AUTHOR_SUCCESS;

  constructor(public payload: string) { }
}

export class SearchAuthorFailureAction implements Action {
  readonly type = AuthorActionTypes.SEARCH_AUTHOR_FAILURE;

  constructor(public payload: Error) { }
}

export type AuthorActions =
  GetAuthorsAction |
  GetAuthorsSuccessAction |
  GetAuthorsFailureAction |
  SelectAuthorAction |
  SelectedAuthorAction |
  SearchAuthorAction |
  SearchAuthorSuccessAction |
  SearchAuthorFailureAction;
