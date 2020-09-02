import { Book } from '../models/book.model';
import { Action } from '@ngrx/store';

export enum BookActionTypes {
  GET_BOOKS = '[BOOK] GET Books',
  GET_BOOKS_SUCCESS = '[BOOK] GET Books Success',
  GET_BOOKS_FAILURE = '[BOOK] GET Books Failure',
  ADD_BOOK = '[BOOK] Add Book',
  ADD_BOOK_SUCCESS = '[BOOK] Add Book Success',
  ADD_BOOK_FAILURE = '[BOOK] Add Book Failure',
  DELETE_BOOK = '[BOOK] Add Delete Book',
  DELETE_BOOK_SUCCESS = '[BOOK] Add Delete Book Success',
  DELETE_BOOK_FAILURE = '[BOOK] Add Delete Book Failure',
  SELECT_BOOK = '[BOOK] Select Book',
  SELECTED_BOOK = '[BOOK] Selected Book',
  DESELECT_BOOK = '[BOOK] Deselect Book',
  DESELECTED_BOOK = '[BOOK] Deselected Book',
  SEARCH_BOOK = '[BOOK] Search Book',
  SEARCH_BOOK_SUCCESS = '[BOOK] Search Book Success',
  SEARCH_BOOK_FAILURE = '[BOOK] Search Book Failure'
}

export class GetBooksAction implements Action {
  readonly type = BookActionTypes.GET_BOOKS;
}

export class GetBooksSuccessAction implements Action {
  readonly type = BookActionTypes.GET_BOOKS_SUCCESS;

  constructor(public payload: Array<Book>) {}
}

export class GetBooksFailureAction implements Action {
  readonly type = BookActionTypes.GET_BOOKS_FAILURE;

  constructor(public payload: Error) {}
}

export class AddBookAction implements Action {
  readonly type = BookActionTypes.ADD_BOOK;

  constructor(public payload: Book) { }
}

export class AddBookSuccessAction implements Action {
  readonly type = BookActionTypes.ADD_BOOK_SUCCESS;

  constructor(public payload: Book) { }
}

export class AddBookFailureAction implements Action {
  readonly type = BookActionTypes.ADD_BOOK_FAILURE;

  constructor(public payload: Error) { }
}

export class DeleteBookAction implements Action {
  readonly type = BookActionTypes.DELETE_BOOK;

  constructor(public payload: string) { }
}

export class DeleteBookSuccessAction implements Action {
  readonly type = BookActionTypes.DELETE_BOOK_SUCCESS;

  constructor(public payload: string) { }
}

export class DeleteBookFailureAction implements Action {
  readonly type = BookActionTypes.DELETE_BOOK_FAILURE;

  constructor(public payload: Error) { }
}

export class SelectBookAction implements Action {
  readonly type = BookActionTypes.SELECT_BOOK;

  constructor(public payload: string) {}
}

export class SelectedBookAction implements Action {
  readonly type = BookActionTypes.SELECTED_BOOK;

  constructor(public payload: boolean) {}
}

export class DeselectBookAction implements Action {
  readonly type = BookActionTypes.DESELECT_BOOK;

  constructor(public payload: object) { }
}

export class DeselectedBookAction implements Action {
  readonly type = BookActionTypes.DESELECTED_BOOK;

  constructor(public payload: boolean) { }
}

export class SearchBookAction implements Action {
  readonly type = BookActionTypes.SEARCH_BOOK;

  constructor(public payload: string) { }
}

export class SearchBookSuccessAction implements Action {
  readonly type = BookActionTypes.SEARCH_BOOK_SUCCESS;

  constructor(public payload: string) { }
}

export class SearchBookFailureAction implements Action {
  readonly type = BookActionTypes.SEARCH_BOOK_FAILURE;

  constructor(public payload: Error) { }
}

export type BookActions =
  GetBooksAction |
  GetBooksSuccessAction |
  GetBooksFailureAction |
  AddBookAction |
  AddBookSuccessAction |
  AddBookFailureAction |
  DeleteBookAction |
  DeleteBookSuccessAction |
  DeleteBookFailureAction |
  SelectBookAction |
  SelectedBookAction |
  DeselectedBookAction |
  DeselectBookAction |
  SearchBookAction |
  SearchBookSuccessAction |
  SearchBookFailureAction;
