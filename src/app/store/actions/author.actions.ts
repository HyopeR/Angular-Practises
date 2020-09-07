import { Author } from '../../models/author.model';
import {createAction, props} from '@ngrx/store';
import {Book} from '../../models/book.model';

export enum AuthorActionTypes {
  GET_AUTHORS = '[AUTHOR] GET Authors',
  GET_AUTHORS_SUCCESS = '[AUTHOR] GET Authors Success',
  GET_AUTHORS_FAILURE = '[AUTHOR] GET Authors Failure',
  SELECT_AUTHOR = '[AUTHOR] SELECT Author',
  SELECT_FILTER_AUTHORS_BOOK = '[AUTHOR] SELECT FILTER Authors Book',
  SELECT_FILTER_AUTHORS_BOOK_SUCCESS = '[AUTHOR] SELECT FILTER Authors Book Success',
  SELECT_FILTER_AUTHORS_BOOK_FAILURE = '[AUTHOR] SELECT FILTER Authors Book Failure',
}

export const GetAuthorsAction = createAction(
  AuthorActionTypes.GET_AUTHORS
);

export const GetAuthorsSuccessAction = createAction(
  AuthorActionTypes.GET_AUTHORS_SUCCESS,
  props<{ authors: Array<Author> }>()
);

export const GetAuthorsFailureAction = createAction(
  AuthorActionTypes.GET_AUTHORS_FAILURE,
  props<{ errorMsg: Error }>(),
);

// selectType: onlySelect, filterSelect
export const SelectAuthorAction = createAction(
  AuthorActionTypes.SELECT_AUTHOR,
  props<{ authorId: string }>()
);

export const SelectAuthorBooksAction = createAction(
  AuthorActionTypes.SELECT_FILTER_AUTHORS_BOOK,
  props<{ authorId: string }>()
);

export const SelectAuthorBooksActionSuccess = createAction(
  AuthorActionTypes.SELECT_FILTER_AUTHORS_BOOK_SUCCESS,
  props<{ _authorsBook: Array<Book> }>()
);

export const SelectAuthorBooksActionFailure = createAction(
  AuthorActionTypes.SELECT_FILTER_AUTHORS_BOOK_FAILURE,
  props<{ errorMsg: Error }>()
);
