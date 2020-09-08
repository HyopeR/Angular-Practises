import { Author } from '../../models/author.model';
import {createAction, props} from '@ngrx/store';
import {Book} from '../../models/book.model';

export enum AuthorActionTypes {
  GET_AUTHORS = '[AUTHOR] GET Authors',
  GET_AUTHORS_SUCCESS = '[AUTHOR] GET Authors Success',
  GET_AUTHORS_FAILURE = '[AUTHOR] GET Authors Failure',
  SELECT_AUTHOR = '[AUTHOR] SELECT Author',
  DESELECT_AUTHOR = '[AUTHOR] DESELECT Author'
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

export const SelectAuthorAction = createAction(
  AuthorActionTypes.SELECT_AUTHOR,
  props<{ authorId: string }>()
);

export const DeselectAuthorAction = createAction(
  AuthorActionTypes.DESELECT_AUTHOR
);
