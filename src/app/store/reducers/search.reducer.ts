import {Book} from '../models/book.model';
import {Author} from '../models/author.model';
import {Action, createReducer, on} from '@ngrx/store';
import {SearchActions} from '../actions';
import {BookState} from './book.reducer';

export const searchFeatureKey = 'search';

export interface SearchState {
  list: Book[] | Author[] | [];
  loading: boolean;
  loaded: boolean;
  error: Error;
  searchKey: string;
  searchText: string;
  searchResult: boolean;
}

const initialState: SearchState = {
  list: [],
  loading: false,
  loaded: false,
  error: undefined,
  searchKey: 'book',
  searchText: '',
  searchResult: false,
};

const Reducer = createReducer(
  initialState,
  on(SearchActions.SearchAction, (state, {searchText, searchKey}) => ({
    ...state,
    searchText,
    searchKey,
    loading: true,
    loaded: false
  })),
  on(SearchActions.SearchSuccessAction, (state, { payload }) => ({
    ...state,
    list: payload,
    searchResult: payload.length > 0,
    loading: false,
    loaded: true
  })),
  on(SearchActions.SearchFailureAction, (state, { errorMsg }) => ({
    ...state,
    error: errorMsg,
    searchResult: false,
    loading: false,
    loaded: false
  })),
);

export function SearchReducer(state: SearchState | undefined, action: Action) {
  // console.log(state, action);
  return Reducer(state, action);
}

export const searchList = (state: SearchState) => state.list;

// export const searchLoading = (state: SearchState) => state.loading;
// export const searchError = (state: SearchState) => state.error;
// export const searchBooleanResult = (state: SearchState) => state.searchResult;
