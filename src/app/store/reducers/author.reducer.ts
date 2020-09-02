import {AuthorActions, AuthorActionTypes} from '../actions/author.actions';
import {Author} from '../models/author.model';
import {Search} from '../models/search.model';

export interface AuthorState {
  list: Author[];
  selectedAuthor: Author;
  selected: boolean;
  loading: boolean;
  error: Error;
  search: Search;
}

const initialState: AuthorState = {
  list: [],
  selectedAuthor: {},
  selected: false,
  loading: false,
  error: undefined,
  search: {
    list: [],
    searching: false,
    error: undefined,
  }
};

export function AuthorReducer(
  state: AuthorState = initialState,
  action: AuthorActions
) {
  // console.log(action, state);
  switch (action.type) {
    case AuthorActionTypes.GET_AUTHORS:
      return {
        ...state,
        loading: true
      };

    case AuthorActionTypes.GET_AUTHORS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };

    case AuthorActionTypes.GET_AUTHORS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case AuthorActionTypes.SELECT_AUTHOR:
      return {
        ...state,
        selectedAuthor: state.list.find(x => x.id === action.payload)
      };

    case AuthorActionTypes.SELECTED_AUTHOR:
      return {
        ...state,
        selected: action.payload
      };

    case AuthorActionTypes.SEARCH_AUTHOR:
      return {
        ...state,
        search: {
          ...state.search,
          searching: true
        }
      };

    case AuthorActionTypes.SEARCH_AUTHOR_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          searching: false,
          list: state.list.filter(author => author.name === action.payload)
        }
      };

    case AuthorActionTypes.SEARCH_AUTHOR_FAILURE:
      return {
        ...state,
        search: {
          ...state.search,
          searching: false,
          error: action.payload
        }
      };

    default:
      return state;
  }
}
