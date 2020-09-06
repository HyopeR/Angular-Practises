import {createAction, props} from '@ngrx/store';
import {Book} from '../../models/book.model';
import {Author} from '../../models/author.model';

export enum SearchActionTypes {
  SEARCH = '[SEARCH] SEARCH Item',
  SEARCH_SUCCESS = '[SEARCH] SEARCH Item Success',
  SEARCH_FAILURE = '[SEARCH] SEARCH Item Failure'
}

export const SearchAction = createAction(
  SearchActionTypes.SEARCH,
  props<{ searchText: string, searchKey: string }>()
);

export const SearchSuccessAction = createAction(
  SearchActionTypes.SEARCH_SUCCESS,
  props<{ payload: Book[] | Author[] | [] }>()
);

export const SearchFailureAction = createAction(
  SearchActionTypes.SEARCH_FAILURE,
  props<{ errorMsg: Error }>(),
);
