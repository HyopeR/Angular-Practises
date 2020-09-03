import {SearchActions, SearchActionTypes} from '../actions/search.actions';
import {Book} from '../models/book.model';
import {Author} from '../models/author.model';

export interface SearchState {
  list: Book[] | Author[] | null;
  loading: boolean;
  error: Error;
  searchKey: string;
}

const initialState: SearchState = {
  list: [],
  loading: false,
  error: undefined,
  searchKey: 'books'
};

export function SearchReducer(
  state: SearchState = initialState,
  action: SearchActions
) {
  switch (action.type) {
    case SearchActionTypes.SEARCH:
      return {
        ...state,
        searchArea: action.searchKey,
        loading: true
      };

    case SearchActionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        searchArea: action.searchKey,
        list: action.payload,
        loading: false
      };

    case SearchActionTypes.SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}

export const searchList = (state: SearchState) => state.list;
export const searchLoading = (state: SearchState) => state.loading;
export const searchError = (state: SearchState) => state.error;
export const searchKey = (state: SearchState) => state.searchKey;
