import { Action } from '@ngrx/store';
import {Book} from '../models/book.model';
import {Author} from '../models/author.model';

export enum SearchActionTypes {
  SEARCH = '[SEARCH] SEARCH Item',
  SEARCH_SUCCESS = '[SEARCH] SEARCH Item Success',
  SEARCH_FAILURE = '[SEARCH] SEARCH Item Failure'
}

export class SearchAction implements Action {
  readonly type = SearchActionTypes.SEARCH;

  constructor(public searchText: string, public searchKey: string) { }
}

export class SearchSuccessAction implements Action {
  readonly type = SearchActionTypes.SEARCH_SUCCESS;

  constructor(public payload: Book[] | Author[] | []) { }
}

export class SearchFailureAction implements Action {
  readonly type = SearchActionTypes.SEARCH_FAILURE;

  constructor(public payload: Error) { }
}

export type SearchActions =
  SearchAction |
  SearchSuccessAction |
  SearchFailureAction;
