import {SearchActions, SearchActionTypes} from '../actions/search.actions';
import {Book} from '../models/book.model';
import {Author} from '../models/author.model';

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

export function SearchReducer(
  state: SearchState = initialState,
  action: SearchActions
) {
  console.log(action.type);
  switch (action.type) {
    case SearchActionTypes.SEARCH:
      return {
        ...state,
        searchText: action.searchText,
        searchKey: action.searchKey,
        loading: true,
        loaded: false
      };

    case SearchActionTypes.SEARCH_SUCCESS:
      let controller = action.payload.length > 0;
      return {
        ...state,
        list: action.payload,
        searchResult: controller,
        loading: false,
        loaded: true
      };

    case SearchActionTypes.SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        searchResult: false,
        loading: false,
        loaded: false
      };

    default:
      return state;
  }
}

export const searchAllState = (state: SearchState) => state;
export const searchList = (state: SearchState) => state.list;

// export const searchLoading = (state: SearchState) => state.loading;
// export const searchError = (state: SearchState) => state.error;
// export const searchBooleanResult = (state: SearchState) => state.searchResult;
