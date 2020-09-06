import { Book } from '../models/book.model';
import {createAction, props} from '@ngrx/store';

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
  DESELECT_BOOK = '[BOOK] Deselect Book',
}

export const GetBooksAction = createAction(
  BookActionTypes.GET_BOOKS
);

export const GetBooksSuccessAction = createAction(
  BookActionTypes.GET_BOOKS_SUCCESS,
  props<{ books: Array<Book> }>()
);

export const GetBooksFailureAction = createAction(
  BookActionTypes.GET_BOOKS_FAILURE,
  props<{ errorMsg: Error }>(),
);

export const AddBookAction = createAction(
  BookActionTypes.ADD_BOOK,
  props<{ payload: Book }>()
);

export const AddBookSuccessAction = createAction(
  BookActionTypes.ADD_BOOK_SUCCESS,
  props<{ payload: Book }>()
);

export const AddBookFailureAction = createAction(
  BookActionTypes.ADD_BOOK_FAILURE,
  props<{ errorMsg: Error }>()
);

export const DeleteBookAction = createAction(
  BookActionTypes.DELETE_BOOK,
  props<{ bookId: string }>()
);

export const DeleteBookSuccessAction = createAction(
  BookActionTypes.DELETE_BOOK_SUCCESS,
  props<{ bookId: string }>()
);

export const DeleteBookFailureAction = createAction(
  BookActionTypes.DELETE_BOOK_FAILURE,
  props<{ errorMsg: Error }>()
);

export const SelectBookAction = createAction(
  BookActionTypes.SELECT_BOOK,
  props<{ bookId: string }>()
);

export const DeselectBookAction = createAction(
  BookActionTypes.DESELECT_BOOK
);
